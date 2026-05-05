import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ペットのマイクロチップ義務化｜登録方法と費用を解説｜バウ・ミュウ動物病院',
  description: 'ペットのマイクロチップ義務化について、登録方法・費用・よくある質問を獣医師が解説。既に飼っている犬猫の対応についてもご紹介します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/microchip-registration' },
  openGraph: {
    title: 'ペットのマイクロチップ義務化｜登録方法と費用を解説｜バウ・ミュウ動物病院',
    description: 'ペットのマイクロチップ義務化について、登録方法・費用・よくある質問を獣医師が解説。既に飼っている犬猫の対応についてもご紹介します。',
    url: 'https://bowmew-ah.com/blog/microchip-registration',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/microchip-registration.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ペットのマイクロチップ義務化｜登録方法と費用を解説｜バウ・ミュウ動物病院',
    description: 'ペットのマイクロチップ義務化について、登録方法・費用・よくある質問を獣医師が解説。既に飼っている犬猫の対応についてもご紹介します。',
    images: ['https://bowmew-ah.com/blog/microchip-registration.webp'],
  },
}

export default function MicrochipRegistration() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: 'ペットのマイクロチップ義務化｜登録方法と費用を解説',
    description: 'ペットのマイクロチップ義務化について、登録方法・費用・よくある質問を獣医師が解説。既に飼っている犬猫の対応についてもご紹介します。',
    image: "https://bowmew-ah.com/blog/microchip-registration.webp",
    datePublished: "2026-02-10",
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
          <span style={{ color: '#666' }}>マイクロチップ義務化</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026.02.10</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>ペットのマイクロチップ義務化｜登録方法と費用を解説</h1>
          <img src={`/blog/microchip-registration.webp`} alt="ペットのマイクロチップ装着" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>2022年6月1日より、ブリーダーやペットショップで販売される犬・猫へのマイクロチップ装着が義務化されました。これにより、ペットショップから迎えた犬猫には既にマイクロチップが入っています。しかし「登録の変更手続きがわからない」「既に飼っている子はどうすればいい？」という疑問をお持ちの飼い主さんも多いでしょう。この記事では、マイクロチップの登録方法と費用について詳しく解説します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>マイクロチップとは？</h2>
            <p>マイクロチップは、直径約2mm、長さ約12mmの小さな電子タグです。世界にひとつだけの15桁の識別番号が記録されており、専用のリーダーで読み取ることができます。</p>
            <p><strong>マイクロチップの特徴：</strong></p>
            <ul>
              <li>一度装着すれば半永久的に機能する（電池不要）</li>
              <li>体内で移動しにくい構造（生体適合性ガラスで被覆）</li>
              <li>MRIやレントゲンに影響しない</li>
              <li>GPS機能はない（居場所の追跡はできない）</li>
              <li>注射器で皮下に埋め込む（通常は首の後ろ）</li>
            </ul>
            <p>迷子や災害時にペットが保護された際、マイクロチップの番号から飼い主を特定できるため、ペットが家に帰れる確率が大幅に高まります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>義務化の内容と対象</h2>
            <p>マイクロチップに関する法律上の義務は以下のとおりです。</p>
            <p><strong>義務（必ずやること）：</strong></p>
            <ul>
              <li>ブリーダー・ペットショップ：販売する犬猫へのマイクロチップ装着</li>
              <li>犬猫を購入した飼い主：所有者情報の変更登録（30日以内）</li>
            </ul>
            <p><strong>努力義務（できるだけやること）：</strong></p>
            <ul>
              <li>既に飼っている犬猫へのマイクロチップ装着</li>
              <li>保護施設から譲り受けた犬猫への装着</li>
            </ul>
            <p>既に飼っている犬猫については「努力義務」ですが、災害時やの迷子対策として装着を強くおすすめします。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>登録・変更の手続き方法</h2>
            <p>マイクロチップの情報登録は「犬と猫のマイクロチップ情報登録」制度（環境省のデータベース）で行います。</p>
            <p><strong>新規に装着した場合：</strong></p>
            <ol>
              <li>動物病院でマイクロチップを装着</li>
              <li>獣医師から「マイクロチップ装着証明書」を受け取る</li>
              <li>環境省の登録サイトでオンライン登録（または郵送）</li>
              <li>登録手数料：オンライン300円、郵送1,000円</li>
            </ol>
            <p><strong>ペットショップから迎えた場合（所有者変更）：</strong></p>
            <ol>
              <li>ペットショップから「登録証明書」を受け取る</li>
              <li>環境省の登録サイトで所有者の変更登録を行う</li>
              <li>変更登録手数料：オンライン300円、郵送1,000円</li>
            </ol>
            <p><strong>住所変更・連絡先変更：</strong></p>
            <p>引っ越しや電話番号の変更があった場合も、速やかにオンラインで情報を更新してください。情報が古いとペットが保護されても連絡が取れません。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>装着の費用と流れ</h2>
            <p>動物病院でのマイクロチップ装着の費用と流れは以下のとおりです。</p>
            <p><strong>費用の目安：</strong></p>
            <ul>
              <li>マイクロチップ装着費用：3,000〜5,000円程度</li>
              <li>登録手数料：300円（オンライン）または1,000円（郵送）</li>
            </ul>
            <p><strong>装着の流れ：</strong></p>
            <ol>
              <li>獣医師が健康状態を確認</li>
              <li>専用の注射器で首の後ろの皮下に挿入（数秒で完了）</li>
              <li>リーダーで番号を読み取り、正常に機能しているか確認</li>
              <li>装着証明書を発行</li>
            </ol>
            <p>装着時の痛みは通常の予防注射程度で、麻酔は必要ありません。去勢・避妊手術の際に同時に装着することも可能です。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>よくある質問</h2>
            <p><strong>Q. マイクロチップで体調が悪くなることはありますか？</strong></p>
            <p>A. 副反応はきわめてまれです。装着後に軽い腫れが出ることがありますが、通常数日で落ち着きます。</p>
            <p><strong>Q. マイクロチップが体内で移動することはありますか？</strong></p>
            <p>A. 特殊な表面加工により組織と結合するため、移動はほとんどありません。まれに数cm程度移動することがありますが、機能に問題はありません。</p>
            <p><strong>Q. 既にAIPO等に登録していますが、環境省にも登録が必要ですか？</strong></p>
            <p>A. 2022年6月以降の新制度では環境省のデータベースへの登録が必要です。移行登録の手続きを行ってください。</p>
            <p><strong>Q. 高齢の犬猫にも装着できますか？</strong></p>
            <p>A. 健康状態に問題がなければ高齢でも装着可能です。獣医師にご相談ください。</p>
            <p>マイクロチップの装着・登録についてご不明な点がございましたら、当院へお気軽にお問い合わせください。</p>
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
    <li><a href="/blog/pet-disaster-preparedness" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>ペットの災害対策｜市原市で備えておくべきこと</a></li>
    <li><a href="/blog/pet-insurance-guide" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>ペット保険は必要？選び方のポイントを動物病院が解説</a></li>
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
