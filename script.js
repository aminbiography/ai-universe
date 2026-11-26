/* AI Universe
 * Sources:
 * 1) Flocci AI Tools catalog snapshot — AI products directory.
 * 2) Public APIs (publicapis.lol) — Machine Learning API directory.
 * A local fallback keeps the interface usable when a third-party source is offline.
 */
const SOURCES = {
  flocci: "https://aitools.flocci.in/catalog-snapshot.json",
  publicApis: "https://publicapis.lol/api/apis?category=Machine%20Learning&page=1",
  fallback: "data/fallback-tools.json"
};

const PAGE_SIZE = 9;
let allTools = [];
let filteredTools = [];
let visibleCount = PAGE_SIZE;
let activeFilter = "all";
let searchTerm = "";
let modalInstance;

const elements = {
  grid: document.getElementById("main-card"),
  status: document.getElementById("status"),
  count: document.getElementById("result-count"),
  empty: document.getElementById("empty-state"),
  more: document.getElementById("load-more"),
  search: document.getElementById("search-input"),
  sort: document.getElementById("sort-select"),
  modalTitle: document.getElementById("modal-title"),
  modalBody: document.getElementById("modal-body"),
  modalBadges: document.getElementById("modal-badges")
};

document.addEventListener("DOMContentLoaded", () => {
  modalInstance = new bootstrap.Modal(document.getElementById("detail-modal"));
  document.getElementById("search-form").addEventListener("submit", event => {
    event.preventDefault();
    searchTerm = elements.search.value.trim().toLowerCase();
    applyFilters();
  });
  elements.search.addEventListener("input", () => {
    searchTerm = elements.search.value.trim().toLowerCase();
    applyFilters();
  });
  elements.sort.addEventListener("change", applyFilters);
  document.querySelectorAll("[data-filter]").forEach(button => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach(item => item.classList.toggle("active", item === button));
      applyFilters();
    });
  });
  elements.more.addEventListener("click", () => {
    visibleCount += PAGE_SIZE;
    renderCards();
  });
  loadCatalogs();
});

async function fetchJson(url, timeoutMs = 12000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { signal: controller.signal, headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } finally {
    clearTimeout(timeout);
  }
}

async function loadCatalogs() {
  elements.status.textContent = "Connecting to public catalogs…";
  const outcomes = await Promise.allSettled([
    fetchJson(SOURCES.flocci).then(normalizeFlocci),
    fetchJson(SOURCES.publicApis).then(normalizePublicApis)
  ]);

  const remoteTools = outcomes.flatMap(result => result.status === "fulfilled" ? result.value : []);
  const uniqueRemote = deduplicate(remoteTools);

  if (uniqueRemote.length) {
    allTools = uniqueRemote;
    const failedCount = outcomes.filter(result => result.status === "rejected").length;
    elements.status.textContent = failedCount
      ? `Loaded ${allTools.length} entries. One catalog was unavailable; the other source is active.`
      : `Loaded ${allTools.length} entries from two public catalogs.`;
  } else {
    try {
      const fallback = await fetchJson(SOURCES.fallback);
      allTools = Array.isArray(fallback) ? fallback : [];
      elements.status.textContent = `External catalogs are unavailable. Showing ${allTools.length} locally bundled fallback entries.`;
    } catch (error) {
      allTools = [];
      elements.status.textContent = "Catalogs could not be loaded. Run this project from a local web server so the fallback JSON can be read.";
      console.error("Fallback catalog error:", error);
    }
  }
  applyFilters();
}

function normalizeFlocci(catalog) {
  if (!Array.isArray(catalog?.categories)) return [];
  const records = [];
  catalog.categories.forEach(category => {
    (category.subcategories || []).forEach(subcategory => {
      (subcategory.tools || []).forEach(tool => {
        const capabilities = Array.isArray(tool.capabilities) ? tool.capabilities : [];
        records.push({
          id: `flocci-${tool.slug || slugify(tool.name)}`,
          name: tool.name || "Unnamed AI tool",
          description: capabilities.join(", ") || "AI product listed in the Flocci AI tools catalog.",
          category: category.name || "AI Tools",
          subcategory: subcategory.name || "",
          pricing: tool.pricing || (tool.freeToStart ? "Free to start" : "See provider"),
          free: Boolean(tool.freeToStart) || /free/i.test(tool.pricing || ""),
          website: tool.website || "",
          detailsUrl: tool.page || tool.website || "",
          source: "Flocci AI Tools",
          kind: "tool",
          features: capabilities,
          keywords: tool.keywords || [],
          platforms: tool.platforms || [],
          status: tool.status || ""
        });
      });
    });
  });
  return records;
}

function normalizePublicApis(payload) {
  const records = Array.isArray(payload) ? payload
    : payload?.data || payload?.apis || payload?.results || payload?.items || [];
  if (!Array.isArray(records)) return [];
  return records.map(api => {
    const name = api.name || api.API || api.title || "Unnamed API";
    const description = api.description || api.Description || "Machine-learning API listing.";
    const website = api.link || api.url || api.Link || api.website || "";
    const auth = api.auth ?? api.Auth ?? "";
    return {
      id: `publicapis-${slugify(name)}`,
      name,
      description,
      category: api.category || api.Category || "Machine Learning",
      subcategory: "",
      pricing: auth ? `Authentication: ${auth}` : "No authentication listed",
      free: true,
      website,
      detailsUrl: website,
      source: "Public APIs",
      kind: "api",
      features: [api.https ? "HTTPS supported" : "", api.cors ? "CORS supported" : ""].filter(Boolean),
      keywords: [],
      auth: auth || "None listed"
    };
  });
}

function deduplicate(items) {
  const seen = new Set();
  return items.filter(item => {
    const key = `${item.name}`.trim().toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function slugify(value = "") {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function applyFilters() {
  filteredTools = allTools.filter(tool => {
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "tool" && tool.kind === "tool") ||
      (activeFilter === "api" && tool.kind === "api") ||
      (activeFilter === "free" && tool.free);
    const haystack = [tool.name, tool.description, tool.category, tool.subcategory, tool.source,
      ...(tool.features || []), ...(tool.keywords || [])].join(" ").toLowerCase();
    return matchesFilter && (!searchTerm || haystack.includes(searchTerm));
  });

  const sortMode = elements.sort.value;
  filteredTools.sort((a, b) => sortMode === "source"
    ? a.source.localeCompare(b.source) || a.name.localeCompare(b.name)
    : a.name.localeCompare(b.name));

  visibleCount = PAGE_SIZE;
  renderCards();
}

function renderCards() {
  elements.grid.replaceChildren();
  const visible = filteredTools.slice(0, visibleCount);
  visible.forEach(tool => elements.grid.appendChild(createCard(tool)));
  elements.count.textContent = `${filteredTools.length} result${filteredTools.length === 1 ? "" : "s"}`;
  elements.empty.classList.toggle("d-none", filteredTools.length > 0);
  elements.more.classList.toggle("d-none", visibleCount >= filteredTools.length);
}

function createCard(tool) {
  const col = document.createElement("div");
  col.className = "col";
  const card = document.createElement("article");
  card.className = "tool-card";
  const body = document.createElement("div");
  body.className = "card-body d-flex flex-column";
  const top = document.createElement("div");
  top.className = "d-flex align-items-start justify-content-between mb-3";
  const mark = document.createElement("div");
  mark.className = "tool-mark";
  mark.innerHTML = tool.kind === "api" ? '<i class="bi bi-braces"></i>' : '<i class="bi bi-stars"></i>';
  const badgeWrap = document.createElement("div");
  badgeWrap.className = "d-flex flex-wrap justify-content-end gap-1";
  badgeWrap.append(makeBadge(tool.kind === "api" ? "AI API" : "AI Tool", tool.kind === "api" ? "api" : ""));
  if (tool.free) badgeWrap.append(makeBadge("Free / free tier", "free"));
  top.append(mark, badgeWrap);

  const title = document.createElement("h3");
  title.className = "tool-name mb-2";
  title.textContent = tool.name;
  const description = document.createElement("p");
  description.className = "tool-description mb-3";
  description.textContent = tool.description || "Open the provider page for more information.";
  const meta = document.createElement("div");
  meta.className = "mt-auto d-flex justify-content-between align-items-center gap-2";
  const source = document.createElement("span");
  source.className = "source-line";
  source.textContent = `${tool.category || "AI"} · ${tool.source}`;
  const details = document.createElement("button");
  details.type = "button";
  details.className = "btn btn-sm btn-outline-primary rounded-pill";
  details.textContent = "Details";
  details.addEventListener("click", () => openDetails(tool));
  meta.append(source, details);
  body.append(top, title, description, meta);
  card.append(body);
  col.append(card);
  return col;
}

function makeBadge(label, type = "") {
  const badge = document.createElement("span");
  badge.className = `pill ${type}`.trim();
  badge.textContent = label;
  return badge;
}

function openDetails(tool) {
  elements.modalTitle.textContent = tool.name;
  elements.modalBadges.replaceChildren(
    makeBadge(tool.kind === "api" ? "AI API" : "AI Tool", tool.kind === "api" ? "api" : ""),
    ...(tool.free ? [makeBadge("Free / free tier", "free")] : [])
  );
  elements.modalBody.replaceChildren();

  const description = document.createElement("p");
  description.className = "text-secondary";
  description.textContent = tool.description || "No description supplied by the catalog.";
  const info = document.createElement("div");
  info.className = "row g-3 my-2";
  [
    ["Category", tool.category || "Not specified"],
    ["Pricing", tool.pricing || "Check provider"],
    ["Source", tool.source],
    ["Authentication", tool.auth || "Not specified"]
  ].forEach(([label, value]) => {
    const col = document.createElement("div");
    col.className = "col-6";
    const heading = document.createElement("div");
    heading.className = "small text-secondary";
    heading.textContent = label;
    const content = document.createElement("div");
    content.className = "fw-semibold";
    content.textContent = value;
    col.append(heading, content);
    info.append(col);
  });

  elements.modalBody.append(description, info);
  const features = [...(tool.features || []), ...(tool.keywords || [])].filter(Boolean);
  if (features.length) {
    const heading = document.createElement("h3");
    heading.className = "h6 mt-3";
    heading.textContent = "Capabilities and keywords";
    const list = document.createElement("ul");
    list.className = "detail-list";
    features.slice(0, 12).forEach(feature => {
      const item = document.createElement("li");
      item.textContent = feature;
      list.append(item);
    });
    elements.modalBody.append(heading, list);
  }
  if (tool.website) {
    const link = document.createElement("a");
    link.className = "btn btn-primary mt-3";
    link.href = tool.website;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Visit website";
    elements.modalBody.append(link);
  }
  if (tool.detailsUrl && tool.detailsUrl !== tool.website) {
    const link = document.createElement("a");
    link.className = "btn btn-outline-secondary mt-3 ms-2";
    link.href = tool.detailsUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Source details";
    elements.modalBody.append(link);
  }
  modalInstance.show();
}
