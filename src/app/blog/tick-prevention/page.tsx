import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '市原市で気をつけたいノミ・マダニ対策｜予防時期と方法｜バウ・ミュウ動物病院',
  description: '千葉県市原市のバウ・ミュウ動物病院がノミ・マダニの予防方法を解説。市原市は自然が豊かでマダニのリスクが高い地域です。予防薬の種類や散歩後のチェック方法をご紹介。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/tick-prevention' },
  openGraph: {
    title: '市原市で気をつけたいノミ・マダニ対策｜予防時期と方法｜バウ・ミュウ動物病院',
    description: '千葉県市原市のバウ・ミュウ動物病院がノミ・マダニの予防方法を解説。市原市は自然が豊かでマダニのリスクが高い地域です。予防薬の種類や散歩後のチェック方法をご紹介。',
    url: 'https://bowmew-ah.com/blog/tick-prevention',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/tick-prevention.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '市原市で気をつけたいノミ・マダニ対策｜予防時期と方法｜バウ・ミュウ動物病院',
    description: '千葉県市原市のバウ・ミュウ動物病院がノミ・マダニの予防方法を解説。市原市は自然が豊かでマダニのリスクが高い地域です。予防薬の種類や散歩後のチェック方法をご紹介。',
    images: ['https://bowmew-ah.com/blog/tick-prevention.webp'],
  },
}

export default function TickPreventionPage() {
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
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026-02-20</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>市原市で気をつけたいノミ・マダニ対策｜予防時期と方法</h1>
          <img src={`/blog/tick-prevention.webp`} alt="ノミ・マダニの予防対策" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>ノミやマダニは、犬や猫に寄生して血を吸うだけでなく、さまざまな病気を媒介する厄介な寄生虫です。千葉県市原市は房総半島の中央に位置し、養老渓谷や市原ぞうの国周辺をはじめ、自然豊かな環境が広がっています。緑が多い地域は散歩やお出かけに最適ですが、同時にノミ・マダニの生息に適した環境でもあります。</p>
            <p>この記事では、市原市にお住まいの飼い主さまに向けて、ノミ・マダニが引き起こす病気、予防薬の選び方、散歩後のチェック方法について詳しく解説します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>ノミ・マダニが引き起こす病気</h2>
            <p>ノミやマダニは単なる「虫刺され」では済まない深刻な健康被害をもたらすことがあります。</p>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>ノミによる病気</h3>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>ノミアレルギー性皮膚炎：</strong>ノミの唾液に対するアレルギー反応で、激しいかゆみや脱毛が起こります。たった1匹のノミに刺されただけでも発症することがあります。</li>
              <li><strong>瓜実条虫（サナダムシ）：</strong>ノミを飲み込むことで感染し、消化器症状を引き起こします。肛門周辺に米粒のような白い虫が見られることがあります。</li>
              <li><strong>貧血：</strong>特に子犬や子猫に大量のノミが寄生すると、大量の吸血により貧血を起こすことがあります。</li>
              <li><strong>猫ひっかき病：</strong>ノミが媒介するバルトネラ菌が原因で、感染した猫に引っかかれたり噛まれたりすると、人間にも感染します。</li>
            </ul>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>マダニによる病気</h3>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>バベシア症：</strong>マダニが媒介するバベシア原虫が赤血球に寄生し、重度の貧血を引き起こします。治療が遅れると命に関わります。</li>
              <li><strong>SFTS（重症熱性血小板減少症候群）：</strong>マダニが媒介するウイルス性の感染症で、人間にも感染します。致死率が高く、千葉県内でも発生が報告されています。</li>
              <li><strong>ライム病：</strong>マダニが媒介するボレリア菌による感染症で、関節痛や発熱を引き起こします。人にも感染するため注意が必要です。</li>
              <li><strong>日本紅斑熱：</strong>マダニが媒介するリケッチアによる感染症で、高熱や発疹が特徴です。こちらも人にも感染します。</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>市原市の環境とノミ・マダニのリスク</h2>
            <p>市原市は千葉県で最も面積が広い市であり、北部の住宅地から南部の山間部まで、多様な環境が広がっています。特に以下のような場所ではノミ・マダニに遭遇するリスクが高まります。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>公園や河川敷の草むら</li>
              <li>養老川沿いの散歩コース</li>
              <li>里山や農地の近くの小道</li>
              <li>住宅地であっても、庭の草木が茂った場所</li>
            </ul>
            <p>ノミは気温13度以上、マダニは気温15度以上で活動が活発になります。市原市の気候を考えると、3月頃から11月頃まで注意が必要ですが、暖冬の年は冬場でもノミが発生することがあるため、通年予防が理想的です。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>予防薬の種類と選び方</h2>
            <p>現在、さまざまなタイプのノミ・マダニ予防薬が利用可能です。ペットの性格や生活スタイルに合わせて選ぶことが大切です。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>スポットタイプ（滴下剤）：</strong>首の後ろの皮膚に液体を垂らすタイプです。月に1回の投与で効果が持続します。飲み薬が苦手な犬猫に適しています。</li>
              <li><strong>経口タイプ（チュアブル・錠剤）：</strong>おやつ感覚で食べさせるタイプです。嗜好性が高く、投薬が簡単です。シャンプーの影響を受けないのもメリットです。近年は1回の投与で3ヶ月効果が持続するタイプもあります。</li>
              <li><strong>首輪タイプ：</strong>装着するだけで予防効果が続くため手軽ですが、効果の持続期間や範囲が他のタイプより限定的な場合があります。</li>
            </ul>
            <p>バウ・ミュウ動物病院では、フィラリア予防と同時にノミ・マダニも予防できるオールインワンタイプの薬もご用意しています。複数の予防を1つの薬でまとめられるため、飼い主さまの負担も軽減できます。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>散歩後のチェック方法</h2>
            <p>予防薬を使用していても、散歩後のチェックは欠かせません。以下のポイントを重点的に確認しましょう。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>耳の中と耳の裏：</strong>マダニは温かく柔らかい場所を好み、耳は特に寄生しやすい部位です。</li>
              <li><strong>目の周り：</strong>まぶたの縁や目尻にマダニがつくことがあります。</li>
              <li><strong>指の間：</strong>肉球の間は見落としやすい部位です。</li>
              <li><strong>脇の下・内股：</strong>皮膚が薄く温かいため、マダニが好む場所です。</li>
              <li><strong>尻尾の付け根：</strong>毛に隠れてマダニが見つかりにくい部位です。</li>
            </ul>
            <p>マダニを見つけた場合、無理に引き抜くとマダニの口器が皮膚に残り、炎症の原因になります。自分で取ろうとせず、動物病院で安全に除去してもらいましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>市原市でノミ・マダニ予防をお考えの方へ</h2>
            <p>バウ・ミュウ動物病院では、ペットの生活環境や体質に合わせた最適なノミ・マダニ予防プランをご提案しています。市原市は自然が豊かで犬の散歩に最適な環境が多い反面、寄生虫のリスクも伴います。</p>
            <p>動物病院で処方される予防薬は、市販品に比べて効果が高く安全性も確認されています。大切なペットと飼い主さまご自身の健康を守るために、適切な予防をお願いいたします。ご不明な点はお気軽にご相談ください。</p>
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
    <li><a href="/blog/filaria-prevention" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>【市原市】フィラリア予防はいつから？時期と費用について</a></li>
    <li><a href="/blog/vaccine-schedule" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬と猫のワクチン接種スケジュール｜種類・時期・費用を解説</a></li>
    <li><a href="/blog/rainy-season-skin" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>梅雨時期の犬の皮膚トラブル｜市原市の湿気対策</a></li>
  </ul>
</div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
      <footer className="footer"><div className="container footerInner"><div><strong>バウ・ミュウ動物病院</strong><p>〒290-0062 千葉県市原市八幡520<br />TEL 0436-41-1008</p></div><small>&copy; Bow-Mew Animal Hospital</small></div></footer>
    </main>
  )
}
