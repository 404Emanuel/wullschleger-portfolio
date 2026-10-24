// Metadata of the apps shown on the website, in one place.
// Texts live next to each page in src/apps/<app>/; this file holds the
// values that change at a launch. See docs/apps/ced-buddy-launch.md.

export const SITE_URL = "https://wullschleger.dev";

export const cedBuddy = {
  slug: "ced-buddy",
  name: "CED Buddy",
  platform: "iOS",

  // "coming_soon" until the app is in the App Store. Switch to "available"
  // only together with a real `appStoreUrl` and the official badge files
  // (the build stops otherwise, see scripts/prerender.mjs).
  status: "coming_soon",
  appStoreUrl: "",
  // Official "Download on the App Store" badges from Apple's marketing
  // resources, stored unchanged in public/apps/badges/ at launch.
  appStoreBadge: {
    de: "/apps/badges/app-store-de.svg",
    en: "/apps/badges/app-store-en.svg",
  },

  supportEmail: "apps@wullschleger.dev",

  // "draft" keeps the privacy pages out of the sitemap, marks them noindex
  // and shows a visible draft notice. Switch to "final" only when every
  // open point in the privacy text is resolved (the build checks it).
  privacyStatus: "draft",
  // Date of the privacy text, ISO format.
  privacyUpdated: "2026-10-23",

  assets: "/apps/ced-buddy",
};

export const apps = [cedBuddy];

export function isAvailable(app) {
  return app.status === "available" && Boolean(app.appStoreUrl);
}
