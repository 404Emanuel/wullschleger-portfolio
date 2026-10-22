// Build-time renderer for the pre-rendered pages (see scripts/prerender.mjs).
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { routes, notFoundRoute } from "./routes.js";
import { pageComponents, pageHead } from "./pages/registry.js";
import { cedBuddy } from "./apps/apps.js";
import { privacyContent, countPending } from "./apps/ced-buddy/privacy.js";

export { routes, notFoundRoute, pageHead, cedBuddy };

export function render(route) {
  const Page = pageComponents[route.page];
  return renderToString(
    <StrictMode>
      <Page route={route} />
    </StrictMode>
  );
}

export function pendingPrivacyPoints() {
  return {
    de: countPending(privacyContent.de),
    en: countPending(privacyContent.en),
  };
}
