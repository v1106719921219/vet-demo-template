import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '【市原市】ペットの夜間救急｜緊急時の対応と連絡先｜バウ・ミュウ動物病院',
  description: '市原市でペットが夜間に急変した場合の対応方法と救急連絡先をまとめました。緊急時の判断基準や応急処置、夜間対応の動物病院情報を解説します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/emergency-vet-ichihara' },
  openGraph: {
    title: '【市原市】ペットの夜間救急｜緊急時の対応と連絡先｜バウ・ミュウ動物病院',
    description: '市原市でペットが夜間に急変した場合の対応方法と救急連絡先をまとめました。緊急時の判断基準や応急処置、夜間対応の動物病院情報を解説します。',
    url: 'https://bowmew-ah.com/blog/emergency-vet-ichihara',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/emergency-vet-ichihara.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '【市原市】ペットの夜間救急｜緊急時の対応と連絡先｜バウ・ミュウ動物病院',
    description: '市原市でペットが夜間に急変した場合の対応方法と救急連絡先をまとめました。緊急時の判断基準や応急処置、夜間対応の動物病院情報を解説します。',
    images: ['https://bowmew-ah.com/blog/emergency-vet-ichihara.webp'],
  },
}

export default function EmergencyVetIchihara() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: '【市原市】ペットの夜間救急｜緊急時の対応と連絡先',
    description: '市原市でペットが夜間に急変した場合の対応方法と救急連絡先をまとめました。緊急時の判断基準や応急処置、夜間対応の動物病院情報を解説します。',
    image: "https://bowmew-ah.com/blog/emergency-vet-ichihara.webp",
    datePublished: "2026-02-05",
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
          <span style={{ color: '#666' }}>ペットの夜間救急</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026.02.05</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>【市原市】ペットの夜間救急｜緊急時の対応と連絡先</h1>
          <img src={`/blog/emergency-vet-ichihara.webp`} alt="ペットの夜間救急対応" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>大切なペットが夜間に突然体調を崩したとき、飼い主さんはパニックになりがちです。市原市周辺で夜間にペットの緊急事態が発生した場合、どこに連絡すればよいのか、どのような症状なら急いで受診すべきなのか、事前に知っておくことで冷静に対応できます。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>すぐに受診すべき緊急症状とは</h2>
            <p>以下のような症状が見られる場合は、時間帯に関わらず速やかに動物病院を受診してください。</p>
            <ul>
              <li>呼吸困難（口を開けてハァハァする、舌や歯茎が青紫色になる）</li>
              <li>大量の出血が止まらない</li>
              <li>意識がない、痙攣が続いている</li>
              <li>交通事故や高所からの落下</li>
              <li>毒物（チョコレート、ユリ、農薬など）を摂取した</li>
              <li>排尿ができない状態が半日以上続いている（特にオス猫）</li>
              <li>お腹が急激に膨れてきた（胃捻転の疑い）</li>
            </ul>
            <p>これらの症状は、数時間の遅れが命に関わることがあります。迷ったときは「受診する」判断をしましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>市原市周辺の夜間救急対応について</h2>
            <p>市原市内では、多くの動物病院が日中のみの診療となっています。夜間や休日に緊急事態が発生した場合は、千葉県内の夜間救急動物病院を利用することになります。</p>
            <p>千葉市や船橋市には夜間専門の救急動物病院があり、深夜帯でも対応可能です。事前に連絡先をスマートフォンに登録しておくことをお勧めします。</p>
            <p>なお、バウ・ミュウ動物病院では診療時間内であれば急患にも対応しております。まずはお電話でご相談ください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>夜間救急を受診する前の準備</h2>
            <p>緊急時でも、以下の準備をしてから出発すると診療がスムーズです。</p>
            <ul>
              <li>事前に電話で症状を伝え、受け入れ可能か確認する</li>
              <li>ペットの診察券やワクチン証明書があれば持参する</li>
              <li>嘔吐物や誤飲した物があれば持っていく（写真でも可）</li>
              <li>症状が出始めた時刻をメモしておく</li>
              <li>現金やクレジットカードを多めに用意する（夜間は割増料金の場合あり）</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>自宅でできる応急処置の基本</h2>
            <p>動物病院に向かうまでの間、飼い主さんができることがあります。</p>
            <p><strong>出血している場合：</strong>清潔なガーゼやタオルで傷口を圧迫し、止血を試みます。強く縛りすぎないよう注意してください。</p>
            <p><strong>痙攣している場合：</strong>周囲の危険物を取り除き、無理に口を開けたり押さえつけたりしないでください。痙攣の時間を計測しておくと診察に役立ちます。</p>
            <p><strong>意識がない場合：</strong>気道を確保するため、首をまっすぐにし、口の中に異物がないか確認します。毛布などで保温しながら搬送してください。</p>
            <p>※自己判断で人間用の薬を投与することは絶対にやめてください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>翌朝まで様子を見てよい症状</h2>
            <p>一方で、以下のような症状であれば翌朝のかかりつけ医受診で問題ないケースが多いです。</p>
            <ul>
              <li>1〜2回の嘔吐や軟便で、元気や食欲がある</li>
              <li>少し足を引きずっているが、体重はかけられる</li>
              <li>くしゃみや鼻水が出始めたが、食欲はある</li>
              <li>皮膚を掻いている（アレルギーや皮膚炎の疑い）</li>
            </ul>
            <p>ただし、症状が悪化する場合や、子犬・子猫・高齢のペットの場合は早めの受診をお勧めします。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>日頃からの備えが大切</h2>
            <p>緊急時に慌てないためには、日頃からの準備が重要です。</p>
            <ul>
              <li>かかりつけ医と夜間救急病院の連絡先を控えておく</li>
              <li>ペット用の救急セット（ガーゼ、包帯、体温計など）を用意する</li>
              <li>ペットの既往歴や服用薬のメモを作成しておく</li>
              <li>定期的な健康診断で病気の早期発見に努める</li>
            </ul>
            <p>バウ・ミュウ動物病院では、定期健康診断を通じてペットの健康状態を把握し、急変時にも迅速に対応できる体制を整えています。何か気になることがあれば、診療時間内にお気軽にご相談ください。</p>
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
    <li><a href="/blog/dog-foreign-body" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬が異物を飲み込んだ！誤飲時の対処法と受診の目安</a></li>
    <li><a href="/blog/dog-fracture-first-aid" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬が骨折した時の応急処置と治療｜市原市の動物病院</a></li>
    <li><a href="/blog/cat-escape-injury" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫が脱走して怪我をした時の対処法｜予防策も解説</a></li>
  </ul>
</div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
      </main>
    </>
  )
}
