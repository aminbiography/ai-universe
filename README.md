# AI Universe Hub 

---

## Explore the World of Artificial Intelligence
**Discover AI products, explore machine-learning services, and navigate developer APIs through a unified, multi-source directory.**

---

**Live Website:** https://aminbiography.github.io/ai-universe/

---

## Project Overview

AI Universe is a web-based AI discovery platform that brings together listings from multiple public catalogs in one searchable interface.

The platform provides a centralized view of AI tools, machine-learning products, and developer APIs. Users can explore available services, review their descriptions and capabilities, identify pricing information, and visit their respective provider websites.

By combining remote catalog sources with locally bundled fallback data, AI Universe is designed to maintain directory functionality even when an external data source becomes unavailable.

## Core Features

- **Multi-Source Discovery:** Integrates multiple public catalogs into one directory.
- **AI Product Exploration:** Retrieves AI product and service listings from Flocci AI Tools.
- **Machine-Learning API Directory:** Integrates API listings from Public APIs.
- **Live Catalog Retrieval:** Fetches catalog data asynchronously using the JavaScript Fetch API.
- **Unified Data Structure:** Normalizes records from different sources for consistent presentation.
- **Search and Discovery:** Searches by tool name, description, category, subcategory, source, capabilities, and keywords.
- **Category Filtering:** Switches between all listings, AI tools, AI APIs, and free or free-tier entries.
- **Sorting Options:** Organizes results alphabetically or by catalog source.
- **Dynamic Card Interface:** Displays catalog entries in a responsive card-based layout.
- **Detailed Information Modal:** Presents descriptions, categories, pricing information, capabilities, and relevant links.
- **Provider Navigation:** Provides direct links to external product and service websites.
- **Progressive Results:** Loads additional entries through a Load More control.
- **Duplicate Filtering:** Removes duplicate listings based on normalized names.
- **Local Fallback Catalog:** Uses bundled JSON data when remote catalogs cannot provide results.
- **Responsive Interface:** Supports desktop, tablet, and mobile screen sizes.

## Integrated Data Sources

| Data Source | Integration | Purpose |
|---|---|---|
| [Flocci AI Tools](https://aitools.flocci.in/) | Public JSON catalog snapshot | AI products, tools, capabilities, categories, and pricing information |
| [Public APIs](https://publicapis.lol/) | Machine-learning API endpoint | Machine-learning API directory entries |
| Local JSON Catalog | Bundled fallback file | Alternative listings when external catalogs are unavailable |

### Multi-Source Data Flow

1. The application requests data from the available remote catalog endpoints independently.
2. Each response is normalized into a common JavaScript object structure.
3. Duplicate entries are removed.
4. Retrieved records are displayed through dynamically generated cards.
5. Search, filtering, and sorting operate on the combined catalog.
6. If remote catalogs fail to return usable results, the application loads its local fallback JSON catalog.

## Search and Exploration

The directory provides several ways to explore its catalog:

| Discovery Option | Function |
|---|---|
| All | Displays all available listings |
| AI Tools | Filters AI product and service entries |
| AI APIs | Displays machine-learning API entries |
| Free / Free Tier | Filters entries identified as free or free-to-start |
| Name A–Z | Sorts listings alphabetically |
| Source | Groups listings by their catalog source |

The search interface supports matching across names, descriptions, categories, subcategories, capabilities, and keywords.

## Technology Stack

| Technology | Application |
|---|---|
| HTML5 | Website structure and content |
| CSS3 | Visual styling, layouts, animations, and responsive presentation |
| JavaScript | Application logic and dynamic rendering |
| Bootstrap 5.3.3 | Responsive layout and interface components |
| Bootstrap Icons | Interface icons |
| Fetch API | Remote catalog retrieval |
| JSON | Catalog data exchange and local fallback storage |
| Google Fonts | Typography |

## Visual Design

AI Universe combines a modern interface with a distinctive technology-inspired visual identity.

- Printed circuit board (PCB) artwork in the main header.
- Animated glitter and shimmer effects.
- Gradient buttons with teal, green, yellow, purple, lavender, and pink tones.
- Interactive hover effects and glowing card borders.
- Responsive catalog card layouts.
- Modal-based information presentation.
- Consistent spacing, typography, and visual hierarchy.

## Repository Structure

```text
ai-universe/
│
├── assets/
│   └── pcb-circuit-board.jpg
│
├── data/
│   └── fallback-tools.json
│
├── index.html
├── script.js
├── ph.html
├── script-ph.js
└── README.md
```

| File or Directory | Description |
|---|---|
| `index.html` | Main AI Universe interface and styling |
| `script.js` | Multi-source catalog integration, normalization, searching, filtering, sorting, and rendering |
| `ph.html` | Separate Programming Hero interface |
| `script-ph.js` | JavaScript associated with the Programming Hero interface |
| `assets/` | Project images and visual resources |
| `data/` | Locally bundled fallback catalog |
| `README.md` | Project documentation |

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/aminbiography/ai-universe.git
```

### Navigate to the Project

```bash
cd ai-universe
```

### Start a Local Server

The application loads a local JSON fallback file. Run it through a local HTTP server instead of opening the HTML file directly.

Using Python:

```bash
python -m http.server 8000
```

### Open the Application

Visit:

```text
http://localhost:8000
```

The application will attempt to retrieve its remote catalogs and use the bundled fallback data when necessary.

## Live Deployment

The application is hosted through GitHub Pages.

**Live Website:** https://aminbiography.github.io/ai-universe/

**Source Repository:** https://github.com/aminbiography/ai-universe

## API Availability and Data Reliability

AI Universe is an AI discovery directory rather than an AI model inference service.

The application lists AI products and API providers. It does not execute AI model requests or store third-party API credentials.

A few important considerations:

- Public API availability and endpoint behavior may change.
- Free-tier access does not imply unlimited or permanently free usage.
- Some providers require registration or API credentials when users access their services.
- Browser access may depend on the external provider's CORS configuration.
- Catalog descriptions, pricing, and availability should be verified on the respective provider websites.
- Local fallback data provides an alternative when remote catalogs are unavailable.

Catalog information remains subject to the respective providers' attribution and licensing requirements.

## Project Scope

AI Universe brings together several areas of AI discovery:

- AI tools and digital products.
- Machine-learning platforms and services.
- Developer APIs and integrations.
- Product capabilities and feature exploration.
- Pricing and free-tier discovery.
- External provider and service navigation.
- Multi-source catalog aggregation.

The goal is to provide a unified interface for exploring the expanding landscape of artificial intelligence services.

## Author

**Mohammad Aminul Islam**

GitHub: https://github.com/aminbiography

Repository: https://github.com/aminbiography/ai-universe

## Data Attribution

- Flocci AI Tools: https://aitools.flocci.in/
- Public APIs: https://publicapis.lol/

Please consult the original sources for their current licensing, attribution, and redistribution requirements.

---

**AI Universe — Explore AI. Discover Possibilities. Navigate Innovation.**

---

#AIUniverse #AIUniverseHub #ArtificialIntelligence #AITools #AIAPIs #AIDirectory #AIResearch #AIExploration #MachineLearning #DeepLearning #GenerativeAI #AIPlatforms #AIProducts #FreeAITools #FreeAPIs #PublicAPIs #APIIntegration #MultiSourceData #DataAggregation #JavaScript #VanillaJavaScript #HTML5 #CSS3 #Bootstrap #FetchAPI #JSON #FrontendDevelopment #WebDevelopment #ResponsiveWebDesign #DynamicWebApplications #GitHubPages #OpenSourceProjects #MohammadAminulIslam

---
