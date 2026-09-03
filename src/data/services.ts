import { ServiceItem } from '@/types';

export const servicesData: ServiceItem[] = [
  {
    id: 'wordpress',
    badge: '01 / ARCHITECTURE',
    title: 'High-Performance WordPress Engineering',
    subtitle: 'Zero-Bloat Headless, ACF Pro & Sub-Second WooCommerce',
    description:
      'We strip out standard multi-plugin bloat in favor of custom-built object-oriented theme architectures, headless Next.js front-ends, ACF Pro flexible content grids, and optimized WooCommerce checkouts engineered for extreme throughput.',
    techStack: ['Headless Next.js', 'WordPress REST / GraphQL', 'ACF Pro & Custom Blocks', 'Redis Object Cache', 'WooCommerce High-Scale'],
    deliverables: [
      'Custom bespoke theme coded from scratch (Zero heavy templates)',
      'Sub-800ms Largest Contentful Paint (LCP) guarantee',
      'ACF Pro flexible module schema tailored to marketing workflows',
      'Enterprise Redis caching and server-level Nginx optimization',
      'Database query sanitization & transient purge automation'
    ],
    features: [
      {
        title: 'Zero Plugin Overhead',
        desc: 'Custom PHP/React components replacing 30+ sluggish third-party plugins.',
        metric: '99/100 Mobile PageSpeed'
      },
      {
        title: 'Headless / Decoupled Option',
        desc: 'WordPress as an editorial CMS powering ultra-fast Next.js edge-rendered frontends.',
        metric: '< 400ms TTFB globally'
      },
      {
        title: 'WooCommerce Conversion Engine',
        desc: '1-step friction-free checkout flows, instant search, and dynamic cart caching.',
        metric: '+48% Checkout Velocity'
      }
    ],
    highlightMetric: {
      value: '0.64s',
      label: 'Average Mobile LCP',
      sublabel: 'Across 140+ deployed client instances'
    },
    mockup: {
      type: 'code',
      title: 'Besoke WP Theme Architecture',
      metricBadge: 'PageSpeed 100/100 Verified',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop'
    }
  },
  {
    id: 'webflow',
    badge: '02 / MOTION & CMS',
    title: 'Webflow Architecture & Micro-Interactions',
    subtitle: 'Awwwards-Tier Micro-Interactions & Scalable CMS Systems',
    description:
      'We architect bespoke Webflow ecosystems that merge fluid WebGL/Framer interactions, custom JavaScript embeds, and client-first CMS structures. You get world-class brand prestige without losing speed or control.',
    techStack: ['Webflow CMS Engine', 'GSAP 3 Motion', 'Custom JS/Canvas API', 'Finsweet Client-First', 'Wized / Supabase Sync'],
    deliverables: [
      'Custom Webflow builds with zero visual bugs across all breakpoints',
      'Client-First V2 naming convention for seamless team scalability',
      'Complex scroll-driven parallax, 3D card tilts, and physics cursor effects',
      'Dynamic multi-reference CMS architecture with automated filtering',
      'Custom attribute code for real-time calculations and search'
    ],
    features: [
      {
        title: 'Cinema-Grade Motion',
        desc: 'Engineered scroll-linked sequences and 60fps micro-interactions.',
        metric: '60 FPS Physics Guaranteed'
      },
      {
        title: 'Modular CMS Modeling',
        desc: 'Structured collections making content publishing a 2-minute breeze.',
        metric: '100% Scalable CMS'
      },
      {
        title: 'Custom Script Bridges',
        desc: 'Extending Webflow via WebGL shaders, cookie-free analytics, and custom APIs.',
        metric: 'Zero Layout Shifts (0.00 CLS)'
      }
    ],
    highlightMetric: {
      value: '60fps',
      label: 'Smooth Interaction Framerate',
      sublabel: 'Smooth hardware-accelerated transforms'
    },
    mockup: {
      type: 'dashboard',
      title: 'Interactive Webflow SaaS Canvas',
      metricBadge: 'FWA & Awwwards Ready',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop'
    }
  },
  {
    id: 'technical-seo',
    badge: '03 / ORGANIC DOMINATION',
    title: 'Enterprise Technical & Programmatic SEO',
    subtitle: 'Entity Schema Graphs, Core Web Vitals & Scale Rank Systems',
    description:
      'Search engines rank mathematical authority and crawl efficiency. We implement deep JSON-LD entity graphs, programmatic keyword cluster page-generation, crawl-budget optimization, and high-intent topical authority maps.',
    techStack: ['JSON-LD Semantic Graphs', 'Programmatic Next.js / ISR', 'Screaming Frog Edge Audits', 'Google Search Console API', 'Topical Cluster Engine'],
    deliverables: [
      'Multi-layered JSON-LD Organization, Product, & Service Entity graphs',
      'Programmatic landing page generation for 500+ localized high-intent keywords',
      'Canonicalization, orphan page remediation, and internal PageRank sculpting',
      'IndexNow protocol and automated Google Search Console sitemap sync',
      'Semantic HTML5 hierarchy and content-visibility optimization'
    ],
    features: [
      {
        title: 'Semantic Entity Graphing',
        desc: 'Directly communicating brand authority to Google’s Knowledge Graph.',
        metric: '+210% Rich Snippet CTR'
      },
      {
        title: 'Programmatic Scale Engine',
        desc: 'Generating thousands of unique, fast-loading query-matched pages.',
        metric: '10x Indexed Queries'
      },
      {
        title: 'Core Web Vitals Pass Guarantee',
        desc: 'Passing 100% of field metrics for INP, LCP, and CLS on mobile.',
        metric: '100% CWV Field Pass'
      }
    ],
    highlightMetric: {
      value: '+340%',
      label: 'Average Organic Traffic Lift',
      sublabel: 'Recorded across client portfolios in 90 days'
    },
    mockup: {
      type: 'graph',
      title: 'Google Search Console Growth Surge',
      metricBadge: 'GA4 +340% Sessions',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'
    }
  },
  {
    id: 'local-growth',
    badge: '04 / HIGH-CONVERTING FUNNELS',
    title: 'Local Business Hyper-Growth & 3-Pack Domination',
    subtitle: 'Google Business Profile Domination, Citations & Revenue Funnels',
    description:
      'We turn local service companies into the uncontested #1 choice in their metro area. From unlocking suspended GBP listings and dominating geo-grids to high-velocity SMS review funnels and landing pages that convert cold clicks at 18%+.',
    techStack: ['Google Business Profile API', 'Geo-Grid Heatmap Trackers', 'Automated Review Funnels', 'CallRail Conversion Tracking', 'Local Schema Markup'],
    deliverables: [
      'Complete Google Business Profile reinstatement, optimization & category dominance',
      'Local 3-Pack Geo-Grid ranking push across 15+ mile service radiuses',
      'Automated 5-star review acquisition sequences with fraud protection',
      '100+ hyper-consistent NAP local citation directory sync',
      'High-converting mobile-first click-to-call funnel with instant lead routing'
    ],
    features: [
      {
        title: 'Local 3-Pack Supremacy',
        desc: 'Securing top #1 to #3 rankings for high-ticket local search terms.',
        metric: '#1 Local Map Pin'
      },
      {
        title: 'High-Converting Click Funnels',
        desc: 'Mobile-first booking pages engineered to trigger immediate phone calls & leads.',
        metric: '18.4% Average Conversion'
      },
      {
        title: 'Review Velocity System',
        desc: 'Automated post-service SMS review loops driving 30+ 5-star reviews/month.',
        metric: '5.0★ Google Rating Engine'
      }
    ],
    highlightMetric: {
      value: '4.8x',
      label: 'Local Inbound Phone Calls',
      sublabel: 'Verified by CallRail & GMB Analytics'
    },
    mockup: {
      type: 'heatmap',
      title: 'Local Geo-Grid 3-Pack Ranking Matrix',
      metricBadge: '#1 Across 15-Mile Radius',
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop'
    }
  }
];
