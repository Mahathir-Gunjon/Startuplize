import { PortfolioItem } from '@/types';

export const portfolioData: PortfolioItem[] = [
  {
    id: 'lumina-cloud',
    title: 'Lumina Cloud Infrastructure',
    client: 'Lumina Networks Inc.',
    category: 'webflow',
    categoryLabel: 'Webflow Architecture & 3D Shaders',
    deliverables: ['Custom Webflow CMS', 'GLSL Particle Shader', 'Finsweet Client-First V2', 'Interactive Pricing Calculator'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    deviceType: 'macbook',
    metrics: [
      { label: 'Conversion Lift', value: '+142%' },
      { label: 'Time on Page', value: '4m 18s' },
      { label: 'Mobile Performance', value: '100/100' }
    ],
    techPills: ['Webflow', 'GSAP 3', 'WebGL Canvas', 'Client-First'],
    awards: ['Awwwards Site of the Day', 'FWA of the Day']
  },
  {
    id: 'aegis-luxury-commerce',
    title: 'Aegis High-Performance Headless Store',
    client: 'Aegis Horology UK',
    category: 'wordpress',
    categoryLabel: 'Headless WordPress + WooCommerce',
    deliverables: ['Next.js 15 Frontend', 'WordPress GraphQL Backend', 'Instant Cart Edge Cache', 'Algolia Search Integration'],
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
    deviceType: 'dual',
    metrics: [
      { label: 'Checkout Velocity', value: '+64%' },
      { label: 'Mobile LCP', value: '0.52s' },
      { label: 'Annual GMV', value: '$8.4M' }
    ],
    techPills: ['Headless WP', 'Next.js App Router', 'Redis Cache', 'Stripe Elements'],
    awards: ['WooCommerce Featured Store']
  },
  {
    id: 'apex-dental-domination',
    title: 'Metro Premier Healthcare 3-Pack Supremacy',
    client: 'Apex Dental Partners (6 Locations)',
    category: 'seo-local',
    categoryLabel: 'Local 3-Pack & GBP Domination',
    deliverables: ['GBP Reinstatement & Geo-Grid Push', 'Automated SMS Review Funnel', 'High-Converting Click-to-Call Funnel', 'Local Schema Entity Mesh'],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
    deviceType: 'iphone',
    metrics: [
      { label: 'Phone Leads', value: '380+/mo' },
      { label: 'Google 5-Star Reviews', value: '620+' },
      { label: 'Local 3-Pack Rank', value: '#1 in 8 Zip Codes' }
    ],
    techPills: ['Google Business Profile', 'Geo-Grid Tracker', 'Twilio Review Funnel', 'CallRail AI']
  },
  {
    id: 'quantix-saas-seo',
    title: 'Quantix Analytics: Programmatic SEO Engine',
    client: 'Quantix Global Software',
    category: 'seo-local',
    categoryLabel: 'Enterprise Technical & Programmatic SEO',
    deliverables: ['1,200 Programmatic Comparison Pages', 'JSON-LD Entity Structure', 'Sub-400ms Server Response', 'Dynamic Internal Link Sculpting'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop',
    deviceType: 'macbook',
    metrics: [
      { label: 'Indexed Keywords', value: '14,200+' },
      { label: 'Organic ARR Inbound', value: '+$1.8M' },
      { label: 'Search Impressions', value: '4.2M / mo' }
    ],
    techPills: ['Next.js ISR', 'JSON-LD Schema', 'Edge Indexing', 'Python Crawl Scripts']
  },
  {
    id: 'solis-architecture',
    title: 'Solis Sustainable Living Studio',
    client: 'Solis Architectural Group',
    category: 'webflow',
    categoryLabel: 'Webflow Cinema-Motion Portfolio',
    deliverables: ['Custom Micro-Animations', 'Smooth Parallax Scroll Engine', 'Multi-Language CMS', 'Dynamic Case Study Filter'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    deviceType: 'ipad',
    metrics: [
      { label: 'Bounce Rate', value: '24.1%' },
      { label: 'Inbound Project Inquiries', value: '+215%' },
      { label: 'FPS Score', value: '60 FPS' }
    ],
    techPills: ['Webflow', 'Lenis Smooth Scroll', 'Tailwind Typography', 'Lottie Motion']
  },
  {
    id: 'nordic-craft-theme',
    title: 'Nordic Craft: Zero-Bloat Elementor Pro Suite',
    client: 'Nordic Living Group',
    category: 'wordpress',
    categoryLabel: 'Custom WordPress & ACF Pro Suite',
    deliverables: ['100% Custom Elementor Widgets', 'ACF Pro Dynamic Layouts', 'Asset Clean-Up Engine', 'Fast Cache Tiering'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    deviceType: 'macbook',
    metrics: [
      { label: 'Page Weight Reduction', value: '-78%' },
      { label: 'Mobile Score', value: '98/100' },
      { label: 'Conversion Rate', value: '6.8%' }
    ],
    techPills: ['WordPress 6.7', 'Elementor Custom API', 'ACF Pro', 'Cloudflare Enterprise']
  }
];
