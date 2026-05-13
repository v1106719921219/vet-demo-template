import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '犬猫の年齢を人間に換算すると？年齢早見表と健康管理｜バウ・ミュウ動物病院',
  description: '犬と猫の年齢を人間に換算する早見表と、年齢に応じた健康管理のポイントを獣医師が解説。ライフステージ別のケア方法をご紹介します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/pet-age-chart' },
  openGraph: {
    title: '犬猫の年齢を人間に換算すると？年齢早見表と健康管理｜バウ・ミュウ動物病院',
    description: '犬と猫の年齢を人間に換算する早見表と、年齢に応じた健康管理のポイントを獣医師が解説。ライフステージ別のケア方法をご紹介します。',
    url: 'https://bowmew-ah.com/blog/pet-age-chart',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/pet-age-chart.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '犬猫の年齢を人間に換算すると？年齢早見表と健康管理｜バウ・ミュウ動物病院',
    description: '犬と猫の年齢を人間に換算する早見表と、年齢に応じた健康管理のポイントを獣医師が解説。ライフステージ別のケア方法をご紹介します。',
    images: ['https://bowmew-ah.com/blog/pet-age-chart.webp'],
  },
}

export default function PetAgeChart() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: '犬猫の年齢を人間に換算すると？年齢早見表と健康管理',
    description: '犬と猫の年齢を人間に換算する早見表と、年齢に応じた健康管理のポイントを獣医師が解説。ライフステージ別のケア方法をご紹介します。',
    image: "https://bowmew-ah.com/blog/pet-age-chart.webp",
    datePublished: "2025-12-10",
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
          <span style={{ color: '#666' }}>犬猫の年齢換算表</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2025.12.10</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>犬猫の年齢を人間に換算すると？年齢早見表と健康管理</h1>
          <img src={`/blog/pet-age-chart.webp`} alt="犬猫の年齢換算" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>「うちの子は人間でいうと何歳？」とよく聞かれます。犬も猫も人間より速いスピードで歳を重ねるため、見た目はまだ若く見えても体の中では老化が進んでいることがあります。年齢に応じた適切なケアで、ペットの健康寿命を延ばしましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>犬の年齢換算表（人間年齢の目安）</h2>
            <p>犬の年齢換算は体のサイズによって異なります。大型犬ほど老化が早い傾向があります。</p>
            <p><strong>小型犬（10kg未満）の場合：</strong></p>
            <ul>
              <li>1歳 → 人間の約15歳</li>
              <li>2歳 → 人間の約24歳</li>
              <li>5歳 → 人間の約36歳</li>
              <li>7歳 → 人間の約44歳（シニア期の入口）</li>
              <li>10歳 → 人間の約56歳</li>
              <li>13歳 → 人間の約68歳</li>
              <li>16歳 → 人間の約80歳</li>
            </ul>
            <p><strong>大型犬（25kg以上）の場合：</strong></p>
            <ul>
              <li>1歳 → 人間の約12歳</li>
              <li>2歳 → 人間の約19歳</li>
              <li>5歳 → 人間の約40歳</li>
              <li>7歳 → 人間の約54歳（シニア期の入口）</li>
              <li>10歳 → 人間の約75歳</li>
              <li>13歳 → 人間の約96歳</li>
            </ul>
            <p>大型犬は5歳を過ぎたら早めにシニア期を意識したケアを始めましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>猫の年齢換算表</h2>
            <p>猫は体のサイズによる差が犬ほど大きくないため、比較的統一された換算が可能です。</p>
            <ul>
              <li>1歳 → 人間の約18歳</li>
              <li>2歳 → 人間の約24歳</li>
              <li>5歳 → 人間の約36歳</li>
              <li>7歳 → 人間の約44歳（中年期）</li>
              <li>10歳 → 人間の約56歳</li>
              <li>12歳 → 人間の約64歳（シニア期）</li>
              <li>15歳 → 人間の約76歳</li>
              <li>18歳 → 人間の約88歳</li>
              <li>20歳 → 人間の約96歳</li>
            </ul>
            <p>完全室内飼いの猫の平均寿命は15〜16歳と言われています。適切なケアで20歳を超える猫も珍しくありません。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>ライフステージ別の健康管理ポイント</h2>
            <p>年齢に応じたケアのポイントをまとめました。</p>
            <p><strong>成長期（0〜1歳）：</strong></p>
            <ul>
              <li>ワクチン接種スケジュールを完了させる</li>
              <li>避妊・去勢手術の適切なタイミングを相談する</li>
              <li>成長に合わせた栄養管理と適切な運動</li>
              <li>社会化トレーニング（人や環境に慣れさせる）</li>
            </ul>
            <p><strong>成犬・成猫期（1〜7歳）：</strong></p>
            <ul>
              <li>年1回の定期健康診断</li>
              <li>肥満予防のための体重管理</li>
              <li>デンタルケア（歯磨きの習慣化）</li>
              <li>フィラリア・ノミダニの予防を継続</li>
            </ul>
            <p><strong>シニア期（7歳以降）：</strong></p>
            <ul>
              <li>年2回の健康診断（血液検査含む）</li>
              <li>シニア用フードへの切り替え</li>
              <li>関節ケア（サプリメントやベッドの見直し）</li>
              <li>認知症の早期サインに注意</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>シニア期に多い病気と早期発見のサイン</h2>
            <p>高齢のペットに多い病気と、その早期サインを知っておきましょう。</p>
            <p><strong>犬に多い病気：</strong></p>
            <ul>
              <li>関節炎 → 動きが鈍くなる、段差を嫌がる</li>
              <li>心臓病 → 咳、疲れやすい、呼吸が荒い</li>
              <li>腫瘍 → しこり、急な体重減少</li>
              <li>認知症 → 夜鳴き、徘徊、粗相</li>
            </ul>
            <p><strong>猫に多い病気：</strong></p>
            <ul>
              <li>慢性腎臓病 → 水をよく飲む、尿量増加、体重減少</li>
              <li>甲状腺機能亢進症 → 食欲旺盛なのに痩せる、活発すぎる</li>
              <li>糖尿病 → 多飲多尿、体重減少</li>
              <li>口内炎 → 食べたそうなのに食べない、よだれ</li>
            </ul>
            <p>これらの病気は早期発見・早期治療で進行を遅らせることができます。「歳だから仕方ない」と思わず、変化に気づいたら受診しましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>健康寿命を延ばすための5つの習慣</h2>
            <p>ペットの健康寿命を延ばすために、日頃から以下を心がけましょう。</p>
            <ul>
              <li><strong>適正体重の維持：</strong>肥満は万病の元。定期的に体重を測り、BCS（ボディコンディションスコア）をチェック</li>
              <li><strong>デンタルケア：</strong>歯周病は全身に影響します。毎日の歯磨きが理想的</li>
              <li><strong>適度な運動：</strong>年齢に合った運動量で筋力と心肺機能を維持</li>
              <li><strong>定期健康診断：</strong>シニア期は半年に1回の血液検査が推奨</li>
              <li><strong>ストレス管理：</strong>安心できる環境と飼い主とのコミュニケーション</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>まとめ</h2>
            <p>犬や猫は人間の何倍ものスピードで歳を重ねます。年齢に合った健康管理を行うことで、一日でも長く元気に過ごしてもらいましょう。バウ・ミュウ動物病院では、各年齢に応じた健康診断プランをご用意しています。シニア期の健康相談もお気軽にお越しください。</p>
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
    <li><a href="/blog/cat-health-checkup" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫の健康診断｜頻度と検査項目を動物病院が解説</a></li>
  </ul>
</div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
      </main>
    </>
  )
}
