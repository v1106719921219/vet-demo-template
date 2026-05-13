import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '猫の口内炎が治らない｜原因と動物病院での治療法｜バウ・ミュウ動物病院',
  description: '猫の口内炎が治らない原因と動物病院での治療法を獣医師が解説。痛みのサインや食事の工夫、治療の選択肢について詳しくご紹介します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/cat-stomatitis' },
  openGraph: {
    title: '猫の口内炎が治らない｜原因と動物病院での治療法｜バウ・ミュウ動物病院',
    description: '猫の口内炎が治らない原因と動物病院での治療法を獣医師が解説。痛みのサインや食事の工夫、治療の選択肢について詳しくご紹介します。',
    url: 'https://bowmew-ah.com/blog/cat-stomatitis',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/cat-stomatitis.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '猫の口内炎が治らない｜原因と動物病院での治療法｜バウ・ミュウ動物病院',
    description: '猫の口内炎が治らない原因と動物病院での治療法を獣医師が解説。痛みのサインや食事の工夫、治療の選択肢について詳しくご紹介します。',
    images: ['https://bowmew-ah.com/blog/cat-stomatitis.webp'],
  },
}

export default function CatStomatitis() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: '猫の口内炎が治らない｜原因と動物病院での治療法',
    description: '猫の口内炎が治らない原因と動物病院での治療法を獣医師が解説。痛みのサインや食事の工夫、治療の選択肢について詳しくご紹介します。',
    image: "https://bowmew-ah.com/blog/cat-stomatitis.webp",
    datePublished: "2026-03-20",
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
          <span style={{ color: '#666' }}>猫の口内炎の治療法</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026.03.20</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>猫の口内炎が治らない｜原因と動物病院での治療法</h1>
          <img src={`/blog/cat-stomatitis.webp`} alt="猫の口内炎の治療" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>猫の口内炎は非常に痛みが強く、食欲低下や体重減少の原因となる深刻な病気です。人間の口内炎とは異なり、猫の口内炎は慢性化しやすく、自然に治ることはほとんどありません。愛猫がご飯を食べにくそうにしている、よだれが多い、口を気にしているなどの症状がある場合は、口内炎の可能性があります。この記事では、猫の口内炎の原因と治療法について詳しく解説します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>猫の口内炎の症状と見つけ方</h2>
            <p>猫は痛みを隠す動物のため、口内炎の初期症状は見逃されがちです。以下のサインに注意してください。</p>
            <ul>
              <li>食べたそうにするが食べられない、途中で食べるのをやめる</li>
              <li>硬いフードを避け、柔らかいものだけ食べる</li>
              <li>口臭がきつくなった</li>
              <li>よだれが増えた（血が混じることもある）</li>
              <li>前足で口の周りをこする</li>
              <li>毛づくろいをしなくなり、被毛がボサボサになる</li>
              <li>頭を振る、食事中に鳴く</li>
              <li>体重減少</li>
            </ul>
            <p>猫の口内炎は口の奥（喉の手前の粘膜）に広範囲に炎症が起きる「尾側口内炎」が多く、口を開けて奥を見ないと気づけないことがあります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>猫の口内炎の主な原因</h2>
            <p>猫の口内炎の正確な原因はまだ完全には解明されていませんが、以下の要因が関与していると考えられています。</p>
            <p><strong>免疫の異常反応：</strong>歯垢中の細菌に対して免疫が過剰に反応し、粘膜に慢性的な炎症を起こすことが主な原因と考えられています。</p>
            <p><strong>ウイルス感染：</strong>猫カリシウイルス、猫免疫不全ウイルス（FIV）、猫白血病ウイルス（FeLV）などのウイルス感染が口内炎の発症や悪化に関与することがあります。</p>
            <p><strong>歯周病：</strong>歯石の蓄積や歯周病が口内環境を悪化させ、口内炎を誘発・悪化させます。</p>
            <p><strong>その他：</strong>栄養不良、ストレス、遺伝的素因なども関連因子として挙げられています。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>動物病院での治療法</h2>
            <p>猫の口内炎の治療には、いくつかの段階があります。</p>
            <p><strong>内科的治療：</strong>抗生物質、消炎鎮痛剤、ステロイド、免疫抑制剤などの投薬で炎症と痛みをコントロールします。ただし、薬だけで完治することは少なく、症状の緩和が主な目的です。</p>
            <p><strong>歯科処置：</strong>歯石除去（スケーリング）を行い、口腔内の細菌量を減らします。歯周病が重度の場合は抜歯も検討します。</p>
            <p><strong>全臼歯抜歯・全顎抜歯：</strong>内科治療で改善しない場合、奥歯をすべて抜く「全臼歯抜歯」や、すべての歯を抜く「全顎抜歯」が最も効果的な治療法です。約60〜90％の猫で症状の大幅な改善が見られます。歯がなくても猫はウェットフードや柔らかいドライフードを問題なく食べることができます。</p>
            <p><strong>その他の治療：</strong>インターフェロン療法、レーザー治療、幹細胞療法なども試みられることがあります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>自宅でのケアと食事の工夫</h2>
            <p>口内炎の猫の食事は工夫が必要です。</p>
            <ul>
              <li>ウェットフードやペースト状のフードを常温〜少し温めて与える</li>
              <li>ドライフードはぬるま湯でふやかす</li>
              <li>食器は平らで浅いものを使い、ヒゲが当たらないようにする</li>
              <li>少量ずつ頻回に食事を与える</li>
              <li>水は常に新鮮なものを用意する</li>
            </ul>
            <p>処方された薬は指示通りに投与し、自己判断で中止しないようにしましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>早期発見・早期治療が大切</h2>
            <p>猫の口内炎は進行するほど治療が難しくなり、猫のQOL（生活の質）も大きく低下します。食欲の変化や口臭など、少しでも気になる症状があれば早めに動物病院を受診してください。定期的な口腔内チェックと歯科検診も予防に役立ちます。</p>
            <p>当院では口腔内の検査から歯科処置まで対応しております。愛猫の口の健康についてお気軽にご相談ください。</p>
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
              <li><a href="/blog/dental-care" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬と猫の歯周病予防｜自宅でできる歯磨きの方法</a></li>
              <li><a href="/blog/cat-kidney-disease" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫の腎臓病を早期発見するために｜症状と予防のポイント</a></li>
              <li><a href="/blog/cat-vomiting-causes" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫が吐く原因と対処法｜心配な嘔吐の見分け方</a></li>
            </ul>
          </div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
      </main>
    </>
  )
}
