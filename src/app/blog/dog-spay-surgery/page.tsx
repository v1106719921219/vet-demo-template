import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '【市原市】犬の避妊手術｜適切な時期・費用・術後ケアを解説｜バウ・ミュウ動物病院',
  description: '千葉県市原市のバウ・ミュウ動物病院が犬の避妊手術について解説。適切な手術時期・費用の目安・術後ケアのポイントをわかりやすくご案内。メス犬の健康を守るために知っておきたい情報をまとめました。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/dog-spay-surgery' },
  openGraph: {
    title: '【市原市】犬の避妊手術｜適切な時期・費用・術後ケアを解説｜バウ・ミュウ動物病院',
    description: '千葉県市原市のバウ・ミュウ動物病院が犬の避妊手術について解説。適切な手術時期・費用の目安・術後ケアのポイントをわかりやすくご案内。メス犬の健康を守るために知っておきたい情報をまとめました。',
    url: 'https://bowmew-ah.com/blog/dog-spay-surgery',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/dog-spay-surgery.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '【市原市】犬の避妊手術｜適切な時期・費用・術後ケアを解説｜バウ・ミュウ動物病院',
    description: '千葉県市原市のバウ・ミュウ動物病院が犬の避妊手術について解説。適切な手術時期・費用の目安・術後ケアのポイントをわかりやすくご案内。メス犬の健康を守るために知っておきたい情報をまとめました。',
    images: ['https://bowmew-ah.com/blog/dog-spay-surgery.webp'],
  },
}

export default function DogSpaySurgeryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: '【市原市】犬の避妊手術｜適切な時期・費用・術後ケアを解説',
    description: '千葉県市原市のバウ・ミュウ動物病院が犬の避妊手術について解説。適切な手術時期・費用の目安・術後ケアのポイントをわかりやすくご案内。メス犬の健康を守るために知っておきたい情報をまとめました。',
    image: "https://bowmew-ah.com/blog/dog-spay-surgery.webp",
    datePublished: "2026-04-28",
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
          <span style={{ color: '#666' }}>犬の避妊手術</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026-04-28</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>【市原市】犬の避妊手術｜適切な時期・費用・術後ケアを解説</h1>
          <img src={`/blog/dog-spay-surgery.webp`} alt="犬の避妊手術のイメージ" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>犬の避妊手術は、望まない妊娠を防ぐだけでなく、将来の病気リスクを大幅に減らすことができる重要な手術です。メス犬の子宮蓄膿症や乳腺腫瘍といった命に関わる病気を予防できるため、多くの獣医師が推奨しています。</p>
            <p>千葉県市原市のバウ・ミュウ動物病院では、安全性を最優先に考えた避妊手術を行っています。この記事では、犬の避妊手術の適切な時期・費用・術後ケアについて詳しく解説します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>犬の避妊手術とは？</h2>
            <p>犬の避妊手術は、卵巣と子宮を摘出する外科手術です（卵巣のみ摘出する術式もあります）。全身麻酔下で行われ、手術時間は通常30分〜1時間程度です。</p>
            <p>避妊手術によって得られるメリットは多岐にわたります。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>望まない妊娠の防止</li>
              <li>子宮蓄膿症の予防（中高齢のメス犬に多い致死的な病気）</li>
              <li>乳腺腫瘍の発症リスク低減</li>
              <li>発情期のストレスや出血がなくなる</li>
              <li>偽妊娠（想像妊娠）の防止</li>
            </ul>
            <p>特に子宮蓄膿症は、未避妊のメス犬の約25%が発症するとされており、緊急手術が必要になるケースも少なくありません。若いうちに避妊手術を行うことで、これらのリスクを大幅に下げることができます。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>避妊手術の適切な時期</h2>
            <p>犬の避妊手術の最適な時期は、一般的に生後6ヶ月〜1歳頃とされています。初回発情の前に手術を行うことで、乳腺腫瘍の予防効果が最も高くなります。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>初回発情前（生後6〜7ヶ月）：</strong>乳腺腫瘍の予防効果が最大（発症率を約0.5%に低減）</li>
              <li><strong>1回目の発情後：</strong>乳腺腫瘍の予防効果はやや下がるが、十分に有効</li>
              <li><strong>2回目の発情後以降：</strong>乳腺腫瘍の予防効果は限定的だが、子宮蓄膿症予防には有効</li>
            </ul>
            <p>ただし、小型犬と大型犬では成長速度が異なるため、最適な時期も変わってきます。当院では、犬種・体格・健康状態を総合的に判断し、最適な手術時期をアドバイスしています。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>避妊手術の費用目安</h2>
            <p>犬の避妊手術の費用は、体重や犬種によって異なります。市原市での一般的な費用目安は以下の通りです。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>小型犬（5kg未満）：30,000円〜45,000円程度</li>
              <li>中型犬（5〜15kg）：40,000円〜55,000円程度</li>
              <li>大型犬（15kg以上）：50,000円〜70,000円程度</li>
            </ul>
            <p>上記には、術前検査（血液検査・胸部レントゲンなど）、麻酔、手術、術後の消炎鎮痛剤、抜糸までの費用が含まれます。市原市では犬の避妊手術に対する助成金制度もありますので、詳しくはお問い合わせください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>手術の流れ</h2>
            <p>バウ・ミュウ動物病院での避妊手術は、以下の流れで行います。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>事前相談：</strong>手術について詳しくご説明し、ご不安な点にお答えします</li>
              <li><strong>術前検査：</strong>血液検査やレントゲンで麻酔のリスクを評価します</li>
              <li><strong>手術当日：</strong>朝にお預かりし、午前中に手術を行います</li>
              <li><strong>術後管理：</strong>麻酔からの覚醒を確認し、状態が安定したらお迎え</li>
              <li><strong>抜糸：</strong>術後7〜10日後に抜糸を行います</li>
            </ul>
            <p>当院では安全な麻酔管理を最重視しており、術前の丁寧な検査と術中のモニタリングを徹底しています。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>術後ケアのポイント</h2>
            <p>避妊手術後は、以下の点に注意して過ごしましょう。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>エリザベスカラーまたは術後服を着用し、傷口を舐めないようにする</li>
              <li>抜糸までは激しい運動を避ける</li>
              <li>傷口の赤み・腫れ・分泌物がないか毎日確認する</li>
              <li>食事は手術当日の夜から少量ずつ再開</li>
              <li>処方された薬は指示通りに投与する</li>
            </ul>
            <p>術後は代謝が変化するため、太りやすくなることがあります。食事量の調整や適度な運動で体重管理を行いましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>市原市で犬の避妊手術をお考えの方へ</h2>
            <p>バウ・ミュウ動物病院では、犬の避妊手術について丁寧にご説明し、飼い主さまが安心して手術に臨めるようサポートしています。手術のタイミングや費用、術後のケアなど、どんなことでもお気軽にご相談ください。</p>
            <p>大切な家族の健康を守るため、避妊手術をご検討されている方はぜひ一度ご来院ください。</p>
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
    <li><a href="/blog/cat-spay-timing" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫の避妊手術はいつがベスト？適切な時期とメリット</a></li>
    <li><a href="/blog/dog-neuter-benefits" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬の去勢手術｜メリット・デメリットと適切な時期</a></li>
    <li><a href="/blog/cat-neuter-cost" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫の去勢手術の費用と流れ｜市原市の動物病院が解説</a></li>
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
