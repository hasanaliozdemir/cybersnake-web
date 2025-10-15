# CyberSnake Website (Static Scaffold)

This directory contains a static scaffold for the CyberSnake marketing website based on the provided WEBSITE_SPECIFICATION.md.

Files added:
- `index.html` — Home page with hero, screenshots, features, and download CTAs.
- `privacy-policy.html` — Privacy policy page populated from the spec.
- `css/main.css` — Main styling using the cyberpunk color scheme.
- `js/main.js` — Small JS helper: download tracking and carousel.
- `images/` — Placeholder folder (create or copy assets here).

How to run locally:
1. Start a simple static server from this directory.

# Using Python 3 (built-in):
```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

Next steps:

Asset notes (macOS):
If your screenshots are HEIC (iPhone default), convert them to web-friendly formats before publishing. Example commands using `sips` (built-in macOS tool):

```bash
# Convert to PNG
sips -s format png /path/to/ss_1.HEIC --out images/screenshots/screen1.png

# Convert to WebP (requires webp tools like cwebp)
# cwebp images/screenshots/screen1.png -o images/screenshots/screen1.webp
```

In this project the originals are available under `/assets` and the site references those files directly; it's recommended to convert them to optimized PNG/WebP and place them under `/images/screenshots/` for faster delivery.

- Mobile-first responsive styles included in `css/main.css`.

License: MIT (you can change as needed)
