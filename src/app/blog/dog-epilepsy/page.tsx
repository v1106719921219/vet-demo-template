import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '犬のてんかん発作｜症状・原因・飼い主ができる対処法｜バウ・ミュウ動物病院',
  description: '犬のてんかん発作の症状・原因・飼い主ができる対処法を獣医師が解説。発作時の対応や動物病院での治療についてもご紹介します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/dog-epilepsy' },
  openGraph: {
    title: '犬のてんかん発作｜症状・原因・飼い主ができる対処法｜バウ・ミュウ動物病院',
    description: '犬のてんかん発作の症状・原因・飼い主ができる対処法を獣医師が解説。発作時の対応や動物病院での治療についてもご紹介します。',
    url: 'https://bowmew-ah.com/blog/dog-epilepsy',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/dog-epilepsy.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '犬のてんかん発作｜症状・原因・飼い主ができる対処法｜バウ・ミュウ動物病院',
    description: '犬のてんかん発作の症状・原因・飼い主ができる対処法を獣医師が解説。発作時の対応や動物病院での治療についてもご紹介します。',
    images: ['https://bowmew-ah.com/blog/dog-epilepsy.webp'],
  },
}

export default function DogEpilepsy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: '犬のてんかん発作｜症状・原因・飼い主ができる対処法',
    description: '犬のてんかん発作の症状・原因・飼い主ができる対処法を獣医師が解説。発作時の対応や動物病院での治療についてもご紹介します。',
    image: "https://bowmew-ah.com/blog/dog-epilepsy.webp",
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
          <span style={{ color: '#666' }}>犬のてんかん発作</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026.03.25</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>犬のてんかん発作｜症状・原因・飼い主ができる対処法</h1>
          <img src={`/blog/dog-epilepsy.webp`} alt="犬のてんかん発作への対応" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>愛犬が突然けいれんを起こしたり、意識を失ったりする姿を見ると、飼い主さんは大きな不安を感じるものです。犬のてんかんは決して珍しい病気ではなく、適切な治療と管理を行うことで、多くの場合良好な生活の質を維持することができます。この記事では、犬のてんかん発作について、症状の見分け方から原因、飼い主さんができる対処法まで詳しく解説します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>犬のてんかんとは？</h2>
            <p>てんかんとは、脳の神経細胞が異常に興奮することで繰り返し発作を起こす病気です。犬の約0.5〜5％に見られるとされ、神経疾患の中では最も一般的なもののひとつです。</p>
            <p>てんかんは大きく2つに分類されます。脳そのものに構造的な異常がない「特発性てんかん」と、脳腫瘍や脳炎など原因疾患がある「構造的てんかん」です。特発性てんかんは遺伝的要因が関与していると考えられ、1〜5歳の若い犬で発症することが多いです。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>てんかん発作の主な症状</h2>
            <p>てんかん発作にはさまざまなタイプがありますが、代表的な症状は以下のとおりです。</p>
            <ul>
              <li>全身の硬直やけいれん（全般発作）</li>
              <li>手足をバタバタと動かすパドリング</li>
              <li>意識の消失、呼びかけに反応しない</li>
              <li>よだれや泡を吹く</li>
              <li>失禁（尿や便の漏れ）</li>
              <li>顔面のぴくつきや口をくちゃくちゃする動き（焦点発作）</li>
              <li>一時的にぼんやりする、一点を見つめる</li>
            </ul>
            <p>発作の前兆として、落ち着きがなくなる、飼い主にまとわりつく、隠れるなどの行動変化が見られることもあります。発作後は一時的にふらつきや視力低下、過食などが起こることがあります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>犬のてんかんの原因</h2>
            <p>てんかんの原因は種類によって異なります。</p>
            <p><strong>特発性てんかん：</strong>明確な原因が特定できないタイプで、遺伝的素因が関与しています。ビーグル、ゴールデン・レトリバー、ラブラドール・レトリバー、ジャーマン・シェパードなど特定の犬種で発症率が高いことが知られています。</p>
            <p><strong>構造的てんかん：</strong>脳腫瘍、脳炎（感染性・免疫介在性）、水頭症、脳血管障害、外傷後の瘢痕などが原因となります。6歳以上で初めて発作を起こした場合は、構造的な原因の可能性が高くなります。</p>
            <p><strong>反応性発作：</strong>低血糖、肝性脳症、中毒、電解質異常など、脳以外の問題により発作が誘発されるケースもあります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>発作が起きたときの飼い主の対処法</h2>
            <p>愛犬が発作を起こしたとき、以下の点を心がけてください。</p>
            <ul>
              <li><strong>まず冷静になる：</strong>多くの発作は数分以内に自然に止まります</li>
              <li><strong>安全を確保する：</strong>犬の周囲から家具や硬いものを離し、階段や高所から落ちないようにする</li>
              <li><strong>体を押さえつけない：</strong>無理に押さえると犬も飼い主もけがをする危険があります</li>
              <li><strong>口に手を入れない：</strong>犬は発作中に自分の舌を噛んで窒息することはありません</li>
              <li><strong>時間を計る：</strong>発作の持続時間を記録してください</li>
              <li><strong>動画を撮影する：</strong>可能であれば発作の様子を撮影しておくと、獣医師の診断に役立ちます</li>
            </ul>
            <p>発作が5分以上続く場合、または短時間に連続して発作が起きる場合は「てんかん重積」の可能性があり、命に関わる緊急事態です。すぐに動物病院を受診してください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>動物病院での診断と治療</h2>
            <p>てんかんの診断には、血液検査、尿検査、神経学的検査が基本となります。必要に応じてMRI検査や脳脊髄液検査を行い、構造的な原因がないか確認します。</p>
            <p>治療は抗てんかん薬による内服治療が中心です。フェノバルビタールや臭化カリウム、ゾニサミド、レベチラセタムなどが用いられます。薬の種類や投与量は個々の犬に合わせて調整し、定期的な血中濃度の測定が必要です。</p>
            <p>抗てんかん薬は発作を完全になくすことが目標ではなく、発作の頻度や重症度を軽減し、生活の質を維持することが治療の目的です。自己判断で薬を中止すると重篤な発作を招く恐れがあるため、必ず獣医師の指示に従ってください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>日常生活での管理ポイント</h2>
            <p>てんかんの犬と暮らすうえで、以下の点に注意しましょう。</p>
            <ul>
              <li>薬は毎日決まった時間に確実に投与する</li>
              <li>発作の日時・持続時間・症状を記録する「発作日記」をつける</li>
              <li>ストレスや極端な興奮を避ける</li>
              <li>規則正しい生活リズムを維持する</li>
              <li>定期的な通院で血液検査と薬の調整を行う</li>
            </ul>
            <p>てんかんは長期的な管理が必要な病気ですが、適切な治療により多くの犬が穏やかな日常を過ごすことができます。発作を初めて見たとき、あるいは頻度が増えたと感じたときは、早めに動物病院へご相談ください。</p>
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
    <li><a href="/blog/dog-heart-disease" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬の心臓病｜咳が増えたら要注意？初期症状と治療法</a></li>
    <li><a href="/blog/senior-dog-care" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>シニア犬の健康管理｜7歳からの定期健診のすすめ</a></li>
    <li><a href="/blog/emergency-vet-ichihara" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>【市原市】ペットの夜間救急｜緊急時の対応と連絡先</a></li>
  </ul>
</div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
      </main>
    </>
  )
}
