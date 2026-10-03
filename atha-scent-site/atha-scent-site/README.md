# Atha Scent Website

A responsive, dependency-light static website for Atha Scent, Pretoria. The primary conversion method is WhatsApp click-to-chat.

## Included
- Home, About, Shop, Custom Perfume Bar, Reseller Program and Contact pages
- Product category filters
- WhatsApp product ordering using the exact requested message structure
- WhatsApp booking, reseller, contact and newsletter forms
- Floating WhatsApp button on every page
- SEO meta tags and LocalBusiness JSON-LD
- Responsive mobile navigation
- Google Maps embed centred on Pretoria (no street address was supplied)
- Unsplash placeholder imagery

## Important pre-launch replacements
- Replace placeholder product names, sizes, scent notes and `Price on request` with the approved catalogue.
- Replace sample testimonials with verified customer testimonials.
- Replace fragrance/event placeholders with approved Atha Scent photography when supplied.
- Add confirmed business hours and exact address if Atha Scent wants them published.
- Replace `https://example.com` in `sitemap.xml` and `robots.txt` after the final domain is known.

## WhatsApp
Primary number: `27659462725`

All WhatsApp links are generated with `encodeURIComponent()` and open in a new tab.

## Preview locally
Run any static server from this folder, for example:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## GitHub Pages
This site can be hosted directly from a repository using GitHub Pages because it is plain HTML/CSS/JS. No build step is required.
