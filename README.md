# wullschleger.dev

Personal portfolio of **Emanuel Wullschleger** — Junior Digital Integration Software Engineer with a background in software testing and test automation (Python, Squish, Selenium, Jenkins), currently studying application development (Dipl. Informatiker HF) and growing towards software engineering.

**→ Live site: [wullschleger.dev](https://wullschleger.dev)**

![Screenshot of wullschleger.dev](docs/preview.png)

## About this site

Deliberately small — no template, no UI library, no CSS framework.

- **React + Vite**, fully static, hosted on Cloudflare Pages
- **Pre-rendered app pages** — the app pages under `/apps` are rendered to static HTML at build time (a small step in the Vite build, no framework), so they work without JavaScript and have their own meta data
- **Custom CSS** on a small design-token system (colors, spacing, radii, shadows); the app pages add one stylesheet with locally scoped app colours
- **Bilingual** — German (default) and English. The start page switches language in place; the app pages have their own URL per language (`/apps/…`, `/en/apps/…`)
- **No third-party requests** — fonts (Inter, JetBrains Mono) are served from the site itself
- **Subtle motion** — CSS entrance animation and IntersectionObserver scroll reveals, disabled for `prefers-reduced-motion`
- **Accessibility basics** — semantic HTML, skip link, visible focus states, ARIA labels

## Structure

```
wullschleger-dev/
├── index.html             page template, start page meta
├── scripts/
│   ├── prerender.mjs      writes static HTML for the app pages, 404 and sitemap
│   └── ced-buddy-assets.sh  copies app artwork/screenshots into web sizes
├── public/                static files (CV, app images, robots.txt, _redirects, font licenses)
└── src/
    ├── translations.js    start page text (DE + EN)
    ├── styles.css         design tokens + start page styling
    ├── apps.css           app pages styling
    ├── components/        one React component per section
    ├── apps/              app metadata (apps.js) and app page texts
    └── pages/             app pages (apps overview, product, support, privacy, 404)
```

`npm run build` builds the client bundle, a server bundle for pre-rendering and then runs `scripts/prerender.mjs`. Launch values for apps (status, App Store link) live in `src/apps/apps.js`; see [docs/apps/ced-buddy-launch.md](docs/apps/ced-buddy-launch.md).

## Contact

The best way to reach me is through the [contact section on the site](https://wullschleger.dev/#contact), or on [LinkedIn](https://www.linkedin.com/in/emanuel-wullschleger/).
