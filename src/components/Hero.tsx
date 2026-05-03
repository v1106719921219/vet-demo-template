import PawPrint from './PawPrint'
import Cloud from './Cloud'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="sun" />
        <Cloud size={110} color="#fff" style={{ position: 'absolute', top: 80, left: '6%', opacity: 0.7 }} />
        <Cloud size={80} color="#fff" style={{ position: 'absolute', top: 200, right: '12%', opacity: 0.55 }} />
        <Cloud size={130} color="#fff" style={{ position: 'absolute', top: 420, left: '18%', opacity: 0.5 }} />
      </div>
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <PawPrint size={14} color="#F5A04A" />
            <span>千葉県市原市・犬と猫のホームドクター</span>
          </div>
          <h1>
            <span className="lead">千葉県市原市にある</span>
            <span className="main"><span style={{ whiteSpace: 'nowrap' }}>わんちゃん、ねこちゃんの</span><br /><span className="accent">あたたかい</span>かかりつけへ。</span>
          </h1>
          <p>
            やさしい診察、ていねいな説明、そしてQOLを大切にした診療。<br />
            ご家族の一員の、ちいさな変化も気軽にご相談ください。
          </p>
          <div className="hero-actions">
            <a href="#cta" className="btn btn-orange">ご予約・お問い合わせ <span className="arrow">&rarr;</span></a>
            <a href="#hours" className="btn btn-ghost">診療時間を見る</a>
          </div>
          <div className="hero-hours">
            <div>
              <div className="k">診療時間</div>
              <div className="v">9:00-12:00 / 16:00-19:00</div>
            </div>
            <span className="sep">|</span>
            <div>
              <div className="k">休診日</div>
              <div className="v">水曜・日曜午後・祝日</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="circle-back" />
          <div className="circle-main">
            <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }}>
              <defs>
                <radialGradient id="heroSky" cx="50%" cy="30%">
                  <stop offset="0" stopColor="#FDF7EC" />
                  <stop offset="1" stopColor="#FBC989" />
                </radialGradient>
              </defs>
              <rect width="400" height="400" fill="url(#heroSky)" />
              <circle cx="310" cy="100" r="50" fill="#F5A04A" opacity="0.85" />
              <g opacity="0.8">
                <ellipse cx="80" cy="260" rx="55" ry="20" fill="#8BB26A" />
                <ellipse cx="320" cy="280" rx="70" ry="22" fill="#6A9347" />
              </g>
              {/* Dog */}
              <g transform="translate(140,200)">
                <ellipse cx="50" cy="90" rx="60" ry="28" fill="#4A3826" />
                <ellipse cx="20" cy="60" rx="22" ry="26" fill="#6E5A42" />
                <ellipse cx="8" cy="50" rx="7" ry="12" fill="#4A3826" />
                <ellipse cx="30" cy="58" rx="5" ry="8" fill="#4A3826" />
                <circle cx="16" cy="58" r="2" fill="#FDF7EC" />
                <circle cx="26" cy="58" r="2" fill="#FDF7EC" />
                <ellipse cx="21" cy="66" rx="2" ry="1.5" fill="#FDF7EC" />
              </g>
              {/* Cat */}
              <g transform="translate(220,220)">
                <ellipse cx="40" cy="80" rx="46" ry="22" fill="#B5A48A" />
                <circle cx="25" cy="55" r="20" fill="#B5A48A" />
                <polygon points="15,42 18,28 28,42" fill="#B5A48A" />
                <polygon points="35,42 32,28 22,42" fill="#B5A48A" />
                <circle cx="20" cy="55" r="1.8" fill="#4A3826" />
                <circle cx="30" cy="55" r="1.8" fill="#4A3826" />
                <path d="M 22 60 Q 25 63 28 60" stroke="#4A3826" strokeWidth="1.2" fill="none" />
                <path d="M 72 78 Q 90 60 82 45" stroke="#B5A48A" strokeWidth="5" strokeLinecap="round" fill="none" />
              </g>
            </svg>
          </div>
          <div className="paw-float p1"><PawPrint size={52} color="#F5A04A" /></div>
          <div className="paw-float p2"><PawPrint size={44} color="#7FB8C9" /></div>
          <div className="paw-float p3"><PawPrint size={36} color="#8BB26A" /></div>
        </div>
      </div>
      <div className="hero-scroll">SCROLL</div>
    </section>
  )
}
