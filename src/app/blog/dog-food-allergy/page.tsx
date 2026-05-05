import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '犬の食物アレルギー｜症状と食事管理のポイント｜バウ・ミュウ動物病院',
  description: '犬の食物アレルギーの症状・原因・食事管理のポイントをバウ・ミュウ動物病院が解説。かゆみや下痢が続く場合はアレルギーの可能性も。診断方法と適切なフード選びをご案内。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/dog-food-allergy' },
  openGraph: {
    title: '犬の食物アレルギー｜症状と食事管理のポイント｜バウ・ミュウ動物病院',
    description: '犬の食物アレルギーの症状・原因・食事管理のポイントをバウ・ミュウ動物病院が解説。かゆみや下痢が続く場合はアレルギーの可能性も。診断方法と適切なフード選びをご案内。',
    url: 'https://bowmew-ah.com/blog/dog-food-allergy',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/dog-food-allergy.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '犬の食物アレルギー｜症状と食事管理のポイント｜バウ・ミュウ動物病院',
    description: '犬の食物アレルギーの症状・原因・食事管理のポイントをバウ・ミュウ動物病院が解説。かゆみや下痢が続く場合はアレルギーの可能性も。診断方法と適切なフード選びをご案内。',
    images: ['https://bowmew-ah.com/blog/dog-food-allergy.webp'],
  },
}

export default function DogFoodAllergyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: '犬の食物アレルギー｜症状と食事管理のポイント',
    description: '犬の食物アレルギーの症状・原因・食事管理のポイントをバウ・ミュウ動物病院が解説。かゆみや下痢が続く場合はアレルギーの可能性も。診断方法と適切なフード選びをご案内。',
    image: "https://bowmew-ah.com/blog/dog-food-allergy.webp",
    datePublished: "2026-04-12",
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
          <nav className="nav"><a href="/about">当院について</a><a href="/services">診療案内</a><a href="/price">料金</a><a href="/first-visit">初めての方</a><a href="/access">アクセス</a><a href="/blog">コラム</a></nav>
          <a className="headerBtn" href="tel:0436411008">電話する</a>
        </div>
      </header>
      <nav style={{ background: '#fff9f0', padding: '12px 0', fontSize: '13px', color: '#999' }}>
        <div className="container">
          <a href="/" style={{ color: '#999', textDecoration: 'none' }}>ホーム</a>
          <span style={{ margin: '0 8px' }}>›</span>
          <a href="/blog" style={{ color: '#999', textDecoration: 'none' }}>コラム</a>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: '#666' }}>犬の食物アレルギー</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026-04-12</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>犬の食物アレルギー｜症状と食事管理のポイント</h1>
          <img src={`/blog/dog-food-allergy.webp`} alt="犬の食物アレルギーと食事管理" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>犬の食物アレルギーは、特定の食材に含まれるタンパク質に対して免疫が過剰に反応する病気です。皮膚のかゆみや消化器症状が年間を通して続く場合、食物アレルギーが原因かもしれません。</p>
            <p>この記事では、犬の食物アレルギーの症状・原因となりやすい食材・診断方法・食事管理のポイントについて詳しく解説します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>犬の食物アレルギーの症状</h2>
            <p>食物アレルギーの症状は、皮膚症状と消化器症状に大きく分かれます。</p>
            <p><strong>皮膚症状：</strong></p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>顔（目の周り・口の周り）のかゆみ・赤み</li>
              <li>耳の炎症（外耳炎を繰り返す）</li>
              <li>足先を舐め続ける</li>
              <li>お腹や脇の下の赤み</li>
              <li>肛門周囲のかゆみ</li>
            </ul>
            <p><strong>消化器症状：</strong></p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>慢性的な下痢や軟便</li>
              <li>嘔吐</li>
              <li>おならが多い</li>
              <li>排便回数が多い</li>
            </ul>
            <p>アトピー性皮膚炎との違いとして、食物アレルギーは季節に関係なく年中症状が出ることが特徴です。また、1歳未満の若い犬で発症することも多い点もポイントです。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>アレルギーを起こしやすい食材</h2>
            <p>犬がアレルギーを起こしやすい食材として報告されているものは以下の通りです。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>牛肉：</strong>最も多いアレルゲンのひとつ</li>
              <li><strong>鶏肉：</strong>多くのフードに使われているため発症リスクが高い</li>
              <li><strong>小麦：</strong>穀物アレルギーとして知られる</li>
              <li><strong>乳製品：</strong>チーズやミルクなど</li>
              <li><strong>大豆：</strong>フードに含まれることが多い</li>
              <li><strong>卵：</strong>比較的よく見られるアレルゲン</li>
              <li><strong>ラム肉：</strong>以前は低アレルゲンとされていたが報告が増加</li>
            </ul>
            <p>重要なのは、アレルギーは「食べ慣れたもの」に対して発症するということです。長期間同じフードを食べ続けることで感作（アレルギー体質になること）が起こります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>食物アレルギーの診断方法</h2>
            <p>食物アレルギーの確定診断には「食事除去試験」が最も信頼性の高い方法です。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>食事除去試験：</strong>これまで食べたことのない新奇タンパク質のフード、またはアミノ酸レベルまで分解した加水分解フードを8〜12週間与えます</li>
              <li><strong>負荷試験：</strong>症状が改善したら、元の食材をひとつずつ戻して反応を確認します</li>
            </ul>
            <p>血液検査（IgE検査やリンパ球反応検査）も補助的に使われますが、偽陽性・偽陰性が多いため、食事除去試験が確定診断のゴールドスタンダードとされています。</p>
            <p>除去試験中は、指定されたフードと水以外は一切与えないことが重要です。おやつ・人間の食べ物・サプリメントもすべて中止してください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>食事管理のポイント</h2>
            <p>食物アレルギーと診断された場合の食事管理のポイントをご紹介します。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>アレルゲンを特定して除去する：</strong>原因食材を含まないフードを選ぶ</li>
              <li><strong>新奇タンパク質フード：</strong>鹿肉、カンガルー肉、魚など食べたことのないタンパク源のフード</li>
              <li><strong>加水分解タンパク質フード：</strong>タンパク質を細かく分解してアレルギー反応を起こしにくくしたフード</li>
              <li><strong>おやつにも注意：</strong>アレルゲンが含まれていないか成分表示を確認</li>
              <li><strong>家族全員で管理：</strong>こっそり食べ物をあげないよう家族に共有する</li>
            </ul>
            <p>療法食は獣医師の指導のもとで選択することが重要です。市販の「グレインフリー」フードが必ずしも食物アレルギーに適しているわけではありません。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>犬の食物アレルギーでお悩みの方へ</h2>
            <p>バウ・ミュウ動物病院では、食物アレルギーが疑われる犬に対して、丁寧な問診と検査を行い、適切な食事療法をご提案しています。「いつもかゆそう」「年中外耳炎を繰り返す」「慢性的に軟便」といった症状がある場合は、食物アレルギーの可能性を一度ご相談ください。</p>
            <p>適切な食事管理を行うことで、多くの犬が快適に過ごせるようになります。</p>
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
    <li><a href="/blog/dog-skin-disease" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬の皮膚病の種類と治療法｜かゆみ・赤みの原因を解説</a></li>
    <li><a href="/blog/dog-diarrhea-when-to-visit" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬の下痢が続く時の受診目安｜市原市の動物病院</a></li>
    <li><a href="/blog/obesity-prevention" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>ペットの肥満は万病のもと｜適正体重管理のポイント</a></li>
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
