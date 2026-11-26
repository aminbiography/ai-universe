<h1 align="center">
 AI Universe Hub
</h1>
<h2 align="center">
 Discover the World of Artificial Intelligence
</h2>

<p align="center">
  <strong>Explore AI tools, machine-learning platforms, and developer APIs in one place.</strong>
</p>

<p align="center">
  <a href="https://aminbiography.github.io/ai-universe/">Live Demo</a>
</p>

---

## About the Project

**AI Universe** is a browser-based directory designed to help users discover AI-powered products, machine-learning platforms, and developer APIs through a unified interface.

The project combines multiple public data sources with a locally bundled fallback catalog to reduce dependence on a single external API.

Whether you are exploring AI tools, researching available services, or discovering APIs for development, AI Universe provides a convenient starting point.

## Features

- **Multi-Source Catalog:** Retrieves AI tool and machine-learning API listings from multiple public sources.
- **AI Tools Discovery:** Explore AI products and services from the Flocci AI Tools catalog.
- **AI API Directory:** Discover machine-learning API listings from Public APIs.
- **Search Functionality:** Search listings by name, description, category, and related keywords.
- **Category Filtering:** Browse all listings, AI tools, AI APIs, or free/free-tier entries.
- **Sorting:** Organize results alphabetically or by source.
- **Dynamic Cards:** Display catalog information in an organized card layout.
- **Detailed Information:** View additional information and visit the provider's website.
- **Load More:** Browse results in manageable batches.
- **Local Fallback:** Display bundled catalog entries when external sources are unavailable.
- **Responsive Interface:** Access the directory across desktop, tablet, and mobile devices.
- **Interactive Design:** Gradient buttons, hover effects, visual highlights, and a PCB-inspired header background.

## Data Sources

AI Universe integrates the following public catalogs:

| Source | Purpose |
|---|---|
| [Flocci AI Tools](https://aitools.flocci.in/) | AI tools and product listings |
| [Public APIs](https://publicapis.lol/) | Machine-learning API listings |
| Local JSON Catalog | Fallback AI tools and API provider entries |

The application attempts to retrieve data from the remote catalogs independently. If one source is unavailable, the other can still provide results. If both are unavailable, the application uses its bundled fallback data.

**Important:** Free-tier availability does not mean unlimited or permanently free usage. API providers may change pricing, rate limits, access requirements, and endpoint availability.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JavaScript)
- Bootstrap 5.3.3
- Bootstrap Icons
- Fetch API
- JSON
- Google Fonts

## Project Structure

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

| File / Folder | Description |
|---|---|
| `index.html` | Main application interface |
| `script.js` | Main JavaScript functionality and catalog integration |
| `assets/` | Project images and visual assets |
| `data/` | Local fallback catalog data |
| `ph.html` | Separate Programming Hero version |
| `script-ph.js` | JavaScript associated with the Programming Hero version |

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/aminbiography/ai-universe.git
```

### 2. Navigate to the project directory

```bash
cd ai-universe
```

### 3. Start a local development server

The project loads a local JSON fallback file, so use a local HTTP server instead of opening `index.html` directly.

Using Python:

```bash
python -m http.server 8000
```

### 4. Open in your browser

```text
http://localhost:8000
```

The application will attempt to load its remote catalogs and use local fallback data when necessary.

## How It Works

1. The application initializes its interface and catalog-loading process.
2. It requests data from the Flocci AI Tools catalog and Public APIs independently.
3. Retrieved entries are normalized into a common data structure.
4. Duplicate entries are filtered out.
5. Users can search, filter, and sort the available listings.
6. Selecting a card opens its detailed information.
7. If remote sources fail, the application loads its local fallback catalog.

## Live Demo

Explore the deployed application:

**[AI Universe — Live Website](https://aminbiography.github.io/ai-universe/)**

## Notes on API Availability

This project is a discovery directory, not an AI inference platform.

It lists AI tools and API providers; it does not directly execute model inference requests or store provider API keys.

External catalogs may change their endpoints, response formats, CORS policies, access rules, or pricing. The local fallback helps maintain basic directory functionality when remote data cannot be retrieved.

## Project Objectives

- Make AI tools easier to discover.
- Bring multiple public AI catalogs into one interface.
- Provide a convenient directory for developers and AI enthusiasts.
- Practice API integration and asynchronous JavaScript.
- Demonstrate data normalization, filtering, searching, and dynamic rendering.
- Build a responsive and visually engaging web application.

## Author

**Mohammad Aminul Islam**

- GitHub: [@aminbiography](https://github.com/aminbiography)
- Repository: [AI Universe](https://github.com/aminbiography/ai-universe)

## License and Attribution

Catalog information is provided by its respective external sources and remains subject to their licensing and attribution requirements.

- [Flocci AI Tools](https://aitools.flocci.in/)
- [Public APIs](https://publicapis.lol/)

Check the respective providers' terms before redistributing their catalog data.

---

<p align="center">
  <strong>Explore. Discover. Build with AI.</strong>
</p>

---

#AIUniverseHub #AIUniverse #ArtificialIntelligence #AITools #AIAPIs #MachineLearning #DeepLearning #GenerativeAI #AIDirectory #AIPlatforms #FreeAITools #FreeAPIs #PublicAPIs #APIIntegration #WebDevelopment #FrontendDevelopment #HTML5 #CSS3 #JavaScript #VanillaJavaScript #Bootstrap #JSON #FetchAPI #ResponsiveWebDesign #DynamicWebApplications #OpenSource #GitHubProjects #WebDevelopmentProjects #MohammadAminulIslam
