import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '猫が吐く原因と対処法｜心配な嘔吐の見分け方｜バウ・ミュウ動物病院',
  description: '猫が吐く原因と危険な嘔吐の見分け方をバウ・ミュウ動物病院が解説。毛玉・空腹・病気による嘔吐の違い、受診が必要なケースについてわかりやすくご案内します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/cat-vomiting-causes' },
  openGraph: {
    title: '猫が吐く原因と対処法｜心配な嘔吐の見分け方｜バウ・ミュウ動物病院',
    description: '猫が吐く原因と危険な嘔吐の見分け方をバウ・ミュウ動物病院が解説。毛玉・空腹・病気による嘔吐の違い、受診が必要なケースについてわかりやすくご案内します。',
    url: 'https://bowmew-ah.com/blog/cat-vomiting-causes',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/cat-vomiting-causes.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '猫が吐く原因と対処法｜心配な嘔吐の見分け方｜バウ・ミュウ動物病院',
    description: '猫が吐く原因と危険な嘔吐の見分け方をバウ・ミュウ動物病院が解説。毛玉・空腹・病気による嘔吐の違い、受診が必要なケースについてわかりやすくご案内します。',
    images: ['https://bowmew-ah.com/blog/cat-vomiting-causes.webp'],
  },
}

export default function CatVomitingCausesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: '猫が吐く原因と対処法｜心配な嘔吐の見分け方',
    description: '猫が吐く原因と危険な嘔吐の見分け方をバウ・ミュウ動物病院が解説。毛玉・空腹・病気による嘔吐の違い、受診が必要なケースについてわかりやすくご案内します。',
    image: "https://bowmew-ah.com/blog/cat-vomiting-causes.webp",
    datePublished: "2026-04-18",
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
          <span style={{ color: '#666' }}>猫が吐く原因と対処法</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026-04-18</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>猫が吐く原因と対処法｜心配な嘔吐の見分け方</h1>
          <img src={`/blog/cat-vomiting-causes.webp`} alt="猫の嘔吐の原因" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>猫はもともと吐きやすい動物です。毛玉を吐くことは珍しくなく、健康な猫でも時折嘔吐することがあります。しかし、嘔吐の頻度や内容物によっては、重大な病気が隠れている可能性があります。</p>
            <p>この記事では、猫の嘔吐の原因と、心配すべき嘔吐の見分け方について解説します。愛猫の吐く行動が気になっている飼い主さまは、ぜひ参考にしてください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>猫が吐く主な原因</h2>
            <p>猫の嘔吐には、心配のないものから病的なものまでさまざまな原因があります。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>毛玉：</strong>グルーミングで飲み込んだ毛が胃に溜まって吐き出す（生理的な現象）</li>
              <li><strong>早食い・食べ過ぎ：</strong>一気に食べた直後に未消化のフードを吐く</li>
              <li><strong>空腹：</strong>長時間の空腹で胃液（黄色い液体）を吐くことがある</li>
              <li><strong>フードの合わない成分：</strong>食物アレルギーや不耐性</li>
              <li><strong>異物摂取：</strong>ひも、ゴム、おもちゃの破片などの誤食</li>
              <li><strong>消化器疾患：</strong>胃炎、腸炎、炎症性腸疾患（IBD）</li>
              <li><strong>腎臓病：</strong>慢性腎臓病による尿毒症で嘔吐が起こる</li>
              <li><strong>甲状腺機能亢進症：</strong>高齢猫に多い内分泌疾患</li>
              <li><strong>腫瘍：</strong>消化管リンパ腫など</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>心配のない嘔吐と危険な嘔吐の見分け方</h2>
            <p><strong>心配が少ないケース：</strong></p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>月に1〜2回程度の毛玉の嘔吐</li>
              <li>早食い後にフードをそのまま吐き戻し、その後元気</li>
              <li>吐いた後も食欲・元気がある</li>
            </ul>
            <p><strong>受診が必要なケース：</strong></p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>1日に何度も吐く</li>
              <li>数日間にわたって嘔吐が続く</li>
              <li>血が混じっている（赤色やコーヒー色）</li>
              <li>食欲がなく元気がない</li>
              <li>体重が減ってきている</li>
              <li>下痢を伴っている</li>
              <li>ひも状の異物を吐いた・口から出ている</li>
              <li>水を飲んでもすぐ吐く</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>吐いたものの色で見る原因の手がかり</h2>
            <p>嘔吐物の色や内容は、原因を推測する手がかりになります。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>透明〜白い泡：</strong>空腹時の胃液。頻度が低ければ問題ないことが多い</li>
              <li><strong>黄色い液体：</strong>胆汁の混じった胃液。空腹が長く続いた時に多い</li>
              <li><strong>未消化のフード：</strong>早食いや食べ過ぎ、胃の運動低下</li>
              <li><strong>茶色・コーヒー色：</strong>消化管内の出血の可能性。要受診</li>
              <li><strong>赤い血液：</strong>口腔内や食道、胃からの出血。すぐに受診を</li>
              <li><strong>毛の塊：</strong>毛玉。頻度が高い場合はブラッシングの強化を</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>自宅でできる嘔吐予防</h2>
            <p>生理的な嘔吐を減らすために、以下の工夫が有効です。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>食事を少量ずつ分けて与える（1日3〜4回に分割）</li>
              <li>早食い防止の食器を使用する</li>
              <li>定期的なブラッシングで抜け毛を除去する</li>
              <li>毛玉ケア用のフードやサプリメントを活用する</li>
              <li>ひも類やゴム製品を猫の手の届かない場所に保管する</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>動物病院での検査</h2>
            <p>嘔吐の原因を特定するために、以下の検査を行うことがあります。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>血液検査（腎機能・肝機能・甲状腺ホルモンなど）</li>
              <li>レントゲン検査（異物や腫瘍の確認）</li>
              <li>腹部エコー検査（消化管の状態確認）</li>
              <li>内視鏡検査（必要に応じて）</li>
            </ul>
            <p>特に高齢猫の嘔吐は、腎臓病や甲状腺機能亢進症などの慢性疾患が隠れていることが多いため、定期的な健康診断をおすすめしています。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>猫の嘔吐でお悩みの方へ</h2>
            <p>バウ・ミュウ動物病院では、猫の嘔吐について丁寧に原因を調べ、適切な治療をご提案しています。「猫はよく吐くもの」と放置せず、気になる変化があればお気軽にご相談ください。</p>
            <p>受診の際は、嘔吐物の写真や吐いた回数・時間のメモをお持ちいただくと、診察がスムーズに進みます。</p>
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
    <li><a href="/blog/cat-diabetes" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫の糖尿病｜多飲多尿は要注意！症状と治療について</a></li>
    <li><a href="/blog/cat-stress-signs" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫のストレスサイン｜見逃しやすい7つの行動変化</a></li>
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
