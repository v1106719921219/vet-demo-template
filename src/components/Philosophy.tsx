import PawPrint from './PawPrint'

export default function Philosophy() {
  return (
    <section className="philosophy section" id="philosophy">
      {/* Upper block: sign photo + text */}
      <div className="phil-block phil-block--top">
        <div className="phil-photo phil-photo--top">
          <img src="/clinic-sign.jpeg" alt="バウミュウ動物病院 看板" />
        </div>
        <div className="phil-text phil-text--top">
          <h2 className="phil-heading">
            大切な家族の<br />健康を守るために
            <span className="phil-heading-paw"><PawPrint size={28} color="#7FB8C9" /></span>
          </h2>
          <p className="phil-sub">
            地域に根ざした、やさしく信頼される<br />
            動物病院を目指しています。
          </p>
        </div>
      </div>

      {/* Lower block: entrance photo + features */}
      <div className="phil-block phil-block--bottom">
        <div className="phil-features">
          <div className="phil-feature">
            <div className="phil-feature-icon">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#e8f4f8" />
                <circle cx="20" cy="16" r="6" stroke="#5a9cb5" strokeWidth="2" fill="none" />
                <path d="M14 26c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#5a9cb5" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M26 16l4 4" stroke="#5a9cb5" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h3>丁寧な診療</h3>
              <p>わかりやすく丁寧な説明を<br />心がけています</p>
            </div>
          </div>
          <div className="phil-feature">
            <div className="phil-feature-icon">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#e8f4f8" />
                <circle cx="14" cy="14" r="3" fill="#5a9cb5" />
                <circle cx="26" cy="14" r="3" fill="#5a9cb5" />
                <circle cx="10" cy="20" r="2.5" fill="#5a9cb5" />
                <circle cx="30" cy="20" r="2.5" fill="#5a9cb5" />
                <ellipse cx="20" cy="25" rx="6" ry="5" fill="#5a9cb5" />
              </svg>
            </div>
            <div>
              <h3>予防・健康管理</h3>
              <p>予防医療にも力を入れ、<br />健康をサポートします</p>
            </div>
          </div>
          <div className="phil-feature">
            <div className="phil-feature-icon">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#e8f4f8" />
                <path d="M12 28V18l8-6 8 6v10H12z" stroke="#5a9cb5" strokeWidth="2" fill="none" strokeLinejoin="round" />
                <rect x="17" y="22" width="6" height="6" stroke="#5a9cb5" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <div>
              <h3>地域に根ざして</h3>
              <p>地域の皆さまと動物たちの<br />暮らしを支えます</p>
            </div>
          </div>
        </div>
        <div className="phil-photo phil-photo--bottom">
          <img src="/clinic-entrance.jpeg" alt="バウミュウ動物病院 入口" />
        </div>
      </div>

      {/* Bottom decoration: dog & cat silhouette + paw prints */}
      <div className="phil-deco-bottom">
        <svg className="phil-silhouette" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Dog silhouette */}
          <path d="M10 110 C10 80 25 65 35 60 C40 55 42 45 40 38 C38 32 42 28 46 30 C50 32 52 38 50 44 C52 42 58 40 62 42 C66 44 66 50 62 52 C58 54 54 52 52 48 C50 55 55 62 60 65 C70 70 80 75 85 80 C90 85 88 100 85 110" fill="#7FB8C9" opacity="0.5" />
          {/* Cat silhouette */}
          <path d="M95 110 C95 85 100 78 105 72 C108 68 110 60 108 52 C106 48 108 42 112 40 L115 30 L118 42 L122 30 L124 42 C128 44 128 50 126 54 C124 60 125 68 128 72 C132 78 138 85 140 95 C142 105 140 110 140 110" fill="#7FB8C9" opacity="0.5" />
        </svg>
        <div className="phil-paw-trail">
          <PawPrint size={18} color="#7FB8C9" />
          <PawPrint size={22} color="#5a9cb5" />
          <PawPrint size={16} color="#7FB8C9" />
        </div>
      </div>
    </section>
  )
}
