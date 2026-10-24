// Cloudflare Web Analytics, loaded only after the visitor agrees.
//
// Before a choice, after a refusal and without JavaScript the site loads no
// analytics script and opens no connection to Cloudflare Web Analytics. The
// choice is kept in localStorage (no cookie): the choice, a version number and
// the day it was made, nothing else. See docs/apps/privacy-operations.md.
//
// Cloudflare must not add the script by itself, or the choice would be
// bypassed: the site in Web Analytics has to be set to "Enable with JS Snippet
// installation" and Web Analytics of the Pages project has to be off.

// Site token of wullschleger.dev from Cloudflare (Web Analytics → Manage site
// → JS snippet, the value of "token"). Not a secret: it is visible in every
// measured page. Empty: no question, no settings button, no measurement.
const SITE_TOKEN = "";

export const webAnalytics = {
  // VITE_WEB_ANALYTICS_TOKEN only overrides the token for local test builds.
  token: import.meta.env.VITE_WEB_ANALYTICS_TOKEN || SITE_TOKEN,
  src: "https://static.cloudflareinsights.com/beacon.min.js",
};

export const analyticsEnabled = () => Boolean(webAnalytics.token);

const STORAGE_KEY = "wd-privacy-choice";
// Raise when the question changes in substance: older choices are then asked again.
const CHOICE_VERSION = 1;
// After this many months the site asks again.
const CHOICE_MONTHS = 6;

const today = () => new Date().toISOString().slice(0, 10);

/** The stored choice ({ analytics: boolean, date }) or null when none is valid. */
export function readChoice() {
  let value;
  try {
    value = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
  if (!value || value.v !== CHOICE_VERSION || typeof value.analytics !== "boolean") return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value.date ?? "")) return null;
  const expires = new Date(`${value.date}T00:00:00Z`);
  expires.setUTCMonth(expires.getUTCMonth() + CHOICE_MONTHS);
  if (!(expires > new Date())) return null;
  return { analytics: value.analytics, date: value.date };
}

/** Stores the choice. When storage is blocked it only applies to this page. */
export function saveChoice(analytics) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ v: CHOICE_VERSION, analytics, date: today() }));
  } catch {
    // Private mode or blocked storage: nothing to keep.
  }
}

const SCRIPT_ID = "cf-web-analytics";

/** Adds the Cloudflare beacon once per page load. Only call after consent. */
export function loadAnalytics() {
  if (!analyticsEnabled() || document.getElementById(SCRIPT_ID)) return;
  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.defer = true;
  script.src = webAnalytics.src;
  // "spa": false — every page is a full page load; hash links (#contact)
  // and history changes must not count as extra page views.
  script.dataset.cfBeacon = JSON.stringify({ token: webAnalytics.token, spa: false });
  document.body.appendChild(script);
}

export const analyticsLoaded = () => Boolean(document.getElementById(SCRIPT_ID));
