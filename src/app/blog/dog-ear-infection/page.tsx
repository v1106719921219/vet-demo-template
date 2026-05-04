import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '犬の耳が臭い？外耳炎の症状・原因と治療について｜バウ・ミュウ動物病院',
  description: '犬の外耳炎の症状・原因・治療法を獣医師が解説。耳の臭い、かゆみ、耳垢が多い場合の対処法と予防法をご紹介します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/dog-ear-infection' },
  openGraph: {
    title: '犬の耳が臭い？外耳炎の症状・原因と治療について｜バウ・ミュウ動物病院',
    description: '犬の外耳炎の症状・原因・治療法を獣医師が解説。耳の臭い、かゆみ、耳垢が多い場合の対処法と予防法をご紹介します。',
    url: 'https://bowmew-ah.com/blog/dog-ear-infection',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/dog-ear-infection.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '犬の耳が臭い？外耳炎の症状・原因と治療について｜バウ・ミュウ動物病院',
    description: '犬の外耳炎の症状・原因・治療法を獣医師が解説。耳の臭い、かゆみ、耳垢が多い場合の対処法と予防法をご紹介します。',
    images: ['https://bowmew-ah.com/blog/dog-ear-infection.webp'],
  },
}

export default function DogEarInfection() {
  return (
    <main className="site">
      <header className="header">
        <div className="headerInner">
          <a className="logo" href="/"><img src="/logo.png" alt="バウ・ミュウ動物病院" className="logoMark" style={{ width: 100, height: 100, borderRadius: 0, background: 'transparent' }} /><span><strong>バウ・ミュウ動物病院</strong><small>犬と猫のホームドクター</small></span></a>
          <nav className="nav"><a href="/about">当院について</a><a href="/services">診療案内</a><a href="/price">料金</a><a href="/first-visit">初めての方</a><a href="/access">アクセス</a><a href="/blog">コラム</a></nav>
          <a className="headerBtn" href="tel:0436411008">電話する</a>
        </div>
      </header>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026.03.15</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>犬の耳が臭い？外耳炎の症状・原因と治療について</h1>
          <img src={`/blog/dog-ear-infection.webp`} alt="犬の外耳炎の症状" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>犬の耳から嫌な臭いがする、耳をしきりに掻いている、頭を振っている...これらは外耳炎のサインかもしれません。外耳炎は犬で最も多い耳の病気のひとつで、動物病院の来院理由としても非常に多く見られます。放置すると中耳炎や内耳炎に進行する恐れがあるため、早めの対処が大切です。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>犬の外耳炎の症状</h2>
            <p>外耳炎になると、以下のような症状が見られます。</p>
            <ul>
              <li>耳を頻繁に掻く、後ろ足で耳の周りを掻く</li>
              <li>頭をブルブルと振る</li>
              <li>耳から悪臭がする</li>
              <li>耳垢が多い（黒っぽい、茶色い、黄色いなど）</li>
              <li>耳の中が赤く腫れている</li>
              <li>耳を触ると痛がる、嫌がる</li>
              <li>頭を傾ける（片側の外耳炎の場合）</li>
              <li>耳の周囲の脱毛や傷</li>
            </ul>
            <p>症状が軽いうちは耳を気にする程度ですが、悪化すると痛みから触られることを極端に嫌がったり、元気や食欲が低下したりすることもあります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>外耳炎の原因</h2>
            <p>犬の外耳炎の原因は複数の要因が絡み合っています。</p>
            <p><strong>主因（直接的な原因）：</strong></p>
            <ul>
              <li>アレルギー（食物アレルギー、アトピー性皮膚炎）が最も多い原因</li>
              <li>耳ダニ（ミミヒゼンダニ）の寄生</li>
              <li>異物（草の種など）</li>
              <li>腫瘍やポリープ</li>
            </ul>
            <p><strong>副因（二次的に悪化させる原因）：</strong></p>
            <ul>
              <li>細菌感染（ブドウ球菌、緑膿菌など）</li>
              <li>マラセチア（酵母菌）の過剰増殖</li>
            </ul>
            <p><strong>素因（なりやすい体質・構造）：</strong></p>
            <ul>
              <li>垂れ耳の犬種（コッカー・スパニエル、ゴールデン・レトリバーなど）</li>
              <li>耳道が狭い犬種（フレンチ・ブルドッグ、パグなど）</li>
              <li>耳毛が多い犬種（トイ・プードル、シュナウザーなど）</li>
              <li>水泳や入浴後の耳の湿り</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>動物病院での検査と治療</h2>
            <p>外耳炎の治療は原因に応じて行います。まず耳鏡で耳道内を観察し、耳垢の細胞診で細菌やマラセチア、ダニの有無を確認します。</p>
            <p><strong>耳の洗浄：</strong>耳道内の汚れや耳垢を専用の洗浄液で除去します。重度の場合は鎮静下で行うこともあります。</p>
            <p><strong>点耳薬：</strong>抗生物質、抗真菌薬、ステロイドなどを含む点耳薬を使用します。通常1〜2週間の投与が必要です。</p>
            <p><strong>内服薬：</strong>重度の場合やアレルギーが原因の場合は、抗生物質や抗炎症薬の内服を併用します。</p>
            <p><strong>原因治療：</strong>アレルギーが原因の場合は食事療法やアレルギー治療、耳ダニの場合は駆虫薬を使用します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>自宅での耳のケア方法</h2>
            <p>外耳炎の予防と再発防止のため、適切な耳のケアを心がけましょう。</p>
            <ul>
              <li>週1回程度、耳の中を目視でチェックする</li>
              <li>獣医師に指示された洗浄液で定期的に耳掃除をする</li>
              <li>綿棒は耳道を傷つけるため使用しない</li>
              <li>シャンプーや水泳の後は耳の中を乾かす</li>
              <li>耳毛の処理は獣医師に相談のうえ行う</li>
            </ul>
            <p>ただし、過度な耳掃除はかえって耳を傷つけ、外耳炎を悪化させることがあります。ケアの頻度や方法は獣医師と相談して決めましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>外耳炎を繰り返す場合は</h2>
            <p>外耳炎が何度も再発する場合は、根本的な原因（特にアレルギー）が解決できていない可能性があります。食物アレルギーの除去食試験やアレルギー検査を検討するとともに、長期的な管理計画を獣医師と相談することをおすすめします。</p>
            <p>耳の異常に気づいたら、悪化する前にお早めにご来院ください。当院では耳の検査から治療、日常のケア指導まで対応いたします。</p>
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
    <li><a href="/blog/rainy-season-skin" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>梅雨時期の犬の皮膚トラブル｜市原市の湿気対策</a></li>
    <li><a href="/blog/dog-food-allergy" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬の食物アレルギー｜症状と食事管理のポイント</a></li>
  </ul>
</div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
    </main>
  )
}
