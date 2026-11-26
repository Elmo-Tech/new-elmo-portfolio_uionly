/* ElmoTech — site content extracted from https://www.elmotech.it/en (Nov 2026).
   Single source of truth for Phase 0 static pages. */
window.SITE = {
  brand: {
    name: "ElmoTech",
    legal: "ELMO TECH S.R.L.",
    vat: "P.IVA E CF 01851470193",
    tagline: "B2B Technology Consultancy",
    blurb: "Innovation and technology for companies looking to the future. We operate worldwide.",
  },
  nav: [
    { label: "Home", href: "index.html" },
    { label: "About", href: "about.html" },
    { label: "Services", href: "services.html" },
    { label: "Case Studies", href: "case-studies.html" },
    { label: "Products", href: "products.html" },
  ],
  contact: {
    emails: ["info@elmotech.it", "amminstrazione@elmotech.it"],
    phones: [
      { label: "(+39) 327 637 5197", tel: "+393276375197" },
      { label: "(+39) 0372 178 6572", tel: "+3903721786572" },
      { label: "(+20) 105 528 8423", tel: "+201055288423" },
    ],
    locations: [
      { name: "Cremona — HQ", city: "Italy", address: "Via Gazzoletto, 4C, 26100 Cremona CR" },
      { name: "Mansoura", city: "Egypt", address: "Elmatafi Street, Abraj Mall, Mansoura" },
    ],
    social: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/elmot3ch/" },
      { label: "Instagram", href: "https://www.instagram.com/elmot3ch/" },
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61557377544662" },
    ],
  },

  stats: {
    home: [
      { value: 150, suffix: "+", label: "Completed projects" },
      { value: 7, suffix: "+", label: "Years of experience" },
      { value: 2, suffix: "", label: "Offices · IT & EG" },
      { value: 24, suffix: "/7", label: "Elite support" },
    ],
    about: [
      { value: 7, suffix: "+", label: "Years of experience" },
      { value: 69, suffix: "+", label: "Completed projects" },
      { value: 98, suffix: "%", label: "Customer success" },
      { value: 53, suffix: "", label: "Clients" },
    ],
  },

  services: [
    {
      slug: "web-applications", n: "01", title: "Web Applications", icon: "web",
      short: "Modern, responsive and scalable web applications built with the most advanced technologies.",
      eyebrow: "Enterprise Solutions", h1: ["Custom", "Web Applications"],
      lead: "Scalability, security and performance at the center of your business. We transform complex visions into high-performance digital ecosystems.",
      hero: "https://oqowbzzozrpvutnjrjqf.supabase.co/storage/v1/object/public/services/web-applications/hero/1776248293902-dyjfrrh.png",
      features: [
        ["Cloud-Native", "Architectures designed to maximize efficiency and availability on scalable cloud infrastructures."],
        ["Microservices", "Modular development ensuring simplified maintenance and independent deployments for each component."],
        ["Intuitive UI/UX", "User interfaces designed to minimize the learning curve and maximize productivity."],
        ["Advanced Security", "Enterprise security standards with end-to-end encryption and continuous vulnerability monitoring."],
      ],
      steps: [
        ["Analysis & Design", "We define technical and functional requirements through collaborative workshops to map every business process."],
        ["Agile Development", "Iterative coding with bi-weekly sprints, ensuring constant visibility on work progress."],
        ["Validation & Launch", "Rigorous performance and security testing before final production deployment and team training."],
      ],
      caseStudy: { kicker: "Case study · Elaborazioni SRL — Italy", title: "Intelligent Management System for Accounting Firms", text: "Optimization of invoicing, bank collections and productivity.",
        img: "https://oqowbzzozrpvutnjrjqf.supabase.co/storage/v1/object/public/services/web-applications/case-study/1776249462889-zwfulx9.png" },
    },
    {
      slug: "website-ecommerce", n: "02", title: "Website & E-Commerce", icon: "cart",
      short: "Custom websites and e-commerce platforms that convert visitors into loyal customers.",
      eyebrow: "Digital Storefront & Online Sales", h1: ["Custom Websites", "& E-Commerce"],
      lead: "From a premium showcase site to a full-featured online store — stunning design, blazing performance and maximum conversion. Every pixel is crafted to turn visitors into buyers.",
      hero: "https://oqowbzzozrpvutnjrjqf.supabase.co/storage/v1/object/public/services/website-ecommerce/hero/1776265595293-je2n696.png",
      features: [
        ["SEO & Performance", "Core Web Vitals optimisation, ultra-fast load times and technical SEO structure to dominate search engines."],
        ["Ready Integrations", "One-click connection to CRM, ERP, email marketing platforms, analytics and payment gateways."],
        ["Premium Design", "Tailored UI/UX with a strong visual identity, smooth animations and layouts optimised to maximise engagement."],
        ["Advanced E-Commerce", "Product catalogue, cart, secure payments (Stripe, PayPal), order management and integrated admin dashboard."],
      ],
      steps: [
        ["Design & Brand", "We define the visual identity, page structure and user flows before writing a single line of code."],
        ["Development & Content", "Front-end and back-end development with content integration, product catalogue and sales logic."],
        ["Launch & Growth", "Deploy, SEO configuration, performance testing and ongoing support to grow your sales."],
      ],
    },
    {
      slug: "mobile-development", n: "03", title: "Mobile Development", icon: "phone",
      short: "Native and cross-platform apps delivering an impeccable experience on every device.",
      eyebrow: "Next-Generation Mobile Apps", h1: ["iOS & Android", "Mobile Apps"],
      lead: "iOS and Android apps that combine native performance with cross-platform flexibility, ensuring a smooth and engaging user experience.",
      hero: "https://oqowbzzozrpvutnjrjqf.supabase.co/storage/v1/object/public/services/mobile-development/hero/1776266444091-cdz5rzu.png",
      features: [
        ["Cross-Platform", "A single codebase for iOS and Android with React Native or Flutter, reducing costs without sacrificing quality."],
        ["Native Performance", "Advanced optimization for smooth animations, fast startup and reduced energy consumption."],
        ["Offline First", "Architecture designed to work even without a connection, syncing data when available."],
        ["Push & Analytics", "Intelligent push notifications and integrated analytics to monitor user behavior in real time."],
      ],
      steps: [
        ["UX Research & Wireframing", "We analyze the target and design optimal user flows before writing a single line of code."],
        ["Development & Testing", "Iterative development with testing on real devices and simulators across all models."],
        ["Publishing & Support", "Complete App Store and Google Play publishing, with ongoing post-launch support."],
      ],
      caseStudy: { kicker: "An example of our work", title: "FoodFlow: Delivery App with 50k+ Active Users", text: "A scalable food delivery app handling thousands of simultaneous orders with latency under 200ms." },
    },
    {
      slug: "cloud-architecture", n: "04", title: "Cloud Architecture", icon: "cloud",
      short: "Secure, optimized and highly available cloud infrastructures — 99.9% uptime.",
      eyebrow: "Scalable Cloud Infrastructures", h1: ["Cloud Architecture", "& DevOps"],
      lead: "Resilient and cost-efficient cloud architectures that grow with your business, guaranteeing 99.9% uptime and enterprise security.",
      hero: "https://oqowbzzozrpvutnjrjqf.supabase.co/storage/v1/object/public/services/cloud-architecture/hero/1776264611962-ywy2t2i.webp",
      features: [
        ["Multi-Cloud", "Multi-cloud strategies to avoid vendor lock-in and optimize costs and performance on AWS, GCP and Azure."],
        ["High Availability", "Fault-tolerant architectures with automatic failover and disaster recovery for operational continuity."],
        ["DevOps & CI/CD", "Automated deployment pipelines with Docker, Kubernetes and GitOps for fast and secure releases."],
        ["Cost Optimization", "Continuous monitoring and optimization of cloud resources to reduce operational costs by up to 40%."],
      ],
      steps: [
        ["Cloud Assessment", "Analysis of existing infrastructure and definition of migration or cloud optimization strategy."],
        ["Architecture & Migration", "Target architecture design and gradual migration with zero downtime for critical services."],
        ["Monitoring & Optimization", "Advanced monitoring, alerting and continuous performance and cost optimization."],
      ],
    },
    {
      slug: "automazione-industriale", n: "05", title: "Industrial Automation", icon: "gear",
      short: "Software that optimizes production processes and integrates IoT systems.",
      eyebrow: "Industry 4.0", h1: ["Industrial Automation", "& IoT"],
      lead: "We integrate IoT systems, PLCs and management software to create smart factories that optimize production and reduce waste.",
      features: [
        ["IoT Integration", "Sensors, machinery and SCADA systems connected in a single centralized monitoring platform."],
        ["Digital Twin", "Digital replicas of production processes to simulate scenarios and optimize before implementation."],
        ["Real-time Dashboard", "Real-time visualization of production KPIs, OEE and anomalies with automatic alerting."],
        ["Predictive Maintenance", "Machine learning to predict failures and plan maintenance, reducing machine downtime."],
      ],
      steps: [
        ["Process Analysis", "Detailed mapping of production flows and identification of optimization and automation points."],
        ["Integration & Development", "IoT connectors, dashboards and analysis algorithms tested in a controlled environment."],
        ["Go-Live & Training", "Gradual production deployment with technical staff training and ongoing support."],
      ],
      caseStudy: { kicker: "An example of our work", title: "ManufactPro: +35% Production Efficiency with IoT", text: "An IoT platform for a manufacturing company, increasing OEE by 35% in 6 months." },
    },
    {
      slug: "consulenza-it", n: "06", title: "IT Consulting", icon: "compass",
      short: "Strategic analysis aligning your technology infrastructure with business objectives.",
      eyebrow: "Technology Strategy", h1: ["Strategic", "IT Consulting"],
      lead: "We support decision makers in defining clear technology roadmaps, reducing technical debt and maximizing ROI on IT investments.",
      features: [
        ["IT Strategy", "Multi-year technology roadmaps aligned with business objectives and available budget."],
        ["Tech Due Diligence", "In-depth evaluation of architectures and codebases for M&A, investments or restructuring."],
        ["Digital Transformation", "Guidance through the transformation journey with change management and team training."],
        ["Vendor Selection", "Comparative analysis and selection of the most suitable technology vendors for your needs."],
      ],
      steps: [
        ["Discovery & Assessment", "Analysis of the current IT state, stakeholder interviews and identification of critical issues."],
        ["Strategy & Roadmap", "Intervention priorities, cost-benefit estimation and construction of the executive roadmap."],
        ["Execution Support", "Implementation support with project governance and monitoring of defined KPIs."],
      ],
      caseStudy: { kicker: "An example of our work", title: "RetailGroup: IT Roadmap that Reduced Technical Debt by 70%", text: "How we helped a retail chain modernize its stack with a structured three-year plan." },
    },
    {
      slug: "sicurezza-it", n: "07", title: "IT Security", icon: "shield",
      short: "Advanced protection of data and infrastructure against threats and vulnerabilities.",
      eyebrow: "Enterprise Cybersecurity", h1: ["IT Security &", "Data Protection"],
      lead: "Proactive security solutions: from penetration testing to GDPR compliance, to continuous threat monitoring.",
      features: [
        ["Penetration Testing", "Real attack simulations to identify vulnerabilities before malicious actors do."],
        ["SOC & Monitoring", "Security Operations Center with 24/7 monitoring and real-time incident response."],
        ["GDPR Compliance", "Full support for GDPR and sector regulations with audits and documentation."],
        ["Security Training", "Staff training to reduce the risk of social engineering and phishing attacks."],
      ],
      steps: [
        ["Security Assessment", "Complete analysis of security posture with vulnerability scan and risk assessment."],
        ["Defense Implementation", "Layered security: firewall, SIEM, EDR and advanced authentication systems."],
        ["Continuous Monitoring", "Proactive threat monitoring, incident response and continuous defense updates."],
      ],
      caseStudy: { kicker: "An example of our work", title: "FinanceSecure: Zero Breach in 3 Years with Dedicated SOC", text: "A complete SOC for a financial institution — zero security incidents in 36 months." },
    },
  ],

  process: [
    ["Scope & Strategy", "We analyze your goals to define a clear, success-oriented technology roadmap."],
    ["Architecture & Integrity", "We design the technical structure ensuring security, scalability and data integrity from day one."],
    ["Iterative Development", "We build the product through agile cycles, ensuring constant transparency and feedback."],
    ["Launch & Optimization", "Post-launch monitoring and continuous improvement based on real usage metrics."],
  ],

  tech: [
    ["Next.js", "1776252830377-3as7xzf.webp"], ["Laravel", "1776252431567-hveggsd.png"],
    ["TypeScript", "1775975493607-nvmv3sw.png"], ["React.js", "1775975481497-fce99n2.png"],
    ["PHP", "1775975468519-gu5tjvv.png"], [".NET Core", "1775975460430-zo2w4z8.png"],
    ["MySQL", "1775975438004-yg1mxjx.png"], ["JavaScript", "1775975384181-kdfgio3.png"],
    ["Flutter", "1775975265363-l7nnwfu.png"], ["Figma", "1775975252315-vidkp71.png"],
    ["Docker", "1775975228760-kv4tvxz.png"], ["C#", "1775975180058-yl6mzlb.png"],
    ["Blazor", "1775975102924-qavd6vg.png"],
  ].map(([name, f]) => ({ name, logo: "https://oqowbzzozrpvutnjrjqf.supabase.co/storage/v1/object/public/tools/" + f })),

  categories: ["All", "Web Apps", "Mobile Apps", "AI", "Automation"],

  projects: [
    ["Accountant System", "Web Apps", 2025, "+95%", "1775726986783-0i0esaa.jpeg", "A complete financial management system for your business: a 360° view of your customers, automated sales and marketing, and customer service managed with unprecedented efficiency.", true],
    ["Maintenance Management System", "Web Apps", 2025, "+80%", "1776254877585-q60patd.png", "Scalable platform for an Italian belt manufacturer — HR, CRM, fleet & documents, QR-driven asset tracking, and a multi-database tenancy core with advanced RBAC.", true],
    ["Elmo Space", "Web Apps", 2025, "+90%", "1775726848317-5b26hj2.jpeg", "React dashboard for PlayStation gaming lounges: session tracking, daily operations, finances, time management and full business analytics.", true],
    ["LMS System", "Web Apps", 2026, "+98%", "1775726660068-k0z3s19.jpeg", "An advanced learning platform turning traditional education into an interactive, flexible digital experience for universities, training centers and companies."],
    ["Mostaed System", "Web Apps", 2026, "+89%", "1775726205186-fktm0ly.jpeg", "An integrated B2B environment giving contractors everything they need in supplies, logistics and general contracting."],
    ["ERP System", "Web Apps", 2024, "+80%", "1775726006447-k26jkw8.webp", "Unify company operations: manage resources, automate routine tasks across departments and cut costs from one control panel."],
    ["CRM System", "Web Apps", 2025, "+85%", "1775725614559-gnbbd0j.png", "The growth engine for your company: a 360° customer view, automated sales and marketing, and effective customer service."],
    ["Booking", "Web Apps", 2025, "+92%", "1775724974646-rrues2h.jpeg", "Centralized control of appointments, events and travel bookings — every detail in one organized place."],
    ["Simple E-Commerce", "Web Apps", 2024, "+80%", "1775724817293-5zg27wc.png", "A native e-commerce CMS to manage products, orders, customers, payments and content from an intuitive dashboard."],
    ["Client Maintenance", "Mobile Apps", 2022, "+85%", "1775723585856-56wo8gp.png", "Smart routine and emergency maintenance management with real-time tracking, task assignment and performance reports."],
    ["Maintenance Manager", "Mobile Apps", 2025, "+85%", "1775723258543-o1z5a76.png", "Organize routine and emergency maintenance with case tracking, task assignment and accurate performance reporting."],
    ["Network App", "Mobile Apps", 2025, "+80%", "1775723129781-u8upe3s.png", "All-in-one digital infrastructure management combining network security with flexible collaborative workspaces."],
    ["AI Voice Call", "AI", 2025, "+80%", "1775726110247-r8et1cv.webp", "Crystal-clear AI-powered voice calls with audio enhancement, real-time translation and text-to-speech.", true],
    ["Sketch to Render", "Automation", 2025, "+95%", "1775727089165-5ucmhch.jpeg", "AI that turns simple sketches into realistic renders and presentation videos, cutting production time.", true],
    ["AI Strategy Decoder", "Automation", 2026, "+85%", "1775731794475-5xfvp2o.jpeg", "AI marketing workflow that analyzes branding and competitors and generates a complete social media content strategy."],
    ["UGC Video Generation", "Automation", 2026, "+85%", "1775731903800-p1uznsf.jpeg", "n8n workflow generating authentic UGC-style video ads for e-commerce products from a single image."],
    ["WhatsApp Automation", "Automation", 2026, "+80%", "1775731944668-8nyfjfy.jpeg", "WhatsApp Business API setup with Meta tools, webhooks (n8n) and automated messaging integrations."],
  ].map(([title, cat, year, gain, img, text, featured]) => ({
    title, cat, year, gain, text, featured: !!featured,
    img: "https://oqowbzzozrpvutnjrjqf.supabase.co/storage/v1/object/public/projects-images/" + img,
  })),

  testimonials: [
    ["ElmoTech completely transformed our digital presence. Their team is professional, responsive, and delivers exceptional results.", "Ahmed Hassan", "CEO, TechSolutions Inc."],
    ["Working with ElmoTech was a pleasure from start to finish. They understood our vision and exceeded our expectations.", "Fatima Mahmoud", "Marketing Director, Creative Agency"],
    ["The website ElmoTech built for us is not only beautiful but highly functional and easy to use. Our conversion rates rose dramatically.", "Omar Khalid", "Founder, E-commerce Company"],
    ["ElmoTech's attention to detail and commitment to quality is unmatched. They delivered on time and on budget.", "Layla Ibrahim", "Product Manager, Enterprise Solutions"],
    ["From strategy to execution, ElmoTech guided us through every step of our digital transformation. Highly recommended!", "Youssef Ali", "CTO, Financial Services"],
  ].map(([quote, name, role]) => ({ quote, name, role })),

  values: [
    ["Transparency", "We eliminate technological black boxes. Every decision is documented and shared, ensuring a partnership built on absolute trust."],
    ["Excellence", "“Good enough” does not exist in our vocabulary. We pursue formal and functional perfection in every line of code."],
    ["Collaboration", "We are not mere suppliers, but an extension of your team. Your goals become our daily obsession."],
    ["Quality", "High-quality software that meets our customers' needs and is free of errors and bugs."],
    ["Integrity", "We operate with honesty, transparency and integrity in all our dealings with customers and partners."],
  ],

  faq: [
    ["Do you offer remote consulting?", "Absolutely. We operate in hybrid mode, combining physical presence at your location with collaborative remote sessions through next-generation platforms."],
    ["What are the average response times?", "Our dedicated team guarantees a response within 24 business hours for every request received via the contact form or email."],
    ["How does the first introductory meeting work?", "The first meeting is a free 45-minute strategic session where we analyze your technology challenges and define a preliminary digital transformation roadmap."],
  ],
};
