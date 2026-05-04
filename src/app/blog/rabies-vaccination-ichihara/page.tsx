import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '【市原市】狂犬病予防注射の届出と接種の流れ｜バウ・ミュウ動物病院',
  description: '市原市での狂犬病予防注射の届出方法と接種の流れを解説。集合注射と動物病院での接種の違い、必要な手続きについてご紹介します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/rabies-vaccination-ichihara' },
  openGraph: {
    title: '【市原市】狂犬病予防注射の届出と接種の流れ｜バウ・ミュウ動物病院',
    description: '市原市での狂犬病予防注射の届出方法と接種の流れを解説。集合注射と動物病院での接種の違い、必要な手続きについてご紹介します。',
    url: 'https://bowmew-ah.com/blog/rabies-vaccination-ichihara',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/rabies-vaccination-ichihara.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '【市原市】狂犬病予防注射の届出と接種の流れ｜バウ・ミュウ動物病院',
    description: '市原市での狂犬病予防注射の届出方法と接種の流れを解説。集合注射と動物病院での接種の違い、必要な手続きについてご紹介します。',
    images: ['https://bowmew-ah.com/blog/rabies-vaccination-ichihara.webp'],
  },
}

export default function RabiesVaccinationIchihara() {
  return (
    <main className="site">
      <header className="header">
        <div className="headerInner">
          <a className="logo" href="/"><img src="/logo.png" alt="バウ・ミュウ動物病院" className="logoMark" style={{ width: 100, height: 100, borderRadius: 0, background: 'transparent' }} /><span><strong>バウ・ミュウ動物病院</strong><small>犬と猫のホームドクター</small></span></a>
          <nav className="nav"><a href="/about">当院について</a><a href="/services">診療案内</a><a href="/price">料金</a><a href="/first-visit">初めての方</a><a href="/access">アクセス</a><a href="/blog">コラム</a></nav>
          <a className="headerBtn" href="tel:0436411008">電話する</a>
        </div>
      </header>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026.02.20</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>【市原市】狂犬病予防注射の届出と接種の流れ</h1>
          <img src={`/blog/rabies-vaccination-ichihara.webp`} alt="狂犬病予防注射の接種" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>狂犬病予防注射は、狂犬病予防法により犬の飼い主に義務付けられています。生後91日以上の犬は毎年1回の接種が必要で、届出を怠ると罰則の対象となります。この記事では、市原市にお住まいの飼い主さんに向けて、狂犬病予防注射の届出方法と接種の流れをわかりやすく解説します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>狂犬病予防注射が義務である理由</h2>
            <p>狂犬病は、すべての哺乳類に感染し、発症すればほぼ100％死亡する極めて危険な感染症です。日本では1957年以降、国内での発生はありませんが、これはワクチン接種による予防が徹底されているためです。</p>
            <p>世界では毎年約59,000人が狂犬病で亡くなっており、アジアやアフリカを中心に依然として流行しています。海外から持ち込まれるリスクは常に存在するため、国内での予防接種を継続することが重要です。</p>
            <p>狂犬病予防法では以下が飼い主の義務とされています。</p>
            <ul>
              <li>犬の登録（生涯1回）</li>
              <li>毎年1回の狂犬病予防注射</li>
              <li>鑑札と注射済票の装着</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>市原市での接種方法</h2>
            <p>市原市で狂犬病予防注射を受ける方法は2つあります。</p>
            <p><strong>1. 集合注射（市が実施）：</strong></p>
            <ul>
              <li>毎年4〜5月に市内各所で実施</li>
              <li>日程・会場は市から届くハガキや市のホームページで確認</li>
              <li>費用：注射料金＋注射済票交付手数料（合計3,500円程度）</li>
              <li>その場で注射済票が交付される</li>
            </ul>
            <p><strong>2. 動物病院での個別接種：</strong></p>
            <ul>
              <li>年間を通じていつでも接種可能</li>
              <li>費用：注射料金（3,000円程度）＋注射済票交付手数料（550円）</li>
              <li>健康状態を診察したうえで接種できる</li>
              <li>混合ワクチンやフィラリア検査と同日に受けられる</li>
            </ul>
            <p>集合注射は短時間で多くの犬が集まるため、興奮しやすい犬や他の犬が苦手な犬は動物病院での個別接種がおすすめです。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>届出の手続き</h2>
            <p>動物病院で接種した場合の届出手続きは以下のとおりです。</p>
            <p><strong>当院が届出を代行する場合：</strong></p>
            <p>当院は市原市の委託を受けているため、接種時に注射済票をその場で交付できます。別途市役所に届け出る必要はありません。</p>
            <p><strong>飼い主さんが届け出る場合：</strong></p>
            <ol>
              <li>動物病院で「狂犬病予防注射済証明書」を受け取る</li>
              <li>証明書を持って市原市役所（環境管理課）または各支所へ届け出る</li>
              <li>注射済票の交付を受ける（手数料550円）</li>
            </ol>
            <p>届出期限は接種日から30日以内です。届出をしないと翌年の案内ハガキが届かない場合がありますのでご注意ください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>新規登録（初めて犬を飼う方）</h2>
            <p>犬を新しく飼い始めた方は、犬の登録が必要です。</p>
            <ul>
              <li><strong>届出先：</strong>市原市役所 環境管理課または各支所</li>
              <li><strong>届出期限：</strong>犬を取得した日から30日以内（生後90日以内の子犬は90日を経過した日から30日以内）</li>
              <li><strong>登録手数料：</strong>3,000円</li>
              <li><strong>必要なもの：</strong>飼い主の身分証明書</li>
            </ul>
            <p>登録すると「鑑札」が交付されます。鑑札は犬の首輪に装着することが義務付けられています。生涯有効で、転居しても引き継がれます（転入届は必要）。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>接種が猶予される場合</h2>
            <p>以下の場合は、獣医師の判断により接種を猶予（免除）されることがあります。</p>
            <ul>
              <li>重度の心臓病や腎臓病がある</li>
              <li>過去にワクチンで重篤なアレルギー反応（アナフィラキシー）を起こした</li>
              <li>現在治療中の重い病気がある</li>
              <li>高齢で体力が著しく低下している</li>
            </ul>
            <p>猶予を受ける場合は、獣医師に「狂犬病予防注射猶予証明書」を発行してもらい、市役所に届け出ます。猶予は1年ごとの更新が必要です。</p>
            <p>狂犬病予防注射についてご不明な点がございましたら、当院へお気軽にお問い合わせください。接種と届出を一度に済ませることができます。</p>
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
    <li><a href="/blog/filaria-prevention" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>【市原市】フィラリア予防はいつから？時期と費用について</a></li>
  </ul>
</div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
    </main>
  )
}
