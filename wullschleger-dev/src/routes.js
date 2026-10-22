// Pre-rendered pages. The URL decides the language: German without prefix,
// English under /en. The start page "/" is not listed: it stays a client-side
// page with its own language toggle.

const PAGES = [
  { page: "apps", path: "/apps" },
  { page: "ced-buddy", path: "/apps/ced-buddy" },
  { page: "ced-buddy-support", path: "/apps/ced-buddy/support" },
  { page: "ced-buddy-privacy", path: "/apps/ced-buddy/privacy" },
];

export function localePath(path, lang) {
  return lang === "en" ? `/en${path}` : path;
}

export const routes = PAGES.flatMap(({ page, path }) =>
  ["de", "en"].map((lang) => ({
    page,
    lang,
    path: localePath(path, lang),
    alternates: { de: path, en: localePath(path, "en") },
  }))
);

export const notFoundRoute = { page: "not-found", lang: "de", path: "/404", alternates: null };

/** Finds the route for a pathname ("/en/apps/", "/apps.html" …), or null. */
export function matchRoute(pathname) {
  const clean = pathname.replace(/\.html$/, "").replace(/\/+$/, "") || "/";
  return routes.find((route) => route.path === clean) ?? null;
}

/** Links to the start page sections, from any page. */
export function homeHref(hash, onHome) {
  return onHome ? `#${hash}` : `/#${hash}`;
}
