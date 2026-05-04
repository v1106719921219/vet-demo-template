import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ペットの災害対策｜市原市で備えておくべきこと｜バウ・ミュウ動物病院',
  description: '市原市でペットと暮らす飼い主のための災害対策ガイド。避難時の持ち物リスト、同行避難のルール、日頃からの備えを獣医師が解説します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/pet-disaster-preparedness' },
  openGraph: {
    title: 'ペットの災害対策｜市原市で備えておくべきこと｜バウ・ミュウ動物病院',
    description: '市原市でペットと暮らす飼い主のための災害対策ガイド。避難時の持ち物リスト、同行避難のルール、日頃からの備えを獣医師が解説します。',
    url: 'https://bowmew-ah.com/blog/pet-disaster-preparedness',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/pet-disaster-preparedness.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ペットの災害対策｜市原市で備えておくべきこと｜バウ・ミュウ動物病院',
    description: '市原市でペットと暮らす飼い主のための災害対策ガイド。避難時の持ち物リスト、同行避難のルール、日頃からの備えを獣医師が解説します。',
    images: ['https://bowmew-ah.com/blog/pet-disaster-preparedness.webp'],
  },
}

export default function PetDisasterPreparedness() {
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
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026.01.15</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>ペットの災害対策｜市原市で備えておくべきこと</h1>
          <img src={`/blog/pet-disaster-preparedness.webp`} alt="ペットの災害備え" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>地震や台風、水害など、日本では自然災害がいつ起きてもおかしくありません。2019年の台風では市原市も大きな被害を受けました。災害時にペットと一緒に安全に避難するためには、日頃からの備えが欠かせません。いざという時に慌てないよう、ペットの防災対策を確認しておきましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>同行避難と同伴避難の違い</h2>
            <p>環境省はペットとの「同行避難」を推奨していますが、これは「一緒に避難所で過ごせる」という意味ではありません。</p>
            <p><strong>同行避難：</strong>ペットと一緒に避難所まで移動すること。ただし避難所内でペットと同じスペースで過ごせるとは限りません。多くの場合、ペットは別の場所（屋外テントや専用スペース）で管理されます。</p>
            <p><strong>同伴避難：</strong>避難所内でペットと同じ空間で生活できること。対応している避難所はまだ少ないのが現状です。</p>
            <p>市原市の各避難所のペット受け入れ状況は事前に確認しておきましょう。市のホームページや防災ハンドブックに情報が掲載されています。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>ペット用防災グッズリスト</h2>
            <p>最低5日分の備えを目安に、以下を準備しておきましょう。</p>
            <ul>
              <li><strong>フード・水：</strong>5〜7日分のフードと飲み水（普段食べ慣れた物）</li>
              <li><strong>薬：</strong>持病がある場合、常備薬を最低1週間分</li>
              <li><strong>キャリーバッグ・ケージ：</strong>普段から慣れさせておく</li>
              <li><strong>リード・ハーネス：</strong>予備も含め2本以上</li>
              <li><strong>トイレ用品：</strong>ペットシーツ、猫砂、ビニール袋</li>
              <li><strong>食器：</strong>折りたたみ式の水入れ・フード皿</li>
              <li><strong>タオル・毛布：</strong>保温や目隠し用に</li>
              <li><strong>写真：</strong>迷子になった時のため、飼い主と一緒に写った写真</li>
              <li><strong>書類のコピー：</strong>ワクチン証明書、健康手帳、保険証書</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>日頃からやっておくべき備え</h2>
            <p>災害はいつ起こるかわかりません。普段から以下を習慣にしておくと、いざという時にスムーズです。</p>
            <p><strong>クレートトレーニング：</strong>避難所ではケージやクレートでの生活が基本です。普段からクレートを「安心できる場所」として認識させておきましょう。</p>
            <p><strong>基本的なしつけ：</strong>「待て」「おいで」など基本コマンドができると、パニック時にも安全を確保しやすくなります。猫の場合はキャリーに自分から入る練習をしましょう。</p>
            <p><strong>社会化：</strong>他の動物や人に慣れていないと、避難所での生活がストレスになります。日頃から様々な環境に触れさせておくことが大切です。</p>
            <p><strong>マイクロチップの装着：</strong>2022年6月以降、ブリーダーやペットショップで販売される犬猫にはマイクロチップの装着が義務化されています。既に飼っているペットにも装着をお勧めします。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>災害時のペットの健康管理</h2>
            <p>災害後はペットも大きなストレスを受けます。以下の点に注意してください。</p>
            <ul>
              <li>食欲低下や下痢が続く場合は獣医師に相談</li>
              <li>過度な鳴き声や攻撃性の増加はストレスサイン</li>
              <li>避難先の衛生環境に注意（ノミ・ダニ予防を継続）</li>
              <li>持病の薬を切らさないよう早めに補充する</li>
              <li>急な環境変化で隠れて出てこない猫も、無理に引き出さず見守る</li>
            </ul>
            <p>特にフードの急な変更は胃腸トラブルの原因になります。防災用フードも普段と同じ銘柄を用意し、定期的に賞味期限をチェックして入れ替えましょう（ローリングストック法）。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>市原市の防災情報とペット関連の相談先</h2>
            <p>市原市では防災に関する以下の情報を提供しています。</p>
            <ul>
              <li>市原市防災ポータルサイト：避難所一覧やハザードマップを確認できます</li>
              <li>市原市防災メール：災害時の避難情報を配信</li>
              <li>千葉県獣医師会：災害時のペット救護活動の窓口</li>
            </ul>
            <p>また、かかりつけの動物病院の連絡先や診療状況も、災害時には重要な情報です。バウ・ミュウ動物病院では、災害後もできる限り早期に診療を再開し、地域のペットの健康を守ります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>まとめ</h2>
            <p>ペットの災害対策は、「備えあれば憂いなし」です。防災グッズの準備、クレートトレーニング、マイクロチップの装着など、今日からできることを一つずつ始めましょう。防災対策の一環として、ワクチン接種やマイクロチップ装着をご希望の方は、バウ・ミュウ動物病院までお気軽にお越しください。</p>
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
    <li><a href="/blog/microchip-registration" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>ペットのマイクロチップ義務化｜登録方法と費用を解説</a></li>
    <li><a href="/blog/emergency-vet-ichihara" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>【市原市】ペットの夜間救急｜緊急時の対応と連絡先</a></li>
    <li><a href="/blog/pet-insurance-guide" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>ペット保険は必要？選び方のポイントを動物病院が解説</a></li>
  </ul>
</div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
    </main>
  )
}
