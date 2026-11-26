# Punchline Company - React + Node.js

React 19, Vite, React Router, shared CSS and a native Node.js HTTP backend. Requires Node.js 20.19+ (22 LTS recommended).

## Run locally (VS Code)

Extract the ZIP, open the `punchline-react` folder in VS Code, and open a terminal.

```sh
npm install
npm run dev
```

Open a second terminal in the same folder:

```sh
npm run server
```

Open the URL printed by Vite (normally http://localhost:5173). Vite proxies /api to the backend at 127.0.0.1:3001. Use the Vite URL, not Live Server.

## Production-style local run

```sh
npm run build
npm start
```

Open http://localhost:3001. Node serves the compiled React files and API. Set HOST and PORT environment variables for hosting (the development proxy targets port 3001).

## File guide

- `src/pages/Home.jsx`, `About.jsx`, `Corporate.jsx`: page layout.
- `src/components/Shared.jsx`: shared navigation, footer, wordbar and enquiry dialog.
- `src/components/Testimonials.jsx`, `Journey.jsx`, `FourWays.jsx`: React-driven interactions.
- `src/style.css`: colors, typography, layout, responsive breakpoints and hover effects.
- `public/assets/images/`: supplied/optimized website visuals.
- `server/index.js`: Node server and enquiry API.
- `POST /api/enquiries`: accepts JSON {name,email,message}; validates and saves to `server/data/enquiries.jsonl` (created after first submission). No automatic email sending or database is configured. `GET /api/health` returns status. Data is not publicly served.

## Remaining handoff

The existing XD recreation is preserved, including approximate fonts (Luckiest Guy and Montserrat from Google Fonts, with fallbacks), cropped missing illustrations, and placeholder copy. Campus, Academy, Live, separate Contact page, brochure, corporate video, social/WhatsApp links, final testimonials, and timeline content still require assets or specifications. Contact opens an added enquiry form. The local file-based backend is for development; before public launch configure secure hosting, HTTPS, rate limiting/spam protection, privacy notice and appropriate data storage/retention, plus email/database integration if required. No production deployment is included.

Dependency installation was blocked in the creation environment, so the React build and browser rendering were not verified. The Node backend was smoke-tested independently.
