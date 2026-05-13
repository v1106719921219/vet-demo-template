import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ペットの肥満は万病のもと｜適正体重管理のポイント｜バウ・ミュウ動物病院',
  description: '千葉県市原市のバウ・ミュウ動物病院がペットの肥満リスクと体重管理について解説。BCS（ボディコンディションスコア）の見方、適正カロリー、運動の目安をご紹介。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/obesity-prevention' },
  openGraph: {
    title: 'ペットの肥満は万病のもと｜適正体重管理のポイント｜バウ・ミュウ動物病院',
    description: '千葉県市原市のバウ・ミュウ動物病院がペットの肥満リスクと体重管理について解説。BCS（ボディコンディションスコア）の見方、適正カロリー、運動の目安をご紹介。',
    url: 'https://bowmew-ah.com/blog/obesity-prevention',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/obesity-prevention.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ペットの肥満は万病のもと｜適正体重管理のポイント｜バウ・ミュウ動物病院',
    description: '千葉県市原市のバウ・ミュウ動物病院がペットの肥満リスクと体重管理について解説。BCS（ボディコンディションスコア）の見方、適正カロリー、運動の目安をご紹介。',
    images: ['https://bowmew-ah.com/blog/obesity-prevention.webp'],
  },
}

export default function ObesityPreventionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: 'ペットの肥満は万病のもと｜適正体重管理のポイント',
    description: '千葉県市原市のバウ・ミュウ動物病院がペットの肥満リスクと体重管理について解説。BCS（ボディコンディションスコア）の見方、適正カロリー、運動の目安をご紹介。',
    image: "https://bowmew-ah.com/blog/obesity-prevention.webp",
    datePublished: "2026-01-20",
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
          <span style={{ color: '#666' }}>ペットの肥満と体重管理</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026-01-20</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>ペットの肥満は万病のもと｜適正体重管理のポイント</h1>
          <img src={`/blog/obesity-prevention.webp`} alt="ペットの体重管理" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>「うちの子、少しぽっちゃりしてきたかも」と感じている飼い主さまは多いのではないでしょうか。近年、ペットの肥満は深刻な健康問題として注目されています。日本国内の犬の約40〜50%、猫の約30〜40%が肥満または肥満傾向にあるというデータもあります。</p>
            <p>肥満はさまざまな病気のリスクを高め、寿命を短くする原因になります。この記事では、市原市で犬や猫を飼っている飼い主さまに向けて、肥満のリスク、適正体重の判断方法、体重管理のポイントについて詳しく解説します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>ペットの肥満が引き起こす病気</h2>
            <p>肥満は見た目の問題だけでなく、以下のような深刻な健康リスクを伴います。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>糖尿病：</strong>特に猫に多く見られます。肥満により細胞のインスリン感受性が低下し、血糖値のコントロールが困難になります。一度発症するとインスリン注射が必要になるケースも多く、日常管理の負担が大きくなります。</li>
              <li><strong>関節疾患：</strong>体重が増えると膝や股関節への負担が増大します。犬では膝蓋骨脱臼や変形性関節症、猫でも関節炎のリスクが高まります。痛みにより運動量がさらに減少し、体重増加の悪循環に陥りやすくなります。</li>
              <li><strong>心臓病：</strong>余分な脂肪組織にも血液を供給する必要があるため、心臓に大きな負担がかかります。高血圧や呼吸困難を引き起こしやすくなります。</li>
              <li><strong>呼吸器疾患：</strong>首周りや胸部の脂肪が気道を圧迫し、呼吸がしにくくなります。特に短頭種（パグ、フレンチブルドッグなど）は要注意です。</li>
              <li><strong>肝リピドーシス（脂肪肝）：</strong>特に肥満猫が急激に食事量を減らしたときに発症するリスクがあり、命に関わることもあります。</li>
              <li><strong>皮膚病：</strong>肥満によりたるんだ皮膚のしわに湿気がこもり、細菌感染を起こしやすくなります。</li>
              <li><strong>麻酔リスクの増大：</strong>手術や検査で麻酔が必要な場合、肥満は麻酔のリスクを著しく高めます。</li>
            </ul>
            <p>ある研究では、適正体重の犬は肥満の犬に比べて平均2年以上長生きするというデータが報告されています。体重管理は愛犬・愛猫の寿命に直結する重要なケアなのです。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>BCS（ボディコンディションスコア）で肥満度をチェック</h2>
            <p>体重の数値だけでは、その子が太っているかどうかを正確に判断できません。犬種や個体差があるためです。そこで役立つのがBCS（ボディコンディションスコア）という評価方法です。</p>
            <p>BCSは5段階（または9段階）で評価し、以下のポイントをチェックします。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>肋骨の触知：</strong>軽く触って肋骨が感じられるのが理想的です。脂肪に覆われて触れない場合は太りすぎのサインです。</li>
              <li><strong>くびれ：</strong>上から見たとき、肋骨の後ろに腰のくびれが見られるのが適正体型です。くびれがないか、むしろ外側に膨らんでいる場合は肥満です。</li>
              <li><strong>お腹のライン：</strong>横から見たとき、お腹が持ち上がっている（腹部の吊り上がり）のが理想です。お腹が垂れ下がっている場合は脂肪が蓄積しています。</li>
            </ul>
            <p>BCSの理想値は5段階では3、9段階では4〜5です。バウ・ミュウ動物病院では、診察時にBCSの評価を行い、適正体重についてアドバイスしています。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>適正カロリーの計算方法</h2>
            <p>ペットに必要なカロリーは、体重と活動レベルによって異なります。基本的な計算の流れは以下の通りです。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>安静時エネルギー要求量（RER）：</strong>70 x（体重kg）の0.75乗 で計算されます。</li>
              <li><strong>1日必要エネルギー量（DER）：</strong>RERに活動係数をかけて求めます。避妊・去勢済みの成犬で1.6倍、肥満傾向の犬で1.0〜1.2倍が目安です。</li>
            </ul>
            <p>ただし、計算式だけで完璧な量を決めることは難しいため、体重の変化を見ながら調整することが大切です。また、フードのパッケージに記載されている給与量はあくまで目安であり、その子の状態に合わせて調整する必要があります。</p>
            <p>おやつのカロリーも忘れがちなポイントです。おやつは1日の摂取カロリーの10%以内に抑えるのが原則です。家族の中で「誰がどのくらいおやつを与えたか」を共有することも大切です。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>運動の目安と工夫</h2>
            <p>体重管理には食事制限と合わせて、適度な運動が欠かせません。</p>
            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>犬の運動</h3>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>小型犬：1日20〜30分の散歩を1〜2回</li>
              <li>中型犬：1日30〜60分の散歩を1〜2回</li>
              <li>大型犬：1日60分以上の散歩を1〜2回</li>
            </ul>
            <p>市原市には養老川沿いの遊歩道や市原市市民の森など、犬の散歩に適した場所が多くあります。ただし、肥満の犬にいきなり激しい運動をさせると関節を痛める可能性があるため、少しずつ運動量を増やしていきましょう。</p>
            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>猫の運動</h3>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>キャットタワーの設置で上下運動を促す</li>
              <li>おもちゃ（猫じゃらし、ボールなど）で1日15〜20分は遊ぶ時間を作る</li>
              <li>フードを小分けにして家の中のあちこちに置く「宝探しフィーディング」も効果的</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>ダイエットの注意点</h2>
            <p>ペットのダイエットで最も重要なのは、急激に食事量を減らさないことです。特に猫は急な絶食や極端な食事制限により肝リピドーシス（脂肪肝）を発症するリスクがあります。体重は1週間に体重の1〜2%ずつ減らすのが理想的なペースです。</p>
            <p>ダイエット専用のフード（低カロリー・高繊維質）を活用することで、量はしっかり食べながらカロリーを抑えることができます。獣医師に相談しながら安全にダイエットを進めましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>市原市でペットの体重管理にお悩みの方へ</h2>
            <p>バウ・ミュウ動物病院では、ペットの体重管理や栄養指導を行っています。市原市の動物病院として、飼い主さまと一緒にペットの理想的な体重を目指すお手伝いをいたします。</p>
            <p>「うちの子は太っているのかわからない」「フードの量をどのくらいにすればいいか迷っている」など、お気軽にご相談ください。定期的な体重測定とBCSのチェックだけでも、肥満の早期発見と予防に大きく役立ちます。</p>
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
    <li><a href="/blog/dental-care" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬と猫の歯周病予防｜自宅でできる歯磨きの方法</a></li>
    <li><a href="/blog/pet-age-chart" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬猫の年齢を人間に換算すると？年齢早見表と健康管理</a></li>
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
