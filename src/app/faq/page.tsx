import type { Metadata } from 'next'
import { CLINIC, HOURS } from '@/lib/constants'
import MobileMenu from '@/components/MobileMenu'

export const metadata: Metadata = {
  title: 'よくある質問｜市原市の動物病院 バウ・ミュウ動物病院',
  description:
    '千葉県市原市バウ・ミュウ動物病院のよくある質問。診療時間・予約・料金・駐車場・対象動物などについてお答えします。予約不要・当日受付OK。',
  alternates: { canonical: 'https://bowmew-ah.com/faq' },
}

const faqs = [
  { q: '予約は必要ですか？', a: 'いいえ、予約は不要です。診療時間内であれば、いつでもご来院いただけます。当日受付OKですので、お気軽にお越しください。' },
  { q: '初診でも当日受付できますか？', a: 'はい、初めての方も当日受付可能です。問診票のご記入がございますので、診療終了の15分前までにお越しいただけると安心です。' },
  { q: '診療時間を教えてください。', a: `午前 ${HOURS.amTime} / 午後 ${HOURS.pmTime}です。休診日は${HOURS.closedDay}となります。日曜・祝日も午前中は診療しております。` },
  { q: '駐車場はありますか？', a: `はい、${CLINIC.parking}。お車でお越しの方も安心です。` },
  { q: 'どんな動物を診てもらえますか？', a: '犬と猫を診療しています。' },
  { q: 'クレジットカードは使えますか？', a: '申し訳ございませんが、現金のみのお取り扱いとなります。近隣にATMがございます。' },
  { q: 'ペット保険は使えますか？', a: 'はい、各種ペット保険に対応しております。保険証をお持ちください。' },
  { q: '急患は受け付けていますか？', a: '診療時間内であれば、急患も受け付けております。まずはお電話（0436-41-1008）でご連絡ください。' },
  { q: '避妊・去勢手術はできますか？', a: 'はい、犬・猫の避妊・去勢手術を行っております。術前検査を含め、丁寧にご説明いたします。事前にご相談ください。' },
  { q: '健康診断はできますか？', a: 'はい、血液検査・レントゲン・超音波検査などの健康診断を行っております。定期的な健康チェックをおすすめしています。' },
  { q: 'ワクチン接種はできますか？', a: '犬の混合ワクチン（5種・8種）、猫の混合ワクチン（3種）、狂犬病予防注射に対応しています。' },
  { q: 'アクセス方法を教えてください。', a: `${CLINIC.access}。${CLINIC.icAccess}。${CLINIC.parking}。` },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export default function FaqPage() {
  return (
    <main className="site">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <header className="header">
        <div className="headerInner">
          <a className="logo" href="/">
            <img src="/logo.png" alt={CLINIC.name} className="logoMark" style={{ width: 100, height: 100, borderRadius: 0, background: 'transparent' }} />
            <span><strong>{CLINIC.name}</strong><small>犬と猫のホームドクター</small></span>
          </a>
          <nav className="nav">
            <a href="/#features">当院の特徴</a>
            <a href="/services">診療案内</a>
            <a href="/#hours">診療時間</a>
            <a href="/access">アクセス</a>
          </nav>
          <a className="headerBtn" href={`tel:${CLINIC.phone.replace(/-/g, '')}`}>電話する</a>
          <MobileMenu />
        </div>
      </header>

      <section className="section warm">
        <div className="container">
          <div className="sectionTitle">
            <p className="eyebrow">FAQ</p>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>よくある質問｜市原市バウ・ミュウ動物病院</h1>
            <p>市原市の皆さまからよくいただくご質問にお答えします。</p>
          </div>
          <div style={{ display: 'grid', gap: '16px', marginTop: '40px' }}>
            {faqs.map((faq, i) => (
              <details key={i} className="featureCard" style={{ textAlign: 'left', padding: '24px 32px', cursor: 'pointer' }}>
                <summary style={{ fontWeight: 700, fontSize: '16px', color: '#333', listStyle: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ background: '#ff8a3d', color: '#fff', borderRadius: '50%', width: '28px', height: '28px', display: 'inline-grid', placeItems: 'center', fontSize: '13px', fontWeight: 800, flexShrink: 0 }}>Q</span>
                  {faq.q}
                </summary>
                <div style={{ marginTop: '16px', paddingLeft: '40px', lineHeight: 1.8, color: '#555' }}>
                  <span style={{ background: '#4a90d9', color: '#fff', borderRadius: '50%', width: '28px', height: '28px', display: 'inline-grid', placeItems: 'center', fontSize: '13px', fontWeight: 800, marginRight: '12px', verticalAlign: 'middle' }}>A</span>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="container ctaBox">
          <p className="eyebrow">CONTACT</p>
          <h2>その他のご質問はお気軽にどうぞ</h2>
          <p>予約不要・当日受付OK。市原市の動物病院バウ・ミュウにお気軽にお電話ください。</p>
          <div className="ctaButtons">
            <a className="primaryBtn" href={`tel:${CLINIC.phone.replace(/-/g, '')}`}>電話で相談する</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <div><strong>{CLINIC.name}</strong><p>{CLINIC.zip} {CLINIC.address}<br />TEL {CLINIC.phone}</p></div>
          <small>&copy; Bow-Mew Animal Hospital</small>
        </div>
      </footer>
    </main>
  )
}
