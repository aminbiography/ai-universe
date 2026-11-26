# AI Universe

**Live URL:** https://aminbiography.github.io/ai-universe/

A browser-based directory that combines multiple public catalogs:

- **Flocci AI Tools** — AI product/tool listings from its public JSON catalog snapshot.
- **Public APIs** — Machine-learning API listings from the publicapis.lol JSON API.
- **Local fallback** — a small bundled list of AI platforms and API providers used when remote catalogs cannot be reached.

## Run locally

Because the project loads a local JSON fallback file, serve the folder over HTTP rather than opening `index.html` directly.

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Important notes

- There is no public API that can honestly be guaranteed to remain free and available forever. Providers can change access, pricing, rate limits, endpoints, or CORS policies.
- The app tries both remote catalogs independently. If one fails, results from the other can still load. If both fail, the bundled fallback data is displayed.
- The free filter means the catalog marks an item as free/free-to-start or includes it in the free/free-tier fallback list. It is not a guarantee of unlimited free usage.
- Some AI API providers require an account or API key to use their services. This project lists providers; it does not send inference requests or store API keys.
- Flocci catalog data is used with attribution. See the [Flocci AI Tools directory](https://aitools.flocci.in/).
- Public API listings are sourced from [Public APIs](https://publicapis.lol/), whose catalog is based on the public-apis community project.
