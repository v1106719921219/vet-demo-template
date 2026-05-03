import PawPrint from './PawPrint'

const news = [
  { d: '2026.04.15', c: 'notice', cl: 'お知らせ', t: 'GW期間中の診療スケジュールについて' },
  { d: '2026.04.01', c: 'campaign', cl: 'キャンペーン', t: '春の健康診断・予防接種のご案内' },
  { d: '2026.03.20', c: 'event', cl: 'イベント', t: 'しつけ教室（第8回）を開催します' },
]

export default function NewsSection() {
  return (
    <section className="section" style={{ padding: '80px 0 20px' }}>
      <div className="section-title">
        <span className="en">Information</span>
        <h2>お知らせ</h2>
        <div className="deco"><PawPrint size={18} color="#F5A04A" /></div>
      </div>
      <div className="info">
        <div className="info-wrap">
          <ul className="info-list">
            {news.map((n, i) => (
              <li key={i} className="info-item">
                <span className="info-date">{n.d}</span>
                <span className={`info-cat ${n.c}`}>{n.cl}</span>
                <span className="info-title">{n.t}</span>
                <span className="info-arrow">&rsaquo;</span>
              </li>
            ))}
          </ul>
          <div className="info-foot">
            <a href="#" className="btn btn-ghost">お知らせ一覧 &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  )
}
