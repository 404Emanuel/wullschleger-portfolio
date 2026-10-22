#!/usr/bin/env bash
# Copies the CED Buddy artwork and screenshots used on the website from the app
# repository and writes web-sized variants to public/apps/ced-buddy/.
#
# The app repository is only read (no checkout, no writes). Run it again when
# newer screenshots exist, then update docs/apps/ced-buddy-launch.md
# (source commit, file list).
#
#   APP_REPO=~/Documents/GitHub/ced-buddy ./scripts/ced-buddy-assets.sh
#
# Needs macOS `sips` and `cwebp` (brew install webp).
set -euo pipefail

APP_REPO="${APP_REPO:-$HOME/Documents/GitHub/ced-buddy}"
OUT="$(cd "$(dirname "$0")/.." && pwd)/public/apps/ced-buddy"
SHOTS="$APP_REPO/docs/design/screenshots"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

mkdir -p "$OUT/screens"
echo "Source: $APP_REPO @ $(git -C "$APP_REPO" rev-parse --short HEAD) ($(git -C "$APP_REPO" branch --show-current))"

# webp <source.png> <target-base> <width...>
# Writes <target-base>-<width>.webp; a width above the source width is skipped.
webp() {
  local src="$1" base="$2"
  shift 2
  local src_w
  src_w=$(sips -g pixelWidth "$src" | awk '/pixelWidth/ {print $2}')
  for w in "$@"; do
    if [ "$w" -gt "$src_w" ]; then continue; fi
    cwebp -quiet -q 82 -m 6 -resize "$w" 0 "$src" -o "$base-$w.webp"
  done
}

# App icon (1024 × 1024, RGB) and the coral Buddy ("good" mood, transparent).
webp "$APP_REPO/assets/images/icon.png" "$OUT/icon" 96 192 384
webp "$APP_REPO/assets/mascot/buddy-good@3x.png" "$OUT/buddy" 240 480

# Share image: the unchanged icon centred on the site background.
sips -s format png -z 440 440 "$APP_REPO/assets/images/icon.png" --out "$TMP/icon-440.png" >/dev/null
sips --padToHeightWidth 630 1200 --padColor 0A0D12 "$TMP/icon-440.png" --out "$TMP/og.png" >/dev/null
sips -s format jpeg -s formatOptions 82 "$TMP/og.png" --out "$OUT/og.jpg" >/dev/null

# Screenshots: all with made-up data. Widths 360/720 (or the source width).
# <app file>                                        <web name>
while read -r file name; do
  [ -z "$file" ] && continue
  src_w=$(sips -g pixelWidth "$SHOTS/$file" | awk '/pixelWidth/ {print $2}')
  if [ "$src_w" -ge 720 ]; then
    webp "$SHOTS/$file" "$OUT/screens/$name" 360 720
  else
    webp "$SHOTS/$file" "$OUT/screens/$name" 360 "$src_w"
  fi
done <<'LIST'
iphone-t-light-04-today-top.png             today-de
iphone-l-en-ltr-after-ar-01-today.png       today-en
iphone-t-light-01-check-in-mood.png         check-in-mood-de
iphone-t-light-02-check-in-symptoms.png     check-in-symptoms-de
history-v2-01-days-many-years.png           history-de
history-v2-17-english.png                   history-en
overview-v2-02-month-calendar.png           overview-month-de
overview-v2-01-report-card-month.png        overview-report-de
iphone-unlock-02-report-locked.png          report-options-de
iphone-en-purchase-report-locked.png        report-options-en
LIST

ls -la "$OUT" "$OUT/screens"
