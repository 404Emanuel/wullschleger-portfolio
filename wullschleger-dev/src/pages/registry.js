import App from "../App.jsx";
import AppsPage from "./AppsPage.jsx";
import CedBuddyPage from "./CedBuddyPage.jsx";
import SupportPage from "./SupportPage.jsx";
import PrivacyPage from "./PrivacyPage.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import { SITE_URL, cedBuddy } from "../apps/apps.js";
import { appsContent } from "../apps/content.js";
import { cedBuddyContent, supportContent } from "../apps/ced-buddy/content.js";
import { privacyContent } from "../apps/ced-buddy/privacy.js";
import { translations } from "../translations.js";

export const pageComponents = {
  home: App,
  apps: AppsPage,
  "ced-buddy": CedBuddyPage,
  "ced-buddy-support": SupportPage,
  "ced-buddy-privacy": PrivacyPage,
  "not-found": NotFoundPage,
};

const metaSources = {
  home: translations,
  apps: appsContent,
  "ced-buddy": cedBuddyContent,
  "ced-buddy-support": supportContent,
  "ced-buddy-privacy": privacyContent,
};

/** Head data of a pre-rendered page. */
export function pageHead(route) {
  if (route.page === "not-found") {
    return {
      lang: "de",
      title: "404 · wullschleger.dev",
      description: "Seite nicht gefunden / Page not found",
      noindex: true,
    };
  }
  const meta = metaSources[route.page][route.lang].meta;
  const draftPrivacy = route.page === "ced-buddy-privacy" && cedBuddy.privacyStatus !== "final";
  return {
    lang: route.lang,
    title: meta.title,
    description: meta.description,
    canonical: `${SITE_URL}${route.path}`,
    alternates: {
      de: `${SITE_URL}${route.alternates.de}`,
      en: `${SITE_URL}${route.alternates.en}`,
    },
    ogImage:
      route.page === "home" ? `${SITE_URL}/og/home-${route.lang}.jpg` : `${SITE_URL}${cedBuddy.assets}/og.jpg`,
    locale: route.lang === "de" ? "de_CH" : "en_US",
    noindex: draftPrivacy,
    inSitemap: !draftPrivacy,
  };
}
