import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '犬と猫の歯周病予防｜自宅でできる歯磨きの方法｜バウ・ミュウ動物病院',
  description: '千葉県市原市のバウ・ミュウ動物病院が犬猫の歯周病予防と歯磨きの方法を解説。3歳以上の犬猫の約80%が歯周病に。段階的な歯磨きの慣らし方やデンタルケアグッズをご紹介。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/dental-care' },
  openGraph: {
    title: '犬と猫の歯周病予防｜自宅でできる歯磨きの方法｜バウ・ミュウ動物病院',
    description: '千葉県市原市のバウ・ミュウ動物病院が犬猫の歯周病予防と歯磨きの方法を解説。3歳以上の犬猫の約80%が歯周病に。段階的な歯磨きの慣らし方やデンタルケアグッズをご紹介。',
    url: 'https://bowmew-ah.com/blog/dental-care',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/dental-care.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '犬と猫の歯周病予防｜自宅でできる歯磨きの方法｜バウ・ミュウ動物病院',
    description: '千葉県市原市のバウ・ミュウ動物病院が犬猫の歯周病予防と歯磨きの方法を解説。3歳以上の犬猫の約80%が歯周病に。段階的な歯磨きの慣らし方やデンタルケアグッズをご紹介。',
    images: ['https://bowmew-ah.com/blog/dental-care.webp'],
  },
}

export default function DentalCarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: '犬と猫の歯周病予防｜自宅でできる歯磨きの方法',
    description: '千葉県市原市のバウ・ミュウ動物病院が犬猫の歯周病予防と歯磨きの方法を解説。3歳以上の犬猫の約80%が歯周病に。段階的な歯磨きの慣らし方やデンタルケアグッズをご紹介。',
    image: "https://bowmew-ah.com/blog/dental-care.webp",
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
          <span style={{ color: '#666' }}>犬猫の歯周病予防</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026-02-05</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>犬と猫の歯周病予防｜自宅でできる歯磨きの方法</h1>
          <img src={`/blog/dental-care.webp`} alt="犬猫の歯磨きケア" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>「ペットの口が臭い」と感じたことはありませんか？実は、3歳以上の犬と猫の約80%が何らかの歯周病を抱えているといわれています。歯周病はただ口が臭くなるだけでなく、歯が抜けたり、細菌が血流に乗って心臓や腎臓などの内臓にまで悪影響を及ぼす可能性がある深刻な病気です。</p>
            <p>この記事では、市原市で犬や猫を飼っている飼い主さまに向けて、歯周病の危険性と、自宅でできる歯磨きの方法、おすすめのデンタルケアグッズについて詳しく解説します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>歯周病はなぜ怖いのか？</h2>
            <p>歯周病は、歯垢（プラーク）の中の細菌が歯茎に炎症を起こし、やがて歯を支える骨（歯槽骨）まで溶かしてしまう病気です。犬の口の中は人間よりもアルカリ性が高く、歯垢が歯石に変わるスピードが非常に速いのが特徴です。犬の場合、歯垢はわずか3〜5日で歯石になるとされています。</p>
            <p>歯周病が進行すると、以下のような深刻な問題を引き起こします。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>歯の脱落：</strong>歯を支える骨が溶けることで、歯がグラグラになり最終的に抜け落ちます。</li>
              <li><strong>顎の骨折：</strong>特に小型犬では、歯周病により顎の骨が薄くなり、硬いものを噛んだ拍子に骨折することがあります。</li>
              <li><strong>口腔鼻腔瘻（こうくうびくうろう）：</strong>上顎の歯周病が進行すると、口と鼻の間に穴が開き、くしゃみや鼻水の原因になります。</li>
              <li><strong>内臓への影響：</strong>歯周病菌が血流に入り込み、心臓（心内膜炎）、腎臓、肝臓に炎症を引き起こすリスクがあります。</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>歯周病のサインを見逃さない</h2>
            <p>以下のような症状が見られたら、歯周病が進行している可能性があります。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>口臭がきつくなった</li>
              <li>歯茎が赤く腫れている</li>
              <li>歯茎から出血している</li>
              <li>歯の表面に茶色い歯石が付着している</li>
              <li>よだれの量が増えた</li>
              <li>食事中に食べ物をこぼす、片側だけで噛んでいる</li>
              <li>硬いフードやおやつを嫌がるようになった</li>
              <li>口の周りを触られることを嫌がる</li>
            </ul>
            <p>これらの症状が見られる場合は、早めに動物病院で口腔内をチェックしてもらいましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>自宅でできる歯磨きの方法</h2>
            <p>歯周病予防の基本は、毎日の歯磨きです。しかし、いきなり歯ブラシを口に入れるとペットが嫌がってしまいます。以下のステップで段階的に慣らしていきましょう。</p>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>ステップ1：口の周りに触れることに慣らす</h3>
            <p>まずは口の周りを優しく触る練習から始めます。触らせてくれたらおやつでご褒美を与え、口を触ることは良いことだと学習させましょう。1〜2週間かけてゆっくり進めます。</p>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>ステップ2：歯や歯茎に触れる</h3>
            <p>口の周りに触れることに慣れたら、次は唇をめくって歯や歯茎に指で触れてみます。ペット用の歯磨きペースト（チキン味やモルト味など）を指につけると、受け入れやすくなります。</p>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>ステップ3：ガーゼや指サック型歯ブラシで磨く</h3>
            <p>ガーゼを指に巻きつけるか、指サック型の歯ブラシを使って、歯の表面を優しくこするように磨きます。特に上顎の奥歯（臼歯）は歯垢がたまりやすいため、重点的に磨きましょう。</p>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>ステップ4：歯ブラシで磨く</h3>
            <p>最終的にはペット用の歯ブラシを使って磨けることが目標です。歯ブラシは毛先が柔らかく、ヘッドが小さいものを選びましょう。歯と歯茎の境目（歯周ポケット）に毛先を当て、小刻みに動かすのがコツです。</p>
            <p>各ステップで数日〜2週間かけ、ペットが嫌がったら無理をせず前のステップに戻ることが大切です。焦らずに進めましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>おすすめデンタルケアグッズ</h2>
            <p>歯ブラシによる歯磨きが最も効果的ですが、補助的に以下のグッズを活用するのもよいでしょう。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>デンタルガム：</strong>噛むことで歯垢を物理的にこすり取る効果があります。VOHC（米国獣医口腔衛生評議会）認定のものがおすすめです。</li>
              <li><strong>デンタルジェル・スプレー：</strong>歯に塗布またはスプレーすることで、細菌の繁殖を抑える効果があります。歯磨きができない日の代替手段としても有効です。</li>
              <li><strong>飲み水に入れるタイプ：</strong>水に混ぜるだけで口腔内の環境を整える効果がありますが、歯磨きの代わりにはなりません。</li>
              <li><strong>デンタルトイ：</strong>遊びながら歯の汚れを落とす効果が期待できますが、硬すぎるおもちゃは歯が折れるリスクがあるため注意が必要です。</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>動物病院での歯科処置について</h2>
            <p>すでに歯石がしっかりついている場合は、自宅でのケアだけでは取り除けません。動物病院では全身麻酔下でスケーリング（歯石除去）を行い、歯の表面を磨き上げるポリッシングまで実施します。</p>
            <p>バウ・ミュウ動物病院では、歯科処置の前に血液検査を行い、麻酔のリスクを確認した上で安全に処置を行っています。歯石除去後は、自宅での歯磨きを続けることで清潔な状態を維持できます。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>市原市でペットの歯の健康が気になる方へ</h2>
            <p>バウ・ミュウ動物病院では、口腔内の検診やデンタルケアのアドバイスを行っています。市原市の動物病院として、飼い主さまがご自宅でも適切なケアができるようサポートいたします。</p>
            <p>「歯磨きの始め方がわからない」「口臭が気になる」など、お口のことでお悩みの方はお気軽にご相談ください。ペットの歯の健康は全身の健康につながります。</p>
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
    <li><a href="/blog/cat-stomatitis" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫の口内炎が治らない｜原因と動物病院での治療法</a></li>
    <li><a href="/blog/puppy-first-visit" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>子犬を迎えたら｜最初の動物病院受診ガイド</a></li>
    <li><a href="/blog/obesity-prevention" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>ペットの肥満は万病のもと｜適正体重管理のポイント</a></li>
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
