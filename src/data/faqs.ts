import { FaqItem } from '@/types';

export const faqsData: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'engineering',
    question: 'How do you guarantee a sub-800ms LCP and 95+ PageSpeed on WordPress?',
    answer:
      'We never use heavy off-the-shelf theme bundles or bloated visual builder stacks. We build modular, custom theme architectures with ACF Pro and custom React/PHP Gutenberg blocks, sanitize SQL queries, implement server-level Redis object caching, serve WebP/AVIF via edge CDNs, and inline critical CSS with zero unused JavaScript execution.'
  },
  {
    id: 'faq-2',
    category: 'engineering',
    question: 'When should we choose Webflow versus Headless WordPress or Next.js?',
    answer:
      'Webflow is ideal for high-growth SaaS and marketing teams that need maximum visual creativity, 60fps micro-interactions, and rapid non-technical content publishing. Headless WordPress or Next.js is superior for complex eCommerce (WooCommerce/Shopify), programmatic SEO with 10,000+ pages, custom membership portals, or proprietary backend integrations.'
  },
  {
    id: 'faq-3',
    category: 'seo',
    question: 'What is your timeline for seeing verified organic traffic and Local 3-Pack rank lift?',
    answer:
      'Technical SEO remediations (Core Web Vitals, indexation fixes, JSON-LD Schema) typically yield noticeable Google crawl rate improvements within 14–21 days. Programmatic SEO keyword indexation and Local 3-Pack geo-grid expansion typically compound significantly between days 45 and 90.'
  },
  {
    id: 'faq-4',
    category: 'seo',
    question: 'How do you handle Google Business Profile (GBP) suspensions and local geo-grids?',
    answer:
      'We conduct forensic audits of your business documentation (utility bills, LLC filings, signage proof, video verification) to submit ironclad appeals that get suspended profiles reinstated. We then optimize primary and secondary categories, build high-tier local citations, and deploy automated SMS review collection systems to expand your geo-grid radius.'
  },
  {
    id: 'faq-5',
    category: 'process',
    question: 'What does a typical project workflow and sprint timeline look like?',
    answer:
      'Our projects run on 4 to 8-week agile sprints: Week 1 is Architectural Discovery & Technical Audit; Weeks 2-3 are Wireframing & High-Fidelity UI/UX Prototyping; Weeks 4-6 are Production Engineering & Custom Animation Coding; Week 7 is QA, Core Web Vitals Auditing & Staging; Week 8 is DNS Cutover, IndexNow push & Live Launch.'
  },
  {
    id: 'faq-6',
    category: 'pricing',
    question: 'Do you offer ongoing retainer partnerships for technical maintenance and growth?',
    answer:
      'Yes. Our Vanguard Growth Retainer includes dedicated engineering hours, continuous Core Web Vitals monitoring, monthly programmatic SEO content production, Google Business Profile management, conversion rate optimization (A/B testing), and 24/7 uptime monitoring with SLA guarantees.'
  }
];
