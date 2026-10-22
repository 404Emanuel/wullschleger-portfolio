import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { matchRoute, notFoundRoute } from "./routes.js";
import { pageComponents } from "./pages/registry.js";
import "./fonts.css";
import "./styles.css";
import "./apps.css";

const container = document.getElementById("root");

// Every page is pre-rendered and carries its route in data-route: hydrate
// its HTML. In the dev server (no pre-rendering) the route comes from the URL.
const routePath = container.dataset.route ?? window.location.pathname;
const route = routePath === notFoundRoute.path ? notFoundRoute : (matchRoute(routePath) ?? notFoundRoute);

const Page = pageComponents[route.page];
const tree = (
  <StrictMode>
    <Page route={route} />
  </StrictMode>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, tree);
} else {
  document.documentElement.lang = route.lang;
  createRoot(container).render(tree);
}
