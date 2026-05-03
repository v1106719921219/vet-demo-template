import PawPrint from './PawPrint'

const items = [
  {
    tag: 'ABOUT',
    t: 'クリニックについて',
    p: '市原市八幡のわんちゃん・ねこちゃんのホームドクターとして、開業30年。やさしく丁寧な診察を心がけています。',
    color: '#FBC989',
    svg: (
      <svg viewBox="0 0 400 300">
        <rect width="400" height="300" fill="#FBF1DE" />
        <rect x="60" y="80" width="280" height="170" rx="14" fill="#fff" stroke="#F5A04A" strokeWidth="2" />
        <polygon points="200,40 70,90 330,90" fill="#F5A04A" />
        <rect x="180" y="170" width="40" height="80" fill="#8BB26A" />
        <circle cx="200" cy="150" r="18" fill="#F5A04A" opacity="0.3" />
      </svg>
    ),
  },
  {
    tag: 'MEDICAL',
    t: '診療案内',
    p: '一般内科・外科・循環器・歯科・腫瘍科まで、幅広い分野に対応。高度医療センターとの連携も整っています。',
    color: '#BFDCE4',
    svg: (
      <svg viewBox="0 0 400 300">
        <rect width="400" height="300" fill="#E8F3F6" />
        <circle cx="200" cy="150" r="80" fill="#fff" stroke="#7FB8C9" strokeWidth="2" />
        <path d="M 200 110 v 80 M 160 150 h 80" stroke="#F5A04A" strokeWidth="10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tag: 'LIFE',
    t: 'ライフサービス',
    p: 'トリミング・ペットホテル・しつけ教室・ドッグマッサージ。医療と美容のトータルケアをご提供します。',
    color: '#DFECCE',
    svg: (
      <svg viewBox="0 0 400 300">
        <rect width="400" height="300" fill="#E8F0DB" />
        <g transform="translate(140,100)">
          <ellipse cx="60" cy="80" rx="70" ry="28" fill="#8BB26A" />
          <circle cx="30" cy="50" r="26" fill="#8BB26A" />
          <ellipse cx="15" cy="35" rx="8" ry="14" fill="#6A9347" />
          <ellipse cx="45" cy="35" rx="8" ry="14" fill="#6A9347" />
          <circle cx="22" cy="50" r="2" fill="#fff" />
          <circle cx="38" cy="50" r="2" fill="#fff" />
        </g>
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section className="features section" id="features">
      <div className="wrap">
        <div className="section-title">
          <span className="en">Clinic &amp; Services</span>
          <h2>わたしたちについて</h2>
          <div className="deco"><PawPrint size={18} color="#F5A04A" /></div>
        </div>
        <div className="feature-grid">
          {items.map((it, i) => (
            <div className="feature" key={i}>
              <div className="feature-img" style={{ background: it.color }}>{it.svg}</div>
              <div className="feature-body">
                <div className="feature-tag">{it.tag}</div>
                <h3>{it.t}</h3>
                <p>{it.p}</p>
                <a href="#" className="feature-link">詳しく見る</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
