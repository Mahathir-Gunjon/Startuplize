import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selected Work & Portfolio — startuplize',
  description:
    'From Outdated and Overlooked to The Obvious Local Choice. We rebuild underperforming websites into clean, high-converting digital storefronts, pairing strategic brand design with Google Maps visibility.',
  openGraph: {
    title: 'Selected Work & Portfolio — startuplize',
    description:
      'From Outdated and Overlooked to The Obvious Local Choice. We rebuild underperforming websites into clean, high-converting digital storefronts, pairing strategic brand design with Google Maps visibility.',
    type: 'website',
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
