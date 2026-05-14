# Daniel S. Demoz: professional site (`Daniel_Demoz_Bio`)

Executive-style portfolio: practical AI and analytics leadership, teaching, and independent advisory ([BRUKD Consultancy](https://brukdconsultancy.com/)). Static HTML with Tailwind (CDN), Feather icons, light AOS motion, and shared styles/scripts under `assets/`.

## Site structure (multi-page)

| Page | File | Contents |
|------|------|----------|
| Home | `index.html` | Hero, credibility strip, overview teaser, explore cards, selected impact preview |
| About | `about.html` | Full bio, experience timeline, education |
| Advisory | `advisory.html` | Areas of work, capabilities & tools, selected impact |
| Work | `work.html` | Featured projects and more experiments |
| Writing | `writing.html` | Selected articles with external links |
| Contact | `contact.html` | Email, links, inquiry form |

Shared **CSS:** `assets/site.css` · shared **JS:** `assets/site.js` (AOS, Feather, mobile menu, in-page smooth scroll for `#` links).

## Stack

- HTML5, embedded CSS design tokens, [Tailwind CSS](https://tailwindcss.com/) (CDN)
- [AOS](https://michalsnik.github.io/aos/) for subtle scroll reveals
- [Feather](https://feathericons.com/) icons

## Local preview

Serve the **repository folder** (not a parent directory) so `assets/` resolves—for example from `Daniel_Demoz_Bio`:

`npx --yes serve .`

Then open the printed local URL and use `index.html` as the entry point. Opening a single HTML file via `file://` may still load `assets/site.css` if the file path is correct; serving is more reliable.

## Contact

- Email: asdansi9@gmail.com
- LinkedIn: [Daniel S. Demoz](https://www.linkedin.com/in/daniel-s-demoz)
- GitHub: [DanielDemoz](https://github.com/DanielDemoz)
- Writing: [BRUKD insights](https://brukdconsultancy.com/insights.html) · [WordPress](https://danieldemoz.wordpress.com/)

---

Professor of business analytics · AI and analytics advisor · Toronto
