import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '犬の混合ワクチンは何種を選ぶ？種類と違いを解説｜バウ・ミュウ動物病院',
  description: '犬の混合ワクチンの種類（5種・6種・8種・9種）の違いと選び方を獣医師が解説。接種スケジュールや費用についてもご紹介します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/dog-vaccine-types' },
  openGraph: {
    title: '犬の混合ワクチンは何種を選ぶ？種類と違いを解説｜バウ・ミュウ動物病院',
    description: '犬の混合ワクチンの種類（5種・6種・8種・9種）の違いと選び方を獣医師が解説。接種スケジュールや費用についてもご紹介します。',
    url: 'https://bowmew-ah.com/blog/dog-vaccine-types',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/dog-vaccine-types.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '犬の混合ワクチンは何種を選ぶ？種類と違いを解説｜バウ・ミュウ動物病院',
    description: '犬の混合ワクチンの種類（5種・6種・8種・9種）の違いと選び方を獣医師が解説。接種スケジュールや費用についてもご紹介します。',
    images: ['https://bowmew-ah.com/blog/dog-vaccine-types.webp'],
  },
}

export default function DogVaccineTypes() {
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
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026.02.25</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>犬の混合ワクチンは何種を選ぶ？種類と違いを解説</h1>
          <img src={`/blog/dog-vaccine-types.webp`} alt="犬の混合ワクチン接種" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>犬の混合ワクチンには5種、6種、8種、9種など複数の種類があり、「うちの子にはどれが必要？」と迷う飼い主さんは多いのではないでしょうか。ワクチンは愛犬を命に関わる感染症から守る重要な予防手段です。この記事では、混合ワクチンの種類の違いと、生活環境に合った選び方を解説します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>混合ワクチンで予防できる感染症</h2>
            <p>犬の混合ワクチンは「コアワクチン」と「ノンコアワクチン」の組み合わせで構成されています。</p>
            <p><strong>コアワクチン（すべての犬に推奨）：</strong></p>
            <ul>
              <li><strong>犬ジステンパー：</strong>高熱、下痢、神経症状を起こし、致死率が高い</li>
              <li><strong>犬パルボウイルス感染症：</strong>激しい嘔吐・血便を起こし、子犬では致死率が非常に高い</li>
              <li><strong>犬アデノウイルス1型（犬伝染性肝炎）：</strong>肝臓に重篤な障害を起こす</li>
              <li><strong>犬アデノウイルス2型（犬伝染性喉頭気管炎）：</strong>咳や気管支炎の原因</li>
            </ul>
            <p><strong>ノンコアワクチン（生活環境に応じて推奨）：</strong></p>
            <ul>
              <li><strong>犬パラインフルエンザ：</strong>咳を主症状とするケンネルコフの原因のひとつ</li>
              <li><strong>犬コロナウイルス感染症：</strong>下痢を起こす（特に子犬で注意）</li>
              <li><strong>レプトスピラ症：</strong>肝臓・腎臓に障害を起こす人獣共通感染症。複数の血清型あり</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>ワクチンの種類（何種）の違い</h2>
            <p>一般的に動物病院で選べるワクチンの種類は以下のとおりです。</p>
            <ul>
              <li><strong>5種混合ワクチン：</strong>ジステンパー、パルボ、アデノ1型・2型、パラインフルエンザ</li>
              <li><strong>6種混合ワクチン：</strong>5種＋コロナウイルス</li>
              <li><strong>8種混合ワクチン：</strong>6種＋レプトスピラ2種</li>
              <li><strong>9種混合ワクチン：</strong>6種＋レプトスピラ3種</li>
            </ul>
            <p>5種・6種がコアワクチン中心の基本的な組み合わせ、8種・9種はそこにレプトスピラが加わったものです。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>生活環境に合った選び方</h2>
            <p>ワクチンの種類選びは、愛犬の生活環境を基に判断します。</p>
            <p><strong>5〜6種がおすすめの犬：</strong></p>
            <ul>
              <li>都市部で散歩程度の外出のみ</li>
              <li>他の犬との接触が少ない</li>
              <li>山や川に行かない</li>
              <li>小型犬で副反応のリスクを最小限にしたい</li>
            </ul>
            <p><strong>8〜9種がおすすめの犬：</strong></p>
            <ul>
              <li>キャンプや山歩き、川遊びをする</li>
              <li>田畑の近くに住んでいる</li>
              <li>ドッグランやペットホテルを頻繁に利用する</li>
              <li>ネズミなどの野生動物と接触する可能性がある</li>
            </ul>
            <p>レプトスピラは野生動物（ネズミ）の尿を介して感染し、人にもうつる危険な病気です。アウトドア活動が多い犬には8種以上のワクチンをおすすめします。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>接種スケジュール</h2>
            <p>子犬のワクチン接種スケジュールは以下が一般的です。</p>
            <ul>
              <li><strong>1回目：</strong>生後6〜8週齢</li>
              <li><strong>2回目：</strong>生後10〜12週齢</li>
              <li><strong>3回目：</strong>生後14〜16週齢</li>
              <li><strong>追加接種：</strong>1年後、以降は1〜3年ごと</li>
            </ul>
            <p>成犬の追加接種については、世界小動物獣医師会（WSAVA）のガイドラインでは、コアワクチンは3年ごとでも十分な免疫が維持されるとされています。一方、ノンコアワクチン（レプトスピラなど）は毎年の接種が必要です。当院では個々の犬の生活環境やリスクに応じて、最適な接種間隔をご提案しています。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>ワクチン接種の注意点と副反応</h2>
            <p>ワクチン接種に際して知っておきたいことをまとめます。</p>
            <ul>
              <li>体調が良い日に接種する（下痢・発熱時は延期）</li>
              <li>接種後30分は病院の近くで様子を見る</li>
              <li>接種当日は激しい運動やシャンプーを避ける</li>
              <li>まれに顔の腫れ（ムーンフェイス）、嘔吐、アナフィラキシーが起こることがある</li>
              <li>過去に副反応があった場合は必ず獣医師に伝える</li>
            </ul>
            <p>ワクチンの副反応は接種後数時間〜24時間以内に出ることが多いため、接種当日は愛犬の様子を注意深く観察してください。異常があればすぐにご連絡ください。</p>
            <p>愛犬に最適なワクチンの種類や接種時期について、お気軽に当院へご相談ください。</p>
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
    <li><a href="/blog/rabies-vaccination-ichihara" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>【市原市】狂犬病予防注射の届出と接種の流れ</a></li>
    <li><a href="/blog/filaria-prevention" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>【市原市】フィラリア予防はいつから？時期と費用について</a></li>
  </ul>
</div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
    </main>
  )
}
