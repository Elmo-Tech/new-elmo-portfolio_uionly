# ElmoTech — Site Analysis (elmotech.it)

Captured 2026-11-26 from the live site (`/en`, `/it`, `/ar`). Full content lives in
[`assets/js/data.js`](../assets/js/data.js); this doc maps the structure and lists UX findings.

## 1. Tech & meta (current site)

| Item | Value |
|---|---|
| Stack | Next.js (App Router, Turbopack), Tailwind, Supabase Storage for media |
| Locales | `it` (default), `en`, `ar` (RTL) — route prefix `/{locale}/…` |
| Theme | Dark only, `#020B1A` background, blue gradient hero image |
| Font | IBM Plex Sans Arabic (used for all locales) |
| Extras | Third-party AI chatbot widget (`chatbot-api.testingelmo.com`), FAQPage JSON-LD on contact |
| SEO | Per-page titles/descriptions, OG + Twitter cards, `index, follow` |

## 2. Sitemap

| Route (Italian slug kept) | Title | Sections |
|---|---|---|
| `/` | Custom Software & Digital Solutions | Hero · stats (150+ projects, 7+ years) · 7 services · tech marquee · 4-step process · 2 featured products · 5 testimonials · CTA |
| `/chi-siamo` | About — Team, Mission & Values | Hero "The Innovation Behind ElmoTech" · Vision + image · 4 stats (7+, 69+, 98%, 24/7, 53 clients) · 5 values · CTA |
| `/servizi` | Software Development Services | Hero "Cutting-Edge Technology Solutions" · 7 service cards · 4-step process · CTA |
| `/servizi/{slug}` ×7 | Service detail | Hero + image · 4 features · tech marquee · 3 steps · (optional) case study · CTA |
| `/casi-studio` | Case Studies & Results | Hero "Stories of Digital Success" · 4 case cards (Accountant, Elmo Space, AI Voice Call, Sketch to Render) · CTA |
| `/projects` | Digital Products | Hero "All Our Products" · category filter (All/Web/Mobile/AI/Automation/WordPress) · 17 product cards |
| `/contact-us` | Contact — Start Your Project | Hero · form (Name*, Email*, Company, Message*) · locations, emails, phones, WhatsApp · 3 FAQ |

Service slugs: `web-applications`, `website-ecommerce`, `mobile-development`, `cloud-architecture`,
`automazione-industriale`, `consulenza-it`, `sicurezza-it`.

## 3. Content inventory

- **Services:** 7, each with 4 features + 3 steps; 4 of them have a hero image; 4 have a case-study teaser.
- **Products/projects:** 17 (9 Web, 3 Mobile, 1 AI, 4 Automation). Each: title, category, year, "productivity gain" %, image, description.
- **Testimonials:** 5 (no photos, initials avatars).
- **Values:** 5. **Process steps:** 4. **Tech stack:** 13 logos. **FAQ:** 3.
- **Contact:** 2 emails, 3 phones, 2 offices (Cremona IT, Mansoura EG), LinkedIn / Instagram / Facebook.

## 4. UX / UI findings to fix in the redesign

1. **Inconsistent stats** — 150+ projects on Home vs 69+ on About. Needs one real number from the business.
2. **Data glitches** — "+95% Di controllo" (Italian leaking into EN), escaped quotes `\"Mosta3ed\"`, two products both named "Maintenance Management System", broken icon text ("⚙️", "secu") instead of SVGs for 3 services.
3. **Testimonial copy** names the company "إلما تك" in Arabic — brand spelling inconsistent.
4. **Process steps rendered twice** in the DOM (duplicate H4s) — accessibility + SEO noise.
5. **Placeholder case studies** — FoodFlow / ManufactPro / RetailGroup / FinanceSecure links have no real page; "Read the case study" leads nowhere.
6. **Weak hierarchy** — every section uses the same centered heading + card grid; no rhythm change, little use of the strong product imagery.
7. **Animation** is limited to fade-ins and a marquee; no scroll storytelling, no micro-interactions on cards/buttons.
8. **"WordPress" filter** exists with zero items.
9. **Contact** — label "Other" on both locations; no form validation feedback visible.
10. **Arabic RTL** shares the Latin font weight scale; headings feel heavy.

## 5. Phase 0 redesign (this folder)

Static HTML/CSS/JS only — no build step. Goal: lock a stable design system and motion language
before porting to Next.js.

- `index.html`, `about.html`, `services.html`, `service.html?s={slug}`, `case-studies.html`, `products.html`, `contact.html`
- `assets/css/main.css` — tokens, layout, components
- `assets/js/data.js` — all content · `assets/js/app.js` — shared layout + motion
- Libraries (CDN): GSAP 3.12.5 + ScrollTrigger, Lenis 1.1.13 smooth scroll

### Motion language
| Pattern | Where |
|---|---|
| Preloader (letter stagger + counter) and curtain page transitions | All pages |
| Masked line/word reveal on headings | All headings |
| Interactive particle-grid canvas + mouse parallax, hero scales/fades on scroll | Home hero |
| Animated counters | Stats |
| Spotlight (cursor-follow glow) cards + magnetic buttons + custom cursor | Cards, CTAs |
| Scroll-velocity skewed marquee | Tech stack |
| Pinned horizontal scroll with progress | Process |
| Hover image-reveal list following cursor | Featured work |
| Stacking sticky cards | Services page |
| Scroll-scrubbed text fill | Manifesto / CTA |
| FLIP filter animation | Products |
| Height-animated accordion, floating labels | Contact |

| Real-time 3D extruded logo (Three.js r147, lazy-loaded) — assembles in the loader, flies into the hero, tilts with the mouse, spins on click, recedes on scroll | Loader (all pages, first visit), home hero |
| Logo mark: favicon, header, mobile menu, footer wordmark, outline watermark drawn in every inner-page hero | All pages |
| Bento widgets: uptime ring, typing code window, office map with travelling arc, sparkline, bars, clock, timeline | Home "Why ElmoTech" |
| Sticky image panel synced to a scrolling service list | Home services |
| Autoplay testimonial slider with progress bars and word reveal | Home testimonials |

All motion respects `prefers-reduced-motion`. If WebGL or the Three.js CDN is unavailable, the hero falls back to a floating 2D logo.
