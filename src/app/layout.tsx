import type { Metadata } from 'next'
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google'
import './globals.css'
import { HOSPITAL } from '@/lib/hospital'
import { DemoBanner } from '@/components/ui/DemoBanner'

const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
})

const notoSerif = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-noto-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: HOSPITAL.seo?.title ?? `${HOSPITAL.name}｜${HOSPITAL.address.split(' ')[1]}のかかりつけ動物病院`,
  description: HOSPITAL.seo?.description ?? `${HOSPITAL.address}の動物病院。${HOSPITAL.animals.join('・')}の診療。TEL: ${HOSPITAL.phone}`,
  keywords: HOSPITAL.seo?.keywords?.join(', '),
  openGraph: {
    title: HOSPITAL.seo?.title ?? HOSPITAL.name,
    description: HOSPITAL.seo?.description ?? '',
    type: 'website',
    locale: 'ja_JP',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body>
        <DemoBanner />
        {children}
      </body>
    </html>
  )
}
