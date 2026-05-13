import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '猫の膀胱炎の症状と予防｜トイレの変化に要注意｜バウ・ミュウ動物病院',
  description: '猫の膀胱炎の症状・原因・予防法をバウ・ミュウ動物病院が解説。頻尿・血尿・トイレ以外での排尿など、膀胱炎のサインと予防のための環境づくりをご案内します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/cat-cystitis-symptoms' },
  openGraph: {
    title: '猫の膀胱炎の症状と予防｜トイレの変化に要注意｜バウ・ミュウ動物病院',
    description: '猫の膀胱炎の症状・原因・予防法をバウ・ミュウ動物病院が解説。頻尿・血尿・トイレ以外での排尿など、膀胱炎のサインと予防のための環境づくりをご案内します。',
    url: 'https://bowmew-ah.com/blog/cat-cystitis-symptoms',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/cat-cystitis-symptoms.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '猫の膀胱炎の症状と予防｜トイレの変化に要注意｜バウ・ミュウ動物病院',
    description: '猫の膀胱炎の症状・原因・予防法をバウ・ミュウ動物病院が解説。頻尿・血尿・トイレ以外での排尿など、膀胱炎のサインと予防のための環境づくりをご案内します。',
    images: ['https://bowmew-ah.com/blog/cat-cystitis-symptoms.webp'],
  },
}

export default function CatCystitisSymptomsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: '猫の膀胱炎の症状と予防｜トイレの変化に要注意',
    description: '猫の膀胱炎の症状・原因・予防法をバウ・ミュウ動物病院が解説。頻尿・血尿・トイレ以外での排尿など、膀胱炎のサインと予防のための環境づくりをご案内します。',
    image: "https://bowmew-ah.com/blog/cat-cystitis-symptoms.webp",
    datePublished: "2026-04-08",
    author: {
      "@type": "Organization",
      name: "バウ・ミュウ動物病院",
      url: "https://bowmew-ah.com",
    },
    publisher: {
      "@type": "Organization",
      name: "バウ・ミュウ動物病院",
      logo: {
        "@type": "ImageObject",
        url: "https://bowmew-ah.com/logo.png",
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="site">
      <header className="header">
        <div className="headerInner">
          <a className="logo" href="/"><img src="/logo.png" alt="バウ・ミュウ動物病院" className="logoMark" style={{ width: 100, height: 100, borderRadius: 0, background: 'transparent' }} /><span><strong>バウ・ミュウ動物病院</strong><small>犬と猫のホームドクター</small></span></a>
          <nav className="nav"><a href="/about">当院について</a><a href="/services">診療案内</a><a href="/first-visit">初めての方</a><a href="/access">アクセス</a><a href="/blog">コラム</a></nav>
          <a className="headerBtn" href="tel:0436411008">電話する</a>
        </div>
      </header>
      <nav style={{ background: '#fff9f0', padding: '12px 0', fontSize: '13px', color: '#999' }}>
        <div className="container">
          <a href="/" style={{ color: '#999', textDecoration: 'none' }}>ホーム</a>
          <span style={{ margin: '0 8px' }}>›</span>
          <a href="/blog" style={{ color: '#999', textDecoration: 'none' }}>コラム</a>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: '#666' }}>猫の膀胱炎の症状と予防</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026-04-08</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>猫の膀胱炎の症状と予防｜トイレの変化に要注意</h1>
          <img src={`/blog/cat-cystitis-symptoms.webp`} alt="猫の膀胱炎の症状" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>猫の膀胱炎は、泌尿器系の病気の中で最もよく見られる疾患のひとつです。特に若いオス猫に多く、ストレスや食事が大きく関わっています。トイレの回数が増えた、尿に血が混じるなどの変化が見られたら、膀胱炎の可能性があります。</p>
            <p>この記事では、猫の膀胱炎の症状・原因・治療法・予防法について詳しく解説します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>猫の膀胱炎の症状</h2>
            <p>膀胱炎になった猫には、以下のような症状が見られます。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>トイレに何度も行くが、少量しか出ない（頻尿）</li>
              <li>尿に血が混じる（血尿）</li>
              <li>トイレ以外の場所で排尿する（不適切な排尿）</li>
              <li>排尿時に鳴く（痛みのサイン）</li>
              <li>陰部を頻繁に舐める</li>
              <li>トイレに長時間こもる</li>
              <li>尿がまったく出ない（尿閉 - 緊急事態）</li>
            </ul>
            <p><strong>特に注意：</strong>オス猫で尿がまったく出ない状態（尿閉）は、24〜48時間放置すると急性腎不全から死に至る緊急事態です。トイレでいきんでいるのに尿が出ない場合は、すぐに動物病院を受診してください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>膀胱炎の原因</h2>
            <p>猫の膀胱炎にはいくつかのタイプがあります。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>特発性膀胱炎（FIC）：</strong>最も多いタイプ（約60〜70%）。明確な細菌感染がなく、ストレスが主な原因と考えられている</li>
              <li><strong>尿路結石：</strong>ストルバイト結石やシュウ酸カルシウム結石が膀胱を刺激する</li>
              <li><strong>細菌性膀胱炎：</strong>細菌感染による炎症。高齢猫や糖尿病の猫に多い</li>
              <li><strong>尿道栓子：</strong>結晶や炎症産物が尿道に詰まる（オス猫に多い）</li>
            </ul>
            <p>特発性膀胱炎の発症に関わるリスク要因として、以下が知られています。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>室内飼い・運動不足</li>
              <li>肥満</li>
              <li>ストレス（環境の変化、多頭飼い、トイレの問題）</li>
              <li>水分摂取量の不足（ドライフード中心の食事）</li>
              <li>トイレの数が少ない・汚れている</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>動物病院での検査と治療</h2>
            <p>膀胱炎が疑われる場合、以下の検査を行います。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>尿検査：</strong>血尿・結晶・細菌・pHなどを確認</li>
              <li><strong>エコー検査：</strong>膀胱内の結石や膀胱壁の肥厚を確認</li>
              <li><strong>血液検査：</strong>腎機能の評価（特に尿閉の場合）</li>
              <li><strong>レントゲン：</strong>結石の有無を確認</li>
            </ul>
            <p>治療は原因によって異なります。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>特発性膀胱炎：ストレス管理、環境改善、鎮痛剤、療法食</li>
              <li>尿路結石：食事療法による溶解、または外科的摘出</li>
              <li>細菌性膀胱炎：抗生剤の投与</li>
              <li>尿閉：カテーテルによる排尿処置（緊急対応）</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>膀胱炎を予防する環境づくり</h2>
            <p>猫の膀胱炎、特に特発性膀胱炎の予防には環境整備が重要です。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>水分摂取を増やす：</strong>ウェットフードを取り入れる、水飲み場を複数設置する、流水タイプの給水器を使う</li>
              <li><strong>トイレ環境の改善：</strong>猫の数+1個のトイレを設置、こまめに清掃、十分な大きさのトイレを選ぶ</li>
              <li><strong>ストレス軽減：</strong>隠れ場所を確保、高い場所への動線を作る、急な環境変化を避ける</li>
              <li><strong>適切な食事管理：</strong>尿石症対応の療法食、肥満の予防</li>
              <li><strong>運動の促進：</strong>おもちゃで遊ぶ時間を毎日設ける</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>猫のトイレの変化が気になる方へ</h2>
            <p>バウ・ミュウ動物病院では、猫の膀胱炎について適切な検査と治療を行っています。膀胱炎は再発しやすい病気ですが、環境整備と食事管理で再発率を下げることが可能です。</p>
            <p>トイレの回数や尿の色に変化を感じたら、早めにご来院ください。尿検査用の尿をお持ちいただくとスムーズです（採尿が難しい場合は院内で採取いたします）。</p>
          </div>
          <div style={{ marginTop: '48px', padding: '32px', background: 'linear-gradient(135deg, #fff3e8 0%, #ffe8d6 100%)', borderRadius: '20px', border: '2px solid #ffcda8' }}>
            <p style={{ fontSize: '13px', color: '#c06a1f', fontWeight: 700, letterSpacing: '2px', marginBottom: '8px' }}>CLINIC INFO</p>
            <strong style={{ fontSize: '20px', color: '#333', display: 'block', marginBottom: '12px' }}>バウ・ミュウ動物病院</strong>
            <p style={{ fontSize: '14px', lineHeight: 2, color: '#555', marginBottom: '16px' }}>
              〒290-0062 千葉県市原市八幡520<br />
              <strong>診療時間</strong>　午前 9:00〜12:30 ／ 午後 15:30〜18:00<br />
              <strong>休診日</strong>　水曜午後・木曜午後・日曜午後・祝日<br />
              予約不要・当日受付OK。犬・猫の診療はお気軽にご来院ください。
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="tel:0436411008" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#ff8a3d', color: '#fff', padding: '14px 28px', borderRadius: '50px', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>電話で相談する（0436-41-1008）</a>
              <a href="/access" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', color: '#ff8a3d', padding: '14px 28px', borderRadius: '50px', fontWeight: 700, fontSize: '16px', textDecoration: 'none', border: '2px solid #ff8a3d' }}>アクセス・地図を見る</a>
            </div>
          </div>
          <div style={{ marginTop: '32px' }}>
  <h3 style={{ fontSize: '18px', color: '#ff8a3d', marginBottom: '16px' }}>関連コラム</h3>
  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '12px' }}>
    <li><a href="/blog/cat-kidney-disease" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫の腎臓病を早期発見するために｜症状と予防のポイント</a></li>
    <li><a href="/blog/cat-stress-signs" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫のストレスサイン｜見逃しやすい7つの行動変化</a></li>
    <li><a href="/blog/cat-diabetes" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫の糖尿病｜多飲多尿は要注意！症状と治療について</a></li>
  </ul>
</div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
      <footer className="footer"><div className="container footerInner"><div><strong>バウ・ミュウ動物病院</strong><p>〒290-0062 千葉県市原市八幡520<br />TEL 0436-41-1008</p></div><small>&copy; Bow-Mew Animal Hospital</small></div></footer>
      </main>
    </>
  )
}
