import { CaseStudyItem } from '@/types';

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'case-study-aegis',
    client: 'Aegis Horology UK',
    industry: 'Luxury eCommerce / High-Ticket Retail',
    timeline: '8 Weeks Execution',
    heroImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    beforeStats: {
      lcp: '4.8s (Failing CWV)',
      traffic: '32,000 / mo',
      conversion: '0.94%',
      localRank: '#12 in London'
    },
    afterStats: {
      lcp: '0.62s (100/100 Green)',
      traffic: '141,000 / mo (+340%)',
      conversion: '2.85% (+203%)',
      localRank: '#1 Across Greater London'
    },
    challenge:
      'Aegis had an overloaded legacy WooCommerce store with 48 third-party plugins, bloated visual builders, uncompressed assets, and severe database locks during marketing flash sales. Mobile visitors experienced a 5-second blank screen, causing a 68% bounce rate and heavy ad spend waste.',
    engineeringExecution: [
      'Migrated legacy theme to a bespoke Headless Next.js 15 App Router architecture powered by WPGraphQL.',
      'Constructed custom Redis persistent caching layer and sanitized 180,000+ orphaned WooCommerce database records.',
      'Implemented full JSON-LD Product schema with dynamic stock availability and merchant validation.',
      'Redesigned checkout with 1-click Apple Pay / Google Pay via Stripe Elements, slashing checkout friction.'
    ],
    verifiedImpact: [
      {
        metric: '+$3.2M',
        description: 'Direct incremental revenue generated in the first 120 days post-launch'
      },
      {
        metric: '0.62s LCP',
        description: 'Passing 100% Core Web Vitals on real 4G mobile devices globally'
      },
      {
        metric: '+340%',
        description: 'Organic non-brand search traffic spike documented in Google Search Console'
      }
    ],
    quote: {
      text: 'Vanguard did not just redesign our website; they completely re-engineered our digital business. Our checkout speed went from painful to instantaneous, and our organic revenue skyrocketed by over 300%.',
      author: 'Marcus Sterling',
      role: 'Chief Commercial Officer, Aegis Horology'
    }
  },
  {
    id: 'case-study-apex-dental',
    client: 'Apex Multi-Location Healthcare',
    industry: 'Healthcare & Multi-Location Clinics',
    timeline: '6 Weeks Sprint',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    beforeStats: {
      lcp: '3.6s',
      traffic: '4,100 / mo',
      conversion: '2.1%',
      localRank: '#8 to #14 in Geo-Grid'
    },
    afterStats: {
      lcp: '0.55s',
      traffic: '22,400 / mo (+446%)',
      conversion: '16.8% (Click-to-Call)',
      localRank: '#1 in 100% Target Geo-Grid'
    },
    challenge:
      'Apex operated 6 regional dental clinics with fragmented Google Business Profiles, duplicate citation records, zero automated review collection, and a desktop-first website that lost 80% of mobile searchers looking for emergency dental appointments.',
    engineeringExecution: [
      'Resolved 2 suspended Google Business Profile listings and optimized categories, primary services, and geo-coordinates.',
      'Engineered an automated post-appointment SMS loop that drove 420+ genuine 5-star Google reviews in 60 days.',
      'Deployed a lightning-fast mobile emergency booking funnel with instant click-to-call and insurance verification.',
      'Built localized programmatic landing pages for 45 surrounding zip codes with verified doctor entity schema.'
    ],
    verifiedImpact: [
      {
        metric: '380+',
        description: 'Verified inbound qualified patient phone calls booked per month via CallRail'
      },
      {
        metric: '#1 Rank',
        description: 'Dominated Google Local 3-Pack across all 6 clinic territories within a 15-mile radius'
      },
      {
        metric: '16.8%',
        description: 'Conversion rate from mobile ad clicks and local search directly to booked appointments'
      }
    ],
    quote: {
      text: 'We went from relying on expensive Google Ads to having our phones ring non-stop from organic local search. The Local 3-Pack dominance Vanguard built for us filled our calendar 3 weeks in advance.',
      author: 'Dr. Sarah Jenkins',
      role: 'Managing Partner, Apex Dental Group'
    }
  }
];
