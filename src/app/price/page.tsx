import type { Metadata } from 'next'
import { CLINIC } from '@/lib/constants'

export const metadata: Metadata = {
  title: '料金案内｜市原市の動物病院 バウ・ミュウ動物病院',
  description:
    '千葉県市原市バウ・ミュウ動物病院の料金案内。初診料・再診料・ワクチン・健康診断・避妊去勢手術などの料金目安をご案内します。',
  alternates: { canonical: 'https://bowmew-ah.com/price' },
}

const categories = [
  '診察料',
  '予防接種',
  'フィラリア・ノミダニ予防',
  '健康診断',
  '避妊・去勢手術',
]

export default function PricePage() {
  return (
    <main className="site">
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
        </div>
      </header>

      <section className="section warm">
        <div className="container">
          <div className="sectionTitle">
            <p className="eyebrow">PRICE</p>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>料金案内｜市原市バウ・ミュウ動物病院</h1>
            <p>主な診療費用の目安です。症状や体重により異なりますので、詳しくはお気軽にお問い合わせください。</p>
          </div>

          <div style={{ display: 'grid', gap: '24px', marginTop: '40px' }}>
            {categories.map((category) => (
              <article key={category} className="featureCard" style={{ textAlign: 'left', padding: '32px' }}>
                <h2 style={{ fontSize: '20px', marginBottom: '8px', color: '#ff8a3d' }}>{category}</h2>
                <p style={{ color: '#888', fontSize: '14px' }}>料金の詳細はお電話にてお問い合わせください。</p>
              </article>
            ))}

            <div style={{ padding: '24px', background: '#fff3e8', borderRadius: '16px', lineHeight: 1.8, textAlign: 'center' }}>
              <strong style={{ color: '#c06a1f', fontSize: '18px' }}>料金についてはお気軽にお問い合わせください</strong>
              <p style={{ marginTop: '12px', color: '#555', fontSize: '15px' }}>
                症状・体重・検査内容により料金が異なります。<br />
                お電話またはご来院時にご案内いたします。
              </p>
              <a
                href={`tel:${CLINIC.phone.replace(/-/g, '')}`}
                style={{ display: 'inline-block', marginTop: '16px', padding: '14px 40px', background: '#ff8a3d', color: '#fff', borderRadius: '30px', fontWeight: 700, fontSize: '16px' }}
              >
                電話で問い合わせる {CLINIC.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="container ctaBox">
          <p className="eyebrow">CONTACT</p>
          <h2>料金のご相談もお気軽に</h2>
          <p>予約不要・当日受付OK。市原市の動物病院バウ・ミュウにお電話ください。</p>
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
