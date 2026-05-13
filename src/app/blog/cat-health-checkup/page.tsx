import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '猫の健康診断｜頻度と検査項目を動物病院が解説｜バウ・ミュウ動物病院',
  description: '猫の健康診断の頻度や検査項目を獣医師が解説。年齢別のおすすめ検査内容と、健康診断で見つかりやすい病気についてご紹介します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/cat-health-checkup' },
  openGraph: {
    title: '猫の健康診断｜頻度と検査項目を動物病院が解説｜バウ・ミュウ動物病院',
    description: '猫の健康診断の頻度や検査項目を獣医師が解説。年齢別のおすすめ検査内容と、健康診断で見つかりやすい病気についてご紹介します。',
    url: 'https://bowmew-ah.com/blog/cat-health-checkup',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/cat-health-checkup.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '猫の健康診断｜頻度と検査項目を動物病院が解説｜バウ・ミュウ動物病院',
    description: '猫の健康診断の頻度や検査項目を獣医師が解説。年齢別のおすすめ検査内容と、健康診断で見つかりやすい病気についてご紹介します。',
    images: ['https://bowmew-ah.com/blog/cat-health-checkup.webp'],
  },
}

export default function CatHealthCheckup() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: '猫の健康診断｜頻度と検査項目を動物病院が解説',
    description: '猫の健康診断の頻度や検査項目を獣医師が解説。年齢別のおすすめ検査内容と、健康診断で見つかりやすい病気についてご紹介します。',
    image: "https://bowmew-ah.com/blog/cat-health-checkup.webp",
    datePublished: "2026-02-28",
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
          <span style={{ color: '#666' }}>猫の健康診断</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026.02.28</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>猫の健康診断｜頻度と検査項目を動物病院が解説</h1>
          <img src={`/blog/cat-health-checkup.webp`} alt="猫の健康診断" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>完全室内飼いの猫でも、定期的な健康診断は欠かせません。猫は体調不良を隠す名人で、飼い主さんが異変に気づいたときには病気がかなり進行していることがあります。特に猫に多い腎臓病は、症状が出る頃には腎機能の75％以上が失われているとも言われます。この記事では、猫の健康診断の適切な頻度と検査項目について解説します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>猫の健康診断の適切な頻度</h2>
            <p>猫の健康診断は、年齢に応じて以下の頻度が推奨されます。</p>
            <ul>
              <li><strong>1〜6歳（成猫期）：</strong>年に1回</li>
              <li><strong>7〜10歳（中高齢期）：</strong>年に1〜2回</li>
              <li><strong>11歳以上（高齢期）：</strong>半年に1回</li>
            </ul>
            <p>猫は7歳を過ぎると人間の中年期に相当し、慢性腎臓病、甲状腺機能亢進症、糖尿病などのリスクが高まります。まだ若いうちから定期検診を受け、健康時のデータ（ベースライン）を蓄積しておくことが、将来の異常の早期発見につながります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>健康診断の基本的な検査項目</h2>
            <p>猫の健康診断では、以下の検査を組み合わせて行います。</p>
            <p><strong>身体検査：</strong>体重測定、体温測定、視診（目・耳・口・皮膚）、触診（リンパ節・腹部臓器）、聴診（心音・肺音）を行います。体重の変化は病気の重要なサインです。</p>
            <p><strong>血液検査：</strong>血球計算（CBC）で貧血や感染の有無を、生化学検査で肝臓（ALT、ALP）、腎臓（BUN、クレアチニン、SDMA）、血糖値、電解質などを確認します。</p>
            <p><strong>尿検査：</strong>尿比重、尿タンパク、尿糖、潜血、細菌の有無を確認します。猫の腎臓病の早期発見には尿検査が非常に重要です。</p>
            <p><strong>便検査：</strong>寄生虫の有無や消化状態を確認します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>シニア猫に追加したい検査</h2>
            <p>7歳以上の猫には、基本検査に加えて以下の検査を検討しましょう。</p>
            <ul>
              <li><strong>甲状腺ホルモン（T4）検査：</strong>高齢猫に多い甲状腺機能亢進症の早期発見に有効</li>
              <li><strong>血圧測定：</strong>腎臓病や甲状腺疾患に伴う高血圧の確認</li>
              <li><strong>レントゲン検査：</strong>心臓の大きさ、肺の状態、骨関節の異常を確認</li>
              <li><strong>腹部超音波検査：</strong>腎臓、肝臓、膀胱などの臓器の形態を詳しく観察</li>
              <li><strong>心臓超音波検査：</strong>肥大型心筋症など猫に多い心臓病の確認</li>
              <li><strong>SDMA検査：</strong>従来の腎臓マーカーより早い段階で腎機能低下を検出</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>健康診断で見つかりやすい猫の病気</h2>
            <p>猫の健康診断で早期に発見されることが多い病気には以下があります。</p>
            <ul>
              <li><strong>慢性腎臓病：</strong>10歳以上の猫の約30〜40％が罹患。尿検査と血液検査で早期発見可能</li>
              <li><strong>甲状腺機能亢進症：</strong>8歳以上で多い。体重減少や多飲多尿が見られる前に血液検査で発見できる</li>
              <li><strong>糖尿病：</strong>肥満猫に多い。血糖値と尿糖で診断</li>
              <li><strong>心筋症：</strong>無症状で進行することが多い。超音波検査で発見</li>
              <li><strong>歯周病：</strong>3歳以上の猫の70％以上が罹患。口腔内チェックで確認</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>猫を動物病院に連れて行くコツ</h2>
            <p>猫は動物病院が苦手な子が多いですが、以下の工夫でストレスを軽減できます。</p>
            <ul>
              <li>キャリーケースを普段から部屋に置き、慣れさせておく</li>
              <li>キャリーにお気に入りの毛布やタオルを入れる</li>
              <li>移動中はキャリーにタオルをかけて視界を遮る</li>
              <li>車内では急発進・急ブレーキを避ける</li>
              <li>待合室では犬と離れた場所で待つ</li>
            </ul>
            <p>「猫が嫌がるから病院に連れて行けない」という声を時々聞きますが、定期検診は愛猫の健康を守るための大切な機会です。少しの工夫と慣れで、通院のストレスは軽減できます。猫の健康診断についてのご相談は、お気軽に当院までお問い合わせください。</p>
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
              <li><a href="/blog/dog-health-checkup-cost" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>【市原市】犬の健康診断の費用と検査内容｜年1回がおすすめ</a></li>
              <li><a href="/blog/cat-kidney-disease" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫の腎臓病を早期発見するために｜症状と予防のポイント</a></li>
              <li><a href="/blog/senior-dog-care" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>シニア犬の健康管理｜7歳からの定期健診のすすめ</a></li>
            </ul>
          </div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
      </main>
    </>
  )
}
