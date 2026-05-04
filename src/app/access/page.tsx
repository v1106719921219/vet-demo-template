import type { Metadata } from 'next'
import { CLINIC, HOURS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'アクセス・診療時間｜市原市の動物病院 バウ・ミュウ動物病院',
  description:
    '千葉県市原市八幡520 バウ・ミュウ動物病院へのアクセス。JR内房線八幡宿駅西口より徒歩7分。駐車場6台無料完備。診療時間：午前9:00〜12:30/午後15:30〜18:00。日曜祝日も午前診療。',
  alternates: { canonical: 'https://bowmew-ah.com/access' },
}

export default function AccessPage() {
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
        </div>
      </header>

      <section className="section warm">
        <div className="container">
          <div className="sectionTitle">
            <p className="eyebrow">ACCESS</p>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>アクセス・診療時間｜市原市バウ・ミュウ動物病院</h1>
            <p>JR八幡宿駅から徒歩7分。駐車場6台無料完備。</p>
          </div>

          <div style={{ display: 'grid', gap: '32px', marginTop: '40px' }}>
            <article className="featureCard" style={{ textAlign: 'left', padding: '32px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: '#ff8a3d' }}>所在地・アクセス</h2>
              <div style={{ lineHeight: 2, fontSize: '16px' }}>
                <p>
                  <strong>住所：</strong>{CLINIC.zip} {CLINIC.address}<br />
                  <strong>電話：</strong><a href={`tel:${CLINIC.phone.replace(/-/g, '')}`}>{CLINIC.phone}</a><br />
                  <strong>FAX：</strong>{CLINIC.fax}
                </p>
                <p style={{ marginTop: '16px' }}>
                  <strong>電車でお越しの方</strong><br />
                  {CLINIC.access}
                </p>
                <p>
                  <strong>お車でお越しの方</strong><br />
                  {CLINIC.icAccess}<br />
                  {CLINIC.parking}
                </p>
              </div>
            </article>

            <div className="map" style={{ borderRadius: '16px', overflow: 'hidden', height: '400px' }}>
              <iframe
                title="バウ・ミュウ動物病院の地図"
                src={CLINIC.googleMapUrl}
                style={{ width: '100%', height: '100%', border: 0 }}
                loading="lazy"
              />
            </div>

            <article className="featureCard" style={{ textAlign: 'left', padding: '32px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: '#ff8a3d' }}>診療時間</h2>
              <p style={{ marginBottom: '16px', lineHeight: 1.8 }}>
                午前 {HOURS.amTime} / 午後 {HOURS.pmTime}<br />
                <strong>休診日：</strong>{HOURS.closedDay}
              </p>
              <div className="tableCard" style={{ borderRadius: '16px' }}>
                <table>
                  <thead>
                    <tr>
                      <th>時間</th>
                      {HOURS.schedule.map((s) => <th key={s.day}>{s.day}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{HOURS.amTime}</td>
                      {HOURS.schedule.map((s) => <td key={`am-${s.day}`}>{s.am ? '●' : '休'}</td>)}
                    </tr>
                    <tr>
                      <td>{HOURS.pmTime}</td>
                      {HOURS.schedule.map((s) => <td key={`pm-${s.day}`}>{s.pm ? '●' : '休'}</td>)}
                    </tr>
                  </tbody>
                </table>
                <p className="tableNote">{HOURS.note}</p>
              </div>
              <div style={{ marginTop: '16px', padding: '16px', background: '#fff3e8', borderRadius: '12px' }}>
                <strong style={{ color: '#c06a1f' }}>予約不要・当日受付OK</strong>
                <p style={{ margin: '4px 0 0', color: '#555', fontSize: '14px' }}>診療時間内であれば、いつでもご来院いただけます。</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="container ctaBox">
          <p className="eyebrow">CONTACT</p>
          <h2>お気軽にご来院ください</h2>
          <p>市原市八幡の動物病院。予約不要・当日受付OK。</p>
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
