import { useEffect, useRef, useState } from "react";
import { analyticsEnabled, analyticsLoaded, loadAnalytics, readChoice, saveChoice } from "../analytics.js";

/**
 * The visitor's choice about website statistics. Nothing renders before
 * hydration (the pre-rendered HTML has no question and no button), so without
 * JavaScript nothing is asked and nothing is measured.
 */
export function usePrivacyChoice() {
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState(null);
  const [open, setOpen] = useState(false);
  const [fromSettings, setFromSettings] = useState(false);

  useEffect(() => {
    if (!analyticsEnabled()) return;
    const stored = readChoice();
    setChoice(stored);
    setOpen(!stored);
    setReady(true);
    if (stored?.analytics) loadAnalytics();
  }, []);

  const choose = (analytics) => {
    const wasMeasuring = analyticsLoaded();
    saveChoice(analytics);
    setChoice({ analytics });
    setOpen(false);
    if (analytics) {
      loadAnalytics();
    } else if (wasMeasuring) {
      // A loaded beacon cannot be switched off; a new page load starts without it.
      window.location.reload();
    }
  };

  return {
    ready,
    choice,
    open,
    fromSettings,
    choose,
    openSettings: () => {
      setFromSettings(true);
      setOpen(true);
    },
  };
}

/** Footer button that opens the question again. */
export function PrivacySettingsButton({ state, label, buttonRef }) {
  if (!state.ready) return null;
  return (
    <button
      type="button"
      ref={buttonRef}
      className="footer-privacy footer-settings"
      aria-expanded={state.open}
      aria-controls="privacy-choice"
      onClick={state.openSettings}
    >
      {label}
    </button>
  );
}

/**
 * The question itself: a small panel at the bottom of the screen that does
 * not block the page. Both answers are equal buttons.
 */
export function PrivacyChoicePanel({ state, c, returnFocus }) {
  const heading = useRef(null);
  const { open, fromSettings, choice } = state;

  useEffect(() => {
    // Only move focus when the visitor opened the panel from the footer.
    if (open && fromSettings) heading.current?.focus();
  }, [open, fromSettings]);

  if (!state.ready || !open) return null;

  const answer = (analytics) => {
    state.choose(analytics);
    if (fromSettings) returnFocus?.();
  };

  return (
    <section id="privacy-choice" className="privacy-choice" aria-labelledby="privacy-choice-title">
      <h2 id="privacy-choice-title" ref={heading} tabIndex={-1}>
        {c.title}
      </h2>
      <p>
        {c.text}{" "}
        <a href={c.moreHref}>{c.more}</a>
      </p>
      {choice && <p className="privacy-choice-status">{choice.analytics ? c.statusAllowed : c.statusDenied}</p>}
      <div className="privacy-choice-actions">
        <button type="button" className="btn btn-ghost" onClick={() => answer(true)}>
          {c.allow}
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => answer(false)}>
          {c.deny}
        </button>
      </div>
    </section>
  );
}
