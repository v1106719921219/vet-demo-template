import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '犬の皮膚病の種類と治療法｜かゆみ・赤みの原因を解説｜バウ・ミュウ動物病院',
  description: '犬の皮膚病の種類・原因・治療法をバウ・ミュウ動物病院が解説。かゆみや赤み、脱毛の原因を特定し適切に治療します。市原市で犬の皮膚トラブルにお悩みの方はご相談ください。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/dog-skin-disease' },
  openGraph: {
    title: '犬の皮膚病の種類と治療法｜かゆみ・赤みの原因を解説｜バウ・ミュウ動物病院',
    description: '犬の皮膚病の種類・原因・治療法をバウ・ミュウ動物病院が解説。かゆみや赤み、脱毛の原因を特定し適切に治療します。市原市で犬の皮膚トラブルにお悩みの方はご相談ください。',
    url: 'https://bowmew-ah.com/blog/dog-skin-disease',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/dog-skin-disease.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '犬の皮膚病の種類と治療法｜かゆみ・赤みの原因を解説｜バウ・ミュウ動物病院',
    description: '犬の皮膚病の種類・原因・治療法をバウ・ミュウ動物病院が解説。かゆみや赤み、脱毛の原因を特定し適切に治療します。市原市で犬の皮膚トラブルにお悩みの方はご相談ください。',
    images: ['https://bowmew-ah.com/blog/dog-skin-disease.webp'],
  },
}

export default function DogSkinDiseasePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: '犬の皮膚病の種類と治療法｜かゆみ・赤みの原因を解説',
    description: '犬の皮膚病の種類・原因・治療法をバウ・ミュウ動物病院が解説。かゆみや赤み、脱毛の原因を特定し適切に治療します。市原市で犬の皮膚トラブルにお悩みの方はご相談ください。',
    image: "https://bowmew-ah.com/blog/dog-skin-disease.webp",
    datePublished: "2026-04-15",
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
          <span style={{ color: '#666' }}>犬の皮膚病の種類と治療</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026-04-15</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>犬の皮膚病の種類と治療法｜かゆみ・赤みの原因を解説</h1>
          <img src={`/blog/dog-skin-disease.webp`} alt="犬の皮膚病の治療" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>犬の皮膚病は、動物病院への来院理由として最も多い症状のひとつです。しきりに体を掻いている、皮膚が赤くなっている、毛が抜けるなどの症状がある場合は、何らかの皮膚疾患を抱えている可能性があります。</p>
            <p>皮膚病は原因によって治療法が大きく異なるため、正確な診断が重要です。この記事では、犬に多い皮膚病の種類と治療法について解説します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>犬に多い皮膚病の種類</h2>
            <p>犬の皮膚病は大きく分けて以下のタイプがあります。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>アレルギー性皮膚炎：</strong>アトピー性皮膚炎、食物アレルギー、ノミアレルギーなど</li>
              <li><strong>感染性皮膚炎：</strong>細菌感染（膿皮症）、真菌感染（マラセチア、皮膚糸状菌）</li>
              <li><strong>寄生虫性皮膚炎：</strong>ノミ、ダニ、疥癬（ヒゼンダニ）、毛包虫</li>
              <li><strong>内分泌性皮膚疾患：</strong>甲状腺機能低下症、クッシング症候群</li>
              <li><strong>自己免疫性皮膚疾患：</strong>天疱瘡、エリテマトーデスなど</li>
            </ul>
            <p>最も多いのはアレルギー性皮膚炎と細菌性皮膚炎（膿皮症）で、これらが合併しているケースも多く見られます。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>アトピー性皮膚炎</h2>
            <p>犬のアトピー性皮膚炎は、環境中のアレルゲン（花粉、ハウスダスト、ダニなど）に対する過剰な免疫反応で起こります。遺伝的な体質が関係しており、特に以下の犬種に多く見られます。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>柴犬、フレンチ・ブルドッグ、シー・ズー</li>
              <li>ゴールデン・レトリーバー、ラブラドール・レトリーバー</li>
              <li>ウエスト・ハイランド・ホワイト・テリア</li>
            </ul>
            <p>症状として、目の周り・口の周り・耳・脇の下・指の間・お腹などに強いかゆみと赤みが出ます。多くは1〜3歳頃に発症し、季節によって悪化することが特徴です。</p>
            <p>治療には、かゆみ止め（アポキルなど）、免疫抑制剤、減感作療法、スキンケアなどを組み合わせて行います。完治は難しいですが、適切な管理で症状をコントロールすることが可能です。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>膿皮症（細菌性皮膚炎）</h2>
            <p>膿皮症は、皮膚のバリア機能が低下した時に常在菌（ブドウ球菌など）が異常増殖して起こる感染症です。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>赤い発疹やニキビのようなできもの</li>
              <li>フケが増える</li>
              <li>円形に毛が抜ける</li>
              <li>かさぶたができる</li>
              <li>独特の臭いがする</li>
            </ul>
            <p>治療は抗生剤の内服と薬用シャンプーが基本です。アトピー性皮膚炎やホルモン疾患が原因で膿皮症を繰り返す場合は、根本原因の治療も必要になります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>皮膚病の診断方法</h2>
            <p>当院では、以下の検査を用いて皮膚病の原因を特定します。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>皮膚掻爬検査：</strong>皮膚を軽く削って顕微鏡で寄生虫を確認</li>
              <li><strong>細胞診：</strong>テープや押捺で細菌・酵母菌・炎症細胞を確認</li>
              <li><strong>真菌培養検査：</strong>カビ（皮膚糸状菌）の有無を調べる</li>
              <li><strong>血液検査：</strong>アレルギー検査やホルモン検査</li>
              <li><strong>食事除去試験：</strong>食物アレルギーの診断に使用</li>
              <li><strong>皮膚生検：</strong>難治性の場合、組織を採取して病理検査</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>日常のスキンケアと予防</h2>
            <p>皮膚病の予防や症状の緩和には、日々のケアが大切です。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>定期的なシャンプー（皮膚の状態に合った製品を選ぶ）</li>
              <li>ブラッシングで通気性を保つ</li>
              <li>ノミ・ダニの予防を通年で行う</li>
              <li>適切な栄養（オメガ3脂肪酸を含むフード）</li>
              <li>室内の清掃・湿度管理</li>
              <li>ストレスの軽減</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>犬の皮膚トラブルでお悩みの方へ</h2>
            <p>バウ・ミュウ動物病院では、犬の皮膚病について丁寧に検査・診断を行い、原因に合った治療をご提案しています。皮膚病は原因が複合的であることも多く、根気よく治療を続けることが大切です。</p>
            <p>愛犬のかゆみや赤み、脱毛が気になる方は、お気軽にご来院ください。早期に治療を開始することで、症状の悪化を防ぐことができます。</p>
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
    <li><a href="/blog/rainy-season-skin" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>梅雨時期の犬の皮膚トラブル｜市原市の湿気対策</a></li>
    <li><a href="/blog/dog-ear-infection" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬の耳が臭い？外耳炎の症状・原因と治療について</a></li>
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
