import type { Metadata } from 'next'
import { CLINIC, HOURS } from '@/lib/constants'
import MobileMenu from '@/components/MobileMenu'

export const metadata: Metadata = {
  title: '市原市八幡の動物病院｜バウ・ミュウ動物病院｜予約不要・当日受付OK',
  description:
    '千葉県市原市八幡にあるバウ・ミュウ動物病院。予約不要・当日受付OK。犬猫の一般診療・予防接種・健康診断。日曜祝日も午前診療。JR八幡宿駅徒歩7分。駐車場6台無料。市原市・八幡・五井・姉ケ崎エリア対応。',
  alternates: { canonical: 'https://bowmew-ah.com/area' },
}

export default function AreaPage() {
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
          <MobileMenu />
        </div>
      </header>

      <section className="section warm">
        <div className="container">
          <div className="sectionTitle">
            <p className="eyebrow">AREA</p>
            <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)' }}>市原市八幡の動物病院｜バウ・ミュウ動物病院</h1>
            <p>市原市八幡で30年以上、地域の犬・猫の健康を守り続けています。</p>
          </div>

          <div style={{ display: 'grid', gap: '32px', marginTop: '40px' }}>
            <article className="featureCard" style={{ textAlign: 'left', padding: '32px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: '#ff8a3d' }}>市原市で動物病院をお探しの方へ</h2>
              <p style={{ lineHeight: 2, fontSize: '16px' }}>
                バウ・ミュウ動物病院は、千葉県市原市八幡にある犬と猫のための動物病院です。
                JR内房線「八幡宿駅」東口より徒歩7分、駐車場6台完備（無料）と、市原市内からのアクセスが便利です。<br /><br />
                当院は<strong>予約不要・当日受付OK</strong>。急な体調不良でも、診療時間内であればすぐにご来院いただけます。
                他院が予約制で受診できない場合も、当院なら当日対応が可能です。<br /><br />
                日曜・祝日も午前中は診療しておりますので、平日お忙しい飼い主さまにもご利用いただいています。
              </p>
            </article>

            <article className="featureCard" style={{ textAlign: 'left', padding: '32px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: '#ff8a3d' }}>対応エリア</h2>
              <p style={{ lineHeight: 1.8, marginBottom: '16px' }}>
                市原市を中心に、近隣エリアからも多くの方にご来院いただいています。
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['八幡', '五井', '姉ケ崎', '辰巳台', '国分寺台', 'ちはら台', '市原', '白金町', '青柳', '若宮', '東五所', '西五所', '菊間', '潤井戸', '千種', '袖ケ浦市', '木更津市'].map((area) => (
                  <span key={area} style={{ background: '#fff3e8', color: '#c06a1f', padding: '8px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 600 }}>
                    {area}
                  </span>
                ))}
              </div>
            </article>

            <article className="featureCard" style={{ textAlign: 'left', padding: '32px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: '#ff8a3d' }}>市原市の動物病院 バウ・ミュウが選ばれる理由</h2>
              <div style={{ display: 'grid', gap: '16px' }}>
                {[
                  { title: '予約不要・当日受付OK', desc: '急な体調変化にもすぐ対応。他院で予約が取れない場合もお気軽にどうぞ。' },
                  { title: '開業30年以上の信頼', desc: '市原市八幡で長年にわたり、地域の動物たちの健康を見守ってきました。' },
                  { title: '日曜・祝日も午前診療', desc: '平日お仕事で忙しい飼い主さまも安心。週末にご来院いただけます。' },
                  { title: 'わかりやすい説明', desc: '検査結果・治療方針・費用の目安まで、丁寧にお伝えします。' },
                  { title: '駐車場6台完備（無料）', desc: 'お車でも電車でもアクセス便利。JR八幡宿駅から徒歩7分。' },
                  { title: '幅広い診療に対応', desc: '一般診療・予防接種・健康診断・避妊去勢・シニアケアまで。' },
                ].map((item) => (
                  <div key={item.title} style={{ padding: '16px', background: '#fff3e8', borderRadius: '12px' }}>
                    <strong style={{ color: '#c06a1f' }}>{item.title}</strong>
                    <p style={{ margin: '4px 0 0', color: '#555', fontSize: '14px' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="featureCard" style={{ textAlign: 'left', padding: '32px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: '#ff8a3d' }}>診療時間・アクセス情報</h2>
              <p style={{ lineHeight: 2, fontSize: '16px' }}>
                <strong>住所：</strong>{CLINIC.zip} {CLINIC.address}<br />
                <strong>電話：</strong><a href={`tel:${CLINIC.phone.replace(/-/g, '')}`}>{CLINIC.phone}</a><br />
                <strong>診療時間：</strong>午前 {HOURS.amTime} / 午後 {HOURS.pmTime}<br />
                <strong>休診日：</strong>{HOURS.closedDay}<br />
                <strong>アクセス：</strong>{CLINIC.access}<br />
                <strong>お車：</strong>{CLINIC.icAccess}<br />
                <strong>駐車場：</strong>{CLINIC.parking}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="container ctaBox">
          <p className="eyebrow">CONTACT</p>
          <h2>市原市で動物病院をお探しなら<br />バウ・ミュウ動物病院へ</h2>
          <p>予約不要・当日受付OK。お気軽にご来院・お電話ください。</p>
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
