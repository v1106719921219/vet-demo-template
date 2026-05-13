import type { Metadata } from 'next'
import { CLINIC } from '@/lib/constants'
import MobileMenu from '@/components/MobileMenu'

export const metadata: Metadata = {
  title: '診療案内｜市原市の動物病院 バウ・ミュウ動物病院',
  description:
    '千葉県市原市バウ・ミュウ動物病院の診療案内。一般診療・予防接種・健康診断・トリミング・ペットホテル・避妊去勢・皮膚科・シニアケアまで幅広く対応。予約不要・当日受付OK。',
  alternates: { canonical: 'https://bowmew-ah.com/services' },
}

const services = [
  {
    title: '一般診療',
    description: '内科・外科・皮膚科・眼科・耳鼻科など、犬・猫の幅広い症状に対応します。嘔吐・下痢・食欲不振・元気がないなど、気になる症状があればお気軽にご来院ください。',
    items: ['内科全般', '外科', '皮膚科', '眼科', '耳鼻科', '歯科'],
  },
  {
    title: '予防接種・ワクチン',
    description: '犬・猫の各種ワクチン接種を行っています。混合ワクチン、狂犬病予防注射など、お気軽にご相談ください。',
    items: ['犬混合ワクチン（6種・10種）', '猫混合ワクチン（3種）', '狂犬病予防注射', 'ワクチン証明書発行'],
  },
  {
    title: 'フィラリア・ノミダニ予防',
    description: 'フィラリア予防、ノミ・マダニ予防を行っています。市原市は温暖な気候のため、しっかりとした予防が大切です。',
    items: ['フィラリア予防（4月〜12月）', 'ノミ・マダニ予防', '予防薬の処方'],
  },
  {
    title: '健康診断',
    description: '定期的な健康診断で病気の早期発見・早期治療につなげます。血液検査、レントゲン、超音波検査などを実施。',
    items: ['血液検査', 'レントゲン検査', '超音波エコー検査', '尿検査', '便検査'],
  },
  {
    title: '避妊・去勢手術',
    description: '避妊・去勢手術のご相談を承ります。手術のメリット・デメリット、適切な時期などを丁寧にご説明いたします。',
    items: ['犬の避妊・去勢', '猫の避妊・去勢', '術前検査', '術後ケア'],
  },
  {
    title: 'シニアケア',
    description: '高齢の犬・猫に寄り添った診療を行います。関節ケア、心臓病、腎臓病など、加齢に伴う疾患に対応します。',
    items: ['シニア健康診断', '関節ケア', '心臓病管理', '腎臓病管理', '栄養相談'],
  },
]

export default function ServicesPage() {
  return (
    <main className="site">
      <header className="header">
        <div className="headerInner">
          <a className="logo" href="/">
            <img src="/logo.png" alt={CLINIC.name} className="logoMark" style={{ width: 100, height: 100, borderRadius: 0, background: 'transparent' }} />
            <span>
              <strong>{CLINIC.name}</strong>
              <small>犬と猫のホームドクター</small>
            </span>
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
            <p className="eyebrow">SERVICES</p>
            <h1 style={{ fontSize: 'clamp(22px, 4vw, 40px)' }}>市原市バウ・ミュウ動物病院の診療案内</h1>
            <p>犬・猫の幅広い症状に対応いたします。予約不要・当日受付OKですので、お気軽にご来院ください。</p>
          </div>

          <div style={{ display: 'grid', gap: '32px', marginTop: '40px' }}>
            {services.map((service) => (
              <article key={service.title} className="featureCard" style={{ textAlign: 'left', padding: '32px' }}>
                <h2 style={{ fontSize: '22px', marginBottom: '12px', color: '#ff8a3d' }}>{service.title}</h2>
                <p style={{ marginBottom: '16px', lineHeight: 1.8 }}>{service.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {service.items.map((item) => (
                    <span key={item} style={{ background: '#fff3e8', color: '#c06a1f', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600 }}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="container ctaBox">
          <p className="eyebrow">CONTACT</p>
          <h2>気になる症状があれば、<br />早めにご相談ください。</h2>
          <p>予約不要・当日受付OK。市原市で犬・猫の健康をサポートします。</p>
          <div className="ctaButtons">
            <a className="primaryBtn" href={`tel:${CLINIC.phone.replace(/-/g, '')}`}>電話で相談する</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <div>
            <strong>{CLINIC.name}</strong>
            <p>{CLINIC.zip} {CLINIC.address}<br />TEL {CLINIC.phone}</p>
          </div>
          <small>&copy; Bow-Mew Animal Hospital</small>
        </div>
      </footer>
    </main>
  )
}
