import { useEffect, useRef, useState } from "react";
import { CopyIcon } from "../components/Icons.jsx";

/**
 * Copy button for an address. It only appears once JavaScript runs (the
 * address itself is always visible and selectable). When the clipboard is not
 * available, the address is selected and a hint explains how to copy it.
 */
export default function CopyEmail({ address, targetId, label, copied, fallback }) {
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState("");
  const timer = useRef(null);

  useEffect(() => {
    setReady(true);
    return () => clearTimeout(timer.current);
  }, []);

  const selectAddress = () => {
    const el = document.getElementById(targetId);
    const selection = window.getSelection?.();
    if (!el || !selection) return;
    const range = document.createRange();
    range.selectNodeContents(el);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const copy = async () => {
    clearTimeout(timer.current);
    try {
      if (!navigator.clipboard?.writeText) throw new Error("no clipboard");
      await navigator.clipboard.writeText(address);
      setMessage(copied);
      timer.current = setTimeout(() => setMessage(""), 4000);
    } catch {
      selectAddress();
      setMessage(fallback);
    }
  };

  return (
    <>
      {ready && (
        <button type="button" className="btn btn-ghost" onClick={copy}>
          <CopyIcon />
          {label}
        </button>
      )}
      <p className="copy-status" role="status" aria-live="polite">
        {message}
      </p>
    </>
  );
}
