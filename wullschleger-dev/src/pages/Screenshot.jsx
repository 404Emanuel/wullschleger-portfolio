import { cedBuddy } from "../apps/apps.js";

const BASE = `${cedBuddy.assets}/screens`;

/**
 * An original app screenshot in a plain device frame (no drawn UI).
 * `set` is an entry of `screens` in src/apps/ced-buddy/content.js.
 */
export default function Screenshot({ set, lang, alt, sizes, eager = false, caption, className = "" }) {
  const shot = set[lang];
  const [w, h] = set.ratio;
  const widths = shot.width > 360 ? [360, shot.width] : [shot.width];
  const srcSet = widths.map((width) => `${BASE}/${shot.name}-${width}.webp ${width}w`).join(", ");

  return (
    <figure className={`device ${className}`}>
      <div className="device-frame">
        <img
          src={`${BASE}/${shot.name}-${widths[widths.length - 1]}.webp`}
          srcSet={srcSet}
          sizes={sizes}
          width={w}
          height={h}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : undefined}
          decoding="async"
          lang={shot.lang !== lang ? shot.lang : undefined}
        />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
