export default function DirectorMessage() {
  return (
    <section className="director" id="director">
      <div className="wrap director-inner">
        <div className="director-photo">
          <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
            <defs>
              <linearGradient id="dbg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#FBC989" />
                <stop offset="1" stopColor="#F5A04A" />
              </linearGradient>
            </defs>
            <rect width="400" height="500" fill="url(#dbg)" />
            <circle cx="200" cy="200" r="160" fill="#FDF7EC" opacity="0.5" />
            <path d="M 50 500 Q 50 380 130 350 L 270 350 Q 350 380 350 500 Z" fill="#fff" />
            <path d="M 160 350 L 200 410 L 240 350 Z" fill="#4A3826" opacity="0.12" />
            <ellipse cx="200" cy="230" rx="88" ry="100" fill="#4A3826" />
            <path d="M 120 210 Q 140 150 200 140 Q 260 150 280 210 Q 280 170 250 145 Q 220 130 180 132 Q 135 155 120 210 Z" fill="#2A1F15" />
            <rect x="160" y="230" width="32" height="18" rx="9" fill="none" stroke="#fff" strokeWidth="1.6" opacity="0.75" />
            <rect x="208" y="230" width="32" height="18" rx="9" fill="none" stroke="#fff" strokeWidth="1.6" opacity="0.75" />
            <line x1="192" y1="239" x2="208" y2="239" stroke="#fff" strokeWidth="1.4" opacity="0.75" />
            <path d="M 140 365 Q 130 415 160 445 Q 180 455 195 430" stroke="#F5A04A" strokeWidth="4" fill="none" />
            <path d="M 260 365 Q 270 415 240 445 Q 220 455 205 430" stroke="#F5A04A" strokeWidth="4" fill="none" />
            <circle cx="200" cy="455" r="14" fill="#F5A04A" />
            <circle cx="200" cy="455" r="6" fill="#fff" />
            <g transform="translate(280,430)">
              <ellipse cx="30" cy="30" rx="36" ry="20" fill="#B5A48A" />
              <circle cx="12" cy="18" r="14" fill="#B5A48A" />
              <ellipse cx="4" cy="12" rx="5" ry="9" fill="#8A7763" />
              <circle cx="14" cy="18" r="1.8" fill="#4A3826" />
            </g>
          </svg>
          <div className="ribbon">院長 ・ 獣医師</div>
        </div>
        <div className="director-copy">
          <div className="section-title">
            <span className="en">Message from Director</span>
            <h2>院長ごあいさつ</h2>
          </div>
          <p className="director-lead">
            地域のホームドクターとして、<br />
            ご家族の毎日にそっと寄り添います。
          </p>
          <p className="director-body">
            はじめまして、バウミュウ動物病院の院長です。<br />
            わんちゃん・ねこちゃんにやさしく接すること、飼い主様にわかりやすく丁寧にご説明し、さまざまな治療の選択肢をお伝えすること、そして生活の質を大切にした治療を心がけております。
            <br /><br />
            動物たちの病状を飼い主様にしっかり理解していただき、納得した治療をお選びいただけるよう、スタッフ一同努めてまいります。
          </p>
          <div className="director-sign">
            <span className="role">院長</span>
            <span className="name">獣医師・山田 太郎</span>
          </div>
        </div>
      </div>
    </section>
  )
}
