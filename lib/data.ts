// Comprehensive data store for Startuplize Elite Creative Agency

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  category: string;
  badge: string;
  valueProp: string;
  heroHeadline: string;
  heroSubtitle: string;
  description: string;
  metrics: string;
  problemStatement: string[];
  solutionStatement: string[];
  deliverables: string[];
  timeline: { step: string; title: string; desc: string; duration: string }[];
  techStack: string[];
  caseStudies: {
    title: string;
    client: string;
    result: string;
    image: string;
    category: string;
  }[];
  testimonials: {
    name: string;
    role: string;
    company: string;
    quote: string;
    rating: number;
    avatar: string;
  }[];
}

export const SERVICES: ServiceDetail[] = [
  {
    id: "webflow",
    slug: "webflow",
    title: "Webflow & 3D Interactive Web",
    category: "Development & Motion",
    badge: "Most Popular",
    valueProp: "Awwwards-Level 3D Webflow Architecture Built For Venture-Backed Tech",
    heroHeadline: "Convert Visitors Into Category Evangelists With Bespoke Webflow Systems",
    heroSubtitle: "We engineer visual prestige with fluid GSAP micro-animations, Spline/Three.js 3D shaders, and high-conversion CMS structures that outrank competitors.",
    description: "Pixel-perfect Webflow development engineered for marketing autonomy, sub-second global load times, and effortless CMS scaling.",
    metrics: "+210% Pipeline Velocity",
    problemStatement: [
      "Clunky bloated themes crashing under traffic spikes",
      "Marketing teams trapped waiting weeks for engineering changes",
      "Generic template aesthetic that fails to impress tier-1 investors"
    ],
    solutionStatement: [
      "Client-First Webflow architecture with modular component systems",
      "Fully decoupled CMS workflows letting marketing launch landing pages in minutes",
      "Custom WebGL & GSAP kinetic animations delivering an undeniable category leader feel"
    ],
    deliverables: [
      "Client-First Clean Webflow Architecture",
      "Custom Three.js / Spline 3D Shaders",
      "Dynamic CMS & Scalable Database Modeling",
      "Advanced GSAP & ScrollTrigger Choreography",
      "Enterprise Form Validation & CRM Webhooks",
      "Sub-Second Lighthouse Speed Optimization"
    ],
    timeline: [
      { step: "01", title: "Information Architecture & Wireframes", desc: "User journey mapping and high-converting page wireframing.", duration: "Week 1" },
      { step: "02", title: "High-Fidelity 3D & UI Art Direction", desc: "Bespoke typography, interactive states, and 3D visual styling in Figma.", duration: "Week 2" },
      { step: "03", title: "Webflow Development & Animation Sprint", desc: "Production build, custom JavaScript shaders, and CMS integration.", duration: "Week 3" },
      { step: "04", title: "QA, Lighthouse Audit & Global Launch", desc: "Rigorous cross-device testing, SEO checks, and live domain cutover.", duration: "Week 4" }
    ],
    techStack: ["Webflow", "GSAP 3", "Three.js", "Spline", "Relume", "Figma", "Cloudflare"],
    caseStudies: [
      {
        title: "SaaS Platform Rebrand & Interactive 3D Webflow Engine",
        client: "Lumina Wealth",
        result: "+184% Conversion Lift",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        category: "Fintech Webflow"
      },
      {
        title: "AI Operating System Flagship Experience",
        client: "Cognitive Labs",
        result: "$24M Series A Inbound",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        category: "AI SaaS"
      }
    ],
    testimonials: [
      {
        name: "Alex V.",
        role: "Head of Marketing",
        company: "Lumina Wealth",
        quote: "Startuplize built our Webflow site in 3 weeks. It legitimately won Site of the Day and increased our demo booking rate by 184%.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
      },
      {
        name: "Devon Reed",
        role: "Co-Founder",
        company: "Cognitive Labs",
        quote: "The 3D interactions and mobile responsiveness blew our investors away. Truly an elite tier agency.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
      }
    ]
  },
  {
    id: "wordpress",
    slug: "wordpress",
    title: "WordPress & Headless Next.js",
    category: "Full-Stack Engineering",
    badge: "Enterprise SLA",
    valueProp: "Decoupled Next.js Speed Paired With The World's Most Flexible Content CMS",
    heroHeadline: "Enterprise WordPress Architecture Engineered For 0.5s Load Speeds",
    heroSubtitle: "Scale editorial teams without sacrificing frontend performance. Headless Next.js App Router frontends backed by secure, hardened WordPress GraphQL.",
    description: "Custom themes, decoupled Headless Next.js setups, and enterprise security for high-volume publishing and e-commerce platforms.",
    metrics: "0.5s Global LCP",
    problemStatement: [
      "Traditional WP monoliths loaded with 45+ plugins dragging speeds down",
      "Vulnerability exposure and constant database security risks",
      "Poor developer experience when customizing complex interactive layouts"
    ],
    solutionStatement: [
      "Decoupled React / Next.js static site generation on Vercel Edge",
      "Hardened headless WordPress backend acting purely as a REST/GraphQL API",
      "100/100 Core Web Vitals with automatic image optimization and CDN edge caching"
    ],
    deliverables: [
      "Next.js App Router Headless Frontend",
      "WP GraphQL Custom Schema Integration",
      "ACF Pro Dynamic Blocks & Editor UI",
      "Automated Staging & CI/CD Pipelines",
      "Enterprise Database Security & Cache Layers",
      "Algolia / Meilisearch Instant Site Search"
    ],
    timeline: [
      { step: "01", title: "API & Data Schema Architecture", desc: "Setting up custom post types, taxonomy relations, and GraphQL queries.", duration: "Week 1" },
      { step: "02", title: "Next.js UI & Dynamic Page Templates", desc: "Building isomorphic React components with Tailwind CSS.", duration: "Week 2-3" },
      { step: "03", title: "Editorial Workflows & ACF Blocks", desc: "Configuring intuitive Gutenberg block modules for non-technical writers.", duration: "Week 4" },
      { step: "04", title: "Stress Testing & Global Edge Deploy", desc: "Load testing against 50k concurrent requests and SSL hardening.", duration: "Week 5" }
    ],
    techStack: ["Next.js 14", "WordPress VIP", "WPGraphQL", "TypeScript", "Vercel", "Tailwind CSS", "Redis"],
    caseStudies: [
      {
        title: "Decoupled News Media Platform with 3M Monthly Readers",
        client: "Chronicle Daily",
        result: "99.99% Uptime on Black Friday",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80",
        category: "Headless Media"
      }
    ],
    testimonials: [
      {
        name: "Samantha Wright",
        role: "VP of Engineering",
        company: "Chronicle Daily",
        quote: "Our authors get the familiar WordPress admin while our visitors get instant 400ms page transitions via Next.js. Outstanding execution.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
      }
    ]
  },
  {
    id: "wix",
    slug: "wix",
    title: "Wix Studio Modern Setup",
    category: "Rapid Agile Web",
    badge: "Speed to Market",
    valueProp: "Next-Gen Wix Studio Builds With Custom CSS & High Velocity Turnarounds",
    heroHeadline: "Boutique Creative Visuals & High-Speed Launch Cycles on Wix Studio",
    heroSubtitle: "Break free from basic templates. We utilize Wix Studio's advanced responsive grid, custom Velo code, and fluid CSS animations for rapid go-to-market execution.",
    description: "Advanced Wix Studio responsive architectures crafted with precision breakpoints, custom interactions, and native client handoff.",
    metrics: "10-Day Launch Sprint",
    problemStatement: [
      "Cookie-cutter DIY Wix sites that look amateurish on mobile viewports",
      "Broken layouts across intermediate tablet and ultra-wide screens",
      "Slow load times due to unoptimized assets and third-party widgets"
    ],
    solutionStatement: [
      "Custom proportional CSS scaling (px, %, vw) on Wix Studio's advanced canvas",
      "Velo JavaScript integrations for custom databases, filters, and dynamic calculators",
      "Full client training and ownership transfer with zero technical debt"
    ],
    deliverables: [
      "Custom Wix Studio Breakpoint Architecture",
      "Fluid Proportional Typography & Spacing",
      "Velo JavaScript Logic & External API Webhooks",
      "Custom E-Commerce & Booking Engine Configuration",
      "Technical On-Page SEO Foundations",
      "1-on-1 Video Training Library"
    ],
    timeline: [
      { step: "01", title: "Creative Concept & Grid Planning", desc: "Design system tokens and responsive canvas setup.", duration: "Days 1-3" },
      { step: "02", title: "Studio Construction & Velo Code", desc: "Layout development with dynamic data collections.", duration: "Days 4-7" },
      { step: "03", title: "Mobile Polish & Domain Cutover", desc: "Breakpoint verification and client handover.", duration: "Days 8-10" }
    ],
    techStack: ["Wix Studio", "Velo JS", "Figma", "Google Tag Manager", "Zapier"],
    caseStudies: [
      {
        title: "Boutique Hospitality & Luxury Real Estate Portal",
        client: "Vela Estates",
        result: "+320% Private Tour Inquiries",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        category: "Luxury Real Estate"
      }
    ],
    testimonials: [
      {
        name: "Marcus Sterling",
        role: "Managing Principal",
        company: "Vela Estates",
        quote: "We needed a luxury website in under 2 weeks. Startuplize exceeded all expectations with custom Wix Studio animations.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
      }
    ]
  },
  {
    id: "seo",
    slug: "seo",
    title: "Data-Driven Technical SEO",
    category: "Organic Domination",
    badge: "High Intent ROI",
    valueProp: "Programmatic Keyword Architecture & Technical Authority That Outranks Competitors",
    heroHeadline: "Claim #1 Rankings On Google For High-Buyer-Intent Search Terms",
    heroSubtitle: "We engineer semantic search structures, programmatic landing page clusters, schema markups, and backlink authority that drive compounding high-intent organic ARR.",
    description: "Deep technical audits, programmatic SEO cluster architecture, Core Web Vitals optimization, and high-authority editorial outreach.",
    metrics: "+340% Organic Traffic",
    problemStatement: [
      "Spending thousands on generic blog posts that rank on page 4",
      "Technical crawler errors, broken indexation, and slow rendering blocking Googlebot",
      "Keyword cannibalization and zero commercial buyer-intent targeting"
    ],
    solutionStatement: [
      "Programmatic SEO architecture capturing thousands of long-tail high-conversion queries",
      "Flawless JSON-LD schema markup, canonicalization, and Core Web Vitals compliance",
      "High-authority digital PR link campaigns placed on tier-1 tech publications"
    ],
    deliverables: [
      "Full Technical Crawler & Log File Audit",
      "Commercial Intent Keyword Universe & Mapping",
      "Programmatic CMS Landing Page Engine",
      "Schema.org Structured Data Implementation",
      "Competitor Backlink Intersect & Link Building",
      "Real-Time GA4 & Search Console Dashboard"
    ],
    timeline: [
      { step: "01", title: "Technical Forensics & Site Audit", desc: "Indexation fixes, speed bottlenecks, and schema deployment.", duration: "Month 1" },
      { step: "02", title: "Keyword Clustering & Content Engine", desc: "Producing and launching 20+ commercial intent landing pages.", duration: "Month 2" },
      { step: "03", title: "Digital PR & Authority Acquisition", desc: "Securing tier-1 editorial backlinks to target commercial URLs.", duration: "Month 3" },
      { step: "04", title: "Rank Tracking & Conversion Optimization", desc: "Fine-tuning title tags and CRO elements for peak pipeline capture.", duration: "Ongoing" }
    ],
    techStack: ["Ahrefs", "SEMrush", "Screaming Frog", "Google Search Console", "SurferSEO", "Next.js Static"],
    caseStudies: [
      {
        title: "B2B SaaS Organic Scaling: $0 to $1.2M ARR in 9 Months",
        client: "CloudPulse",
        result: "+420% Organic Inbound Demos",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        category: "B2B SaaS SEO"
      }
    ],
    testimonials: [
      {
        name: "Elena Rostova",
        role: "Chief Growth Officer",
        company: "CloudPulse",
        quote: "Their programmatic SEO playbook took us from page 5 to position #1 for our most valuable 12 keywords.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
      }
    ]
  },
  {
    id: "branding",
    slug: "branding",
    title: "Brand Identity & Visual Systems",
    category: "Creative Direction",
    badge: "Iconic Design",
    valueProp: "Visionary Art Direction & Complete Visual Systems For Next-Decade Leaders",
    heroHeadline: "Craft An Irresistible Brand Identity That Commands Premium Pricing",
    heroSubtitle: "We design distinctive brand marks, typography systems, bespoke 3D iconography, packaging, and digital style guides that captivate audiences and inspire cult loyalty.",
    description: "End-to-end corporate identity design, design system documentation, vector art, color psychology, and brand storytelling.",
    metrics: "100% Trademark Ready",
    problemStatement: [
      "Inconsistent visual assets across social, web, and pitch decks",
      "Generic template logo that looks indistinguishable from budget competitors",
      "Lack of cohesive design system causing slow marketing asset creation"
    ],
    solutionStatement: [
      "Deep brand strategy discovering your unique category wedge and visual voice",
      "Comprehensive multi-platform design kit (Figma tokens, typography, 3D brand assets)",
      "Strict brand guidelines ensuring total visual consistency across every customer touchpoint"
    ],
    deliverables: [
      "Primary Logo Mark, Monogram & Wordmark",
      "Curated Typography System & Licensing",
      "Harmonious Color Palette & Dark/Light Mode Tokens",
      "Custom 3D Iconography & Graphic Assets",
      "Brand Guidelines Book (100+ Page PDF & Figma)",
      "Pitch Deck & Social Media Master Templates"
    ],
    timeline: [
      { step: "01", title: "Brand Discovery & Competitive Positioning", desc: "Analyzing category landscape and defining core visual attributes.", duration: "Week 1" },
      { step: "02", title: "3 Distinct Creative Direction Routes", desc: "Presenting fully fleshed-out concept boards with logos in context.", duration: "Week 2" },
      { step: "03", title: "Refinement & Asset Production", desc: "Polishing vector curves, creating 3D icons and typography tokens.", duration: "Week 3" },
      { step: "04", title: "Guidelines & Master Deliverable Kit", desc: "Exporting all formats (SVG, EPS, PNG, Figma Library) and style manual.", duration: "Week 4" }
    ],
    techStack: ["Figma", "Adobe Illustrator", "Cinema 4D", "Glyphs", "Midjourney Pro", "After Effects"],
    caseStudies: [
      {
        title: "Complete Visual Identity & Rebrand for Global Web3 Protocol",
        client: "Aura Protocol",
        result: "$60M Token Valuation Surge",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
        category: "Web3 Brand"
      }
    ],
    testimonials: [
      {
        name: "Julian Vance",
        role: "Founder",
        company: "Aura Protocol",
        quote: "Startuplize created a brand identity so striking that our community printed our logo on merch within 48 hours.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
      }
    ]
  },
  {
    id: "meta-ads",
    slug: "meta-ads",
    title: "Meta Ads & Paid Social Funnels",
    category: "Paid Acquisition",
    badge: "Direct Response",
    valueProp: "High-Velocity Creative Testing & Advantage+ Funnels That Scale Profitably",
    heroHeadline: "Scale Meta Ads Profitably With Direct-Response Creative & Micro-Funnels",
    heroSubtitle: "Stop burning ad budget on low-converting static images. We combine cinema-quality 3D video ads, UGC hooks, and dedicated pre-sell landing pages to crush target CPA.",
    description: "Paid social strategy, creative production, Advantage+ audience configuration, and relentless A/B testing on Meta.",
    metrics: "4.8x Average ROAS",
    problemStatement: [
      "Ad fatigue killing performance after 10 days of scaling",
      "Sending paid traffic to a generic homepage resulting in 85% bounce rates",
      "Unreliable tracking post-iOS14 causing blind ad spend decisions"
    ],
    solutionStatement: [
      "Continuous creative iteration pipeline producing 15+ new video hooks monthly",
      "Bespoke pre-sell listicles and advertorial landing pages that prime buyers",
      "Server-side Conversions API (CAPI) and Triple Whale attribution modeling"
    ],
    deliverables: [
      "15+ High-Hook Video Ads & Motion Creatives Monthly",
      "Dedicated High-Conversion Listicles & Advertorials",
      "Meta Advantage+ Shopping & Lead Campaign Architecture",
      "Server-Side Conversions API (CAPI) Setup",
      "Rapid Creative Testing Matrix (Hooks, Formats, CTAs)",
      "Daily Slack Performance Updates & Live KPI Dashboard"
    ],
    timeline: [
      { step: "01", title: "Customer Research & Angle Ideation", desc: "Uncovering deep customer pain points and drafting 20+ viral hook concepts.", duration: "Week 1" },
      { step: "02", title: "Creative Production & Landing Page Build", desc: "Filming, 3D animating, editing, and coding pre-sell landers.", duration: "Week 2" },
      { step: "03", title: "Sandbox Testing & Validation", desc: "Running low-budget creative test batches to identify winning combinations.", duration: "Week 3" },
      { step: "04", title: "Aggressive Scaling & Retention Funnels", desc: "Scaling budget 20% daily on validated winning ads with retargeting.", duration: "Ongoing" }
    ],
    techStack: ["Meta Ads Manager", "Triple Whale", "After Effects", "Premiere Pro", "Elevar CAPI", "Webflow"],
    caseStudies: [
      {
        title: "Scaling DTC Tech Brand from $50k to $650k/mo with Meta Ads",
        client: "Nova Earwear",
        result: "5.2x Blended MER",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
        category: "DTC Paid Social"
      }
    ],
    testimonials: [
      {
        name: "Chloe Dupont",
        role: "Chief Marketing Officer",
        company: "Nova Earwear",
        quote: "The combination of their cinema-quality 3D ads and dedicated pre-sell landing pages halved our customer acquisition cost.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
      }
    ]
  },
  {
    id: "google-ads",
    slug: "google-ads",
    title: "Google Ads & Performance Max",
    category: "High-Intent Capture",
    badge: "Scale Machine",
    valueProp: "Surgical Search Intent & Performance Max Campaigns That Capture Inbound Demand",
    heroHeadline: "Dominate Google Search When Your Highest-Value Customers Are Buying",
    heroSubtitle: "We build tightly-themed ad groups, high-converting comparison landers, and machine-learning Performance Max asset groups that lock in high-ticket enterprise contracts.",
    description: "Google Search, YouTube Video Action, Display remarketing, and Performance Max campaigns managed with algorithmic discipline.",
    metrics: "$14M+ Closed ARR",
    problemStatement: [
      "Wasting budget on broad match keywords that attract job seekers and free users",
      "Low Quality Scores causing inflated cost-per-click charges",
      "Lack of offline conversion tracking hiding which keywords actually lead to closed revenue"
    ],
    solutionStatement: [
      "Exact-match keyword fortresses with negative keyword lists updated weekly",
      "Dedicated landing pages tailored 1-to-1 to the search query for 10/10 Quality Scores",
      "CRM integration passing closed-won sales back to Google Ads algorithm"
    ],
    deliverables: [
      "Single-Theme Search Ad Group Architecture",
      "Performance Max Asset Creation & Video Feeds",
      "Dynamic Keyword Insertion Landing Pages",
      "Offline Conversion Tracking (HubSpot/Salesforce Sync)",
      "YouTube Video Discovery & In-Stream Campaigns",
      "Weekly Bid Adjustment & Search Term Negative Scrubbing"
    ],
    timeline: [
      { step: "01", title: "Search Term Forensic Audit & Negative Lists", desc: "Eliminating wasted ad spend and mapping commercial queries.", duration: "Week 1" },
      { step: "02", title: "Campaign Structure & Conversion Landing Pages", desc: "Setting up campaigns and tailored conversion funnels.", duration: "Week 2" },
      { step: "03", title: "Launch & Smart Bidding Calibration", desc: "Passing high-intent conversion signals to Google's smart bidder.", duration: "Week 3" },
      { step: "04", title: "Continuous ROAS Scaling & YouTube Expansion", desc: "Expanding into high-performing YouTube action campaigns.", duration: "Ongoing" }
    ],
    techStack: ["Google Ads", "Google Tag Manager", "HubSpot CRM", "Looker Studio", "BigQuery", "Unbounce"],
    caseStudies: [
      {
        title: "Enterprise Logistics Tech Inbound Domination",
        client: "Vanguard Freight",
        result: "+310% SQL Inbound at $48 CPA",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        category: "Enterprise Search"
      }
    ],
    testimonials: [
      {
        name: "David Kim",
        role: "VP of Growth",
        company: "Vanguard Freight",
        quote: "Startuplize restructured our Google Ads account from scratch. Our cost per qualified enterprise demo dropped by 64%.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
      }
    ]
  }
];

export const PORTFOLIO_PROJECTS = [
  // Web Development Category (8 items)
  {
    id: "lumina-wealth",
    title: "Lumina Wealth Management",
    category: "Web Development",
    client: "Lumina Capital Group",
    year: "2026",
    impact: "+184% Conversion Lift",
    description: "Interactive 3D Webflow flagship platform featuring custom Three.js shader physics and financial dashboard simulations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["Webflow", "Three.js", "GSAP", "Fintech"],
    liveUrl: "https://startuplize.com/works/lumina"
  },
  {
    id: "chronicle-daily",
    title: "Chronicle Daily News Portal",
    category: "Web Development",
    client: "Chronicle Global Media",
    year: "2026",
    impact: "0.4s Global Edge LCP",
    description: "Decoupled Headless WordPress and Next.js 14 publication handling 4M+ monthly visits with instant page routing.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js 14", "WordPress VIP", "WPGraphQL", "Edge"],
    liveUrl: "https://startuplize.com/works/chronicle"
  },
  {
    id: "vela-estates",
    title: "Vela Private Island Residences",
    category: "Web Development",
    client: "Vela Holdings",
    year: "2025",
    impact: "$85M Property Sold Out",
    description: "Ultra-luxury Wix Studio architectural presentation with custom Velo interactive masterplans and panoramic walkthroughs.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Wix Studio", "Velo JS", "Luxury Real Estate", "CRO"],
    liveUrl: "https://startuplize.com/works/vela"
  },
  {
    id: "neural-mesh",
    title: "NeuralMesh AI Infrastructure",
    category: "Web Development",
    client: "NeuralMesh Corp",
    year: "2025",
    impact: "Site of the Day Honors",
    description: "Kinetic dark-mode web experience for enterprise GPU clusters with interactive terminal and live node topology visualization.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    tags: ["Webflow", "WebGL", "GSAP 3", "AI Infrastructure"],
    liveUrl: "https://startuplize.com/works/neuralmesh"
  },
  {
    id: "solaris-energy",
    title: "Solaris Clean Energy Fleet",
    category: "Web Development",
    client: "Solaris Power Inc",
    year: "2025",
    impact: "+260% Fleet Quote Requests",
    description: "Interactive clean-tech configuration tool allowing industrial plant managers to simulate solar ROI in real time.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind CSS", "Next.js", "Interactive Tool"],
    liveUrl: "https://startuplize.com/works/solaris"
  },
  {
    id: "prism-analytics",
    title: "Prism Real-Time BI SaaS",
    category: "Web Development",
    client: "Prism Analytics",
    year: "2025",
    impact: "12,000 Free Trial Signups",
    description: "High-velocity product marketing site with interactive product sandbox and self-serve onboarding flow.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    tags: ["Webflow", "Memberstack", "Figma", "SaaS"],
    liveUrl: "https://startuplize.com/works/prism"
  },
  {
    id: "hyper-velocity",
    title: "HyperVelocity EV Supercars",
    category: "Web Development",
    client: "HyperVelocity Automotive",
    year: "2025",
    impact: "Pre-Orders Sold in 4 Minutes",
    description: "High-adrenaline 3D vehicle customizer built on WebGL shaders and smooth Lenis kinetic scrolling.",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
    tags: ["Three.js", "GSAP", "Next.js 14", "Automotive 3D"],
    liveUrl: "https://startuplize.com/works/hypervelocity"
  },
  {
    id: "zenith-health",
    title: "Zenith Longevity Clinics",
    category: "Web Development",
    client: "Zenith Health Group",
    year: "2025",
    impact: "+390% Consultation Bookings",
    description: "Clean medical aesthetics with HIPAA-compliant booking integration and biomarker dashboard previews.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Webflow", "Cal.com API", "HIPAA Ready", "Healthtech"],
    liveUrl: "https://startuplize.com/works/zenith"
  },

  // SEO Domination Category (8 items)
  {
    id: "cloudpulse-seo",
    title: "CloudPulse B2B SaaS Organic Surge",
    category: "SEO Domination",
    client: "CloudPulse Technologies",
    year: "2026",
    impact: "Rank #1 for 45 High-Intent Terms",
    description: "Programmatic SEO architecture generating 180+ commercial comparison pages that outranked Salesforce and Datadog.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tags: ["Programmatic SEO", "Technical Audit", "Schema", "B2B SaaS"],
    liveUrl: "https://startuplize.com/works/cloudpulse"
  },
  {
    id: "legal-shield-seo",
    title: "LegalShield Enterprise Compliance",
    category: "SEO Domination",
    client: "Shield Legal Group",
    year: "2025",
    impact: "+540% Organic Inbound Retainers",
    description: "Topic cluster dominance across 50 US states targeting high-ticket corporate compliance queries.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Local SEO", "Topic Clusters", "LegalTech", "Authority Links"],
    liveUrl: "https://startuplize.com/works/legalshield"
  },
  {
    id: "fintech-vault-seo",
    title: "FintechVault Crypto Custody",
    category: "SEO Domination",
    client: "Vault Technologies",
    year: "2025",
    impact: "0 to 250k Monthly Organic Visitors",
    description: "Deep semantic content hub and institutional research papers capturing global institutional crypto custody demand.",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1200&q=80",
    tags: ["Institutional SEO", "E-E-A-T", "Whitepapers", "Fintech"],
    liveUrl: "https://startuplize.com/works/fintechvault"
  },
  {
    id: "health-plus-seo",
    title: "HealthPlus Telemedicine Network",
    category: "SEO Domination",
    client: "HealthPlus Digital",
    year: "2025",
    impact: "1.2M Organic Patients Acquired",
    description: "Medical reviewer verification schema and symptom-to-treatment programmatic directory.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
    tags: ["Medical SEO", "Schema.org", "Core Web Vitals", "Telehealth"],
    liveUrl: "https://startuplize.com/works/healthplus"
  },
  {
    id: "saas-hub-seo",
    title: "SaaSHub Developer Tools Directory",
    category: "SEO Domination",
    client: "SaaSHub Media",
    year: "2025",
    impact: "3.4M Pageviews / Month",
    description: "High-speed Next.js static directory indexing 5,000+ API tools with automated crawler optimization.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js SSG", "Crawler Optimization", "Directories", "APIs"],
    liveUrl: "https://startuplize.com/works/saashub"
  },
  {
    id: "omni-commerce-seo",
    title: "OmniCommerce Multi-Brand D2C",
    category: "SEO Domination",
    client: "Omni Brands Inc",
    year: "2025",
    impact: "+220% Non-Brand Revenue",
    description: "Category taxonomy restructuring, rich product snippet fixes, and internal linking graph optimization.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    tags: ["E-Commerce SEO", "Shopify Plus", "Structured Data", "DTC"],
    liveUrl: "https://startuplize.com/works/omnicommerce"
  },
  {
    id: "edu-stream-seo",
    title: "EduStream University Courses",
    category: "SEO Domination",
    client: "EduStream Global",
    year: "2025",
    impact: "+480% Organic Course Enrollments",
    description: "Course syllabus schema, student review aggregations, and high-DA educational backlink acquisition.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    tags: ["Edu SEO", "Course Schema", "Digital PR", "EdTech"],
    liveUrl: "https://startuplize.com/works/edustream"
  },
  {
    id: "cyber-fort-seo",
    title: "CyberFort Zero Trust Defense",
    category: "SEO Domination",
    client: "CyberFort Security",
    year: "2025",
    impact: "$8.4M Direct Inbound Pipeline",
    description: "Threat report programmatic teardowns ranking for active zero-day vulnerability search terms.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    tags: ["Cybersecurity", "Zero Trust", "Threat Reports", "B2B Tech"],
    liveUrl: "https://startuplize.com/works/cyberfort"
  },

  // Brand Design Category (8 items)
  {
    id: "aura-protocol-branding",
    title: "Aura Decentralized Protocol",
    category: "Brand Design",
    client: "Aura Foundation",
    year: "2026",
    impact: "Cult Community Adoption",
    description: "Futuristic visual identity, custom geometric typeface, and dynamic 3D generative brand assets.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    tags: ["Brand Mark", "Type Design", "3D Art", "Web3"],
    liveUrl: "https://startuplize.com/works/auraprotocol"
  },
  {
    id: "monolith-capital",
    title: "Monolith Venture Partners",
    category: "Brand Design",
    client: "Monolith Capital",
    year: "2025",
    impact: "Closed $400M Fund III",
    description: "Minimalist brutalist identity, custom foil-pressed stationery, and bespoke digital LP portal styling.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    tags: ["Identity", "Editorial", "Typography", "Venture Capital"],
    liveUrl: "https://startuplize.com/works/monolith"
  },
  {
    id: "aeris-aviation",
    title: "Aeris Private Jet Charter",
    category: "Brand Design",
    client: "Aeris Global Wings",
    year: "2025",
    impact: "Recognized by Monocle Magazine",
    description: "Modern aviation livery, member concierge app interface, and bespoke metallic brand iconography.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
    tags: ["Luxury", "Aviation", "Packaging", "Livery"],
    liveUrl: "https://startuplize.com/works/aeris"
  },
  {
    id: "elysian-spirits",
    title: "Elysian Botanical Distilleries",
    category: "Brand Design",
    client: "Elysian Spirits Ltd",
    year: "2025",
    impact: "Red Dot Design Award Winner",
    description: "Custom glass bottle embossment, gold-embossed label architecture, and immersive sensory storytelling.",
    image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1200&q=80",
    tags: ["Packaging", "Bottle Design", "3D Render", "Spirits"],
    liveUrl: "https://startuplize.com/works/elysian"
  },
  {
    id: "kinetic-wear",
    title: "Kinetic Performance Apparel",
    category: "Brand Design",
    client: "Kinetic Lab",
    year: "2025",
    impact: "Worn by 40+ Olympic Athletes",
    description: "High-octane typographic motion system, activewear hangtag kits, and immersive pop-up retail guidelines.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    tags: ["Athletic", "Apparel", "Motion System", "Typography"],
    liveUrl: "https://startuplize.com/works/kinetic"
  },
  {
    id: "verve-coffee",
    title: "Verve Single-Origin Roasters",
    category: "Brand Design",
    client: "Verve Coffee Co",
    year: "2025",
    impact: "+180% Retail Distribution",
    description: "Eco-friendly compostable pouch packaging, flavor note chromatic wheels, and cafe visual merchandising.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
    tags: ["Packaging", "Illustration", "Retail", "Sustainable"],
    liveUrl: "https://startuplize.com/works/verve"
  },
  {
    id: "sol-resorts",
    title: "Sol Mediterranean Sanctuary",
    category: "Brand Design",
    client: "Sol Resorts International",
    year: "2025",
    impact: "100% Season Occupancy",
    description: "Sun-drenched Mediterranean color palette, bespoke terracotta signage, and luxury guest collateral.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    tags: ["Hospitality", "Wayfinding", "Editorial", "Resort"],
    liveUrl: "https://startuplize.com/works/sol"
  },
  {
    id: "quantum-audio",
    title: "Quantum Acoustic Monitors",
    category: "Brand Design",
    client: "Quantum Audio Lab",
    year: "2025",
    impact: "Acquired by Major Tech Giant",
    description: "Precision acoustic waveform patterns, matte-black unboxing packaging, and companion app design system.",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Hardware", "Industrial Design", "Design System", "Audio"],
    liveUrl: "https://startuplize.com/works/quantumaudio"
  },

  // Creative Ads Category (8 items)
  {
    id: "nova-earwear-ads",
    title: "Nova Earwear Meta Ad Blitz",
    category: "Creative Ads",
    client: "Nova Audio",
    year: "2026",
    impact: "$650k/mo Scaled Spend at 5.2x MER",
    description: "3D exploding product renders, founder hook storytelling, and dedicated 5-star review advertorial funnels.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    tags: ["Meta Ads", "3D Motion", "Advertorials", "DTC Scaling"],
    liveUrl: "https://startuplize.com/works/novaearwear"
  },
  {
    id: "vanguard-pmax",
    title: "Vanguard Freight Google Ads Overhaul",
    category: "Creative Ads",
    client: "Vanguard Global",
    year: "2025",
    impact: "-64% Cost Per Qualified Lead",
    description: "Surgical search keyword restructuring with instant comparison landing pages converting freight inquiries.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Google PMax", "Search Ads", "B2B Funnels", "Attribution"],
    liveUrl: "https://startuplize.com/works/vanguard"
  },
  {
    id: "pulse-energy-ads",
    title: "Pulse Nootropic TikTok & Meta Scaling",
    category: "Creative Ads",
    client: "Pulse Nutrition",
    year: "2025",
    impact: "Over 8.5M Organic & Paid Views",
    description: "High-hook creator UGC mashups and fast-paced motion graphics that generated $1.8M in first-quarter sales.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    tags: ["TikTok Ads", "UGC Creative", "Paid Social", "DTC"],
    liveUrl: "https://startuplize.com/works/pulseenergy"
  },
  {
    id: "fintech-app-install",
    title: "Vaultly Mobile App Install Machine",
    category: "Creative Ads",
    client: "Vaultly Finance",
    year: "2025",
    impact: "450,000 Verified App Installs",
    description: "Hyper-engaging 15-second product micro-demos on Instagram Reels and YouTube Shorts at $1.12 CPI.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=80",
    tags: ["App Installs", "Reels", "Shorts", "Fintech Mobile"],
    liveUrl: "https://startuplize.com/works/vaultly"
  },
  {
    id: "zenith-retargeting",
    title: "Zenith Clinic Full-Funnel Retargeting",
    category: "Creative Ads",
    client: "Zenith Health",
    year: "2025",
    impact: "6.8x Return on Ad Spend",
    description: "Dynamic testimonial carousels and doctor explanation clips converting warm website visitors into appointments.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    tags: ["Retargeting", "Meta ASC", "Medical CRO", "High Ticket"],
    liveUrl: "https://startuplize.com/works/zenithads"
  },
  {
    id: "saas-linkedin-abm",
    title: "Enterprise ABM LinkedIn Campaigns",
    category: "Creative Ads",
    client: "OmniSec Cloud",
    year: "2025",
    impact: "38 Fortune 500 Demos Booked",
    description: "Hyper-personalized single-image and document carousel ads targeting CISOs at specific enterprise accounts.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    tags: ["LinkedIn ABM", "B2B SaaS", "Document Ads", "Enterprise"],
    liveUrl: "https://startuplize.com/works/omnisec"
  },
  {
    id: "glow-cosmetics-ads",
    title: "Glow Cosmetics Black Friday Cyber Monday",
    category: "Creative Ads",
    client: "Glow Beauty Group",
    year: "2025",
    impact: "$2.4M BFCM Weekend Sales",
    description: "Urgency-driven countdown motion assets and tiered bundle pre-sell landers maximizing average order value.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    tags: ["BFCM", "E-Commerce", "Motion Ads", "Beauty"],
    liveUrl: "https://startuplize.com/works/glowcosmetics"
  },
  {
    id: "stream-gear-ads",
    title: "StreamGear Studio Microphone Launch",
    category: "Creative Ads",
    client: "StreamGear Tech",
    year: "2025",
    impact: "Kickstarter Funded 1,400%",
    description: "Cinematic trailer ads and YouTube pre-roll campaigns showcasing studio sound comparisons against Shure SM7B.",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&q=80",
    tags: ["YouTube Pre-Roll", "Crowdfunding", "Video Production", "Creator Tech"],
    liveUrl: "https://startuplize.com/works/streamgear"
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Mahathir",
    role: "Founder & Creative Director",
    bio: "UI/UX Architect and design technologist leading the vision, design systems, and conversion-led brand architectures at Startuplize.",
    photo: "/images/founder.jpg",
    socials: { twitter: "https://twitter.com/mahathir", linkedin: "https://linkedin.com/in/mahathir" }
  },
  {
    name: "Elena Rostova",
    role: "Head of 3D & Visual Motion",
    bio: "Ex-Awwwards jury member specialized in WebGL shaders, Three.js spatial interactions, and cinematic brand launch films.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    socials: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" }
  },
  {
    name: "Julian Vance",
    role: "Principal Next.js & Webflow Architect",
    bio: "Full-stack engineer obsessed with sub-second Core Web Vitals, headless CMS pipelines, and robust client architectures.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    socials: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" }
  },
  {
    name: "Sophia Lin",
    role: "Lead Performance Growth Strategist",
    bio: "Direct-response media buyer and programmatic SEO engineer who has managed over $35M in profitable paid ad spend.",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    socials: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" }
  }
];

export const TESTIMONIALS_EXPANDED = [
  {
    name: "Jordan Lee",
    role: "Founder & CEO",
    company: "Lumina Wealth",
    quote: "Startuplize transformed our digital presence. Our conversion rate surged by +184% within 30 days of launch.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    verified: true,
    service: "Webflow & 3D Web"
  },
  {
    name: "Marcus Sterling",
    role: "Managing Principal",
    company: "Vela Private Islands",
    quote: "The 3D interactive masterplans on our Wix Studio portal helped us sell out an $85M residential development.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    verified: true,
    service: "Wix Studio Setup"
  },
  {
    name: "Samantha Wright",
    role: "VP of Engineering",
    company: "Chronicle Media",
    quote: "Headless WordPress on Next.js 14 delivers a 0.4s load time across 3M readers. Unbeatable technical execution.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    verified: true,
    service: "Headless WordPress"
  },
  {
    name: "Devon Reed",
    role: "Chief Product Officer",
    company: "Cognitive Labs",
    quote: "They don't just build websites; they craft digital prestige. Our tier-1 investors were blown away.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    verified: true,
    service: "Brand & 3D Web"
  },
  {
    name: "Chloe Dupont",
    role: "Chief Marketing Officer",
    company: "Nova Audio",
    quote: "Their Meta video creatives and pre-sell landers cut our customer acquisition cost in half while scaling to $650k/mo.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    verified: true,
    service: "Meta Ads & Funnels"
  },
  {
    name: "David Kim",
    role: "VP of Enterprise Growth",
    company: "Vanguard Freight",
    quote: "Our Google Search cost-per-lead dropped by 64% with their surgical exact-match landing pages.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    verified: true,
    service: "Google Ads & PMax"
  },
  {
    name: "Elena Rostova",
    role: "Chief Growth Officer",
    company: "CloudPulse",
    quote: "Their programmatic SEO playbook took us from page 5 to position #1 for our most valuable high-intent queries.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    verified: true,
    service: "Technical SEO"
  },
  {
    name: "Julian Vance",
    role: "Founder & Lead",
    company: "Aura Protocol",
    quote: "The visual brand identity Startuplize created gave us immediate category dominance and cult community loyalty.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    verified: true,
    service: "Brand Identity"
  }
];

export const FAQS = [
  {
    question: "How does Startuplize differ from traditional agencies?",
    answer: "We operate as an embedded, elite creative sprint partner. You get direct access to senior design directors and principal engineers—no junior account managers, no template recycling, and zero unnecessary bloat."
  },
  {
    question: "How fast can we launch our new website or creative campaign?",
    answer: "Our standard sprint delivers high-fidelity Figma designs in 7-10 days and a fully deployed Webflow / Next.js platform within 3 to 4 weeks."
  },
  {
    question: "Do you guarantee sub-second load speeds and SEO rankings?",
    answer: "Yes. Every web build is optimized to score 95+ on Google Lighthouse with strict semantic HTML, clean CSS architecture, and edge-cached assets."
  },
  {
    question: "How do we get started?",
    answer: "Book a direct 30-minute discovery call using our Cal.com booking link. We'll analyze your current brand and present a tailored sprint roadmap within 2 hours."
  }
];
