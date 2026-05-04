import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-row">
              <Image src="/logo.png" alt="バウミュウ動物病院" width={44} height={44} />
              <h3>バウミュウ動物病院</h3>
            </div>
            <p>
              〒290-0062<br />
              千葉県市原市八幡520<br />
              TEL 0436-41-1008 / FAX 0436-41-1952<br />
              診療時間 9:00〜12:30 / 15:30〜18:00<br />
              休診日 水曜午後・木曜午後・日曜午後・祝日
            </p>
          </div>
          <div>
            <h5>Menu</h5>
            <ul>
              <li><a href="#philosophy">当院について</a></li>
              <li><a href="#features">診療案内</a></li>
              <li><a href="#director">院長紹介</a></li>
              <li><a href="#hours">診療時間</a></li>
              <li><a href="#access">アクセス</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href="tel:0436411008">0436-41-1008</a></li>
              <li><a href="#">お問い合わせフォーム</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">採用情報</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; Bow-Mew Animal Hospital</span>
          <span>Designed with 🐾</span>
        </div>
      </div>
    </footer>
  )
}
