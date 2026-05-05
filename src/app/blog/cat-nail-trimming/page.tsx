import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '猫の爪切りのコツ｜自宅で安全に行う方法と頻度｜バウ・ミュウ動物病院',
  description: '猫の爪切りを自宅で安全に行うコツを獣医師が解説。適切な頻度、必要な道具、嫌がる猫への対処法、出血時の応急処置まで詳しくご紹介します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/cat-nail-trimming' },
  openGraph: {
    title: '猫の爪切りのコツ｜自宅で安全に行う方法と頻度｜バウ・ミュウ動物病院',
    description: '猫の爪切りを自宅で安全に行うコツを獣医師が解説。適切な頻度、必要な道具、嫌がる猫への対処法、出血時の応急処置まで詳しくご紹介します。',
    url: 'https://bowmew-ah.com/blog/cat-nail-trimming',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/cat-nail-trimming.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '猫の爪切りのコツ｜自宅で安全に行う方法と頻度｜バウ・ミュウ動物病院',
    description: '猫の爪切りを自宅で安全に行うコツを獣医師が解説。適切な頻度、必要な道具、嫌がる猫への対処法、出血時の応急処置まで詳しくご紹介します。',
    images: ['https://bowmew-ah.com/blog/cat-nail-trimming.webp'],
  },
}

export default function CatNailTrimming() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: '猫の爪切りのコツ｜自宅で安全に行う方法と頻度',
    description: '猫の爪切りを自宅で安全に行うコツを獣医師が解説。適切な頻度、必要な道具、嫌がる猫への対処法、出血時の応急処置まで詳しくご紹介します。',
    image: "https://bowmew-ah.com/blog/cat-nail-trimming.webp",
    datePublished: "2026-01-05",
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
          <span style={{ color: '#666' }}>猫の爪切りのコツ</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026.01.05</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>猫の爪切りのコツ｜自宅で安全に行う方法と頻度</h1>
          <img src={`/blog/cat-nail-trimming.webp`} alt="猫の爪切りの方法" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>猫の爪切りは飼い主さんにとって大きな悩みの一つです。「暴れて切れない」「深爪が怖い」「そもそも必要？」という声をよく聞きます。室内飼いの猫にとって爪切りは健康管理の一環として大切なケアです。正しい方法とコツを知れば、自宅でも安全に行うことができます。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>なぜ猫の爪切りが必要なのか</h2>
            <p>野生の猫は狩りや木登りで自然に爪が削れますが、室内飼いの猫は爪が伸びすぎてしまいます。爪切りを怠ると以下のトラブルが起きる可能性があります。</p>
            <ul>
              <li><strong>巻き爪：</strong>伸びた爪がカーブして肉球に刺さり、痛みや感染症の原因に</li>
              <li><strong>引っかかり事故：</strong>カーテンやカーペットに爪が引っかかり、爪が折れる</li>
              <li><strong>飼い主や同居猫への怪我：</strong>遊びの中で深い傷をつけてしまう</li>
              <li><strong>家具の損傷：</strong>爪とぎで削りきれない部分が鋭く尖る</li>
            </ul>
            <p>特に高齢猫は活動量が減って爪が削れにくくなり、巻き爪になりやすいため注意が必要です。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>爪切りの適切な頻度</h2>
            <p>猫の爪切りの目安は以下の通りです。</p>
            <ul>
              <li><strong>成猫：</strong>2〜3週間に1回</li>
              <li><strong>子猫：</strong>1〜2週間に1回（爪の伸びが早い）</li>
              <li><strong>高齢猫：</strong>2週間に1回（巻き爪予防のため）</li>
            </ul>
            <p>前足は特に伸びやすいので、後足より頻繁にチェックしましょう。爪が鋭く尖ってきたら切り時のサインです。また、猫が歩くときにカチカチと音がする場合も伸びすぎています。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>用意する道具と選び方</h2>
            <p>猫の爪切りに必要な道具を揃えましょう。</p>
            <ul>
              <li><strong>猫用爪切り：</strong>ギロチンタイプ（太い爪向き）やハサミタイプ（初心者向き）があります。人間用の爪切りは爪が割れやすいので使わないでください</li>
              <li><strong>止血剤：</strong>万が一深爪した時のために。市販のペット用止血パウダーが便利です</li>
              <li><strong>おやつ：</strong>ご褒美用。爪切りを良い経験と結びつけるために使います</li>
              <li><strong>タオル：</strong>暴れる猫を包む「猫巻き」に使用</li>
              <li><strong>ライト：</strong>爪の血管（クイック）を確認するために明るい場所で行うか、ライトを当てます</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>安全な爪切りの手順</h2>
            <p>以下の手順で行いましょう。</p>
            <p><strong>1. タイミングを選ぶ：</strong>猫がリラックスしている時、眠そうな時がベストです。遊んだ直後の興奮状態では行わないでください。</p>
            <p><strong>2. 爪を出す：</strong>猫の指の付け根を軽く押すと爪が出てきます。強く握りすぎないよう注意しましょう。</p>
            <p><strong>3. 血管の位置を確認：</strong>猫の爪は半透明で、ピンク色の部分が血管（クイック）です。この血管の手前2mm程度のところでカットします。黒い爪の猫は光に透かして確認してください。</p>
            <p><strong>4. 先端だけをカット：</strong>一度に多く切ろうとせず、先端の尖った部分だけを切ります。角度は爪のカーブに沿って斜めにカットするときれいに仕上がります。</p>
            <p><strong>5. ご褒美を与える：</strong>1本切るごとに褒めておやつを与え、ポジティブな経験にしましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>嫌がる猫への対処法</h2>
            <p>多くの猫は爪切りを嫌がります。以下の工夫を試してみてください。</p>
            <ul>
              <li><strong>少しずつ慣らす：</strong>最初は1日1本だけ切り、徐々に本数を増やす</li>
              <li><strong>タオルで包む：</strong>体をタオルでくるみ、切る足だけ出す（猫巻き・バリト巻き）</li>
              <li><strong>2人で行う：</strong>1人が猫を抱きかかえ、もう1人が切ると安全</li>
              <li><strong>おやつで気を引く：</strong>ペースト状のおやつを舐めさせている間に切る</li>
              <li><strong>洗濯ネットを使う：</strong>メッシュの洗濯ネットに入れると大人しくなる猫もいます</li>
            </ul>
            <p>どうしても自宅で切れない場合は、無理をせず動物病院にお任せください。爪切りだけでの来院も歓迎しています。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>深爪してしまった時の対処法</h2>
            <p>誤って血管まで切ってしまった場合は、慌てず以下の対処をしてください。</p>
            <ul>
              <li>止血パウダーを出血部分に押し当てる（なければ片栗粉やコーンスターチで代用可）</li>
              <li>清潔なガーゼで圧迫して1〜2分待つ</li>
              <li>猫が舐めないよう見守る</li>
            </ul>
            <p>通常は数分で止血しますが、出血が止まらない場合や、患部が腫れてきた場合は動物病院を受診してください。</p>
            <p>バウ・ミュウ動物病院では猫の爪切りも行っています。自宅で難しい場合や、正しい切り方を知りたい方は、お気軽にお越しください。スタッフが丁寧に対応いたします。</p>
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
              <li><a href="/blog/cat-stress-signs" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫のストレスサイン｜見逃しやすい7つの行動変化</a></li>
              <li><a href="/blog/dental-care" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬と猫の歯周病予防｜自宅でできる歯磨きの方法</a></li>
              <li><a href="/blog/puppy-first-visit" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>子犬を迎えたら｜最初の動物病院受診ガイド</a></li>
            </ul>
          </div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
      </main>
    </>
  )
}
