export interface ServiceItem {
  id: string;
  title: string;
  category: "Development" | "Design" | "Marketing";
  badge: string;
  iconName: string;
  description: string;
  deliverables: string[];
  metrics: string;
  colSpan?: string;
  accentColor?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  year: string;
  results: {
    label: string;
    value: string;
  }[];
  services: string[];
  liveUrl?: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  metricHighlight: string;
  platformBadge: "Clutch" | "Upwork" | "Google" | "Contra";
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
  linkedinUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  description: string;
  points: string[];
  icon: string;
}

export interface PartnerReview {
  platform: string;
  score: string;
  reviewsCount: string;
  badgeText: string;
}
