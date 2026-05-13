import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '猫の糖尿病｜多飲多尿は要注意！症状と治療について｜バウ・ミュウ動物病院',
  description: '猫の糖尿病の症状・原因・治療法をバウ・ミュウ動物病院が解説。多飲多尿・体重減少・食欲の変化は糖尿病のサインかも。早期発見と適切なインスリン治療が重要です。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/cat-diabetes' },
  openGraph: {
    title: '猫の糖尿病｜多飲多尿は要注意！症状と治療について｜バウ・ミュウ動物病院',
    description: '猫の糖尿病の症状・原因・治療法をバウ・ミュウ動物病院が解説。多飲多尿・体重減少・食欲の変化は糖尿病のサインかも。早期発見と適切なインスリン治療が重要です。',
    url: 'https://bowmew-ah.com/blog/cat-diabetes',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/cat-diabetes.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '猫の糖尿病｜多飲多尿は要注意！症状と治療について｜バウ・ミュウ動物病院',
    description: '猫の糖尿病の症状・原因・治療法をバウ・ミュウ動物病院が解説。多飲多尿・体重減少・食欲の変化は糖尿病のサインかも。早期発見と適切なインスリン治療が重要です。',
    images: ['https://bowmew-ah.com/blog/cat-diabetes.webp'],
  },
}

export default function CatDiabetesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: '猫の糖尿病｜多飲多尿は要注意！症状と治療について',
    description: '猫の糖尿病の症状・原因・治療法をバウ・ミュウ動物病院が解説。多飲多尿・体重減少・食欲の変化は糖尿病のサインかも。早期発見と適切なインスリン治療が重要です。',
    image: "https://bowmew-ah.com/blog/cat-diabetes.webp",
    datePublished: "2026-04-01",
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
          <span style={{ color: '#666' }}>猫の糖尿病の症状と治療</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026-04-01</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>猫の糖尿病｜多飲多尿は要注意！症状と治療について</h1>
          <img src={`/blog/cat-diabetes.webp`} alt="猫の糖尿病の検査" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>猫の糖尿病は、インスリンの分泌不足やインスリンへの抵抗性によって血糖値が慢性的に高くなる病気です。中高齢の肥満猫に多く発症し、適切な治療を行わないと糖尿病性ケトアシドーシスという命に関わる状態に陥ることもあります。</p>
            <p>一方で、猫の糖尿病は早期に適切な治療を開始すれば、インスリンが不要になる「寛解」を達成できるケースもあります。この記事では、猫の糖尿病の症状・原因・治療について詳しく解説します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>猫の糖尿病の症状</h2>
            <p>糖尿病の代表的な症状は「多飲多尿」です。以下の症状が見られたら、糖尿病を疑いましょう。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>多飲：</strong>水をたくさん飲むようになった</li>
              <li><strong>多尿：</strong>尿の量や回数が増えた、トイレの塊が大きい</li>
              <li><strong>体重減少：</strong>食べているのに痩せてきた</li>
              <li><strong>食欲の変化：</strong>初期は食欲増加、進行すると食欲低下</li>
              <li><strong>毛並みの悪化：</strong>毛がパサつく、グルーミングをしなくなる</li>
              <li><strong>後ろ足のふらつき：</strong>かかとをつけて歩く（糖尿病性神経障害）</li>
            </ul>
            <p>特に「たくさん食べるのに痩せてきた」「水をいつもより多く飲む」という変化は、糖尿病の典型的なサインです。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>糖尿病の原因とリスク要因</h2>
            <p>猫の糖尿病は、人間の2型糖尿病に似たメカニズムで発症します。主なリスク要因は以下の通りです。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>肥満：</strong>最大のリスク要因。正常体重の猫に比べ4倍のリスク</li>
              <li><strong>高齢：</strong>8歳以上の中高齢猫に多い</li>
              <li><strong>性別：</strong>オス猫のほうがメス猫より発症率が高い</li>
              <li><strong>室内飼い・運動不足：</strong>肥満につながりやすい</li>
              <li><strong>ステロイド薬の長期使用：</strong>インスリン抵抗性を高める</li>
              <li><strong>膵炎：</strong>膵臓の炎症がインスリン分泌に影響する</li>
            </ul>
            <p>肥満は最も予防しやすいリスク要因です。適切な食事管理と運動で、糖尿病のリスクを大幅に下げることができます。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>糖尿病の診断</h2>
            <p>糖尿病の診断には、以下の検査を行います。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>血液検査：</strong>空腹時血糖値の測定（正常値は70〜150mg/dL程度）</li>
              <li><strong>フルクトサミン検査：</strong>過去1〜2週間の平均血糖値を反映する指標</li>
              <li><strong>尿検査：</strong>尿糖・ケトン体の確認</li>
              <li><strong>追加検査：</strong>膵炎、甲状腺機能亢進症などの併発疾患の確認</li>
            </ul>
            <p>猫は緊張するだけでも一時的に血糖値が上がる（ストレス性高血糖）ため、フルクトサミンの測定が診断に重要です。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>糖尿病の治療</h2>
            <p>猫の糖尿病の治療は、インスリン注射と食事療法が柱となります。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>インスリン注射：</strong>1日1〜2回、飼い主さまが自宅で皮下注射を行います。注射は細い針を使用するため、ほとんどの猫が嫌がりません</li>
              <li><strong>食事療法：</strong>高タンパク・低炭水化物の療法食に切り替えます。炭水化物を制限することで血糖値の上昇を抑えます</li>
              <li><strong>体重管理：</strong>肥満の場合は減量を目指します（急激な減量は避ける）</li>
              <li><strong>定期的な血糖測定：</strong>インスリンの量を調整するため、定期的に通院して血糖曲線を作成します</li>
            </ul>
            <p>猫の糖尿病は、早期に適切な治療を開始すれば約30〜40%の猫でインスリンが不要になる「寛解」が期待できます。寛解を目指すためにも、症状に気づいたら早めの受診が重要です。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>自宅でのケアと観察ポイント</h2>
            <p>糖尿病の管理では、ご自宅での観察が非常に大切です。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>水を飲む量と尿の量を記録する</li>
              <li>体重を定期的に測定する</li>
              <li>食欲や活動性の変化に注目する</li>
              <li>低血糖のサイン（ふらつき、元気消失、けいれん）に注意</li>
              <li>インスリン注射の時間と量を一定に保つ</li>
            </ul>
            <p>低血糖は命に関わる危険な状態です。ふらつきやぐったりした様子が見られたら、ガムシロップなどを歯茎に塗り、すぐに動物病院に連絡してください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>猫の多飲多尿が気になる方へ</h2>
            <p>バウ・ミュウ動物病院では、猫の糖尿病について丁寧に検査・診断を行い、飼い主さまに無理のない治療プランをご提案しています。インスリン注射の方法も実際にお見せしながら練習していただけますので、ご安心ください。</p>
            <p>愛猫の飲水量の増加や体重減少が気になる方は、お早めにご相談ください。</p>
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
    <li><a href="/blog/cat-vomiting-causes" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫が吐く原因と対処法｜心配な嘔吐の見分け方</a></li>
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
