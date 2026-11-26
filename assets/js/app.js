/* =========================================================
   ElmoTech — Phase 0 shared layout, renderers and motion
   Requires: data.js, GSAP + ScrollTrigger + Flip, Lenis
   ========================================================= */
(() => {
  const S = window.SITE;
  const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const FINE = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const page = document.body.dataset.page || "";
  const introTweens = [];
  document.documentElement.classList.add("js");

  /* ---------------- icons ---------------- */
  const sv = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const I = {
    arrow: sv('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    web: sv('<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01M8 14l-2 2 2 2M16 14l2 2-2 2M13 13l-2 6"/>'),
    cart: sv('<path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6.2"/><circle cx="10" cy="20" r="1.2"/><circle cx="17" cy="20" r="1.2"/>'),
    phone: sv('<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 18.5h3"/>'),
    cloud: sv('<path d="M7 18.5a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9.5z"/><path d="M12 12v5M9.5 14.5 12 12l2.5 2.5"/>'),
    gear: sv('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-2.7-1.1l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 3.6 15H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.1-2.7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 9.7 4.4V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1.3z"/>'),
    compass: sv('<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>'),
    shield: sv('<path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6z"/><path d="m9 12 2 2 4-4"/>'),
  };
  const arrowBtn = `<span class="arrow">${I.arrow}</span>`;
  const btn = (href, label, cls = "btn--primary") =>
    `<a class="btn ${cls}" href="${href}" data-magnetic><span class="btn__label">${label}</span>${arrowBtn}</a>`;
  const initials = (n) => n.split(" ").map((w) => w[0]).join("").slice(0, 2);
  const svcHref = (s) => `service.html?s=${s.slug}`;
  const mark = (cls = "") => (window.ELMO_LOGO ? ELMO_LOGO.svg(cls) : "E");
  const LOGO = window.ELMO_LOGO;
  const hero3d = $(".hero__3d");
  let heroLogo = null, heroLogoP = null, introLock = false;
  const heroLayout = (L) => {
    const { w, h } = L.visibleSize();
    if (innerWidth >= 900) return { x: w * 0.27, y: -0.12, s: 0.62 };
    // mobile: size from width, park the logo ~210px from the top of the hero
    const px = hero3d.clientHeight || innerHeight;
    return { x: 0, y: h / 2 - (Math.min(210, px * 0.24) / px) * h, s: (0.4 * w) / 3.2 };
  };

  /* ---------------- layout ---------------- */
  function renderChrome() {
    const map = { home: "index.html", about: "about.html", services: "services.html", service: "services.html", cases: "case-studies.html", products: "products.html" };
    const links = S.nav.map((n) => `<a class="${map[page] === n.href ? "is-active" : ""}" href="${n.href}"><span data-text="${n.label}">${n.label}</span></a>`).join("");
    document.body.insertAdjacentHTML("afterbegin", `
      <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
        <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2f7bff"/><stop offset="1" stop-color="#36d6f5"/></linearGradient>
        <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2f7bff"/><stop offset="1" stop-color="#36d6f5"/></linearGradient>
        <linearGradient id="markFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="rgba(47,123,255,.16)"/><stop offset="1" stop-color="rgba(47,123,255,0)"/></linearGradient>
      </defs></svg>
      <div class="progress" aria-hidden="true"></div>
      <header class="header"><div class="wrap"><div class="header__bar">
        <a class="logo" href="index.html" aria-label="ElmoTech home"><span class="logo__mark">${mark()}</span>ElmoTech</a>
        <nav class="nav" aria-label="Primary">${links}</nav>
        <a class="btn btn--primary header__cta" href="contact.html" data-magnetic><span class="btn__label">Start a project</span>${arrowBtn}</a>
        <button class="burger" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
      </div></div></header>
      <div class="menu" aria-hidden="true">
        <nav>${[...S.nav, { label: "Contact", href: "contact.html" }].map((n, i) => `<a class="menu__link" href="${n.href}"><span style="transition-delay:${0.25 + i * 0.05}s">${n.label}</span></a>`).join("")}</nav>
        <div class="menu__foot"><a href="mailto:${S.contact.emails[0]}">${S.contact.emails[0]}</a><span>${S.contact.phones[0].label}</span></div>
        <div class="menu__mark" aria-hidden="true">${mark()}</div>
      </div>
      <button class="to-top" aria-label="Back to top"><svg class="tt-ring" viewBox="0 0 52 52"><circle cx="26" cy="26" r="24"/></svg>${I.arrow}</button>
      <div class="cursor" aria-hidden="true"><span class="cursor__label">View</span></div><div class="cursor-dot" aria-hidden="true"></div>
      <div class="curtain" aria-hidden="true"><span></span><span></span><span></span><span></span></div>`);

    const year = new Date().getFullYear();
    document.body.insertAdjacentHTML("beforeend", `
      <footer class="footer"><div class="wrap">
        <div class="footer__grid">
          <div class="footer__brand"><a class="logo" href="index.html"><span class="logo__mark">${mark()}</span>ElmoTech</a><p>${S.brand.blurb}</p></div>
          <div><h4>Services</h4><ul>${S.services.map((s) => `<li><a class="u-link" href="${svcHref(s)}">${s.title}</a></li>`).join("")}</ul></div>
          <div><h4>Company</h4><ul>${S.nav.slice(1).map((n) => `<li><a class="u-link" href="${n.href}">${n.label}</a></li>`).join("")}<li><a class="u-link" href="contact.html">Contact</a></li></ul>
            <h4 style="margin-top:28px">Social</h4><ul>${S.contact.social.map((s) => `<li><a class="u-link" href="${s.href}" target="_blank" rel="noopener">${s.label} ↗</a></li>`).join("")}</ul></div>
          <div><h4>Contact</h4><ul>${S.contact.emails.map((e) => `<li><a class="u-link" href="mailto:${e}">${e}</a></li>`).join("")}${S.contact.phones.map((p) => `<li><a class="u-link" href="tel:${p.tel}">${p.label}</a></li>`).join("")}</ul>
            <ul style="margin-top:20px">${S.contact.locations.map((l) => `<li><b style="color:var(--text);font-weight:500">${l.name}</b><br>${l.address}</li>`).join("")}</ul></div>
        </div>
        <div class="footer__giant" aria-hidden="true"><span class="gm">${mark()}</span>${"ElmoTech".split("").map((c) => `<span>${c}</span>`).join("")}</div>
        <div class="footer__bottom"><span>© ${year} ${S.brand.legal} — ${S.brand.vat}</span><span>Cremona · Mansoura · Worldwide</span></div>
      </div></footer>`);

    // logo watermark in every inner-page hero + 2D fallback slot in home hero
    $$(".phero").forEach((p) => p.insertAdjacentHTML("beforeend", `<div class="phero__mark" data-mark-parallax aria-hidden="true">${mark()}</div>`));
    $$("[data-logo2d]").forEach((el) => (el.innerHTML = mark()));
  }

  /* ---------------- renderers ---------------- */
  const showCard = (p) => `
    <a class="show spot" href="contact.html" data-cat="${p.cat}" data-cursor="view" data-fade>
      <div class="show__media"><img loading="lazy" src="${p.img}" alt="${p.title} preview" data-img-parallax></div>
      <div class="show__body">
        <div class="show__meta"><span class="tag">${p.cat}</span><span>${p.year}</span></div>
        <h3 class="h3">${p.title}</h3><p>${p.text}</p>
        <span class="gain">▲ ${p.gain} productivity gain</span>
      </div>
    </a>`;

  const marqueeTech = () => {
    const items = S.tech.map((t) => `<span class="tech"><img src="${t.logo}" alt="" loading="lazy">${t.name}</span>`).join("");
    return `<div class="marquee" data-marquee="40"><div class="marquee__track">${items}${items}</div></div>`;
  };

  const statsHTML = (list) =>
    list.map((s) => `<div class="stat" data-fade><div class="stat__num"><span data-count="${s.value}">${RM ? s.value : 0}</span><sup>${s.suffix}</sup></div><div class="stat__label">${s.label}</div></div>`).join("");

  const R = {
    "stats-home": (el) => (el.innerHTML = statsHTML(S.stats.home)),
    "stats-about": (el) => (el.innerHTML = statsHTML(S.stats.about)),

    bento: (el) => {
      const code = [
        ['<span class="k">const</span> partner = <span class="k">await</span> ElmoTech.<span class="f">build</span>({'],
        ['  stack: [<span class="s">"Next.js"</span>, <span class="s">"Laravel"</span>, <span class="s">".NET"</span>],'],
        ['  team: <span class="s">"Cremona + Mansoura"</span>,'],
        ['  security: <span class="s">"enterprise"</span>, uptime: <span class="p">99.9</span>,'],
        ['});'],
        [''],
        ['partner.<span class="f">launch</span>(); <span class="c">// ship it 🚀</span><span class="caret"></span>'],
      ];
      const pts = "0,48 20,44 40,46 60,36 80,38 100,28 120,30 140,20 160,22 180,12 200,8";
      el.innerHTML = `<div class="bento">
        <div class="bx bx--uptime spot" data-fade>
          <span class="bx__k">Reliability</span>
          <div class="ring" data-ring><span class="ring__dots"></span>
            <svg viewBox="0 0 120 120"><circle class="ring__bg" cx="60" cy="60" r="52"/><circle class="ring__fg" cx="60" cy="60" r="52" pathLength="100"/></svg>
            <div class="ring__val"><span><span data-count="99.9" data-decimals="1">0</span>%</span><small>UPTIME SLA</small></div>
          </div>
          <div><h3 class="h3">Always on. Always fast.</h3><p style="margin-top:8px">Fault-tolerant cloud architectures with automatic failover and disaster recovery.</p></div>
        </div>
        <div class="bx bx--code spot" data-fade>
          <div class="code__bar"><i></i><i></i><i></i><span>partner.ts</span></div>
          <pre class="code" data-code>${code.map(([l], i) => `<span class="ln" data-n="${i + 1}">${l || " "}</span>`).join("")}</pre>
          <div class="code__out" data-code-out>✓ Build passed · deployed to production in 42s</div>
        </div>
        <div class="bx bx--map spot" data-fade>
          <span class="bx__k">Two offices · one team</span>
          <svg class="map" viewBox="0 0 300 150" aria-label="Cremona, Italy connected to Mansoura, Egypt">
            <defs><pattern id="dotp" width="10" height="10" patternUnits="userSpaceOnUse"><circle class="dots" cx="2" cy="2" r="1.1"/></pattern></defs>
            <rect width="300" height="150" fill="url(#dotp)" opacity=".9"/>
            <path class="arc" id="arcPath" d="M70 50 Q160 -20 236 108"/>
            <circle r="3.2" fill="#fff"><animateMotion dur="3.2s" repeatCount="indefinite" path="M70 50 Q160 -20 236 108"/></circle>
            <circle class="pin-ring" cx="70" cy="50" r="6" stroke-width="1"/><circle class="pin" cx="70" cy="50" r="4"/>
            <circle class="pin-ring" cx="236" cy="108" r="6" stroke-width="1" style="animation-delay:1.2s"/><circle class="pin" cx="236" cy="108" r="4"/>
            <text x="58" y="72">Cremona, IT</text><text x="196" y="132">Mansoura, EG</text>
          </svg>
          <p>Italian rigor, Egyptian speed — overlapping timezones for faster delivery.</p>
        </div>
        <div class="bx bx--stat spot" data-fade>
          <span class="bx__k">Delivered</span>
          <div class="bx__big"><span data-count="150">0</span><sup>+</sup></div>
          <p>Projects shipped across 4 industries.</p>
          <svg class="spark" viewBox="0 0 200 52" preserveAspectRatio="none"><path data-spark d="M${pts.replace(/ /g, " L")}"/></svg>
        </div>
        <div class="bx bx--clock spot" data-fade>
          <span class="bx__k">Response time</span>
          <div class="bx__row"><span class="clock"><i></i><i></i></span><div class="bx__big">&lt;24<sup>h</sup></div></div>
          <p>A real human replies to every request within one business day.</p>
        </div>
        <div class="bx bx--bars spot" data-fade>
          <span class="bx__k">Customer success</span>
          <div class="bx__big"><span data-count="98">0</span><sup>%</sup></div>
          <div class="bars" data-bars>${[46, 62, 55, 74, 68, 88, 98].map((h) => `<i style="height:${h}%"></i>`).join("")}</div>
        </div>
        <div class="bx bx--years spot" data-fade>
          <span class="bx__k">Experience</span>
          <div class="bx__big"><span data-count="7">0</span><sup>+ yrs</sup></div>
          <div class="years" data-years><span class="years__fill"></span>${[2019, 2021, 2023, 2025, 2026].map((y) => `<span>${y}</span>`).join("")}</div>
        </div>
      </div>`;
    },

    "svc-sticky": (el) => {
      el.innerHTML = `<div class="ss">
        <div class="ss__panel"><div class="ss__card spot">
          ${S.services.map((s, i) => `
            <div class="ss__slide ${i === 0 ? "is-active" : ""}" data-slide="${i}">
              <div class="ss__bg ${s.hero ? "" : "ss__bg--icon"}">${s.hero ? `<img src="${s.hero}" alt="" loading="lazy">` : I[s.icon]}</div>
              <div class="ss__num">${s.n}</div>
              <div class="ss__foot"><span class="tag" style="width:fit-content">${s.eyebrow}</span><h3 class="h3">${s.title}</h3>
                <div class="ss__prog">${S.services.map((_, j) => `<i class="${j <= i ? "on" : ""}"></i>`).join("")}</div></div>
            </div>`).join("")}
        </div></div>
        <div class="ss__list">
          ${S.services.map((s, i) => `
            <a class="ss__item ${i === 0 ? "is-active" : ""}" href="${svcHref(s)}" data-ss="${i}">
              <span class="ss__n">${s.n} / 07</span>
              <h3 class="ss__h">${s.title}</h3>
              <p>${s.lead}</p>
              <div class="ss__chips">${s.features.map(([f]) => `<span>${f}</span>`).join("")}</div>
              <span class="link-arrow"><span class="u-link">Explore ${s.title}</span>${I.arrow}</span>
            </a>`).join("")}
        </div>
      </div>`;
    },

    tslider: (el) => {
      el.innerHTML = `<div class="ts" data-ts>
        <div class="ts__quote spot"><span class="ts__mark">“</span>
          <blockquote class="ts__text" aria-live="polite"></blockquote>
          <div class="ts__who"><div><b></b><small></small></div>
            <div class="ts__nav"><button aria-label="Previous testimonial">${I.arrow}</button><button aria-label="Next testimonial">${I.arrow}</button></div></div>
        </div>
        <div class="ts__people">${S.testimonials.map((t, i) => `
          <button class="ts__p" data-i="${i}" aria-label="${t.name}"><span class="avatar">${initials(t.name)}</span><span><b>${t.name}</b><small>${t.role}</small></span><span class="bar"></span></button>`).join("")}
        </div>
      </div>`;
    },
    "services-grid": (el) => {
      el.innerHTML = S.services.map((s) => `
        <a class="svc spot" href="${svcHref(s)}" data-fade>
          <div class="svc__top"><span class="svc__icon">${I[s.icon]}</span><span class="svc__n">${s.n} / 07</span></div>
          <h3 class="h3">${s.title}</h3><p>${s.short}</p>
          <span class="svc__go">${I.arrow}</span>
        </a>`).join("");
    },
    tech: (el) => (el.innerHTML = marqueeTech()),
    process: (el) => {
      el.innerHTML = `
        <div class="hscroll" data-hscroll>
          <div class="hscroll__track">
            <div class="pcard pcard--intro"><span class="eyebrow">Methodology</span><h2 class="h2" style="margin-top:20px" data-split>Our refined process</h2><p class="muted" style="margin-top:18px;max-width:32ch">Four disciplined phases that take you from first idea to a product that keeps improving.</p></div>
            ${S.process.map(([t, d], i) => `
              <div class="pcard spot"><div class="pcard__n outline-text">0${i + 1}</div><div><h3 class="h3">${t}</h3><p>${d}</p></div></div>`).join("")}
          </div>
          <div class="hscroll__progress"><i></i></div>
        </div>`;
    },
    "work-list": (el) => {
      const list = S.projects.filter((p) => p.featured);
      el.innerHTML = `<div class="wcards">${list.map((p, i) => `
        <a class="wcard spot" href="products.html" data-cursor="view" data-fade>
          <div class="wcard__media"><img src="${p.img}" alt="${p.title} preview" loading="lazy"></div>
          <div class="wcard__body">
            <div class="show__meta"><span class="tag">${p.cat}</span><span>0${i + 1} · ${p.year}</span></div>
            <h3 class="h3">${p.title}</h3>
            <p>${p.text}</p>
            <div class="wcard__foot"><span class="gain">▲ ${p.gain} productivity gain</span><span class="wcard__go">${I.arrow}</span></div>
          </div>
        </a>`).join("")}</div>`;
    },
    showcase: (el) => (el.innerHTML = S.projects.slice(0, 2).map(showCard).join("")),
    testimonials: (el) => {
      const cards = S.testimonials.map((t) => `
        <figure class="tcard spot"><blockquote>${t.quote}</blockquote>
          <figcaption class="person"><span class="avatar">${initials(t.name)}</span><span><b>${t.name}</b><small>${t.role}</small></span></figcaption></figure>`).join("");
      el.innerHTML = `<div class="marquee t-marquee" data-marquee="28" data-dir="-1"><div class="marquee__track">${cards}${cards}</div></div>`;
    },
    cta: (el) => {
      el.innerHTML = `<div class="wrap"><div class="cta" data-fade>
        <div class="cta__ring" data-rotate></div>
        <span class="eyebrow" style="color:#bfe9ff">Let's build together</span>
        <h2 class="h1" style="margin-top:22px" data-split>Ready to turn your idea into reality?</h2>
        <div class="cta__foot"><p>Join the companies that have already chosen ElmoTech innovation. Free 45-minute strategy session.</p>
          <div style="display:flex;gap:12px;flex-wrap:wrap">${btn("contact.html", "Start a project")}${btn("case-studies.html", "Case studies", "btn--ghost")}</div></div>
      </div></div>`;
    },
    "services-stack": (el) => {
      el.innerHTML = `<div class="stack">${S.services.map((s) => `
        <article class="stack__card"><div class="stack__inner spot">
          <div class="stack__text">
            <span class="stack__n">${s.n} — ${s.eyebrow}</span>
            <h2 class="h2">${s.title}</h2>
            <p class="lead">${s.short}</p>
            <ul>${s.features.map(([f]) => `<li>${f}</li>`).join("")}</ul>
            <div style="margin-top:auto">${btn(svcHref(s), "Explore service", "btn--ghost")}</div>
          </div>
          <div class="stack__media">${s.hero ? `<img src="${s.hero}" alt="" loading="lazy">` : `<span class="big-icon">${I[s.icon]}</span>`}</div>
        </div></article>`).join("")}</div>`;
    },
    values: (el) => {
      el.innerHTML = S.values.map(([t, d], i) => `
        <div class="value spot" data-fade><span class="value__n">0${i + 1}</span><div><h3 class="h3">${t}</h3><p>${d}</p></div></div>`).join("");
    },
    products: (el) => {
      const count = (c) => (c === "All" ? S.projects.length : S.projects.filter((p) => p.cat === c).length);
      el.innerHTML = `
        <div class="row-between"><div class="filters" role="tablist" aria-label="Filter products"><span class="filters__pill"></span>
          ${S.categories.map((c, i) => `<button role="tab" aria-selected="${i === 0}" class="${i === 0 ? "is-active" : ""}" data-filter="${c}">${c}<sup>${count(c)}</sup></button>`).join("")}
        </div><span class="mono muted" style="font-size:13px" data-count-label>${S.projects.length} products</span></div>
        <div class="pgrid">${S.projects.map(showCard).join("")}</div>`;
    },
    cases: (el) => {
      const pick = ["Accountant System", "Elmo Space", "AI Voice Call", "Sketch to Render"];
      const list = S.projects.filter((p) => pick.includes(p.title));
      el.innerHTML = list.map((p, i) => `
        <article class="case">
          <div class="case__media" data-case-media data-cursor="view"><img src="${p.img}" alt="${p.title}" loading="lazy"></div>
          <div class="case__body">
            <div class="show__meta"><span class="tag">${p.cat}</span><span>0${i + 1} — ${p.year}</span></div>
            <h2 class="h2" data-split>${p.title}</h2>
            <p class="lead">${p.text}</p>
            <div class="case__kpi"><div><b class="grad-text">${p.gain}</b><small>Productivity gain</small></div><div><b>${p.year}</b><small>Delivered</small></div></div>
            <div>${btn("contact.html", "Discuss a similar project", "btn--ghost")}</div>
          </div>
        </article>`).join("");
    },
    faq: (el) => {
      el.innerHTML = `<div class="faq">${S.faq.map(([q, a], i) => `
        <div class="faq__item"><button class="faq__q" aria-expanded="false" aria-controls="faq-${i}">${q}<span class="faq__icon"></span></button>
        <div class="faq__a" id="faq-${i}" role="region"><p>${a}</p></div></div>`).join("")}</div>`;
    },
    "contact-info": (el) => {
      const c = S.contact;
      el.innerHTML = `
        <div class="info__card spot" data-fade><h4>Email</h4>${c.emails.map((e) => `<a href="mailto:${e}">${e}</a>`).join("")}</div>
        <div class="info__card spot" data-fade><h4>Phone</h4>${c.phones.map((p) => `<a href="tel:${p.tel}">${p.label}</a>`).join("")}
          <div class="wa" style="margin-top:14px">${btn("https://wa.me/393276375197", "WhatsApp")}${btn("tel:" + c.phones[0].tel, "Call now", "btn--ghost")}</div></div>
        ${c.locations.map((l) => `<div class="info__card spot" data-fade><h4>${l.name}</h4><p>${l.address}</p><p class="muted" style="font-size:14px">${l.city}</p></div>`).join("")}`;
    },
    "service-detail": (el) => {
      const slug = new URLSearchParams(location.search).get("s");
      const idx = Math.max(0, S.services.findIndex((s) => s.slug === slug));
      const s = S.services[idx];
      const prev = S.services[(idx + S.services.length - 1) % S.services.length];
      const next = S.services[(idx + 1) % S.services.length];
      document.title = `${s.title} — ElmoTech`;
      el.innerHTML = `
        <section class="phero"><div class="phero__grid"></div><div class="wrap">
          <div class="sd-hero">
            <div>
              <div class="breadcrumb" data-fade><a href="services.html">Services</a><span>/</span><span>${s.n}</span></div>
              <div style="margin-top:28px" data-fade><span class="eyebrow">${s.eyebrow}</span></div>
              <h1 class="h1" data-split data-split-now>${s.h1[0]} <span class="grad-text" style="display:block">${s.h1[1]}</span></h1>
              <p class="lead" data-fade>${s.lead}</p>
              <div style="margin-top:36px;display:flex;gap:12px;flex-wrap:wrap" data-fade>${btn("contact.html", "Start a project")}${btn("#features", "Main features", "btn--ghost")}</div>
            </div>
            <div class="sd-hero__media" data-fade data-tilt>
              ${s.hero ? `<img src="${s.hero}" alt="${s.title}">` : `<span class="orbit"></span><span class="orbit orbit--2"></span><span class="big-icon">${I[s.icon]}</span>`}
            </div>
          </div>
        </div></section>

        <section class="section--tight" id="features"><div class="wrap">
          <div class="shead"><div><span class="eyebrow">Capabilities</span><h2 class="h2" data-split>Main features</h2></div><p class="lead">What you get when ElmoTech builds your ${s.title.toLowerCase()}.</p></div>
          <div class="feat-grid">${s.features.map(([t, d], i) => `<div class="feat spot" data-fade><span class="feat__i">0${i + 1}</span><h3 class="h3">${t}</h3><p>${d}</p></div>`).join("")}</div>
        </div></section>

        <section class="section--tight"><div class="wrap" style="margin-bottom:28px"><span class="eyebrow">Technologies we work with every day</span></div>${marqueeTech()}</section>

        <section class="section"><div class="wrap">
          <div class="shead"><div><span class="eyebrow">How we deliver</span><h2 class="h2" data-split>Three steps to launch</h2></div></div>
          <div class="steps" data-steps><span class="steps__line"></span>${s.steps.map(([t, d], i) => `<div class="step" data-fade><div class="step__n">0${i + 1}</div><h3 class="h3">${t}</h3><p>${d}</p></div>`).join("")}</div>
        </div></section>

        ${s.caseStudy ? `<section class="section--tight"><div class="wrap"><div class="case-teaser spot" data-fade>
          <div><span class="eyebrow">${s.caseStudy.kicker}</span><h3 class="h2" style="margin:18px 0 14px;font-size:clamp(28px,3.4vw,46px)">${s.caseStudy.title}</h3><p class="lead">${s.caseStudy.text}</p></div>
          ${btn("case-studies.html", "Read the case study")}</div></div></section>` : ""}

        <section class="section--tight"><div class="wrap sd-nav">
          <a class="spot" href="${svcHref(prev)}" data-fade><span class="mono muted" style="font-size:12px">← Previous</span><span class="h3">${prev.title}</span></a>
          <a class="spot" href="${svcHref(next)}" data-fade><span class="mono muted" style="font-size:12px">Next →</span><span class="h3">${next.title}</span></a>
        </div></section>`;
    },
  };

  function renderAll() {
    $$("[data-render]").forEach((el) => R[el.dataset.render] && R[el.dataset.render](el));
  }

  /* ---------------- split text (word masks) ---------------- */
  function split(el) {
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((w) => {
            if (!w) return;
            if (/^\s+$/.test(w)) return frag.appendChild(document.createTextNode(" "));
            const o = document.createElement("span"); o.className = "split-line";
            const i = document.createElement("span"); i.textContent = w; o.appendChild(i); frag.appendChild(o);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== "BR") walk(n);
      });
    };
    walk(el);
    return $$(".split-line > span", el);
  }

  /* ---------------- menu ---------------- */
  function initMenu() {
    const b = $(".burger"), m = $(".menu");
    b.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      b.setAttribute("aria-expanded", open); m.setAttribute("aria-hidden", !open);
      if (window.__lenis) open ? window.__lenis.stop() : window.__lenis.start();
    });
  }

  /* ---------------- FAQ accordion ---------------- */
  function initFaq() {
    $$(".faq__item").forEach((item) => {
      const q = $(".faq__q", item), a = $(".faq__a", item);
      q.addEventListener("click", () => {
        const open = !item.classList.contains("is-open");
        $$(".faq__item.is-open").forEach((o) => {
          if (o === item) return;
          o.classList.remove("is-open"); $(".faq__q", o).setAttribute("aria-expanded", false);
          gsap.to($(".faq__a", o), { height: 0, duration: 0.6, ease: "expo.out" });
        });
        item.classList.toggle("is-open", open); q.setAttribute("aria-expanded", open);
        gsap.to(a, { height: open ? "auto" : 0, duration: 0.7, ease: "expo.out", onComplete: () => window.ScrollTrigger && ScrollTrigger.refresh() });
      });
    });
  }

  /* ---------------- contact form (UI only) ---------------- */
  function initForm() {
    const f = $("form.form"); if (!f) return;
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      let ok = true;
      $$("[required]", f).forEach((inp) => {
        const bad = !inp.value.trim() || (inp.type === "email" && !/^\S+@\S+\.\S+$/.test(inp.value));
        inp.closest(".field").classList.toggle("is-error", bad); if (bad) ok = false;
      });
      if (!ok) { gsap.fromTo(f, { x: -8 }, { x: 0, duration: 0.6, ease: "elastic.out(1, .3)" }); return; }
      f.classList.add("is-sent"); f.reset();
      gsap.from($(".form__ok", f), { y: 10, opacity: 0, duration: 0.6, ease: "expo.out" });
    });
    $$("[required]", f).forEach((i) => i.addEventListener("input", () => i.closest(".field").classList.remove("is-error")));
  }

  /* ---------------- testimonial slider ---------------- */
  function initSlider() {
    const root = $("[data-ts]"); if (!root) return;
    const text = $(".ts__text", root), who = $(".ts__who b", root), role = $(".ts__who small", root);
    const people = $$(".ts__p", root), [prev, next] = $$(".ts__nav button", root);
    const DUR = 7;
    let i = -1, barTw, paused = false;
    const show = (n) => {
      i = (n + S.testimonials.length) % S.testimonials.length;
      const t = S.testimonials[i];
      people.forEach((p, k) => p.classList.toggle("is-active", k === i));
      text.textContent = t.quote; who.textContent = t.name; role.textContent = t.role;
      if (!RM) {
        const words = split(text);
        gsap.fromTo(words, { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.9, ease: "expo.out", stagger: 0.018 });
        gsap.fromTo([who, role], { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "expo.out", delay: 0.2 });
      }
      $$(".bar", root).forEach((b) => gsap.set(b, { scaleX: 0 }));
      barTw && barTw.kill();
      barTw = gsap.to($(".bar", people[i]), { scaleX: 1, duration: DUR, ease: "none", paused, onComplete: () => show(i + 1) });
    };
    people.forEach((p, k) => p.addEventListener("click", () => show(k)));
    prev.addEventListener("click", () => show(i - 1));
    next.addEventListener("click", () => show(i + 1));
    root.addEventListener("pointerenter", () => { paused = true; barTw && barTw.pause(); });
    root.addEventListener("pointerleave", () => { paused = false; barTw && barTw.resume(); });
    show(0);
  }

  /* ---------------- back to top ---------------- */
  function initToTop() {
    const b = $(".to-top"), c = $(".to-top circle");
    b.addEventListener("click", () => (window.__lenis ? __lenis.scrollTo(0, { duration: 1.6 }) : scrollTo({ top: 0, behavior: "smooth" })));
    const upd = (y) => {
      const max = document.documentElement.scrollHeight - innerHeight;
      b.classList.toggle("show", y > innerHeight * 0.8);
      c.style.strokeDashoffset = 151 - 151 * (max > 0 ? y / max : 0);
    };
    if (window.__lenis) __lenis.on("scroll", ({ scroll }) => upd(scroll)); else addEventListener("scroll", () => upd(scrollY), { passive: true });
  }

  /* ---------------- 3D logo (home hero) ---------------- */
  function createHeroLogo() {
    if (!hero3d || !LOGO) return Promise.resolve(null);
    heroLogoP = LOGO.create(hero3d)
      .then((L) => {
        heroLogo = L;
        addEventListener("resize", () => { if (!introLock) L.setLayout(heroLayout(L)); });
        return L;
      })
      .catch(() => { $(".hero").classList.add("no-3d"); return null; });
    return heroLogoP;
  }
  const timeout = (ms) => new Promise((r) => setTimeout(() => r(null), ms));

  /* ---------------- product filter (Flip) ---------------- */
  function initFilter() {
    const wrap = $(".filters"); if (!wrap) return;
    const pill = $(".filters__pill", wrap), cards = $$(".pgrid .show"), label = $("[data-count-label]");
    const movePill = (b) => { pill.style.left = b.offsetLeft + "px"; pill.style.width = b.offsetWidth + "px"; };
    movePill($(".is-active", wrap));
    addEventListener("resize", () => movePill($(".is-active", wrap)));
    wrap.addEventListener("click", (e) => {
      const b = e.target.closest("button"); if (!b) return;
      $$("button", wrap).forEach((x) => { x.classList.toggle("is-active", x === b); x.setAttribute("aria-selected", x === b); });
      movePill(b);
      const cat = b.dataset.filter;
      const state = window.Flip && !RM ? Flip.getState(cards) : null;
      let n = 0;
      cards.forEach((c) => {
        const show = cat === "All" || c.dataset.cat === cat;
        c.classList.toggle("is-hidden", !show);
        if (show) { n++; gsap.set(c, { opacity: 1, y: 0 }); }
      });
      label.textContent = `${n} product${n === 1 ? "" : "s"}`;
      if (state) Flip.from(state, {
        duration: 0.7, ease: "expo.inOut", scale: true, absolute: true, stagger: 0.02,
        onEnter: (els) => gsap.fromTo(els, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.6, ease: "expo.out" }),
        onLeave: (els) => gsap.to(els, { opacity: 0, scale: 0.9, duration: 0.4 }),
        onComplete: () => ScrollTrigger.refresh(),
      });
      else if (window.ScrollTrigger) ScrollTrigger.refresh();
    });
  }

  /* ---------------- hero canvas: interactive dot field ---------------- */
  function initHeroCanvas() {
    const c = $(".hero__canvas"); if (!c) return;
    const ctx = c.getContext("2d");
    let w, h, dots = [], running = true, t = 0;
    const mouse = { x: -9999, y: -9999 }, GAP = 34;
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2); w = c.clientWidth; h = c.clientHeight;
      c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      for (let y = GAP / 2; y < h; y += GAP) for (let x = GAP / 2; x < w; x += GAP) dots.push({ ox: x, oy: y, x, y });
    };
    resize(); addEventListener("resize", resize);
    const host = c.parentElement;
    host.addEventListener("pointermove", (e) => { const r = c.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
    host.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });
    new IntersectionObserver(([e]) => { const was = running; running = e.isIntersecting; if (running && !was) loop(); }).observe(c);
    function loop() {
      if (!running) return;
      t += 0.012;
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        const dx = d.ox - mouse.x, dy = d.oy - mouse.y, dist = Math.hypot(dx, dy), RAD = 170;
        const wave = Math.sin(d.ox * 0.012 + t) * Math.cos(d.oy * 0.01 + t * 0.8) * 4;
        let tx = d.ox, ty = d.oy + wave, a = 0.12 + (wave + 4) / 60, s = 1.2;
        if (dist < RAD) { const f = (1 - dist / RAD) ** 2; tx += (dx / dist || 0) * f * 38; ty += (dy / dist || 0) * f * 38; a += f * 0.85; s += f * 1.8; }
        d.x += (tx - d.x) * 0.12; d.y += (ty - d.y) * 0.12;
        const edge = Math.max(0, Math.min(1, d.oy / (h * 0.35)) * Math.min(1, (h - d.oy) / (h * 0.3)));
        ctx.fillStyle = dist < RAD ? `rgba(54,214,245,${a * edge})` : `rgba(140,170,220,${a * edge})`;
        ctx.fillRect(d.x - s / 2, d.y - s / 2, s, s);
      }
      if (!RM) requestAnimationFrame(loop);
    }
    loop();
  }

  /* ---------------- cursor / magnetic / spotlight / tilt / reveal ---------------- */
  function initPointer() {
    document.addEventListener("pointermove", (e) => {
      const s = e.target.closest && e.target.closest(".spot"); if (!s) return;
      const r = s.getBoundingClientRect();
      s.style.setProperty("--mx", e.clientX - r.left + "px"); s.style.setProperty("--my", e.clientY - r.top + "px");
    });
    if (!FINE || RM || !window.gsap) return;
    const cur = $(".cursor"), dot = $(".cursor-dot");
    const cx = gsap.quickTo(cur, "x", { duration: 0.5, ease: "expo.out" }), cy = gsap.quickTo(cur, "y", { duration: 0.5, ease: "expo.out" });
    const dx = gsap.quickTo(dot, "x", { duration: 0.1 }), dy = gsap.quickTo(dot, "y", { duration: 0.1 });
    addEventListener("pointermove", (e) => { cx(e.clientX); cy(e.clientY); dx(e.clientX); dy(e.clientY); });
    document.addEventListener("pointerover", (e) => {
      const v = e.target.closest("[data-cursor='view']"), l = e.target.closest("a,button,input,textarea,label");
      cur.classList.toggle("is-view", !!v); cur.classList.toggle("is-hover", !v && !!l);
    });
    $$("[data-magnetic]").forEach((m) => {
      const xT = gsap.quickTo(m, "x", { duration: 0.6, ease: "elastic.out(1, .4)" }), yT = gsap.quickTo(m, "y", { duration: 0.6, ease: "elastic.out(1, .4)" });
      m.addEventListener("pointermove", (e) => { const r = m.getBoundingClientRect(); xT((e.clientX - r.left - r.width / 2) * 0.3); yT((e.clientY - r.top - r.height / 2) * 0.4); });
      m.addEventListener("pointerleave", () => { xT(0); yT(0); });
    });
    // floating hero cards: mouse depth parallax
    const depth = $$("[data-depth]").map((el) => ({ d: +el.dataset.depth, x: gsap.quickTo(el, "x", { duration: 1.2, ease: "expo.out" }), y: gsap.quickTo(el, "y", { duration: 1.2, ease: "expo.out" }) }));
    if (depth.length) addEventListener("pointermove", (e) => {
      const nx = e.clientX / innerWidth - 0.5, ny = e.clientY / innerHeight - 0.5;
      depth.forEach((o) => { o.x(nx * o.d); o.y(ny * o.d); });
    });
    $$("[data-tilt]").forEach((t) => {
      t.addEventListener("pointermove", (e) => {
        const r = t.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(t, { rotateY: px * 10, rotateX: -py * 10, transformPerspective: 900, duration: 0.6, ease: "expo.out" });
      });
      t.addEventListener("pointerleave", () => gsap.to(t, { rotateX: 0, rotateY: 0, duration: 0.9, ease: "expo.out" }));
    });
    const list = $(".work-list"), ri = $(".reveal-img");
    if (list && ri) {
      const img = $("img", ri);
      const xT = gsap.quickTo(ri, "x", { duration: 0.6, ease: "expo.out" }), yT = gsap.quickTo(ri, "y", { duration: 0.6, ease: "expo.out" });
      let lastX = 0;
      list.addEventListener("pointermove", (e) => {
        xT(e.clientX - 180); yT(e.clientY - 120);
        gsap.to(ri, { rotate: gsap.utils.clamp(-12, 12, (e.clientX - lastX) * 0.6), duration: 0.5 }); lastX = e.clientX;
      });
      $$(".work-item", list).forEach((it) => it.addEventListener("pointerenter", () => { img.src = it.dataset.img; gsap.to(ri, { opacity: 1, scale: 1, duration: 0.5, ease: "expo.out" }); }));
      list.addEventListener("pointerleave", () => gsap.to(ri, { opacity: 0, scale: 0.6, duration: 0.4, ease: "expo.out" }));
    }
  }

  /* ---------------- header hide / progress ---------------- */
  function initHeader() {
    const hd = $(".header"), pg = $(".progress");
    let last = 0;
    const onScroll = (y) => {
      hd.classList.toggle("is-scrolled", y > 40);
      if (!document.body.classList.contains("menu-open")) hd.classList.toggle("is-hidden", y > last && y > 300);
      last = y;
      const max = document.documentElement.scrollHeight - innerHeight;
      pg.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    };
    if (window.__lenis) window.__lenis.on("scroll", ({ scroll }) => onScroll(scroll));
    else addEventListener("scroll", () => onScroll(scrollY), { passive: true });
  }

  /* ---------------- marquees (scroll-velocity aware) ---------------- */
  function initMarquees() {
    $$("[data-marquee]").forEach((m) => {
      const track = $(".marquee__track", m);
      const base = +m.dataset.marquee || 40, dir = +(m.dataset.dir || 1);
      let x = 0, vel = 0, hover = false;
      m.addEventListener("pointerenter", () => (hover = true));
      m.addEventListener("pointerleave", () => (hover = false));
      if (window.__lenis) window.__lenis.on("scroll", (l) => (vel = l.velocity));
      const skew = !m.classList.contains("t-marquee") && !RM ? gsap.quickTo(track, "skewX", { duration: 0.5, ease: "power3" }) : null;
      gsap.ticker.add((_, dt) => {
        const half = track.scrollWidth / 2; if (!half) return;
        const speed = RM ? 0 : (hover ? base * 0.25 : base) + Math.abs(vel) * 6;
        x -= dir * speed * (dt / 1000) * (vel < -0.1 ? -1 : 1);
        if (x <= -half) x += half;
        if (x > 0) x -= half;
        gsap.set(track, { x });
        if (skew) skew(gsap.utils.clamp(-8, 8, -vel * 0.6));
      });
    });
  }

  /* ---------------- smooth scroll ---------------- */
  function initLenis() {
    if (RM || !window.Lenis) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
      const t = $(a.getAttribute("href")); if (t) { e.preventDefault(); lenis.scrollTo(t, { offset: -90 }); }
    }));
  }

  /* ---------------- initial hidden states (set before reveal) ---------------- */
  function prepare() {
    if (RM) return;
    $$("[data-split]").forEach((el) => {
      const words = split(el);
      el._words = words;
      gsap.set(words, { yPercent: 115, rotate: 4 });
    });
    gsap.set("[data-fade]", { y: 50, opacity: 0 });
  }

  /* ---------------- scroll-linked motion ---------------- */
  function initScroll() {
    if (RM) { gsap.set("[data-fade], .fcard", { opacity: 1, y: 0 }); return; }

    $$("[data-split]").forEach((el) => {
      const now = el.hasAttribute("data-split-now");
      const tw = gsap.to(el._words, {
        yPercent: 0, rotate: 0, duration: 1.3, ease: "expo.out", stagger: 0.05,
        paused: now, scrollTrigger: now ? null : { trigger: el, start: "top 88%" },
      });
      if (now) introTweens.push(tw);
    });

    ScrollTrigger.batch("[data-fade]", {
      start: "top 92%",
      onEnter: (els) => gsap.to(els, { y: 0, opacity: 1, duration: 1.1, ease: "expo.out", stagger: 0.08, overwrite: true }),
    });

    $$("[data-count]").forEach((el) => {
      const o = { v: 0 }, dec = +(el.dataset.decimals || 0);
      gsap.to(o, { v: +el.dataset.count, duration: 2.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 92%" }, onUpdate: () => (el.textContent = o.v.toFixed(dec)) });
    });

    // hero floating cards + 3D logo scroll-away
    if ($(".fcard")) gsap.to(".fcard", { opacity: 1, y: 0, duration: 1.2, ease: "expo.out", stagger: 0.15, delay: 0.6, startAt: { y: 30 } });
    if (heroLogoP) heroLogoP.then((L) => L && ScrollTrigger.create({ trigger: ".hero", start: "top top", end: "bottom top", scrub: true, onUpdate: (s) => L.setScroll(s.progress) }));

    // bento widgets
    $$("[data-ring]").forEach((r) => gsap.to($(".ring__fg", r), { strokeDashoffset: 0.1, duration: 2.4, ease: "power3.out", scrollTrigger: { trigger: r, start: "top 85%" } }));
    $$("[data-spark]").forEach((p) => gsap.to(p, { strokeDashoffset: 0, duration: 2, ease: "power2.inOut", scrollTrigger: { trigger: p, start: "top 92%" } }));
    $$("[data-bars]").forEach((b) => gsap.to($$("i", b), { scaleY: 1, duration: 1.2, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: b, start: "top 92%" } }));
    $$("[data-years]").forEach((y) => gsap.to($(".years__fill", y), { scaleX: 1, duration: 1.8, ease: "power2.inOut", scrollTrigger: { trigger: y, start: "top 92%" } }));
    $$("[data-code]").forEach((c) => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: c, start: "top 80%" } });
      $$(".ln", c).forEach((ln) => tl.to(ln, { clipPath: "inset(0 0% 0 0)", duration: Math.max(0.15, ln.textContent.length * 0.022), ease: `steps(${Math.max(1, ln.textContent.length)})` }));
      tl.to($("[data-code-out]"), { opacity: 1, y: 0, startAt: { y: 10 }, duration: 0.6, ease: "expo.out" }, "+=0.3");
    });

    // sticky services showcase
    const slides = $$("[data-slide]"), items = $$("[data-ss]");
    items.forEach((it, i) => ScrollTrigger.create({
      trigger: it, start: "top 55%", end: "bottom 55%",
      onToggle: (s) => {
        if (!s.isActive) return;
        items.forEach((x, k) => x.classList.toggle("is-active", k === i));
        slides.forEach((x, k) => x.classList.toggle("is-active", k === i));
      },
    }));

    // logo watermark in page heroes
    $$("[data-mark-parallax]").forEach((m) => {
      gsap.from($("path", m), { strokeDasharray: 400, strokeDashoffset: 400, duration: 2.6, ease: "power2.inOut" });
      gsap.to(m, { yPercent: 18, rotate: 8, ease: "none", scrollTrigger: { trigger: m.parentElement, start: "top top", end: "bottom top", scrub: true } });
    });

    const hero = $(".hero");
    if (hero) {
      gsap.to(".hero__inner", { yPercent: 28, opacity: 0, scale: 0.94, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });
      gsap.to(".hero__glow", { scale: 1.6, opacity: 0.4, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });
      const glow = $(".hero__glow");
      if (FINE) hero.addEventListener("pointermove", (e) => gsap.to(glow, { x: (e.clientX / innerWidth - 0.5) * 120, y: (e.clientY / innerHeight - 0.5) * 80, duration: 1.4, ease: "expo.out" }));
    }

    $$("[data-fill]").forEach((el) => {
      el.innerHTML = el.textContent.trim().split(/\s+/).map((w) => `<span class="word">${w}</span>`).join(" ");
      gsap.to($$(".word", el), { color: "#eaf0fa", stagger: 0.1, ease: "none", scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true } });
    });

    const mm = gsap.matchMedia();
    mm.add("(min-width: 761px)", () => {
      $$("[data-hscroll]").forEach((sec) => {
        const track = $(".hscroll__track", sec), bar = $(".hscroll__progress i", sec);
        const dist = () => track.scrollWidth - innerWidth;
        const tl = gsap.timeline({ scrollTrigger: { trigger: sec, start: "center center", end: () => "+=" + dist(), pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1 } });
        tl.to(track, { x: () => -dist(), ease: "none" }, 0).to(bar, { scaleX: 1, ease: "none" }, 0);
        $$(".pcard__n", sec).forEach((n) => tl.fromTo(n, { xPercent: 40 }, { xPercent: -20, ease: "none" }, 0));
      });
    });

    const stackCards = $$(".stack__card");
    stackCards.forEach((card, i) => {
      if (i === stackCards.length - 1) return;
      gsap.to($(".stack__inner", card), {
        scale: 0.9 + i * 0.012, opacity: 0.35, filter: "blur(2px)", ease: "none",
        scrollTrigger: { trigger: stackCards[i + 1], start: "top bottom", end: "top 110px", scrub: true },
      });
    });

    $$("[data-img-parallax]").forEach((img) => gsap.fromTo(img, { yPercent: -8 }, { yPercent: 0, ease: "none", scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true } }));
    $$("[data-parallax]").forEach((el) => gsap.fromTo(el, { yPercent: -10 }, { yPercent: 6, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } }));

    $$("[data-case-media]").forEach((m) => {
      gsap.timeline({ scrollTrigger: { trigger: m, start: "top 85%", end: "center 55%", scrub: 1 } })
        .to(m, { clipPath: "inset(0% 0% 0% 0% round 24px)", ease: "none" }, 0)
        .to($("img", m), { scale: 1, ease: "none" }, 0);
    });

    $$("[data-steps]").forEach((s) => gsap.to($(".steps__line", s), { scaleX: 1, ease: "none", scrollTrigger: { trigger: s, start: "top 80%", end: "bottom 60%", scrub: true } }));
    $$("[data-rotate]").forEach((r) => gsap.to(r, { rotate: 90, ease: "none", scrollTrigger: { trigger: r.parentElement, start: "top bottom", end: "bottom top", scrub: true } }));

    const giant = $$(".footer__giant span");
    if (giant.length) gsap.from(giant, { yPercent: 100, opacity: 0, stagger: 0.05, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: ".footer__giant", start: "top 95%" } });

    addEventListener("load", () => ScrollTrigger.refresh());
  }

  /* ---------------- loader & page transitions ---------------- */
  function initTransitions(done) {
    const curtain = $$(".curtain span");
    const store = (fn) => { try { return fn(); } catch { return null; } };
    const seen = store(() => sessionStorage.getItem("elmo-seen"));
    store(() => sessionStorage.setItem("elmo-seen", 1));

    document.addEventListener("click", (e) => {
      const a = e.target.closest("a"); if (!a || RM) return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || /^(mailto|tel):/.test(href) || a.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const url = new URL(href, location.href);
      if (url.origin !== location.origin || (url.pathname === location.pathname && url.search === location.search)) return;
      e.preventDefault();
      document.body.classList.remove("menu-open");
      gsap.set(curtain, { transformOrigin: "bottom" });
      gsap.to(curtain, { scaleY: 1, duration: 0.7, ease: "expo.inOut", stagger: 0.06, onComplete: () => (location.href = url.href) });
    });
    addEventListener("pageshow", (e) => { if (e.persisted) gsap.set(curtain, { scaleY: 0 }); });

    if (RM) {
      createHeroLogo().then((L) => L && L.intro(heroLayout(L)));
      return done();
    }

    // returning visitor: curtain reveal, then the hero logo spins in
    if (seen) {
      gsap.set(curtain, { scaleY: 1, transformOrigin: "top" });
      gsap.to(curtain, { scaleY: 0, duration: 0.8, ease: "expo.inOut", stagger: 0.06, delay: 0.05 });
      createHeroLogo().then((L) => L && L.intro({ ...heroLayout(L), dur: 2.4 }));
      setTimeout(done, 300);
      return;
    }

    // first visit: 3D logo assembles inside the loader, then (home) flies into the hero
    const home = !!hero3d;
    introLock = true;
    document.body.classList.add("is-loading");
    if (home) document.body.classList.add("intro-3d");
    document.body.insertAdjacentHTML("afterbegin", `<div class="loader">
      ${home ? "" : '<canvas class="loader__3d" aria-hidden="true"></canvas>'}
      <div class="loader__mark">${mark()}</div>
      <div class="loader__word">${"ElmoTech".split("").map((c, i) => `<span class="${i > 3 ? "hl" : ""}">${c}</span>`).join("")}</div>
      <div class="loader__meta"><span>${S.brand.tagline}</span><span class="loader__count">000</span></div><div class="loader__bar"></div></div>`);
    const L = $(".loader"), o = { v: 0 };
    const count = () => ($(".loader__count").textContent = String(Math.round(o.v)).padStart(3, "0"));
    const logoP = home ? createHeroLogo() : (LOGO ? LOGO.create($(".loader__3d")).catch(() => null) : Promise.resolve(null));

    const intro = gsap.timeline()
      .fromTo(".loader__mark", { opacity: 0, scale: 0.6, rotateY: -90 }, { opacity: 1, scale: 1, rotateY: 0, duration: 1.1, ease: "expo.out" })
      .to(".loader__word span", { y: 0, duration: 1, ease: "expo.out", stagger: 0.05 }, 0.15)
      .to(o, { v: 72, duration: 1.4, ease: "power2.out", onUpdate: count }, 0)
      .to(".loader__bar", { scaleX: 0.72, duration: 1.4, ease: "power2.out" }, 0);

    Promise.all([intro.then(), Promise.race([logoP, timeout(6000)])]).then(([, logo]) => {
      const center = logo ? { x: 0, y: logo.visibleSize().h * 0.07, s: innerWidth < 600 ? 0.42 : 0.58 } : null;
      if (logo) {
        gsap.to(".loader__mark", { opacity: 0, scale: 1.5, duration: 0.6, ease: "expo.in" });
        logo.intro({ ...center, dur: 2.2 });
      }
      gsap.timeline({ delay: logo ? 1.7 : 0.4, onComplete: () => {
        L.remove(); document.body.classList.remove("is-loading", "intro-3d"); introLock = false;
        if (!home && logo) logo.dispose();
      } })
        .to(o, { v: 100, duration: 0.6, ease: "power2.inOut", onUpdate: count })
        .to(".loader__bar", { scaleX: 1, duration: 0.6, ease: "power2.inOut" }, 0)
        .to(".loader__word span", { y: "-110%", duration: 0.6, ease: "expo.in", stagger: 0.03 }, "+=0.05")
        .to(".loader__meta", { opacity: 0, duration: 0.4 }, "<")
        .add(() => { if (home && logo) logo.setLayout(heroLayout(logo), 1.6); })
        .to(L, { yPercent: -100, duration: 1.1, ease: "expo.inOut", onStart: () => setTimeout(done, 450) }, "-=0.25");
    });
  }

  /* ---------------- boot ---------------- */
  renderChrome();
  renderAll();
  initMenu();
  initForm();
  initHeroCanvas();

  if (!window.gsap || !window.ScrollTrigger) {
    // libraries failed to load: show everything statically
    document.documentElement.classList.remove("js");
    return;
  }
  gsap.registerPlugin(ScrollTrigger);
  if (window.Flip) gsap.registerPlugin(Flip);

  initFaq();
  initFilter();
  initSlider();
  initPointer();
  initLenis();
  initHeader();
  initMarquees();
  initToTop();
  prepare();

  // scroll-linked reveals are built once the loader / curtain has cleared
  initTransitions(() => {
    initScroll();
    introTweens.forEach((tw, i) => tw.delay(i * 0.12).play());
    ScrollTrigger.refresh();
  });
})();
