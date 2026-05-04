import { CLINIC, HOURS } from '@/lib/constants'

const features = [
  { title: '予約なし・当日受付OK', text: 'お電話やご予約なしでもご来院いただけます。急な体調不良にもすぐ対応いたします。', icon: '🏥' },
  { title: 'やさしく丁寧な診療', text: '症状だけでなく、普段の様子やご家族の不安にも寄り添いながら診療します。', icon: '🐾' },
  { title: 'わかりやすい説明', text: '検査・治療方針・費用の目安まで、できるだけわかりやすくお伝えします。', icon: '🩺' },
  { title: '予防医療を大切に', text: 'ワクチン、フィラリア、ノミ・マダニ予防、健康診断までサポートします。', icon: '🌿' },
]

const services = ['一般診療', '予防接種', '健康診断', 'フィラリア予防', 'ノミ・マダニ予防', '避妊・去勢相談', '皮膚・耳の相談', 'シニアケア']

export default function HomePage() {
  return (
    <main className="site">
      {/* ——— Header ——— */}
      <header className="header">
        <div className="headerInner">
          <a className="logo" href="#">
            <img src="/logo.png" alt={CLINIC.name} className="logoMark" style={{ width: 80, height: 80, borderRadius: 0, background: 'transparent', fontSize: 'inherit' }} />
            <span>
              <strong>{CLINIC.name}</strong>
              <small>犬と猫のホームドクター</small>
            </span>
          </a>
          <nav className="nav">
            <a href="#features">当院の特徴</a>
            <a href="#services">診療案内</a>
            <a href="#hours">診療時間</a>
            <a href="#access">アクセス</a>
          </nav>
          <a className="headerBtn" href={`tel:${CLINIC.phone.replace(/-/g, '')}`}>電話する</a>
        </div>
      </header>

      {/* ——— Hero ——— */}
      <section className="hero">
        <h1 className="sr-only">市原市の動物病院 バウ・ミュウ動物病院｜予約不要・当日受付OK・日曜診療</h1>
        <img src="/images/hero.jpg" alt="バウ・ミュウ動物病院 - 千葉県市原市八幡の動物病院 予約不要・当日受付OK" />
      </section>

      {/* ——— 予約不要バナー ——— */}
      <section className="walkInBanner">
        <div className="container walkInInner">
          <span className="walkInIcon">🐾</span>
          <div>
            <strong>予約なしでも診療OK！当日受付歓迎</strong>
            <p>お気軽にご来院ください。急な体調変化にもすぐに対応いたします。</p>
          </div>
          <a className="primaryBtn" href={`tel:${CLINIC.phone.replace(/-/g, '')}`}>今すぐ電話する</a>
        </div>
      </section>

      {/* ——— Features ——— */}
      <section id="features" className="section warm">
        <div className="container">
          <div className="sectionTitle">
            <p className="eyebrow">FEATURES</p>
            <h2>当院の特徴</h2>
            <p>温かみのある対応と、ていねいな説明を大切にしています。</p>
          </div>
          <div className="featureCards">
            {features.map((item) => (
              <article className="featureCard" key={item.title}>
                <div className="iconBubble">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Services ——— */}
      <section id="services" className="section">
        <div className="container serviceLayout">
          <div className="serviceText">
            <p className="eyebrow">SERVICES</p>
            <h2>診療案内</h2>
            <p>日々の体調不良から予防医療、健康相談まで幅広く対応します。必要に応じて検査や治療計画をご提案します。</p>
            <a className="primaryBtn" href={`tel:${CLINIC.phone.replace(/-/g, '')}`}>症状について相談する</a>
          </div>
          <div className="serviceList">
            {services.map((service) => (
              <div className="serviceItem" key={service}>
                <span>✓</span>
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— First Visit ——— */}
      <section className="section firstVisit">
        <div className="container visitBox">
          <div>
            <p className="eyebrow">FIRST VISIT</p>
            <h2>初めての方へ</h2>
            <p>
              初診時は、普段の様子・食欲・排泄・飲んでいるお薬などをお聞きします。
              ワクチン証明書や検査結果があればお持ちください。
            </p>
          </div>
          <div className="visitSteps">
            <div><strong>01</strong><span>受付・問診</span></div>
            <div><strong>02</strong><span>診察・検査</span></div>
            <div><strong>03</strong><span>説明・治療方針</span></div>
          </div>
        </div>
      </section>

      {/* ——— Hours ——— */}
      <section id="hours" className="section warm">
        <div className="container hoursGrid">
          <div>
            <p className="eyebrow">HOURS</p>
            <h2>診療時間</h2>
            <p>午前 {HOURS.amTime} / 午後 {HOURS.pmTime}</p>
            <div className="noteBox">休診：{HOURS.closedDay}</div>
          </div>
          <div className="tableCard">
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
        </div>
      </section>

      {/* ——— Access ——— */}
      <section id="access" className="section">
        <div className="container accessGrid">
          <div>
            <p className="eyebrow">ACCESS</p>
            <h2>アクセス</h2>
            <div className="accessCard">
              <p><strong>住所</strong><br />{CLINIC.zip} {CLINIC.address}</p>
              <p><strong>電話</strong><br /><a href={`tel:${CLINIC.phone.replace(/-/g, '')}`}>{CLINIC.phone}</a></p>
              <p><strong>電車</strong><br />{CLINIC.access}</p>
              <p><strong>駐車場</strong><br />{CLINIC.parking}</p>
            </div>
          </div>
          <div className="map">
            <iframe
              title="map"
              src={CLINIC.googleMapUrl}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ——— Final CTA ——— */}
      <section className="finalCta">
        <div className="container ctaBox">
          <p className="eyebrow">CONTACT</p>
          <h2>気になる症状があれば、<br />早めにご相談ください。</h2>
          <p>犬・猫の健康管理、予防、体調不良まで丁寧に診療します。</p>
          <div className="ctaButtons">
            <a className="primaryBtn" href={`tel:${CLINIC.phone.replace(/-/g, '')}`}>電話で相談する</a>
          </div>
        </div>
      </section>

      {/* ——— Footer ——— */}
      <footer className="footer">
        <div className="container footerInner">
          <div>
            <strong>{CLINIC.name}</strong>
            <p>{CLINIC.zip} {CLINIC.address}<br />TEL {CLINIC.phone}</p>
          </div>
          <small>&copy; {CLINIC.nameEn}</small>
        </div>
      </footer>

      {/* ——— Mobile Fixed CTA ——— */}
      <div className="mobileCta">
        <a href={`tel:${CLINIC.phone.replace(/-/g, '')}`} className="mobileCta-phone">電話する</a>
      </div>
    </main>
  )
}
