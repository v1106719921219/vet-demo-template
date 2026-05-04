import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '猫が脱走して怪我をした時の対処法｜予防策も解説｜バウ・ミュウ動物病院',
  description: '猫が脱走して怪我をして帰ってきた時の対処法を解説。傷の応急処置、受診の判断基準、脱走防止対策まで獣医師が詳しくご紹介します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/cat-escape-injury' },
  openGraph: {
    title: '猫が脱走して怪我をした時の対処法｜予防策も解説｜バウ・ミュウ動物病院',
    description: '猫が脱走して怪我をして帰ってきた時の対処法を解説。傷の応急処置、受診の判断基準、脱走防止対策まで獣医師が詳しくご紹介します。',
    url: 'https://bowmew-ah.com/blog/cat-escape-injury',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/cat-escape-injury.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '猫が脱走して怪我をした時の対処法｜予防策も解説｜バウ・ミュウ動物病院',
    description: '猫が脱走して怪我をして帰ってきた時の対処法を解説。傷の応急処置、受診の判断基準、脱走防止対策まで獣医師が詳しくご紹介します。',
    images: ['https://bowmew-ah.com/blog/cat-escape-injury.webp'],
  },
}

export default function CatEscapeInjury() {
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
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026.01.25</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>猫が脱走して怪我をした時の対処法｜予防策も解説</h1>
          <img src={`/blog/cat-escape-injury.webp`} alt="猫の脱走と怪我の対処" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>完全室内飼いの猫でも、ちょっとした隙に脱走してしまうことがあります。脱走した猫が怪我をして帰ってきたり、保護された際に怪我が見つかることも珍しくありません。外の世界には猫にとって多くの危険が潜んでいます。適切な応急処置と、今後の脱走防止策を知っておきましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>脱走した猫に多い怪我の種類</h2>
            <p>脱走した猫が負いやすい怪我には以下のようなものがあります。</p>
            <ul>
              <li><strong>咬傷（かみ傷）：</strong>他の猫や動物との喧嘩による傷。感染症リスクが高い</li>
              <li><strong>交通事故：</strong>骨折、内臓損傷、頭部外傷など重症になりやすい</li>
              <li><strong>高所からの落下：</strong>骨折や脱臼、顎の裂傷（高層症候群）</li>
              <li><strong>擦り傷・切り傷：</strong>フェンスや有刺鉄線での切傷</li>
              <li><strong>爪の損傷：</strong>木に登って降りられず、爪が折れる・剥がれる</li>
            </ul>
            <p>特に咬傷は外見上小さくても、皮下で膿瘍（のうよう）を形成することが多く、数日後に腫れや発熱として症状が出ることがあります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>帰宅時の応急処置と確認ポイント</h2>
            <p>脱走から戻った猫を見つけたら、まず以下を確認してください。</p>
            <ul>
              <li>全身をそっと触って、痛がる部位がないか確認する</li>
              <li>出血がないか、毛をかき分けて皮膚をチェックする</li>
              <li>足を引きずっていないか、歩き方を観察する</li>
              <li>呼吸が荒くないか、口を開けて呼吸していないか確認する</li>
              <li>目や耳に傷や異常がないか見る</li>
            </ul>
            <p><strong>出血がある場合：</strong>清潔なガーゼで傷口を軽く圧迫し、止血しながら動物病院に連絡してください。</p>
            <p><strong>骨折が疑われる場合：</strong>無理に動かさず、キャリーバッグやダンボールに静かに入れて搬送します。</p>
            <p>見た目に大きな外傷がなくても、内臓損傷の可能性があるため、脱走後は念のため動物病院で検査を受けることをお勧めします。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>脱走後に注意すべき感染症</h2>
            <p>外に出た猫は、以下の感染症に罹るリスクがあります。</p>
            <ul>
              <li><strong>猫エイズ（FIV）：</strong>咬傷から感染。一度感染すると完治しない</li>
              <li><strong>猫白血病（FeLV）：</strong>唾液や鼻水から感染。免疫力が著しく低下する</li>
              <li><strong>猫カリシウイルス・ヘルペスウイルス：</strong>くしゃみ、鼻水、口内炎を引き起こす</li>
              <li><strong>ノミ・ダニ・寄生虫：</strong>外部寄生虫や消化管内寄生虫の感染</li>
            </ul>
            <p>特にワクチン未接種の猫は重症化リスクが高くなります。脱走後2〜4週間は体調の変化に注意し、血液検査で感染の有無を確認することが大切です。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>動物病院での検査・治療</h2>
            <p>脱走後の受診では、以下のような検査・治療を行います。</p>
            <p><strong>身体検査：</strong>全身の触診で骨折や腫れ、痛みの部位を確認します。</p>
            <p><strong>レントゲン検査：</strong>骨折や肺の異常、内臓損傷がないかを確認します。</p>
            <p><strong>血液検査：</strong>内臓機能の評価や、感染症（FIV/FeLV）の検査を行います。</p>
            <p><strong>傷の処置：</strong>洗浄、消毒、必要に応じて縫合を行います。咬傷の場合は抗生物質を処方します。</p>
            <p>咬傷は見た目以上に深く、皮下に菌が入り込んでいることが多いため、必ず動物病院で適切な処置を受けてください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>脱走を防ぐための対策</h2>
            <p>猫の脱走を防ぐために、以下の対策を講じましょう。</p>
            <ul>
              <li><strong>玄関：</strong>二重扉やペットゲートを設置する</li>
              <li><strong>窓：</strong>網戸ストッパーや脱走防止柵を取り付ける</li>
              <li><strong>ベランダ：</strong>ネットやフェンスで囲う</li>
              <li><strong>来客時：</strong>猫を別室に隔離してからドアを開ける</li>
              <li><strong>マイクロチップ：</strong>万が一の脱走に備えて装着しておく</li>
              <li><strong>避妊・去勢手術：</strong>発情による脱走衝動を軽減する</li>
            </ul>
            <p>特に避妊・去勢手術をしていない猫は、発情期に脱走リスクが大幅に高まります。手術は脱走防止だけでなく、病気予防の観点からもお勧めです。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>まとめ</h2>
            <p>猫の脱走は怪我や感染症のリスクを伴う危険な出来事です。脱走から戻った猫は、外見上問題がなくても動物病院での検査をお勧めします。バウ・ミュウ動物病院では、外傷の処置から感染症検査まで対応しておりますので、お気軽にご相談ください。</p>
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
              <li><a href="/blog/emergency-vet-ichihara" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>【市原市】ペットの夜間救急｜緊急時の対応と連絡先</a></li>
              <li><a href="/blog/cat-stress-signs" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫のストレスサイン｜見逃しやすい7つの行動変化</a></li>
              <li><a href="/blog/microchip-registration" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>ペットのマイクロチップ義務化｜登録方法と費用を解説</a></li>
            </ul>
          </div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
    </main>
  )
}
