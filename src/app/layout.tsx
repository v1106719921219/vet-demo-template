import type { Metadata } from 'next'
import { SEO, CLINIC, HOURS } from '@/lib/constants'
import './globals.css'

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: ['市原市 動物病院', '動物病院 市原', '市原 動物病院 予約不要', '八幡宿 動物病院', '市原市 犬 病院', '市原市 猫 病院', '市原 ペットホテル', '市原 トリミング', '市原市 日曜 動物病院', '当日受付 動物病院', 'バウミュウ', 'バウ・ミュウ動物病院', '予防接種', '健康診断'],
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    type: 'website',
    locale: 'ja_JP',
    siteName: 'バウ・ミュウ動物病院',
    url: 'https://bowmew-ah.com',
    images: [{ url: 'https://bowmew-ah.com/images/hero.jpg', width: 1200, height: 630, alt: 'バウ・ミュウ動物病院 - 千葉県市原市の動物病院' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.title,
    description: SEO.description,
  },
  alternates: {
    canonical: 'https://bowmew-ah.com',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'VeterinaryCare',
  name: CLINIC.name,
  alternateName: CLINIC.nameEn,
  url: 'https://bowmew-ah.com',
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
  image: 'https://bowmew-ah.com/logo.png',
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
  hasMap: 'https://www.google.com/maps?q=バウミュウ動物病院',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: '駐車場', value: true },
    { '@type': 'LocationFeatureSpecification', name: '予約不要', value: true },
    { '@type': 'LocationFeatureSpecification', name: '当日受付', value: true },
  ],
  additionalType: 'http://www.productontology.org/id/Veterinary_medicine',
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
