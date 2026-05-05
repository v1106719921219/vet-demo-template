import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '犬と猫のワクチン接種スケジュール｜市原市の動物病院 バウ・ミュウ動物病院',
  description: '千葉県市原市のバウ・ミュウ動物病院が犬猫のワクチン接種スケジュール・種類・費用を解説。混合ワクチン、狂犬病予防注射の適切な時期と回数をご案内します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/vaccine-schedule' },
  openGraph: {
    title: '犬と猫のワクチン接種スケジュール｜市原市の動物病院 バウ・ミュウ動物病院',
    description: '千葉県市原市のバウ・ミュウ動物病院が犬猫のワクチン接種スケジュール・種類・費用を解説。混合ワクチン、狂犬病予防注射の適切な時期と回数をご案内します。',
    url: 'https://bowmew-ah.com/blog/vaccine-schedule',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/vaccine-schedule.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '犬と猫のワクチン接種スケジュール｜市原市の動物病院 バウ・ミュウ動物病院',
    description: '千葉県市原市のバウ・ミュウ動物病院が犬猫のワクチン接種スケジュール・種類・費用を解説。混合ワクチン、狂犬病予防注射の適切な時期と回数をご案内します。',
    images: ['https://bowmew-ah.com/blog/vaccine-schedule.webp'],
  },
}

export default function VaccineSchedulePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: '犬と猫のワクチン接種スケジュール｜種類・時期・費用を解説',
    description: '千葉県市原市のバウ・ミュウ動物病院が犬猫のワクチン接種スケジュール・種類・費用を解説。混合ワクチン、狂犬病予防注射の適切な時期と回数をご案内します。',
    image: "https://bowmew-ah.com/blog/vaccine-schedule.webp",
    datePublished: "2026-04-20",
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
      <header className="header"><div className="headerInner"><a className="logo" href="/"><img src="/logo.png" alt="バウ・ミュウ動物病院" className="logoMark" style={{ width: 100, height: 100, borderRadius: 0, background: 'transparent' }} /><span><strong>バウ・ミュウ動物病院</strong><small>犬と猫のホームドクター</small></span></a><nav className="nav"><a href="/about">当院について</a><a href="/services">診療案内</a><a href="/price">料金</a><a href="/first-visit">初めての方</a><a href="/access">アクセス</a><a href="/blog">コラム</a></nav><a className="headerBtn" href="tel:0436411008">電話する</a></div></header>
      <nav style={{ background: '#fff9f0', padding: '12px 0', fontSize: '13px', color: '#999' }}>
        <div className="container">
          <a href="/" style={{ color: '#999', textDecoration: 'none' }}>ホーム</a>
          <span style={{ margin: '0 8px' }}>›</span>
          <a href="/blog" style={{ color: '#999', textDecoration: 'none' }}>コラム</a>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: '#666' }}>ワクチン接種スケジュール</span>
        </div>
      </nav>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026-04-20</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>犬と猫のワクチン接種スケジュール｜種類・時期・費用を解説</h1>
          <img src={`/blog/vaccine-schedule.webp`} alt="犬猫のワクチン接種スケジュール" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>ワクチン接種は、犬や猫を感染症から守るための最も基本的な予防医療です。特に子犬・子猫の時期は免疫が不十分なため、適切なスケジュールでの接種が重要になります。</p>
            <p>千葉県市原市のバウ・ミュウ動物病院では、一頭一頭の状態に合わせたワクチンプログラムをご提案しています。この記事では、犬と猫それぞれのワクチンの種類、接種スケジュール、費用の目安について詳しくご説明します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>犬のワクチンの種類</h2>
            <p>犬のワクチンは大きく分けて「コアワクチン（必須）」と「ノンコアワクチン（推奨）」があります。</p>
            <p><strong>コアワクチン（すべての犬に推奨）</strong></p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>犬ジステンパー：致死率が高く、神経症状を引き起こす感染症</li>
              <li>犬パルボウイルス：激しい嘔吐・下痢を起こし、子犬では致死率が非常に高い</li>
              <li>犬アデノウイルス（肝炎）：肝臓に重篤な障害を引き起こす</li>
            </ul>
            <p><strong>ノンコアワクチン（生活環境に応じて推奨）</strong></p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>犬パラインフルエンザ：咳などの呼吸器症状を引き起こす</li>
              <li>レプトスピラ：人にも感染するリスクのある細菌感染症</li>
              <li>犬コロナウイルス：下痢を引き起こす</li>
            </ul>
            <p>これらを組み合わせたものが「5種混合ワクチン」「8種混合ワクチン」などです。市原市は自然が豊かな環境のため、散歩の機会が多い犬には8種以上をおすすめしています。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>子犬のワクチン接種スケジュール</h2>
            <p>子犬は母犬からもらった免疫（移行抗体）が生後2〜4ヶ月頃に徐々に弱くなります。このタイミングでワクチン接種を開始することが重要です。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>1回目：</strong>生後6〜8週齢</li>
              <li><strong>2回目：</strong>1回目から3〜4週間後</li>
              <li><strong>3回目：</strong>2回目から3〜4週間後（生後16週齢以降）</li>
              <li><strong>以降：</strong>年1回の追加接種</li>
            </ul>
            <p>3回の接種が完了するまでは、他の犬との接触やドッグランの利用は控えましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>猫のワクチン接種スケジュール</h2>
            <p>猫のコアワクチンには以下が含まれます。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>猫汎白血球減少症（猫パルボ）：致死率が非常に高い</li>
              <li>猫カリシウイルス：口内炎や上気道感染症を引き起こす</li>
              <li>猫ヘルペスウイルス（猫風邪）：くしゃみ・鼻水・目やにの原因</li>
            </ul>
            <p>これらを合わせたものが「3種混合ワクチン」です。子猫の接種スケジュールは以下の通りです。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>1回目：</strong>生後8週齢</li>
              <li><strong>2回目：</strong>1回目から3〜4週間後</li>
              <li><strong>以降：</strong>年1回の追加接種</li>
            </ul>
            <p>完全室内飼いの猫でも、飼い主が外から持ち込んだウイルスに感染するリスクがあるため、ワクチン接種は重要です。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>狂犬病予防注射について</h2>
            <p>狂犬病予防注射は、日本の法律（狂犬病予防法）により、生後91日以上の犬に年1回の接種が義務付けられています。毎年4〜6月が集合注射の時期ですが、動物病院では年間を通じて接種可能です。</p>
            <p>市原市にお住まいの方は、接種後に市役所への届出が必要です。当院で接種された場合は、届出に必要な証明書を発行いたします。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>ワクチン接種の費用目安</h2>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>犬5種混合ワクチン：6,000円〜</li>
              <li>犬8種混合ワクチン：8,000円〜</li>
              <li>猫3種混合ワクチン：4,500円〜</li>
              <li>狂犬病予防注射：3,000円〜</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>市原市でワクチン接種をお考えの方へ</h2>
            <p>バウ・ミュウ動物病院では、ワクチン接種のご相談を随時受け付けています。予約不要・当日受付OKですので、お気軽にご来院ください。接種前には体調チェックを行い、安全に接種できる状態かを確認いたします。</p>
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
    <li><a href="/blog/dog-vaccine-types" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬の混合ワクチンは何種を選ぶ？種類と違いを解説</a></li>
    <li><a href="/blog/rabies-vaccination-ichihara" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>【市原市】狂犬病予防注射の届出と接種の流れ</a></li>
    <li><a href="/blog/filaria-prevention" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>【市原市】フィラリア予防はいつから？時期と費用について</a></li>
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
