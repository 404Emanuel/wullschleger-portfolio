import { cedBuddy, isAvailable } from "../apps/apps.js";
import { appsContent } from "../apps/content.js";

/** App icon, name and status line. */
export function AppIcon({ size = 64, eager = false, className = "" }) {
  const src = size > 96 ? "icon-384" : "icon-192";
  return (
    <img
      className={`app-icon ${className}`}
      src={`${cedBuddy.assets}/${src}.webp`}
      srcSet={`${cedBuddy.assets}/icon-96.webp 96w, ${cedBuddy.assets}/icon-192.webp 192w, ${cedBuddy.assets}/icon-384.webp 384w`}
      sizes={`${size}px`}
      width={size}
      height={size}
      alt=""
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

export function StatusLabel({ lang }) {
  const status = isAvailable(cedBuddy) ? "available" : "coming_soon";
  return <span className="app-status">{appsContent[lang].status[status]}</span>;
}

/** Official App Store badge, only when the app is really available. */
export function AppStoreBadge({ lang, label }) {
  if (!isAvailable(cedBuddy)) return null;
  return (
    <a className="store-badge" href={cedBuddy.appStoreUrl} target="_blank" rel="noopener noreferrer">
      <img src={cedBuddy.appStoreBadge[lang]} alt={label} height="48" />
    </a>
  );
}
