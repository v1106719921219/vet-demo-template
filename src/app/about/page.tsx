import type { Metadata } from 'next'
import { CLINIC } from '@/lib/constants'
import MobileMenu from '@/components/MobileMenu'

export const metadata: Metadata = {
  title: '動物病院紹介｜市原市の動物病院 バウ・ミュウ動物病院',
  description:
    '千葉県市原市八幡のバウ・ミュウ動物病院の紹介。開業30年以上の実績。院長・町田幸男（東京農工大学獣医科卒）。地域に根ざしたやさしい動物医療を提供しています。',
  alternates: { canonical: 'https://bowmew-ah.com/about' },
}

export default function AboutPage() {
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
            <p className="eyebrow">ABOUT</p>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>動物病院紹介｜市原市バウ・ミュウ動物病院</h1>
            <p>市原市八幡で30年以上、地域の犬・猫の健康を見守ってきました。</p>
          </div>

          <div style={{ display: 'grid', gap: '32px', marginTop: '40px' }}>
            <article className="featureCard" style={{ textAlign: 'left', padding: '32px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: '#ff8a3d' }}>当院の理念</h2>
              <p style={{ lineHeight: 2, fontSize: '16px' }}>
                バウ・ミュウ動物病院は、千葉県市原市八幡にある犬と猫のための動物病院です。<br /><br />
                「大切な家族の健康を守るために」をモットーに、飼い主さまとペットに寄り添った丁寧な診療を心がけています。<br /><br />
                症状の説明や治療方針は、わかりやすい言葉でお伝えし、飼い主さまが安心して治療を選択できるようサポートいたします。<br /><br />
                <strong>予約不要・当日受付OK</strong>ですので、急な体調変化にもすぐに対応いたします。
              </p>
            </article>

            <article className="featureCard" style={{ textAlign: 'left', padding: '32px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: '#ff8a3d' }}>院長紹介</h2>
              <div style={{ lineHeight: 2 }}>
                <p style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>{CLINIC.director.name}</p>
                <p style={{ color: '#777', marginBottom: '16px' }}>{CLINIC.director.title}｜{CLINIC.director.education}</p>
                <p style={{ fontSize: '16px' }}>
                  市原市八幡で開業して30年以上になります。<br />
                  地域のわんちゃん・ねこちゃんのホームドクターとして、一頭一頭に寄り添った診療を大切にしています。<br /><br />
                  お気軽にご相談ください。些細なことでも構いません。<br />
                  飼い主さまとペットの健康と幸せを、全力でサポートいたします。
                </p>
              </div>
            </article>

            <article className="featureCard" style={{ textAlign: 'left', padding: '32px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: '#ff8a3d' }}>当院の特徴</h2>
              <div style={{ display: 'grid', gap: '16px' }}>
                {[
                  { title: '予約不要・当日受付OK', desc: 'お電話やご予約なしでご来院いただけます。急な体調不良にもすぐ対応。' },
                  { title: '丁寧でわかりやすい説明', desc: '検査結果・治療方針・費用の目安まで、わかりやすくお伝えします。' },
                  { title: '開業30年以上の実績', desc: '市原市八幡で長年にわたり、地域の動物たちの健康を支えてきました。' },
                  { title: '日曜・祝日も午前診療', desc: '平日お仕事で忙しい飼い主さまも、週末にご来院いただけます。' },
                  { title: '駐車場6台完備（無料）', desc: 'お車でお越しの方も安心。JR八幡宿駅からも徒歩7分。' },
                ].map((item) => (
                  <div key={item.title} style={{ padding: '16px', background: '#fff3e8', borderRadius: '12px' }}>
                    <strong style={{ color: '#c06a1f' }}>{item.title}</strong>
                    <p style={{ margin: '4px 0 0', color: '#555', fontSize: '14px' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="featureCard" style={{ textAlign: 'left', padding: '32px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: '#ff8a3d' }}>病院概要</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse', lineHeight: 2 }}>
                <tbody>
                  {[
                    ['病院名', CLINIC.name],
                    ['院長', CLINIC.director.name],
                    ['所在地', `${CLINIC.zip} ${CLINIC.address}`],
                    ['電話番号', CLINIC.phone],
                    ['FAX', CLINIC.fax],
                    ['対象動物', '犬・猫'],
                    ['アクセス', CLINIC.access],
                    ['駐車場', CLINIC.parking],
                  ].map(([label, value]) => (
                    <tr key={label} style={{ borderBottom: '1px solid #eee' }}>
                      <th style={{ textAlign: 'left', padding: '12px 16px', width: '120px', color: '#777', fontWeight: 600 }}>{label}</th>
                      <td style={{ padding: '12px 16px' }}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="container ctaBox">
          <p className="eyebrow">CONTACT</p>
          <h2>お気軽にご相談ください</h2>
          <p>市原市で犬・猫の健康に関するお悩みは、バウ・ミュウ動物病院へ。</p>
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
