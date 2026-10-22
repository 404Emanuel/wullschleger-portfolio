import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import { matchRoute, notFoundRoute } from "./routes.js";
import { pageComponents } from "./pages/registry.js";
import "./fonts.css";
import "./styles.css";
import "./apps.css";

const container = document.getElementById("root");

// Pre-rendered pages carry their route in data-route and already contain
// their HTML: hydrate it. In the dev server (no pre-rendering) the route is
// taken from the URL. Everything else is the client-rendered start page.
const routePath = container.dataset.route;
const route =
  routePath === notFoundRoute.path ? notFoundRoute : matchRoute(routePath ?? window.location.pathname);

if (route) {
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
} else {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
