import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '犬の熱中症に注意！市原市の夏を安全に過ごすための対策｜バウ・ミュウ動物病院',
  description: '千葉県市原市のバウ・ミュウ動物病院が犬の熱中症の症状・応急処置・予防法を解説。市原市の夏は高温多湿で熱中症リスクが高く、散歩の時間帯や水分補給に注意が必要です。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/summer-heatstroke' },
  openGraph: {
    title: '犬の熱中症に注意！市原市の夏を安全に過ごすための対策｜バウ・ミュウ動物病院',
    description: '千葉県市原市のバウ・ミュウ動物病院が犬の熱中症の症状・応急処置・予防法を解説。市原市の夏は高温多湿で熱中症リスクが高く、散歩の時間帯や水分補給に注意が必要です。',
    url: 'https://bowmew-ah.com/blog/summer-heatstroke',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/summer-heatstroke.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '犬の熱中症に注意！市原市の夏を安全に過ごすための対策｜バウ・ミュウ動物病院',
    description: '千葉県市原市のバウ・ミュウ動物病院が犬の熱中症の症状・応急処置・予防法を解説。市原市の夏は高温多湿で熱中症リスクが高く、散歩の時間帯や水分補給に注意が必要です。',
    images: ['https://bowmew-ah.com/blog/summer-heatstroke.webp'],
  },
}

export default function SummerHeatstrokePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: '犬の熱中症に注意！市原市の夏を安全に過ごすための対策',
    description: '千葉県市原市のバウ・ミュウ動物病院が犬の熱中症の症状・応急処置・予防法を解説。市原市の夏は高温多湿で熱中症リスクが高く、散歩の時間帯や水分補給に注意が必要です。',
    image: "https://bowmew-ah.com/blog/summer-heatstroke.webp",
    datePublished: "2026-04-10",
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
          <span style={{ color: '#666' }}>犬の熱中症対策</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026-04-10</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>犬の熱中症に注意！市原市の夏を安全に過ごすための対策</h1>
          <img src={`/blog/summer-heatstroke.webp`} alt="犬の熱中症対策" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>毎年夏になると、熱中症で動物病院に駆け込む飼い主さまが増えます。犬は人間と異なり、汗をかいて体温を下げることができないため、熱中症にかかるリスクが非常に高い動物です。特に千葉県市原市は内陸部に位置し、夏場は気温35度を超える猛暑日が続くことも珍しくありません。</p>
            <p>この記事では、市原市にお住まいの飼い主さまに向けて、犬の熱中症の症状・応急処置・予防法について詳しく解説します。正しい知識を持つことで、大切な愛犬の命を守りましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>犬が熱中症になりやすい理由</h2>
            <p>犬の体温調節は主にパンティング（口を開けてハァハァと呼吸すること）と、肉球からのわずかな発汗に頼っています。人間のように全身から汗をかいて体温を下げることができないため、気温や湿度が高い環境では体内に熱がこもりやすくなります。</p>
            <p>特に以下のような犬種は熱中症のリスクが高いため、より一層の注意が必要です。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>短頭種：</strong>パグ、フレンチブルドッグ、ブルドッグなど（気道が狭く呼吸効率が悪い）</li>
              <li><strong>大型犬：</strong>ゴールデンレトリバー、バーニーズマウンテンドッグなど（体が大きく放熱しにくい）</li>
              <li><strong>被毛の厚い犬種：</strong>シベリアンハスキー、サモエドなど（暑さに弱い）</li>
              <li><strong>シニア犬や子犬：</strong>体温調節機能が未熟または衰えている</li>
              <li><strong>肥満の犬：</strong>脂肪が断熱材の役割を果たし、体熱がこもりやすい</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>熱中症の症状を見分けるポイント</h2>
            <p>犬の熱中症は進行が早く、発見が遅れると命に関わります。以下の症状が見られたら、すぐに対処が必要です。</p>
            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>初期症状</h3>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>激しいパンティング（通常より荒い呼吸）</li>
              <li>大量のよだれ</li>
              <li>歯茎や舌が赤くなる</li>
              <li>心拍数の増加</li>
              <li>元気がなくなる、ぐったりする</li>
            </ul>
            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>重度の症状</h3>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>ふらつき、まっすぐ歩けない</li>
              <li>嘔吐や下痢（血が混じることも）</li>
              <li>歯茎が白っぽくなる、または紫色になる</li>
              <li>意識がぼんやりする、反応が鈍い</li>
              <li>けいれん、失神</li>
            </ul>
            <p>重度の症状が見られた場合は一刻を争います。応急処置を行いながら、すぐに動物病院へ連絡してください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>熱中症の応急処置</h2>
            <p>熱中症が疑われる場合、以下の手順で応急処置を行いましょう。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>1. 涼しい場所に移動：</strong>日陰やエアコンの効いた室内に移動させます。</li>
              <li><strong>2. 体を冷やす：</strong>常温の水（冷水は血管が収縮して逆効果）を体にかけたり、濡れタオルで首、脇の下、内股など太い血管が通る部分を冷やします。</li>
              <li><strong>3. 水を飲ませる：</strong>意識がある場合は少量ずつ水を飲ませます。ただし、意識がもうろうとしている場合は無理に飲ませないでください。</li>
              <li><strong>4. 動物病院へ連絡：</strong>応急処置をしながら、すぐにかかりつけの動物病院に電話しましょう。バウ・ミュウ動物病院では緊急の場合もできる限り対応いたします。</li>
            </ul>
            <p>注意点として、氷水に浸けたり保冷剤を直接体に当てるのは、急激な冷却により末梢血管が収縮し、かえって体の内部に熱がこもる原因になるため避けてください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>市原市の夏の気候と散歩の注意点</h2>
            <p>千葉県市原市は東京湾に面しながらも内陸部が広がっており、夏場は気温が高くなりやすい地域です。7月〜8月の日中は35度を超えることもあり、アスファルトの表面温度は60度以上に達することがあります。</p>
            <p>犬は地面に近い位置を歩くため、人間が感じる以上に暑さの影響を受けます。以下のポイントを心がけましょう。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>散歩の時間帯：</strong>早朝5〜7時、または夕方19時以降がおすすめです。手の甲をアスファルトに5秒当てて熱くなければ散歩可能の目安です。</li>
              <li><strong>水分補給：</strong>散歩には必ず水を持参し、こまめに飲ませましょう。</li>
              <li><strong>散歩コースの工夫：</strong>市原市内の公園や緑地帯など、木陰のある場所を選びましょう。土や草の上は、アスファルトより地面の温度が低くなります。</li>
              <li><strong>散歩時間の短縮：</strong>猛暑日は無理に長時間歩かせず、短めの散歩にとどめましょう。</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>室内での熱中症予防</h2>
            <p>「室内にいれば安心」と思われがちですが、エアコンを使用していない室内でも熱中症は発生します。特に留守番中は要注意です。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>エアコンは25〜27度に設定し、留守中も必ずつけておく</li>
              <li>新鮮な水をいつでも飲めるようにしておく</li>
              <li>直射日光が当たる場所にケージやベッドを置かない</li>
              <li>冷却マットやクールベストなどのグッズを活用する</li>
            </ul>
            <p>また、車内に犬を残すことは絶対に避けてください。夏場の車内温度は短時間で50度以上に達し、窓を少し開けた程度では全く効果がありません。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>市原市で愛犬の熱中症対策をお考えの方へ</h2>
            <p>バウ・ミュウ動物病院では、熱中症の予防相談や万が一の緊急対応を行っています。夏場は特に体調を崩しやすい時期ですので、少しでも気になる症状があれば、お早めにご来院ください。</p>
            <p>市原市の動物病院として、地域の飼い主さまと大切なペットの健康を一緒に守っていきたいと考えています。暑い夏を安全に乗り越えるために、ぜひ日頃からの対策を心がけてください。</p>
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
    <li><a href="/blog/dog-paw-burn" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>夏の散歩で犬の肉球が火傷？アスファルトの危険と対策</a></li>
    <li><a href="/blog/emergency-vet-ichihara" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>【市原市】ペットの夜間救急｜緊急時の対応と連絡先</a></li>
    <li><a href="/blog/winter-joint-care" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>冬の関節ケア｜シニア犬猫の寒さ対策と注意点</a></li>
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
