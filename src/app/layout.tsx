import type { Metadata } from 'next'
import { SEO, CLINIC, HOURS } from '@/lib/constants'
import './globals.css'

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: ['動物病院', '市原市', '八幡', '犬', '猫', 'ペット', '予防接種', '健康診断', 'トリミング', 'ペットホテル', 'バウミュウ', 'バウ・ミュウ'],
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    type: 'website',
    locale: 'ja_JP',
    siteName: 'バウ・ミュウ動物病院',
    url: 'https://vet-demo-template.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.title,
    description: SEO.description,
  },
  alternates: {
    canonical: 'https://vet-demo-template.vercel.app',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'VeterinaryCare',
  name: CLINIC.name,
  alternateName: CLINIC.nameEn,
  url: 'https://vet-demo-template.vercel.app',
  telephone: CLINIC.phone,
  faxNumber: CLINIC.fax,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '八幡520',
    addressLocality: '市原市',
    addressRegion: '千葉県',
    postalCode: '290-0062',
    addressCountry: 'JP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.5231,
    longitude: 140.1167,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Friday', 'Saturday'], opens: '09:00', closes: '12:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Friday', 'Saturday'], opens: '15:30', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Wednesday', 'Thursday', 'Sunday'], opens: '09:00', closes: '12:30' },
  ],
  image: 'https://vet-demo-template.vercel.app/logo.png',
  priceRange: '$$',
  areaServed: {
    '@type': 'City',
    name: '市原市',
  },
  founder: {
    '@type': 'Person',
    name: CLINIC.director.name,
    jobTitle: CLINIC.director.title,
  },
  description: SEO.description,
  currenciesAccepted: 'JPY',
  paymentAccepted: '現金',
  parking: CLINIC.parking,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Klee+One:wght@400;600&family=Zen+Maru+Gothic:wght@400;500;700&family=Zen+Kurenaido&family=Noto+Serif+JP:wght@400;500;600;700&family=IBM+Plex+Sans+JP:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
