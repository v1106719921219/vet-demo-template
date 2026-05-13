import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '子犬を迎えたら｜最初の動物病院受診ガイド｜バウ・ミュウ動物病院',
  description: '千葉県市原市のバウ・ミュウ動物病院が子犬の初回受診について解説。迎えて1週間以内の受診がおすすめ。持ち物・検査内容・ワクチンスケジュールをご紹介。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/puppy-first-visit' },
  openGraph: {
    title: '子犬を迎えたら｜最初の動物病院受診ガイド｜バウ・ミュウ動物病院',
    description: '千葉県市原市のバウ・ミュウ動物病院が子犬の初回受診について解説。迎えて1週間以内の受診がおすすめ。持ち物・検査内容・ワクチンスケジュールをご紹介。',
    url: 'https://bowmew-ah.com/blog/puppy-first-visit',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/puppy-first-visit.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '子犬を迎えたら｜最初の動物病院受診ガイド｜バウ・ミュウ動物病院',
    description: '千葉県市原市のバウ・ミュウ動物病院が子犬の初回受診について解説。迎えて1週間以内の受診がおすすめ。持ち物・検査内容・ワクチンスケジュールをご紹介。',
    images: ['https://bowmew-ah.com/blog/puppy-first-visit.webp'],
  },
}

export default function PuppyFirstVisitPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: '子犬を迎えたら｜最初の動物病院受診ガイド',
    description: '千葉県市原市のバウ・ミュウ動物病院が子犬の初回受診について解説。迎えて1週間以内の受診がおすすめ。持ち物・検査内容・ワクチンスケジュールをご紹介。',
    image: "https://bowmew-ah.com/blog/puppy-first-visit.webp",
    datePublished: "2026-01-10",
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
          <span style={{ color: '#666' }}>子犬の初めての受診</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026-01-10</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>子犬を迎えたら｜最初の動物病院受診ガイド</h1>
          <img src={`/blog/puppy-first-visit.webp`} alt="子犬の初めての動物病院" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>新しい家族として子犬を迎えることは、とても嬉しい出来事です。しかし、子犬は免疫力がまだ十分に備わっておらず、環境の変化によるストレスで体調を崩しやすい時期でもあります。健康で幸せな犬生のスタートを切るために、まずは動物病院での健康チェックを受けましょう。</p>
            <p>この記事では、市原市で子犬を迎えた飼い主さまに向けて、初回受診のタイミング、持ち物、検査内容、今後のスケジュールについて詳しくご案内します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>初回受診のタイミング</h2>
            <p>子犬をお迎えしたら、できれば1週間以内に動物病院を受診することをおすすめします。ただし、お迎え当日はペットショップやブリーダーからの移動で子犬が疲れているため、2〜3日は自宅で静かに過ごさせてあげましょう。</p>
            <p>初回受診の主な目的は以下の通りです。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>全身の健康状態のチェック</li>
              <li>先天性疾患の有無の確認</li>
              <li>寄生虫（おなかの虫）の検査</li>
              <li>今後のワクチン・予防のスケジュールの確認</li>
              <li>飼育方法についてのアドバイス</li>
            </ul>
            <p>元気に見えていても、目に見えない病気や寄生虫を持っていることがあるため、必ず受診しましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>動物病院に持っていくもの</h2>
            <p>初回受診をスムーズに進めるために、以下のものを準備しましょう。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>ワクチン接種証明書：</strong>ペットショップやブリーダーから受け取った書類です。これまでに接種したワクチンの種類と日付が記載されています。今後のワクチンスケジュールを決めるために必要です。</li>
              <li><strong>便（うんち）：</strong>当日または前日の新鮮な便を持参してください。ビニール袋やラップに入れて持っていけばOKです。便検査で寄生虫の有無を調べます。</li>
              <li><strong>購入時の書類：</strong>血統書や健康診断書、ペット保険の書類など、あれば持参しましょう。</li>
              <li><strong>キャリーケース：</strong>子犬はまだワクチン接種が完了していないため、他の動物との接触を避ける意味でもキャリーケースに入れて来院してください。</li>
              <li><strong>メモ帳：</strong>獣医師からのアドバイスや今後のスケジュールを記録するために持っていくと便利です。</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>初回受診の検査内容</h2>
            <p>バウ・ミュウ動物病院での子犬の初回検査は、以下の内容を行います。</p>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>身体検査</h3>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>体重測定：</strong>成長の基準となる体重を記録します。</li>
              <li><strong>体温測定：</strong>子犬の正常体温は38.0〜39.0度です。</li>
              <li><strong>視診・触診：</strong>目、耳、口腔内、皮膚、リンパ節、心音、腹部などを総合的にチェックします。</li>
              <li><strong>心臓の聴診：</strong>先天性心疾患の有無を確認します。子犬では心雑音が聞こえる場合があり、追加検査が必要になることもあります。</li>
            </ul>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>便検査</h3>
            <p>顕微鏡で便を検査し、回虫、鉤虫、コクシジウム、ジアルジアなどの寄生虫がいないかチェックします。子犬は母犬から寄生虫をもらっていることが多いため、便検査は非常に重要です。寄生虫が見つかった場合は駆虫薬で治療します。</p>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>飼育相談</h3>
            <p>初回受診では、食事、トイレトレーニング、社会化、お手入れの方法などについてもご質問いただけます。初めて犬を飼う方にも丁寧にアドバイスいたしますので、気になることはどんなことでもお聞きください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>今後のスケジュール</h2>
            <p>子犬を迎えた後は、以下のスケジュールで予防や処置を進めていきます。</p>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>混合ワクチン</h3>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>1回目：</strong>生後6〜8週（ペットショップ等で接種済みのことが多い）</li>
              <li><strong>2回目：</strong>1回目の3〜4週間後</li>
              <li><strong>3回目：</strong>2回目の3〜4週間後</li>
              <li><strong>以降：</strong>1年に1回の追加接種</li>
            </ul>
            <p>混合ワクチンはジステンパー、パルボウイルス、アデノウイルスなど、命に関わる感染症を予防する重要なワクチンです。接種が完了するまでは、他の犬との接触やお散歩デビューは控えましょう。</p>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>狂犬病ワクチン</h3>
            <p>生後91日以上の犬は、狂犬病予防法により年に1回の狂犬病ワクチン接種が義務付けられています。市原市への登録手続きも合わせて行います。</p>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>フィラリア・ノミマダニ予防</h3>
            <p>市原市の気候では4月頃からフィラリア予防を開始し、ノミ・マダニ予防は通年行うことをおすすめしています。子犬の月齢や体重に合わせた予防薬をご提案します。</p>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>去勢・避妊手術</h3>
            <p>去勢・避妊手術は、生後6ヶ月〜1歳頃が一般的な実施時期です。望まない繁殖の防止だけでなく、将来的な生殖器系の病気（子宮蓄膿症、乳腺腫瘍、精巣腫瘍など）の予防にもつながります。手術のタイミングについては獣医師にご相談ください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>市原市で子犬を迎えた飼い主さまへ</h2>
            <p>バウ・ミュウ動物病院は、子犬の最初のかかりつけ医として、お迎えから成犬になるまで一貫したサポートを行っています。市原市の動物病院として、初めてペットを飼う方にも安心して通っていただける診療を目指しています。</p>
            <p>「子犬を迎えたけれど何から始めればいいかわからない」という方も、まずはお気軽にご来院ください。予約不要・当日受付OKですので、子犬の体調が良いタイミングでお越しいただければと思います。</p>
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
    <li><a href="/blog/vaccine-schedule" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬と猫のワクチン接種スケジュール｜種類・時期・費用を解説</a></li>
    <li><a href="/blog/dog-vaccine-types" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬の混合ワクチンは何種を選ぶ？種類と違いを解説</a></li>
    <li><a href="/blog/dental-care" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬と猫の歯周病予防｜自宅でできる歯磨きの方法</a></li>
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
