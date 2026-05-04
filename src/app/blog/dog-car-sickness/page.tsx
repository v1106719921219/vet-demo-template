import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '犬の車酔い対策｜動物病院への移動を快適にする方法｜バウ・ミュウ動物病院',
  description: '犬の車酔いの原因と対策を獣医師が解説。症状の見分け方、予防のための慣らし方、酔い止め薬の使い方、安全な車移動のコツをご紹介します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/dog-car-sickness' },
  openGraph: {
    title: '犬の車酔い対策｜動物病院への移動を快適にする方法｜バウ・ミュウ動物病院',
    description: '犬の車酔いの原因と対策を獣医師が解説。症状の見分け方、予防のための慣らし方、酔い止め薬の使い方、安全な車移動のコツをご紹介します。',
    url: 'https://bowmew-ah.com/blog/dog-car-sickness',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/dog-car-sickness.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '犬の車酔い対策｜動物病院への移動を快適にする方法｜バウ・ミュウ動物病院',
    description: '犬の車酔いの原因と対策を獣医師が解説。症状の見分け方、予防のための慣らし方、酔い止め薬の使い方、安全な車移動のコツをご紹介します。',
    images: ['https://bowmew-ah.com/blog/dog-car-sickness.webp'],
  },
}

export default function DogCarSickness() {
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
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026.01.10</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>犬の車酔い対策｜動物病院への移動を快適にする方法</h1>
          <img src={`/blog/dog-car-sickness.webp`} alt="犬の車酔い対策" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>動物病院への通院やお出かけの際、愛犬が車の中でぐったりしたり吐いてしまったりする経験はありませんか？犬の車酔いは意外と多い悩みです。車酔いがひどいと病院への通院が困難になり、必要な治療のタイミングを逃してしまうこともあります。正しい対策で、車での移動を快適にしましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>犬が車酔いする原因</h2>
            <p>犬の車酔いには主に以下の原因があります。</p>
            <p><strong>三半規管への刺激：</strong>車の揺れや振動が内耳の三半規管を刺激し、平衡感覚が乱れることで吐き気が生じます。人間の乗り物酔いと同じメカニズムです。</p>
            <p><strong>精神的なストレス：</strong>「車に乗ると嫌な場所（病院）に連れて行かれる」という過去の記憶がストレスとなり、自律神経が乱れて吐き気を催すことがあります。</p>
            <p><strong>年齢的な要因：</strong>子犬は三半規管が未発達なため車酔いしやすい傾向があります。成長とともに改善することも多いですが、トラウマになると成犬でも続きます。</p>
            <p><strong>車内環境：</strong>暑さ、換気不足、車内の臭い（芳香剤やタバコ）なども悪化要因になります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>車酔いの症状を見分ける</h2>
            <p>犬の車酔いは嘔吐だけではありません。以下の初期症状を見逃さないようにしましょう。</p>
            <ul>
              <li>あくびを頻繁にする</li>
              <li>よだれが多くなる</li>
              <li>そわそわして落ち着かない、震える</li>
              <li>ハァハァと荒い呼吸をする</li>
              <li>ぐったりして動かなくなる</li>
              <li>リップスマッキング（唇を何度もペロペロする）</li>
            </ul>
            <p>これらの症状が見られたら、安全な場所で車を停めて休憩を取りましょう。無理に走り続けると嘔吐につながります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>乗車前にできる予防策</h2>
            <p>車酔いを予防するために、乗車前に以下を心がけてください。</p>
            <ul>
              <li><strong>食事のタイミング：</strong>乗車2〜3時間前までに食事を済ませる。空腹すぎても満腹すぎても酔いやすくなります</li>
              <li><strong>水分：</strong>少量の水を飲ませておく</li>
              <li><strong>排泄：</strong>出発前にトイレを済ませておく</li>
              <li><strong>軽い運動：</strong>出発前に軽く散歩して気分をリフレッシュさせる</li>
              <li><strong>車内温度：</strong>乗車前にエアコンで車内を快適な温度にしておく</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>車内での酔い防止テクニック</h2>
            <p>移動中にできる工夫も多くあります。</p>
            <p><strong>安定した場所に乗せる：</strong>後部座席の中央や、クレートを固定して安定させることで揺れを軽減できます。助手席は揺れが大きくエアバッグの危険もあるため避けましょう。</p>
            <p><strong>窓を少し開ける：</strong>新鮮な空気を入れることで気分が楽になります。ただし犬が顔を出せないよう適度な開き具合にしてください。</p>
            <p><strong>運転をスムーズに：</strong>急発進、急ブレーキ、急カーブは車酔いの大敵です。穏やかな運転を心がけましょう。</p>
            <p><strong>こまめな休憩：</strong>30分に1回程度休憩を取り、外の空気を吸わせましょう。</p>
            <p><strong>視界を遮る：</strong>窓の外の景色が高速で動くと酔いやすくなります。クレートにタオルをかけて薄暗くすると落ち着く犬もいます。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>車に慣れさせるトレーニング</h2>
            <p>車酔いの根本的な解決には、段階的に車に慣れさせることが効果的です。</p>
            <ul>
              <li><strong>ステップ1：</strong>エンジンをかけず、車内でおやつを与えて「車＝良い場所」と覚えさせる</li>
              <li><strong>ステップ2：</strong>エンジンをかけた状態で車内で過ごす（走らない）</li>
              <li><strong>ステップ3：</strong>近所を5分程度だけ走る</li>
              <li><strong>ステップ4：</strong>徐々に距離と時間を伸ばす</li>
              <li><strong>ステップ5：</strong>楽しい場所（公園やドッグランなど）に連れて行く</li>
            </ul>
            <p>各ステップで犬がリラックスできるようになってから次に進みましょう。焦らないことが大切です。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>酔い止め薬の使用について</h2>
            <p>上記の対策でも改善しない場合は、動物病院で酔い止め薬を処方してもらえます。犬用の制吐剤は安全性が高く、長距離移動や通院時に有効です。</p>
            <p>人間用の酔い止め薬は成分や用量が犬には適していないため、必ず獣医師に処方してもらってください。服用のタイミングや注意点についても指導いたします。</p>
            <p>バウ・ミュウ動物病院では、車酔いでお困りの飼い主さんへの相談も受け付けています。通院のストレスを軽減し、必要な時に安心して来院いただけるようサポートいたします。</p>
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
    <li><a href="/blog/puppy-first-visit" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>子犬を迎えたら｜最初の動物病院受診ガイド</a></li>
    <li><a href="/blog/dog-separation-anxiety" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬の分離不安症｜症状・原因と改善トレーニング</a></li>
    <li><a href="/blog/pet-disaster-preparedness" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>ペットの災害対策｜市原市で備えておくべきこと</a></li>
  </ul>
</div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
    </main>
  )
}
