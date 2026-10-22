// Renders scripts/og/home-card.html with headless Chrome into
// public/og/home-de.jpg and home-en.jpg (1200 × 630). macOS: needs Google
// Chrome and `sips`. Run from wullschleger-dev/: node scripts/og/render.mjs
import { execFileSync, spawn } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, "../../public/og");
const card = pathToFileURL(join(here, "home-card.html")).href;
const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const profile = mkdtempSync(join(tmpdir(), "og-chrome-"));
const port = 9500 + Math.floor(Math.random() * 400);

const chrome = spawn(
  chromePath,
  ["--headless=new", "--hide-scrollbars", `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, "about:blank"],
  { stdio: "ignore" }
);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let ws;
for (let i = 0; i < 50 && !ws; i++) {
  try {
    const targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
    const page = targets.find((t) => t.type === "page");
    if (page) ws = new WebSocket(page.webSocketDebuggerUrl);
  } catch {}
  if (!ws) await sleep(200);
}
await new Promise((r) => (ws.onopen = r));
let id = 0;
const pending = new Map();
ws.onmessage = (e) => {
  const msg = JSON.parse(e.data);
  pending.get(msg.id)?.(msg);
  pending.delete(msg.id);
};
const send = (method, params = {}) =>
  new Promise((r) => {
    pending.set(++id, r);
    ws.send(JSON.stringify({ id, method, params }));
  });

mkdirSync(out, { recursive: true });
await send("Emulation.setDeviceMetricsOverride", { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false });
for (const lang of ["de", "en"]) {
  await send("Page.navigate", { url: `${card}?lang=${lang}` });
  await sleep(1200);
  const shot = await send("Page.captureScreenshot", { format: "png" });
  const png = join(profile, `home-${lang}.png`);
  writeFileSync(png, Buffer.from(shot.result.data, "base64"));
  execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "86", png, "--out", join(out, `home-${lang}.jpg`)], {
    stdio: "ignore",
  });
  console.log(`og: public/og/home-${lang}.jpg`);
}
ws.close();
const exited = new Promise((r) => chrome.once("exit", r));
chrome.kill();
await exited;
rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
