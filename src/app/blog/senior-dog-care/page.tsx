import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'シニア犬の健康管理｜7歳からの定期健診のすすめ｜バウ・ミュウ動物病院',
  description: '千葉県市原市のバウ・ミュウ動物病院がシニア犬の健康管理について解説。7歳を過ぎたら定期健診がおすすめ。心臓病・腎臓病・関節疾患の早期発見が大切です。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/senior-dog-care' },
  openGraph: {
    title: 'シニア犬の健康管理｜7歳からの定期健診のすすめ｜バウ・ミュウ動物病院',
    description: '千葉県市原市のバウ・ミュウ動物病院がシニア犬の健康管理について解説。7歳を過ぎたら定期健診がおすすめ。心臓病・腎臓病・関節疾患の早期発見が大切です。',
    url: 'https://bowmew-ah.com/blog/senior-dog-care',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/senior-dog-care.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'シニア犬の健康管理｜7歳からの定期健診のすすめ｜バウ・ミュウ動物病院',
    description: '千葉県市原市のバウ・ミュウ動物病院がシニア犬の健康管理について解説。7歳を過ぎたら定期健診がおすすめ。心臓病・腎臓病・関節疾患の早期発見が大切です。',
    images: ['https://bowmew-ah.com/blog/senior-dog-care.webp'],
  },
}

export default function SeniorDogCarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: 'シニア犬の健康管理｜7歳からの定期健診のすすめ',
    description: '千葉県市原市のバウ・ミュウ動物病院がシニア犬の健康管理について解説。7歳を過ぎたら定期健診がおすすめ。心臓病・腎臓病・関節疾患の早期発見が大切です。',
    image: "https://bowmew-ah.com/blog/senior-dog-care.webp",
    datePublished: "2026-03-25",
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
          <span style={{ color: '#666' }}>シニア犬の健康管理</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026-03-25</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>シニア犬の健康管理｜7歳からの定期健診のすすめ</h1>
          <img src={`/blog/senior-dog-care.webp`} alt="シニア犬の健康管理" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>愛犬と過ごす日々はかけがえのないものですが、犬は人間よりもずっと早いスピードで年を重ねていきます。「まだまだ元気だから大丈夫」と思っていても、見えないところで病気が進行していることは珍しくありません。</p>
            <p>犬は一般的に7歳頃からシニア期に入るとされています。この時期を境に、加齢に伴うさまざまな病気のリスクが高まるため、定期的な健康診断が非常に重要になります。市原市にお住まいの飼い主さまに向けて、シニア犬の健康管理のポイントを詳しくご紹介します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>犬のシニア期はいつから？</h2>
            <p>犬のシニア期の目安は、体の大きさによって異なります。一般的には以下のように分類されます。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>小型犬（チワワ、トイプードルなど）：</strong>7〜8歳頃からシニア期</li>
              <li><strong>中型犬（柴犬、コーギーなど）：</strong>7歳頃からシニア期</li>
              <li><strong>大型犬（ラブラドール、ゴールデンレトリバーなど）：</strong>5〜6歳頃からシニア期</li>
            </ul>
            <p>大型犬は小型犬に比べて寿命が短い傾向にあるため、より早い段階からシニアケアを意識する必要があります。犬の7歳は人間でいうと約44〜54歳に相当し、中年期から老年期への移行期にあたります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>シニア犬がかかりやすい病気</h2>
            <p>加齢に伴い、以下のような病気のリスクが高まります。早期発見・早期治療が何より大切です。</p>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>心臓病</h3>
            <p>小型犬に特に多いのが僧帽弁閉鎖不全症です。心臓の弁がうまく閉じなくなり、血液が逆流する病気です。初期は症状がほとんどありませんが、進行すると咳や呼吸困難、運動不耐性などが現れます。聴診で心雑音が見つかることが多く、定期的な検診で早期発見が可能です。</p>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>腎臓病</h3>
            <p>腎臓は一度機能が失われると回復しない臓器です。シニア犬では慢性腎臓病が増え、多飲多尿（水をたくさん飲み、おしっこの量が増える）が初期のサインとなります。血液検査や尿検査で腎機能の状態を定期的にチェックすることが重要です。</p>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>関節疾患</h3>
            <p>変形性関節症は、高齢犬に非常に多い病気です。軟骨がすり減ることで痛みが生じ、散歩を嫌がる、階段を上がれなくなる、立ち上がりに時間がかかるなどの症状が現れます。体重管理と適度な運動が予防のカギとなります。</p>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>白内障</h3>
            <p>目の水晶体が白く濁る病気で、進行すると視力が低下します。シニア犬に多く見られ、目が白っぽく見えるようになったら早めに動物病院を受診しましょう。早期であれば点眼薬で進行を遅らせることができる場合があります。</p>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>腫瘍（がん）</h3>
            <p>犬のがんは高齢になるほど発生率が上がります。体にしこりがないか、日頃からスキンシップの際に確認する習慣をつけましょう。早期に発見できれば、治療の選択肢が広がります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>シニア犬の健康診断の内容</h2>
            <p>バウ・ミュウ動物病院で行っているシニア犬向けの健康診断では、以下の項目を総合的にチェックします。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>身体検査：</strong>体重測定、触診、聴診（心音・肺音）、口腔内チェック</li>
              <li><strong>血液検査：</strong>肝臓・腎臓の機能、血糖値、コレステロール、貧血の有無など</li>
              <li><strong>尿検査：</strong>腎機能の評価、尿路感染症の有無</li>
              <li><strong>レントゲン検査：</strong>心臓の大きさ、肺の状態、骨・関節の異常</li>
              <li><strong>超音波検査：</strong>心臓や腹部臓器の詳しい評価</li>
            </ul>
            <p>若い頃は年に1回の健康診断で十分ですが、シニア期に入ったら半年に1回の受診をおすすめしています。犬の半年は人間の2〜3年に相当するため、こまめなチェックが早期発見につながります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>シニア犬の食事と運動</h2>
            <p>シニア期に入ったら、食事と運動も見直しが必要です。</p>
            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>食事のポイント</h3>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>シニア用フードに切り替え、カロリーを適切に管理する</li>
              <li>良質なたんぱく質を十分に摂取させる</li>
              <li>関節の健康維持のためにグルコサミン・コンドロイチンを含むフードを検討する</li>
              <li>腎臓に負担をかけないよう、塩分を控えめにする</li>
              <li>消化機能が低下するため、1日の食事回数を2〜3回に分ける</li>
            </ul>
            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>運動のポイント</h3>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>急な運動や激しい運動は避け、穏やかな散歩を続ける</li>
              <li>散歩の距離や時間は犬のペースに合わせて調整する</li>
              <li>関節に負担がかからないよう、滑りにくい床やマットを敷く</li>
              <li>市原市内の平坦な散歩コースを選び、坂道は避ける</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>市原市でシニア犬の健康管理なら</h2>
            <p>バウ・ミュウ動物病院では、シニア犬の健康診断や日常のケアについて丁寧にアドバイスしています。市原市の動物病院として、高齢のペットとその飼い主さまに寄り添った診療を心がけています。</p>
            <p>「最近なんとなく元気がない」「水を飲む量が増えた気がする」など、些細な変化でもお気軽にご相談ください。早めの受診が、愛犬の健康寿命を延ばすことにつながります。</p>
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
    <li><a href="/blog/cat-health-checkup" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫の健康診断｜頻度と検査項目を動物病院が解説</a></li>
    <li><a href="/blog/winter-joint-care" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>冬の関節ケア｜シニア犬猫の寒さ対策と注意点</a></li>
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
