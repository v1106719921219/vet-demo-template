import PawPrint from './PawPrint'

export default function Access() {
  return (
    <section className="access-section section" id="access">
      <div className="wrap">
        <div className="section-title">
          <span className="en">Access</span>
          <h2>アクセス・地図</h2>
          <div className="deco"><PawPrint size={18} color="#F5A04A" /></div>
        </div>
        <div className="access-grid">
          <div className="access-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.5!2d140.1167!3d35.5231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602282f3b6e7c8e1%3A0x0!2z44OQ44Km44Of44Ol44Km5YuV54mp55eF6Zmi!5e0!3m2!1sja!2sjp!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="バウミュウ動物病院の地図"
            />
          </div>
          <div className="access-info">
            <h3>病院情報</h3>
            <dl>
              <dt>住所</dt>
              <dd>〒290-0062<br />千葉県市原市八幡520</dd>

              <dt>電車</dt>
              <dd>
                JR内房線「八幡宿駅」西口より<br />
                <strong>徒歩 約7分</strong>（500m）
              </dd>

              <dt>お車</dt>
              <dd>
                専用駐車場 <strong>6台</strong> 完備（無料）<br />
                <span className="access-note">館山道 市原ICより約10分</span>
              </dd>

              <dt>FAX</dt>
              <dd>0436-41-1952</dd>
            </dl>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=千葉県市原市八幡520"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-map"
            >
              Google マップで経路を見る &rarr;
            </a>

            <div className="phone-row">
              <div>
                <small>TEL</small>
                <span className="tel">0436-41-1008</span>
              </div>
              <a href="tel:0436411008" className="btn btn-orange" style={{ marginLeft: 'auto' }}>電話する <span className="arrow">&rarr;</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
