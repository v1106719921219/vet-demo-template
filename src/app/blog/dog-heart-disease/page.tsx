import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '犬の心臓病｜咳が増えたら要注意？初期症状と治療法｜バウ・ミュウ動物病院',
  description: '犬の心臓病の初期症状・原因・治療法をバウ・ミュウ動物病院が解説。咳が増えた、疲れやすくなったなどの変化は心臓病のサインかもしれません。早期発見のポイントをご案内。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/dog-heart-disease' },
  openGraph: {
    title: '犬の心臓病｜咳が増えたら要注意？初期症状と治療法｜バウ・ミュウ動物病院',
    description: '犬の心臓病の初期症状・原因・治療法をバウ・ミュウ動物病院が解説。咳が増えた、疲れやすくなったなどの変化は心臓病のサインかもしれません。早期発見のポイントをご案内。',
    url: 'https://bowmew-ah.com/blog/dog-heart-disease',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/dog-heart-disease.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '犬の心臓病｜咳が増えたら要注意？初期症状と治療法｜バウ・ミュウ動物病院',
    description: '犬の心臓病の初期症状・原因・治療法をバウ・ミュウ動物病院が解説。咳が増えた、疲れやすくなったなどの変化は心臓病のサインかもしれません。早期発見のポイントをご案内。',
    images: ['https://bowmew-ah.com/blog/dog-heart-disease.webp'],
  },
}

export default function DogHeartDiseasePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: '犬の心臓病｜咳が増えたら要注意？初期症状と治療法',
    description: '犬の心臓病の初期症状・原因・治療法をバウ・ミュウ動物病院が解説。咳が増えた、疲れやすくなったなどの変化は心臓病のサインかもしれません。早期発見のポイントをご案内。',
    image: "https://bowmew-ah.com/blog/dog-heart-disease.webp",
    datePublished: "2026-04-05",
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
          <span style={{ color: '#666' }}>犬の心臓病の初期症状</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026-04-05</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>犬の心臓病｜咳が増えたら要注意？初期症状と治療法</h1>
          <img src={`/blog/dog-heart-disease.webp`} alt="犬の心臓病の診察" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>犬の心臓病は、特に中高齢の小型犬に多く見られる疾患です。初期には目立った症状がなく、咳や疲れやすさとして現れた頃にはある程度進行していることが少なくありません。早期発見と適切な治療により、心臓病の進行を遅らせ、愛犬の生活の質を保つことができます。</p>
            <p>この記事では、犬の心臓病の初期症状・原因・治療法について解説します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>犬に多い心臓病の種類</h2>
            <p>犬の心臓病にはいくつかの種類がありますが、特に多いのは以下の2つです。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>僧帽弁閉鎖不全症（MMVD）：</strong>最も多い心臓病で、全心臓病の約75%を占めます。心臓の僧帽弁が変性して血液が逆流する病気です。小型犬に多く見られます。</li>
              <li><strong>拡張型心筋症（DCM）：</strong>大型犬に多い心臓病で、心臓の筋肉が薄くなり、ポンプ機能が低下します。ドーベルマン、グレート・デーン、ボクサーなどに好発します。</li>
            </ul>
            <p>僧帽弁閉鎖不全症は、マルチーズ、チワワ、トイ・プードル、キャバリア、シーズーなどの小型犬に多く発症し、加齢とともにリスクが高まります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>心臓病の初期症状</h2>
            <p>犬の心臓病は、初期段階ではほとんど症状が出ません。以下のような変化が見られたら、心臓病が進行しているサインかもしれません。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>咳が増えた：</strong>特に夜間や明け方、興奮した時の咳</li>
              <li><strong>散歩を嫌がる：</strong>以前より疲れやすく、歩くのを嫌がる</li>
              <li><strong>呼吸が荒い：</strong>安静時でも呼吸が速い（正常は1分間に15〜30回）</li>
              <li><strong>元気がない：</strong>遊びたがらない、寝ている時間が増えた</li>
              <li><strong>失神：</strong>突然倒れて意識を失う</li>
              <li><strong>お腹が膨れる：</strong>腹水が溜まっている可能性</li>
            </ul>
            <p>咳は心臓病の代表的なサインです。心臓が大きくなって気管を圧迫することで咳が出ます。「歳のせい」と思って見過ごされがちですが、咳が増えてきたら一度検査を受けることをおすすめします。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>心臓病の検査方法</h2>
            <p>当院では以下の検査で心臓の状態を評価します。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>聴診：</strong>心雑音の有無と程度を確認（最も基本的な検査）</li>
              <li><strong>胸部レントゲン：</strong>心臓の大きさ、肺の状態を確認</li>
              <li><strong>心臓エコー検査：</strong>心臓の動き、弁の状態、逆流の程度をリアルタイムで確認</li>
              <li><strong>血圧測定：</strong>全身の血圧を評価</li>
              <li><strong>心電図：</strong>不整脈の有無を確認</li>
              <li><strong>血液検査：</strong>心臓バイオマーカー（NT-proBNP）などで心臓への負担を評価</li>
            </ul>
            <p>健康診断で心雑音を指摘されることがきっかけで発見されるケースも多くあります。7歳以上の小型犬は、年に1回の定期的な心臓チェックをおすすめします。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>心臓病の治療</h2>
            <p>犬の心臓病（僧帽弁閉鎖不全症）は完治させることは難しいですが、投薬により進行を遅らせ、症状をコントロールすることができます。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>ACE阻害剤：</strong>心臓の負担を軽減する基本薬</li>
              <li><strong>ピモベンダン：</strong>心臓の収縮力を高め、血管を広げる</li>
              <li><strong>利尿剤：</strong>肺水腫や腹水がある場合に使用</li>
              <li><strong>抗不整脈薬：</strong>不整脈がある場合に使用</li>
            </ul>
            <p>治療のステージは、心臓の状態に応じてA〜Dの4段階に分類されます。無症状の段階から投薬を開始することで、うっ血性心不全の発症を遅らせることができるとの研究結果も報告されています。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>日常生活での注意点</h2>
            <p>心臓病と診断された場合、日常生活で以下の点に注意しましょう。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>処方された薬を毎日欠かさず投与する</li>
              <li>塩分の高い食事やおやつを避ける</li>
              <li>激しい運動は避け、短時間の穏やかな散歩にとどめる</li>
              <li>安静時の呼吸数を定期的に記録する（1分間に40回以上なら要受診）</li>
              <li>定期的に通院して心臓の状態をチェックする</li>
              <li>急な気温変化や興奮を避ける</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>犬の咳や疲れやすさが気になる方へ</h2>
            <p>バウ・ミュウ動物病院では、犬の心臓病の早期発見と適切な治療管理を行っています。定期健診での聴診から心臓エコー検査まで対応し、愛犬の心臓の状態を丁寧に評価いたします。</p>
            <p>「最近咳が増えた」「散歩で疲れやすくなった」と感じたら、心臓のチェックを受けてみませんか。お気軽にご来院ください。</p>
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
    <li><a href="/blog/senior-dog-care" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>シニア犬の健康管理｜7歳からの定期健診のすすめ</a></li>
    <li><a href="/blog/dog-health-checkup-cost" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>【市原市】犬の健康診断の費用と検査内容｜年1回がおすすめ</a></li>
    <li><a href="/blog/dog-epilepsy" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬のてんかん発作｜症状・原因・飼い主ができる対処法</a></li>
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
