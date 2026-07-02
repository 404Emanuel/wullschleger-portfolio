# wullschleger.dev

Personal portfolio of Emanuel Wullschleger — bilingual (German default / English), built with React + Vite. Fully static, no backend, made for Cloudflare Pages.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

Requires Node 20+.

## Deploy on Cloudflare Pages

1. Push this folder to a GitHub repository.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Settings: Framework preset **Vite**, build command `npm run build`, output directory `dist`.
4. Add `wullschleger.dev` under Custom domains (DNS is handled automatically if the domain is on Cloudflare).

## Where things live

- All visible text (DE + EN): `src/translations.js`
- Colors, spacing, typography: design tokens at the top of `src/styles.css`
- Sections: `src/components/`

## Customize later

- **CV download:** put the PDF into `public/` and set `CV_URL` in `src/components/Contact.jsx`
- **Accent color:** `--accent` (and related tokens) in `src/styles.css`
- **Meta/OG description:** `index.html`
- **Projects section:** add a small one once there are 1–2 real projects to show
