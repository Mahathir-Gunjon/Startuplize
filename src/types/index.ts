export type ServiceId = 'wordpress' | 'webflow' | 'technical-seo' | 'local-growth';

export interface ServiceFeature {
  title: string;
  desc: string;
  metric: string;
}

export interface ServiceItem {
  id: ServiceId;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  deliverables: string[];
  features: ServiceFeature[];
  highlightMetric: {
    value: string;
    label: string;
    sublabel: string;
  };
  mockup: {
    type: 'code' | 'dashboard' | 'heatmap' | 'graph';
    title: string;
    metricBadge: string;
    image: string;
  };
}

export type PortfolioCategory = 'all' | 'wordpress' | 'webflow' | 'seo-local';

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  categoryLabel: string;
  deliverables: string[];
  image: string;
  deviceType: 'macbook' | 'ipad' | 'iphone' | 'dual';
  metrics: {
    label: string;
    value: string;
  }[];
  techPills: string[];
  liveUrl?: string;
  awards?: string[];
}

export interface CaseStudyItem {
  id: string;
  client: string;
  industry: string;
  timeline: string;
  heroImage: string;
  beforeImage: string;
  afterImage: string;
  beforeStats: {
    lcp: string;
    traffic: string;
    conversion: string;
    localRank: string;
  };
  afterStats: {
    lcp: string;
    traffic: string;
    conversion: string;
    localRank: string;
  };
  challenge: string;
  engineeringExecution: string[];
  verifiedImpact: {
    metric: string;
    description: string;
  }[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  projectType: string;
  verifiedMetric: string;
  quote: string;
  videoThumb?: string;
  duration?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'engineering' | 'seo' | 'process' | 'pricing';
}
