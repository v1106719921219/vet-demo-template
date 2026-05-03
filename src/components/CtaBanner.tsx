export default function CtaBanner() {
  return (
    <section className="cta-section" id="cta">
      <div className="wrap">
        <h2>ご予約・お問い合わせ</h2>
        <p>
          ちいさなご相談から、セカンドオピニオンまで。<br />
          お気軽にご連絡ください。
        </p>
        <div className="cta-buttons">
          <a href="#" className="btn btn-orange">お問い合わせフォーム &rarr;</a>
          <a href="tel:0436411008" className="btn btn-ghost">お電話で予約する</a>
        </div>
        <div className="cta-phone-card">
          <div>
            <small>TEL</small>
            <div className="tel">0436-41-1008</div>
          </div>
        </div>
      </div>
    </section>
  )
}
