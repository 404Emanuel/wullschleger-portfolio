import { cedBuddy } from "../apps/apps.js";
import { cedBuddyContent } from "../apps/ced-buddy/content.js";
import { localePath } from "../routes.js";

export function cedBuddyLinks(lang) {
  const base = `/apps/${cedBuddy.slug}`;
  return {
    product: localePath(base, lang),
    support: localePath(`${base}/support`, lang),
    privacy: localePath(`${base}/privacy`, lang),
  };
}

/** Footer row shown on every CED Buddy page. */
export function cedBuddyFooterLinks(lang) {
  const links = cedBuddyLinks(lang);
  const labels = cedBuddyContent[lang].footerLinks;
  return {
    label: labels.label,
    items: [
      { href: links.product, label: labels.product },
      { href: links.support, label: labels.support },
      { href: links.privacy, label: labels.privacy },
    ],
  };
}
