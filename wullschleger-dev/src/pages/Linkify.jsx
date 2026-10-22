// Turns plain https:// URLs and the support address inside a text into links.
const PATTERN = /(https:\/\/[^\s]+[^\s.,;:)]|[a-z0-9.]+@wullschleger\.dev)/gi;

export default function Linkify({ text }) {
  const parts = text.split(PATTERN);
  return parts.map((part, i) => {
    if (i % 2 === 0) return part;
    const href = part.startsWith("https://") ? part : `mailto:${part}`;
    const external = href.startsWith("https://");
    return (
      <a
        key={i}
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {part.replace(/^https:\/\//, "").replace(/\/$/, "")}
      </a>
    );
  });
}
