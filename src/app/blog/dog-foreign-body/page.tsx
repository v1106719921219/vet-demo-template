import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '犬が異物を飲み込んだ！誤飲時の対処法と受診の目安｜バウ・ミュウ動物病院',
  description: '犬が異物を飲み込んでしまった時の正しい対処法を獣医師が解説。誤飲しやすい物、症状の見分け方、受診のタイミング、予防策まで詳しくご紹介します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/dog-foreign-body' },
  openGraph: {
    title: '犬が異物を飲み込んだ！誤飲時の対処法と受診の目安｜バウ・ミュウ動物病院',
    description: '犬が異物を飲み込んでしまった時の正しい対処法を獣医師が解説。誤飲しやすい物、症状の見分け方、受診のタイミング、予防策まで詳しくご紹介します。',
    url: 'https://bowmew-ah.com/blog/dog-foreign-body',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/dog-foreign-body.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '犬が異物を飲み込んだ！誤飲時の対処法と受診の目安｜バウ・ミュウ動物病院',
    description: '犬が異物を飲み込んでしまった時の正しい対処法を獣医師が解説。誤飲しやすい物、症状の見分け方、受診のタイミング、予防策まで詳しくご紹介します。',
    images: ['https://bowmew-ah.com/blog/dog-foreign-body.webp'],
  },
}

export default function DogForeignBody() {
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
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026.01.30</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>犬が異物を飲み込んだ！誤飲時の対処法と受診の目安</h1>
          <img src={`/blog/dog-foreign-body.webp`} alt="犬の誤飲への対処" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>犬は好奇心旺盛で、何でも口に入れてしまう習性があります。おもちゃの破片、靴下、焼き鳥の串、果物の種など、犬の誤飲事故は動物病院で最も多い救急対応の一つです。飲み込んだ物によっては命に関わることもあるため、正しい知識と迅速な対応が重要です。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>犬が誤飲しやすい物ランキング</h2>
            <p>動物病院で実際に多い誤飲物を紹介します。</p>
            <ul>
              <li><strong>布類：</strong>靴下、タオル、マスク、ぬいぐるみの中綿</li>
              <li><strong>おもちゃの破片：</strong>ボールの欠片、ロープのほつれ</li>
              <li><strong>食品関連：</strong>焼き鳥の串、トウモロコシの芯、桃やアボカドの種</li>
              <li><strong>日用品：</strong>ヘアゴム、イヤホン、電池、画鋲</li>
              <li><strong>人間の薬：</strong>落とした錠剤、塗り薬のチューブ</li>
            </ul>
            <p>特に子犬やレトリーバー系の犬種は誤飲リスクが高いため、注意が必要です。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>誤飲直後にやるべきこと・やってはいけないこと</h2>
            <p><strong>やるべきこと：</strong></p>
            <ul>
              <li>何をいつ飲み込んだか正確に把握する（同じ物があれば病院に持参）</li>
              <li>すぐに動物病院に電話して指示を仰ぐ</li>
              <li>犬の様子（元気、嘔吐、よだれなど）を観察する</li>
            </ul>
            <p><strong>やってはいけないこと：</strong></p>
            <ul>
              <li>自己判断で無理に吐かせない（特に尖った物や化学物質）</li>
              <li>塩水を飲ませて吐かせる方法は危険なので避ける</li>
              <li>「様子を見よう」と長時間放置しない</li>
            </ul>
            <p>尖った物（針、串、骨など）を吐かせると、食道や胃を傷つける恐れがあります。必ず獣医師の指示に従ってください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>すぐに受診すべき症状</h2>
            <p>誤飲後に以下の症状が見られたら、緊急性が高いサインです。</p>
            <ul>
              <li>繰り返す嘔吐（水を飲んでも吐く）</li>
              <li>腹部を触ると痛がる</li>
              <li>元気がなくぐったりしている</li>
              <li>血便や黒い便が出る</li>
              <li>食欲が全くない状態が続く</li>
              <li>よだれが大量に出る</li>
            </ul>
            <p>これらは腸閉塞や消化管穿孔の可能性を示唆しています。腸閉塞は放置すると腸が壊死し、命に関わります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>動物病院での検査と治療法</h2>
            <p>動物病院では、まずレントゲン検査やエコー検査で異物の位置と大きさを確認します。</p>
            <p><strong>催吐処置：</strong>飲み込んでから1〜2時間以内で、安全に吐かせられる物であれば、薬剤で嘔吐を誘発します。</p>
            <p><strong>内視鏡：</strong>胃の中にある異物は、内視鏡で摘出できる場合があります。全身麻酔が必要ですが、開腹手術より体への負担は少なくなります。</p>
            <p><strong>開腹手術：</strong>腸に移動してしまった異物や、大きすぎて内視鏡で取れない場合は外科手術が必要です。</p>
            <p>治療費は処置内容によって大きく異なりますが、催吐処置で数千円〜、手術になると数十万円かかることもあります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>誤飲を防ぐための環境づくり</h2>
            <p>誤飲事故の多くは、環境を整えることで予防できます。</p>
            <ul>
              <li>犬の届く範囲に小物を置かない（特にテーブルの上、ゴミ箱）</li>
              <li>おもちゃは犬のサイズに合った、壊れにくい物を選ぶ</li>
              <li>遊んだ後はおもちゃを片付ける習慣をつける</li>
              <li>ゴミ箱は蓋付きにするか、犬が開けられない場所に置く</li>
              <li>散歩中の拾い食いは「ちょうだい」のトレーニングで対策する</li>
              <li>留守番時はクレートやサークルを活用する</li>
            </ul>
            <p>日頃から「出して」「ちょうだい」のコマンドを練習しておくと、万が一の時に口から物を取り出せる可能性が高まります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>まとめ</h2>
            <p>犬の誤飲は早期対応が何よりも重要です。「飲み込んだかもしれない」と思ったら、迷わず動物病院にご連絡ください。バウ・ミュウ動物病院では、レントゲンやエコー検査による迅速な異物確認と、適切な処置を行っています。予約不要ですので、緊急時もすぐにご来院いただけます。</p>
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
          <div style={{ marginTop: '32px' }}>
  <h3 style={{ fontSize: '18px', color: '#ff8a3d', marginBottom: '16px' }}>関連コラム</h3>
  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '12px' }}>
    <li><a href="/blog/emergency-vet-ichihara" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>【市原市】ペットの夜間救急｜緊急時の対応と連絡先</a></li>
    <li><a href="/blog/dog-fracture-first-aid" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬が骨折した時の応急処置と治療｜市原市の動物病院</a></li>
    <li><a href="/blog/puppy-first-visit" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>子犬を迎えたら｜最初の動物病院受診ガイド</a></li>
  </ul>
</div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
    </main>
  )
}
