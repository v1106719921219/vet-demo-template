import Navbar from '@/components/Navbar'
import ImprovementComparison from '@/components/ImprovementComparison'
import Footer from '@/components/Footer'
import { HOSPITAL } from '@/lib/hospital'
import Link from 'next/link'

export const metadata = {
  title: `${HOSPITAL.name} 様へのご提案`,
  robots: { index: false, follow: false },
}

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">

        {/* イントロ */}
        <section className="bg-[#1A1A1A] py-16 px-4 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-3">
            Proposal
          </p>
          <h1 className="font-serif text-2xl font-bold text-white sm:text-3xl">
            {HOSPITAL.name} 様へのご提案
          </h1>
          <p className="mt-4 text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            現在のウェブサイトと、新しくご提案するサイトを比較しました。
            ご不明な点はお気軽にお問い合わせください。
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="text-xs text-zinc-500 underline underline-offset-2 hover:text-zinc-300 transition-colors"
            >
              ← デモサイトを見る
            </Link>
          </div>
        </section>

        {/* 比較表 */}
        <ImprovementComparison />

      </main>
      <Footer />
    </>
  )
}
