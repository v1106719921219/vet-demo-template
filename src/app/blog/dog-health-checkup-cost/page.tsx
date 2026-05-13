import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '【市原市】犬の健康診断の費用と検査内容｜年1回がおすすめ｜バウ・ミュウ動物病院',
  description: '市原市で犬の健康診断をお考えの方へ。費用の目安と検査内容、年齢別のおすすめプランを獣医師が解説します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/dog-health-checkup-cost' },
  openGraph: {
    title: '【市原市】犬の健康診断の費用と検査内容｜年1回がおすすめ｜バウ・ミュウ動物病院',
    description: '市原市で犬の健康診断をお考えの方へ。費用の目安と検査内容、年齢別のおすすめプランを獣医師が解説します。',
    url: 'https://bowmew-ah.com/blog/dog-health-checkup-cost',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/dog-health-checkup-cost.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '【市原市】犬の健康診断の費用と検査内容｜年1回がおすすめ｜バウ・ミュウ動物病院',
    description: '市原市で犬の健康診断をお考えの方へ。費用の目安と検査内容、年齢別のおすすめプランを獣医師が解説します。',
    images: ['https://bowmew-ah.com/blog/dog-health-checkup-cost.webp'],
  },
}

export default function DogHealthCheckupCost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: '【市原市】犬の健康診断の費用と検査内容｜年1回がおすすめ',
    description: '市原市で犬の健康診断をお考えの方へ。費用の目安と検査内容、年齢別のおすすめプランを獣医師が解説します。',
    image: "https://bowmew-ah.com/blog/dog-health-checkup-cost.webp",
    datePublished: "2026-03-05",
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
          <span style={{ color: '#666' }}>犬の健康診断の費用</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026.03.05</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>【市原市】犬の健康診断の費用と検査内容｜年1回がおすすめ</h1>
          <img src={`/blog/dog-health-checkup-cost.webp`} alt="犬の健康診断の様子" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>犬は人間の4〜7倍のスピードで年を取ると言われています。そのため、年に1回の健康診断は人間に換算すると数年に1回しか検査を受けていないのと同じです。病気の早期発見・早期治療のために、定期的な健康診断をおすすめします。この記事では、犬の健康診断の費用目安や検査内容について解説します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>犬の健康診断が必要な理由</h2>
            <p>犬は体調の変化を言葉で伝えることができません。また、野生の本能から体調不良を隠す傾向があり、飼い主さんが異変に気づいたときにはすでに病気が進行していることも少なくありません。</p>
            <p>健康診断を定期的に受けることで、以下のメリットがあります。</p>
            <ul>
              <li>症状が出る前の段階で病気を発見できる</li>
              <li>早期治療により治療期間が短く、費用も抑えられる</li>
              <li>健康時のデータが蓄積され、異常値の判断がしやすくなる</li>
              <li>生活習慣のアドバイスが受けられる</li>
            </ul>
            <p>特に7歳以上のシニア犬では、腎臓病、心臓病、糖尿病、腫瘍など年齢とともにリスクが高まる病気が多く、半年に1回の検診が推奨されます。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>健康診断の検査内容</h2>
            <p>犬の健康診断では、一般的に以下の検査を行います。</p>
            <p><strong>基本検査：</strong></p>
            <ul>
              <li>問診・視診・触診・聴診</li>
              <li>体重・体温測定</li>
              <li>血液検査（血球計算・生化学検査）</li>
              <li>尿検査</li>
              <li>便検査</li>
            </ul>
            <p><strong>オプション検査：</strong></p>
            <ul>
              <li>レントゲン検査（胸部・腹部）</li>
              <li>腹部超音波（エコー）検査</li>
              <li>心臓超音波検査</li>
              <li>甲状腺ホルモン検査</li>
              <li>眼科検査</li>
              <li>血圧測定</li>
            </ul>
            <p>血液検査では肝臓・腎臓・膵臓の機能、血糖値、コレステロール値、貧血の有無などを確認します。尿検査では腎臓の早期異常や糖尿病、尿路感染の有無がわかります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>健康診断の費用の目安</h2>
            <p>犬の健康診断の費用は検査内容によって異なります。一般的な目安は以下のとおりです。</p>
            <ul>
              <li><strong>基本コース</strong>（血液検査＋尿検査＋身体検査）：5,000〜10,000円程度</li>
              <li><strong>標準コース</strong>（基本＋レントゲン）：10,000〜20,000円程度</li>
              <li><strong>充実コース</strong>（標準＋超音波検査）：20,000〜30,000円程度</li>
              <li><strong>シニアドック</strong>（全項目＋追加検査）：25,000〜40,000円程度</li>
            </ul>
            <p>費用は動物病院や地域によって異なります。当院の健康診断の詳しい料金については、お電話またはご来院時にお問い合わせください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>年齢別のおすすめ検査頻度</h2>
            <p>犬の年齢に応じて、以下の頻度での健康診断をおすすめしています。</p>
            <ul>
              <li><strong>1〜6歳（成犬期）：</strong>年1回の基本〜標準コース</li>
              <li><strong>7〜9歳（中高齢期）：</strong>年1〜2回の標準〜充実コース</li>
              <li><strong>10歳以上（高齢期）：</strong>半年に1回の充実コース〜シニアドック</li>
            </ul>
            <p>大型犬は小型犬に比べて老化が早い傾向があるため、5〜6歳からシニア期の検査を検討してもよいでしょう。また、持病がある場合はかかりつけの獣医師と相談して適切な検査間隔を決めましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>健康診断を受ける際のポイント</h2>
            <p>健康診断をより有意義なものにするために、以下のポイントを参考にしてください。</p>
            <ul>
              <li>朝ご飯を抜いて来院する（血液検査の精度向上のため。水は飲んでOK）</li>
              <li>新鮮な便と尿を持参する（当日朝のものが望ましい）</li>
              <li>気になる症状や行動の変化をメモしておく</li>
              <li>前回の検査結果があれば持参する</li>
              <li>毎年同じ時期に受けると比較しやすい</li>
            </ul>
            <p>愛犬の健康を守るために、定期的な健康診断を習慣にしましょう。当院ではワクチン接種やフィラリア検査のタイミングに合わせた健康診断もおすすめしています。お気軽にご相談ください。</p>
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
    <li><a href="/blog/cat-health-checkup" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫の健康診断｜頻度と検査項目を動物病院が解説</a></li>
    <li><a href="/blog/senior-dog-care" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>シニア犬の健康管理｜7歳からの定期健診のすすめ</a></li>
    <li><a href="/blog/vaccine-schedule" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬と猫のワクチン接種スケジュール｜種類・時期・費用を解説</a></li>
  </ul>
</div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
      </main>
    </>
  )
}
