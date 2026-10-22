// Pre-rendered pages. The URL decides the language: German without prefix,
// English under /en (the English start page is /en).

const PAGES = [
  { page: "home", path: "/" },
  { page: "apps", path: "/apps" },
  { page: "ced-buddy", path: "/apps/ced-buddy" },
  { page: "ced-buddy-support", path: "/apps/ced-buddy/support" },
  { page: "ced-buddy-privacy", path: "/apps/ced-buddy/privacy" },
];

export function localePath(path, lang) {
  if (lang !== "en") return path;
  return path === "/" ? "/en" : `/en${path}`;
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
  const clean = pathname.replace(/(index)?\.html$/, "").replace(/\/+$/, "") || "/";
  return routes.find((route) => route.path === clean) ?? null;
}

/** Link to a start page section (#about …) in the given language. */
export function homeHref(hash, onHome, lang = "de") {
  return onHome ? `#${hash}` : `${localePath("/", lang)}#${hash}`;
}

/** Output file of a route in dist/ ("/" → index.html, "/en" → en.html). */
export function routeFile(path) {
  return path === "/" ? "index.html" : `${path.slice(1)}.html`;
}
