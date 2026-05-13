import type { Metadata } from 'next'
import { CLINIC, HOURS } from '@/lib/constants'
import MobileMenu from '@/components/MobileMenu'

export const metadata: Metadata = {
  title: '初めての方へ｜市原市の動物病院 バウ・ミュウ動物病院',
  description:
    '千葉県市原市バウ・ミュウ動物病院に初めてお越しの方へ。予約不要・当日受付OK。持ち物・診療の流れ・料金の目安をご案内します。JR八幡宿駅徒歩7分。駐車場6台無料。',
  alternates: { canonical: 'https://bowmew-ah.com/first-visit' },
}

export default function FirstVisitPage() {
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
            <p className="eyebrow">FIRST VISIT</p>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>初めての方へ｜市原市バウ・ミュウ動物病院</h1>
            <p>当院は<strong>予約不要・当日受付OK</strong>です。お気軽にご来院ください。</p>
          </div>

          <div style={{ display: 'grid', gap: '32px', marginTop: '40px' }}>
            <article className="featureCard" style={{ textAlign: 'left', padding: '32px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: '#ff8a3d' }}>診療の流れ</h2>
              <div style={{ display: 'grid', gap: '20px' }}>
                {[
                  { step: '01', title: '受付・問診', desc: '受付にて問診票をご記入いただきます。現在の症状、普段の様子、食欲、排泄の状態などをお聞きします。' },
                  { step: '02', title: '診察・検査', desc: '獣医師が丁寧に診察いたします。必要に応じて血液検査、レントゲン、超音波検査などを実施します。' },
                  { step: '03', title: '説明・治療方針', desc: '検査結果と治療方針をわかりやすくご説明します。費用の目安もお伝えしますので、ご安心ください。' },
                  { step: '04', title: '会計・次回予約', desc: 'お会計後、必要に応じて次回のご来院日をご案内します。お薬の飲ませ方なども丁寧にお伝えします。' },
                ].map((item) => (
                  <div key={item.step} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <span style={{ background: '#ff8a3d', color: '#fff', borderRadius: '50%', width: '40px', height: '40px', display: 'grid', placeItems: 'center', fontWeight: 800, flexShrink: 0 }}>{item.step}</span>
                    <div>
                      <strong style={{ fontSize: '17px' }}>{item.title}</strong>
                      <p style={{ margin: '4px 0 0', lineHeight: 1.8, color: '#555' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="featureCard" style={{ textAlign: 'left', padding: '32px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: '#ff8a3d' }}>お持ちいただくもの</h2>
              <ul style={{ lineHeight: 2.2, paddingLeft: '20px' }}>
                <li>ワクチン証明書（お持ちの場合）</li>
                <li>他院での検査結果（お持ちの場合）</li>
                <li>現在服用中のお薬</li>
                <li>ペット保険証（ご加入の場合）</li>
                <li>キャリーケースまたはリード</li>
              </ul>
            </article>

            <article className="featureCard" style={{ textAlign: 'left', padding: '32px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: '#ff8a3d' }}>診療時間・アクセス</h2>
              <p style={{ lineHeight: 1.8 }}>
                <strong>診療時間：</strong>午前 {HOURS.amTime} / 午後 {HOURS.pmTime}<br />
                <strong>休診日：</strong>{HOURS.closedDay}<br />
                <strong>住所：</strong>{CLINIC.zip} {CLINIC.address}<br />
                <strong>電話：</strong><a href={`tel:${CLINIC.phone.replace(/-/g, '')}`}>{CLINIC.phone}</a><br />
                <strong>アクセス：</strong>{CLINIC.access}<br />
                <strong>駐車場：</strong>{CLINIC.parking}
              </p>
            </article>

            <article className="featureCard" style={{ textAlign: 'left', padding: '32px', background: '#fff3e8' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: '#ff8a3d' }}>ご予約について</h2>
              <p style={{ lineHeight: 1.8, fontSize: '16px' }}>
                当院は<strong>予約なし・当日受付OK</strong>です。診療時間内であればいつでもご来院いただけます。<br />
                急な体調変化にもすぐに対応いたします。<br />
                ※混雑状況によってはお待ちいただく場合がございます。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="container ctaBox">
          <p className="eyebrow">CONTACT</p>
          <h2>お気軽にご来院ください</h2>
          <p>予約不要・当日受付OK。市原市の犬・猫のかかりつけ医として、丁寧に対応いたします。</p>
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
