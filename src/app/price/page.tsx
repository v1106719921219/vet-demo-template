import type { Metadata } from 'next'
import { CLINIC } from '@/lib/constants'

export const metadata: Metadata = {
  title: '料金案内｜市原市の動物病院 バウ・ミュウ動物病院',
  description:
    '千葉県市原市バウ・ミュウ動物病院の料金案内。初診料・再診料・ワクチン・健康診断・避妊去勢手術などの料金目安をご案内します。',
  alternates: { canonical: 'https://bowmew-ah.com/price' },
}

const prices = [
  {
    category: '診察料',
    items: [
      { name: '初診料', price: '1,500円〜' },
      { name: '再診料', price: '800円〜' },
    ],
  },
  {
    category: '予防接種',
    items: [
      { name: '犬混合ワクチン（5種）', price: '6,000円〜' },
      { name: '犬混合ワクチン（8種）', price: '8,000円〜' },
      { name: '猫混合ワクチン（3種）', price: '4,500円〜' },
      { name: '狂犬病予防注射', price: '3,000円〜' },
    ],
  },
  {
    category: 'フィラリア・ノミダニ予防',
    items: [
      { name: 'フィラリア予防（1ヶ月分）', price: '1,000円〜' },
      { name: 'ノミ・マダニ予防（1ヶ月分）', price: '1,500円〜' },
    ],
  },
  {
    category: '健康診断',
    items: [
      { name: '基本健康診断（血液検査）', price: '5,000円〜' },
      { name: '総合健康診断', price: '15,000円〜' },
    ],
  },
  {
    category: '避妊・去勢手術',
    items: [
      { name: '猫の去勢手術', price: '15,000円〜' },
      { name: '猫の避妊手術', price: '25,000円〜' },
      { name: '犬の去勢手術（小型犬）', price: '25,000円〜' },
      { name: '犬の避妊手術（小型犬）', price: '35,000円〜' },
    ],
  },
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
            {prices.map((group) => (
              <article key={group.category} className="featureCard" style={{ textAlign: 'left', padding: '32px' }}>
                <h2 style={{ fontSize: '20px', marginBottom: '16px', color: '#ff8a3d' }}>{group.category}</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {group.items.map((item) => (
                      <tr key={item.name} style={{ borderBottom: '1px solid #f0e6d8' }}>
                        <td style={{ padding: '14px 8px', fontSize: '15px' }}>{item.name}</td>
                        <td style={{ padding: '14px 8px', textAlign: 'right', fontWeight: 700, color: '#333', whiteSpace: 'nowrap' }}>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </article>
            ))}

            <div style={{ padding: '24px', background: '#fff3e8', borderRadius: '16px', lineHeight: 1.8 }}>
              <strong style={{ color: '#c06a1f' }}>料金に関するご注意</strong>
              <ul style={{ marginTop: '8px', paddingLeft: '20px', color: '#555', fontSize: '14px' }}>
                <li>上記は税込の目安料金です。症状・体重・検査内容により異なります。</li>
                <li>詳しい料金はお電話またはご来院時にお気軽にお尋ねください。</li>
                <li>お支払いは現金のみとなります。</li>
                <li>各種ペット保険に対応しています。</li>
              </ul>
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
