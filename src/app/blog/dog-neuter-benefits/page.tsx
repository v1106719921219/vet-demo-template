import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '犬の去勢手術｜メリット・デメリットと適切な時期｜バウ・ミュウ動物病院',
  description: '犬の去勢手術のメリット・デメリット・適切な時期を獣医師が解説。手術の流れや術後ケア、費用についてもご紹介します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/dog-neuter-benefits' },
  openGraph: {
    title: '犬の去勢手術｜メリット・デメリットと適切な時期｜バウ・ミュウ動物病院',
    description: '犬の去勢手術のメリット・デメリット・適切な時期を獣医師が解説。手術の流れや術後ケア、費用についてもご紹介します。',
    url: 'https://bowmew-ah.com/blog/dog-neuter-benefits',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/dog-neuter-benefits.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '犬の去勢手術｜メリット・デメリットと適切な時期｜バウ・ミュウ動物病院',
    description: '犬の去勢手術のメリット・デメリット・適切な時期を獣医師が解説。手術の流れや術後ケア、費用についてもご紹介します。',
    images: ['https://bowmew-ah.com/blog/dog-neuter-benefits.webp'],
  },
}

export default function DogNeuterBenefits() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: '犬の去勢手術｜メリット・デメリットと適切な時期',
    description: '犬の去勢手術のメリット・デメリット・適切な時期を獣医師が解説。手術の流れや術後ケア、費用についてもご紹介します。',
    image: "https://bowmew-ah.com/blog/dog-neuter-benefits.webp",
    datePublished: "2026-02-15",
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
          <span style={{ color: '#666' }}>犬の去勢手術</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026.02.15</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>犬の去勢手術｜メリット・デメリットと適切な時期</h1>
          <img src={`/blog/dog-neuter-benefits.webp`} alt="犬の去勢手術のメリット" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>オス犬を迎えた飼い主さんが悩むことのひとつが「去勢手術をするべきか」という問題です。去勢手術にはさまざまなメリットがありますが、デメリットもあるため、正しい情報を基に判断することが大切です。この記事では、犬の去勢手術について、メリット・デメリットと適切な手術時期を解説します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>去勢手術のメリット</h2>
            <p>去勢手術には、病気の予防と行動面の改善という2つの大きなメリットがあります。</p>
            <p><strong>病気の予防：</strong></p>
            <ul>
              <li><strong>精巣腫瘍の完全な予防：</strong>未去勢の高齢犬で比較的多い腫瘍です</li>
              <li><strong>前立腺肥大の予防：</strong>未去勢犬の60〜80％が加齢とともに発症</li>
              <li><strong>肛門周囲腺腫の予防：</strong>男性ホルモン依存性の腫瘍</li>
              <li><strong>会陰ヘルニアのリスク低下：</strong>未去勢の高齢犬に多い疾患</li>
            </ul>
            <p><strong>行動面の改善：</strong></p>
            <ul>
              <li>マーキング（室内での尿かけ）の軽減</li>
              <li>マウンティング行動の減少</li>
              <li>他の犬への攻撃性の低下</li>
              <li>発情中のメス犬を追いかける行動（放浪・脱走）の防止</li>
              <li>ストレスの軽減</li>
            </ul>
            <p>ただし、行動面の改善は100％ではなく、学習によって身についた行動は手術後も残ることがあります。若いうちに手術した方が行動改善の効果は高い傾向があります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>去勢手術のデメリット</h2>
            <p>去勢手術にはデメリットや注意点もあります。</p>
            <ul>
              <li><strong>全身麻酔のリスク：</strong>健康な犬では非常に低いリスクですが、ゼロではありません</li>
              <li><strong>太りやすくなる：</strong>代謝が約20〜30％低下するため、食事管理が必要です</li>
              <li><strong>繁殖ができなくなる：</strong>不可逆的な手術です</li>
              <li><strong>被毛の変化：</strong>一部の犬種で毛質が柔らかくなることがあります</li>
              <li><strong>大型犬の骨格への影響：</strong>早期（6か月未満）の去勢で骨の成長板の閉鎖が遅れ、四肢が長くなる可能性が指摘されています</li>
            </ul>
            <p>近年の研究では、大型犬・超大型犬種では去勢の時期を遅らせた方がよい場合もあると報告されています。犬種や個体の状況に応じて獣医師と相談しましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>適切な手術時期</h2>
            <p>去勢手術の適切な時期は犬種や体格によって異なります。</p>
            <ul>
              <li><strong>小型犬・中型犬：</strong>生後6〜9か月が一般的に推奨されます</li>
              <li><strong>大型犬：</strong>生後12〜18か月（骨格の成長が完了してから）が推奨される場合があります</li>
              <li><strong>超大型犬：</strong>生後18〜24か月以降が推奨されることもあります</li>
            </ul>
            <p>乳歯の残存がある場合は、去勢手術と同時に乳歯抜歯を行うことで、麻酔の回数を減らせるメリットがあります。当院では個々の犬の成長状態を確認しながら、最適な時期をご提案しています。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>手術の流れと術後ケア</h2>
            <p>当院での去勢手術の流れをご紹介します。</p>
            <ol>
              <li><strong>術前検査：</strong>血液検査で健康状態を確認（手術日の1週間前〜当日）</li>
              <li><strong>手術当日：</strong>前日夜からの絶食で朝来院</li>
              <li><strong>手術：</strong>全身麻酔下で陰嚢前方を小切開し、両側の精巣を摘出（手術時間15〜30分）</li>
              <li><strong>覚醒・退院：</strong>麻酔からの覚醒を確認し、当日夕方のお迎え</li>
              <li><strong>術後チェック：</strong>3日後と7〜10日後に傷口の確認・抜糸</li>
            </ol>
            <p><strong>術後の注意点：</strong></p>
            <ul>
              <li>エリザベスカラーで傷口をなめさせない（7〜10日間）</li>
              <li>散歩は短めにし、激しい運動は1週間控える</li>
              <li>傷口の腫れ・赤み・浸出液がないか確認する</li>
              <li>食欲や排泄が通常通りか観察する</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>去勢手術についてのご相談</h2>
            <p>去勢手術を受けるかどうかは、愛犬の犬種、年齢、性格、生活環境を総合的に考えて判断する必要があります。「うちの子の場合はどうすべき？」と迷われている方は、お気軽に当院へご相談ください。飼い主さんのお考えを尊重しながら、専門的な観点からアドバイスいたします。</p>
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
    <li><a href="/blog/dog-spay-surgery" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>【市原市】犬の避妊手術｜適切な時期・費用・術後ケアを解説</a></li>
    <li><a href="/blog/cat-neuter-cost" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫の去勢手術の費用と流れ｜市原市の動物病院が解説</a></li>
    <li><a href="/blog/cat-spay-timing" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫の避妊手術はいつがベスト？適切な時期とメリット</a></li>
  </ul>
</div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
      </main>
    </>
  )
}
