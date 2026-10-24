// Writes static HTML for the app pages after `vite build`.
//
//   vite build                                   → dist/ (client bundle, index.html template)
//   vite build --ssr src/entry-server.jsx        → dist-server/entry-server.js
//   node scripts/prerender.mjs                   → dist/index.html, dist/en.html, dist/apps.html,
//                                                  dist/en/apps/ced-buddy.html, …, dist/404.html,
//                                                  dist/sitemap.xml
//
// Files are named "<path>.html" so that Cloudflare Pages serves them at the
// URL without trailing slash (/apps/ced-buddy, /en); "/" is index.html.
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const serverDir = join(root, "dist-server");

const server = await import(pathToFileURL(join(serverDir, "entry-server.js")).href);
const { routes, notFoundRoute, routeFile, render, pageHead, cedBuddy, pendingPrivacyPoints } = server;

// ---- Launch guards -------------------------------------------------------
const problems = [];
if (cedBuddy.status === "available") {
  if (!/^https:\/\/apps\.apple\.com\//.test(cedBuddy.appStoreUrl)) {
    problems.push('status "available" needs appStoreUrl (https://apps.apple.com/…)');
  }
  for (const badge of Object.values(cedBuddy.appStoreBadge)) {
    if (!existsSync(join(dist, badge))) problems.push(`App Store badge missing: public${badge}`);
  }
} else if (cedBuddy.status !== "coming_soon") {
  problems.push(`unknown status "${cedBuddy.status}"`);
}
if (cedBuddy.privacyStatus === "final") {
  const pending = pendingPrivacyPoints();
  if (pending.de || pending.en) {
    problems.push(`privacyStatus "final" but open points remain (de ${pending.de}, en ${pending.en})`);
  }
}
if (problems.length) {
  console.error(`prerender: ${problems.join("; ")}`);
  process.exit(1);
}

// ---- Helpers -------------------------------------------------------------
const escape = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function headTags(head) {
  const tags = [`<title>${escape(head.title)}</title>`, `<meta name="description" content="${escape(head.description)}" />`];
  if (head.noindex) tags.push('<meta name="robots" content="noindex" />');
  if (head.canonical) {
    tags.push(`<link rel="canonical" href="${head.canonical}" />`);
    tags.push(`<link rel="alternate" hreflang="de" href="${head.alternates.de}" />`);
    tags.push(`<link rel="alternate" hreflang="en" href="${head.alternates.en}" />`);
    tags.push(`<link rel="alternate" hreflang="x-default" href="${head.alternates.de}" />`);
    tags.push(
      '<meta property="og:type" content="website" />',
      `<meta property="og:url" content="${head.canonical}" />`,
      `<meta property="og:title" content="${escape(head.title)}" />`,
      `<meta property="og:description" content="${escape(head.description)}" />`,
      `<meta property="og:locale" content="${head.locale}" />`,
      `<meta property="og:locale:alternate" content="${head.locale === "de_CH" ? "en_US" : "de_CH"}" />`,
      `<meta property="og:image" content="${head.ogImage}" />`,
      '<meta property="og:image:width" content="1200" />',
      '<meta property="og:image:height" content="630" />',
      '<meta property="og:site_name" content="wullschleger.dev" />',
      '<meta name="twitter:card" content="summary_large_image" />'
    );
  }
  return tags.join("\n    ");
}

const template = readFileSync(join(dist, "index.html"), "utf8");
const HEAD_BLOCK = /<!-- page-head:[\s\S]*?<!-- \/page-head -->/;
if (!HEAD_BLOCK.test(template) || !template.includes('<div id="root"></div>')) {
  console.error("prerender: index.html markers not found");
  process.exit(1);
}

function page(route) {
  const head = pageHead(route);
  const html = render(route);
  return {
    head,
    document: template
      .replace('<html lang="de">', `<html lang="${head.lang}">`)
      .replace(HEAD_BLOCK, headTags(head))
      .replace('<div id="root"></div>', `<div id="root" data-route="${route.path}">${html}</div>`),
  };
}

function write(relativePath, content) {
  const target = join(dist, relativePath);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, content);
}

// ---- Pages ---------------------------------------------------------------
const sitemap = [];
for (const route of routes) {
  const { head, document } = page(route);
  write(routeFile(route.path), document);
  if (head.inSitemap) sitemap.push({ loc: head.canonical, alternates: head.alternates });
  console.log(`prerender: ${route.path}${head.noindex ? " (noindex)" : ""}`);
}

write("404.html", page(notFoundRoute).document);
console.log("prerender: 404.html");

// ---- Sitemap -------------------------------------------------------------
const urls = sitemap
  .map(({ loc, alternates }) => {
    const links = alternates
      ? ["de", "en"]
          .map((lang) => `\n    <xhtml:link rel="alternate" hreflang="${lang}" href="${alternates[lang]}" />`)
          .join("")
      : "";
    return `  <url>\n    <loc>${loc}</loc>${links}\n  </url>`;
  })
  .join("\n");
write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`
);
console.log(`prerender: sitemap.xml (${sitemap.length} URLs)`);

rmSync(serverDir, { recursive: true, force: true });
