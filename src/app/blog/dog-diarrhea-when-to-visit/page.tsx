import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '犬の下痢が続く時の受診目安｜市原市の動物病院｜バウ・ミュウ動物病院',
  description: '犬の下痢が続いた時、病院に連れて行くべきタイミングを市原市のバウ・ミュウ動物病院が解説。下痢の原因・危険なサイン・受診目安を詳しくご案内します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/dog-diarrhea-when-to-visit' },
  openGraph: {
    title: '犬の下痢が続く時の受診目安｜市原市の動物病院｜バウ・ミュウ動物病院',
    description: '犬の下痢が続いた時、病院に連れて行くべきタイミングを市原市のバウ・ミュウ動物病院が解説。下痢の原因・危険なサイン・受診目安を詳しくご案内します。',
    url: 'https://bowmew-ah.com/blog/dog-diarrhea-when-to-visit',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/dog-diarrhea-when-to-visit.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '犬の下痢が続く時の受診目安｜市原市の動物病院｜バウ・ミュウ動物病院',
    description: '犬の下痢が続いた時、病院に連れて行くべきタイミングを市原市のバウ・ミュウ動物病院が解説。下痢の原因・危険なサイン・受診目安を詳しくご案内します。',
    images: ['https://bowmew-ah.com/blog/dog-diarrhea-when-to-visit.webp'],
  },
}

export default function DogDiarrheaWhenToVisitPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: '犬の下痢が続く時の受診目安｜市原市の動物病院',
    description: '犬の下痢が続いた時、病院に連れて行くべきタイミングを市原市のバウ・ミュウ動物病院が解説。下痢の原因・危険なサイン・受診目安を詳しくご案内します。',
    image: "https://bowmew-ah.com/blog/dog-diarrhea-when-to-visit.webp",
    datePublished: "2026-04-22",
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
          <span style={{ color: '#666' }}>犬の下痢の受診目安</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026-04-22</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>犬の下痢が続く時の受診目安｜市原市の動物病院</h1>
          <img src={`/blog/dog-diarrhea-when-to-visit.webp`} alt="犬の下痢の症状" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>愛犬の下痢は、飼い主さまにとって心配になる症状のひとつです。1回だけの軟便であれば様子見でよいこともありますが、下痢が続く場合や他の症状を伴う場合は、早めの受診が必要です。</p>
            <p>この記事では、犬の下痢の原因や危険なサイン、動物病院を受診すべきタイミングについて、市原市のバウ・ミュウ動物病院が解説します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>犬の下痢の主な原因</h2>
            <p>犬の下痢には、さまざまな原因が考えられます。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>食事の変化：</strong>フードの急な切り替えや食べ慣れないものの摂取</li>
              <li><strong>ストレス：</strong>環境の変化、来客、長時間の留守番など</li>
              <li><strong>感染症：</strong>パルボウイルス、コロナウイルス、細菌感染など</li>
              <li><strong>寄生虫：</strong>回虫、鉤虫、ジアルジアなど</li>
              <li><strong>異物摂取：</strong>おもちゃの破片や骨などの誤食</li>
              <li><strong>膵炎：</strong>脂肪分の多い食事が原因になることがあります</li>
              <li><strong>炎症性腸疾患（IBD）：</strong>慢性的な腸の炎症</li>
              <li><strong>腫瘍：</strong>消化管にできる腫瘍が原因となることも</li>
            </ul>
            <p>一時的な下痢は食事やストレスが原因であることが多いですが、続く場合は病気が隠れている可能性があります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>すぐに受診すべき危険なサイン</h2>
            <p>以下のような症状がある場合は、様子を見ずにすぐに動物病院を受診してください。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>血便が混じっている（赤い血、または黒いタール状の便）</li>
              <li>嘔吐を伴っている</li>
              <li>ぐったりして元気がない</li>
              <li>食欲がまったくない</li>
              <li>発熱している（正常は38〜39℃）</li>
              <li>子犬や高齢犬の下痢</li>
              <li>水のような激しい下痢が何度も続く</li>
              <li>おもちゃや異物を飲み込んだ可能性がある</li>
            </ul>
            <p>特に子犬の下痢は脱水が急速に進むため、早急な対応が必要です。パルボウイルス感染症など、命に関わる病気の可能性もあります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>受診の目安</h2>
            <p>上記の緊急性の高いサインがなくても、以下の場合は受診をおすすめします。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>下痢が2日以上続いている</li>
              <li>1日に3回以上の下痢がある</li>
              <li>軟便が1週間以上改善しない</li>
              <li>体重が減ってきている</li>
              <li>便の色が明らかにおかしい（白っぽい、灰色など）</li>
            </ul>
            <p>受診の際は、便のサンプルをお持ちいただくと、寄生虫検査や便の性状確認がスムーズに行えます。ラップに包んでお持ちいただくか、スマートフォンで便の写真を撮っておくことをおすすめします。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>自宅でできる応急対応</h2>
            <p>元気や食欲があり、軽い下痢が1〜2回程度の場合は、以下の対応で改善することがあります。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>半日〜1日程度、食事を控える（水分は自由に摂らせる）</li>
              <li>回復期には消化の良いフード（ふやかしたフードや茹でたささみと白米）を少量ずつ与える</li>
              <li>フードの切り替えは1週間かけて徐々に行う</li>
              <li>ストレス環境の改善</li>
            </ul>
            <p>ただし、上記はあくまで応急対応です。改善しない場合や不安な場合は、早めにご来院ください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>動物病院での検査と治療</h2>
            <p>当院では、下痢の原因を特定するために以下の検査を行います。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>便検査（寄生虫・細菌・ウイルスの確認）</li>
              <li>血液検査（全身状態の評価、膵炎の確認）</li>
              <li>腹部レントゲン・エコー検査（異物や腫瘍の有無）</li>
            </ul>
            <p>治療は原因に応じて、整腸剤・抗生剤・駆虫薬・輸液などを行います。脱水が進んでいる場合は点滴による水分補給を優先します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>市原市で犬の下痢にお悩みの方へ</h2>
            <p>バウ・ミュウ動物病院では、犬の下痢や消化器トラブルについて丁寧に診察しています。「たかが下痢」と思わず、気になることがあればお気軽にご来院ください。早期発見・早期治療が愛犬の健康を守ります。</p>
            <p>予約不要・当日受付OKですので、急な下痢にも対応可能です。</p>
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
    <li><a href="/blog/dog-food-allergy" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬の食物アレルギー｜症状と食事管理のポイント</a></li>
    <li><a href="/blog/dog-skin-disease" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬の皮膚病の種類と治療法｜かゆみ・赤みの原因を解説</a></li>
    <li><a href="/blog/puppy-first-visit" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>子犬を迎えたら｜最初の動物病院受診ガイド</a></li>
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
