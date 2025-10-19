import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nyotafusionai.com'),
  title: {
    default: 'Nyota Fusion AI CRM - Turn Inquiries Into Income Automatically',
    template: '%s | Nyota Fusion AI',
  },
  description:
    'Nyota Fusion AI is a WhatsApp-first CRM built for African businesses. Unify WhatsApp, Email & SMS, score leads with AI, and automate follow-ups to convert more leads faster. Trusted by 180+ institutions globally.',
  keywords: [
    'CRM for African businesses',
    'WhatsApp CRM',
    'Lead management system',
    'AI-powered CRM',
    'Multi-channel messaging',
    'Sales automation',
    'University admissions CRM',
    'Banking CRM',
    'Marketing automation',
    'Kenya CRM',
    'Uganda CRM',
    'Rwanda CRM',
    'South Africa CRM',
    'Nyota Fusion AI',
    'Lead scoring',
    'Customer relationship management',
  ],
  authors: [{ name: 'Nyota Fusion AI' }],
  creator: 'Nyota Fusion AI',
  publisher: 'Nyota Fusion AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nyotafusionai.com',
    siteName: 'Nyota Fusion AI',
    title: 'Nyota Fusion AI - Turn Inquiries Into Income Automatically',
    description:
      'WhatsApp-first CRM for African businesses. Unify channels, automate follow-ups, and convert more leads faster.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nyota Fusion AI - WhatsApp-First Customer Relationship Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nyota Fusion AI - Turn Inquiries Into Income Automatically',
    description: 'Unify WhatsApp, Email & SMS. AI-powered scoring, automated follow-ups. Convert leads 35% faster.',
    images: ['/og-image.png'],
    creator: '@NyotaFusionAI',
    site: '@NyotaFusionAI',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://nyotafusionai.com',
  },
  verification: {
    google: 'your-google-verification-code',
    // Add other verification codes as needed (Bing, Yandex, etc.)
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Remix Icons CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        {/* Theme Color for mobile browsers */}
        <meta name="theme-color" content="#7C1D1D" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Nyota AI Fusion',
              alternateName: 'Nyota CRM',
              url: 'https://nyotacrm.com',
              logo: 'https://nyotacrm.com/logo.png',
              description: 'AI-powered CRM platform for African businesses with WhatsApp-first communication',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+256709490920',
                contactType: 'Sales',
                availableLanguage: ['English', 'French', 'Swahili'],
                areaServed: ['KE', 'UG', 'RW', 'ZA', 'CD', 'US', 'Global'],
              },
              sameAs: [
                'https://twitter.com/nyotacrm',
                'https://linkedin.com/company/nyotacrm',
                'https://instagram.com/nyotacrm',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '180',
                bestRating: '5',
                worstRating: '1',
              },
            }),
          }}
        />
        {/* Structured Data - Software Application */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Nyota AI Fusion CRM',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web, iOS, Android',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                description: '30-day free trial',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '180',
              },
              featureList: [
                'Multi-channel messaging (WhatsApp, Email, SMS)',
                'AI-powered lead scoring',
                'Automated follow-ups',
                'Workflow automation',
                'Real-time analytics',
                'FERPA-compliant for admissions',
                'SOC-aligned security',
                'Multi-currency support (USD, KES, UGX, RWF, ZAR)',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
