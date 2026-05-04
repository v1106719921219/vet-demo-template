import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '犬の分離不安症｜症状・原因と改善トレーニング｜バウ・ミュウ動物病院',
  description: '犬の分離不安症の症状、原因、改善のためのトレーニング方法を獣医師が解説。留守番中の問題行動でお悩みの飼い主さんに役立つ情報をまとめました。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/dog-separation-anxiety' },
  openGraph: {
    title: '犬の分離不安症｜症状・原因と改善トレーニング｜バウ・ミュウ動物病院',
    description: '犬の分離不安症の症状、原因、改善のためのトレーニング方法を獣医師が解説。留守番中の問題行動でお悩みの飼い主さんに役立つ情報をまとめました。',
    url: 'https://bowmew-ah.com/blog/dog-separation-anxiety',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/dog-separation-anxiety.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '犬の分離不安症｜症状・原因と改善トレーニング｜バウ・ミュウ動物病院',
    description: '犬の分離不安症の症状、原因、改善のためのトレーニング方法を獣医師が解説。留守番中の問題行動でお悩みの飼い主さんに役立つ情報をまとめました。',
    images: ['https://bowmew-ah.com/blog/dog-separation-anxiety.webp'],
  },
}

export default function DogSeparationAnxiety() {
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
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2025.12.28</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>犬の分離不安症｜症状・原因と改善トレーニング</h1>
          <img src={`/blog/dog-separation-anxiety.webp`} alt="犬の分離不安症" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>飼い主が外出するたびに吠え続ける、家具を破壊する、粗相をする――これらは「しつけの問題」ではなく、犬の分離不安症のサインかもしれません。分離不安症は犬にとって深刻なストレスであり、適切な理解と対応が必要です。一人で悩まず、改善のための方法を知りましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>分離不安症の主な症状</h2>
            <p>分離不安症の犬は、飼い主が不在の時（または不在になると感じた時）に以下のような行動を見せます。</p>
            <ul>
              <li>過度な吠え・遠吠えが続く（近隣から苦情が出るレベル）</li>
              <li>ドアや窓、ケージを破壊しようとする</li>
              <li>普段は問題ないのに室内で排泄してしまう</li>
              <li>過度なよだれ、パンティング（荒い呼吸）</li>
              <li>自分の体を舐め続ける、噛む（自傷行為）</li>
              <li>食欲がなくなる（留守番中はフードに手をつけない）</li>
              <li>飼い主の外出準備を察知するとパニックになる</li>
            </ul>
            <p>重要なのは、これらの行動が「飼い主の不在時」に限って起きることです。飼い主がいる時にも問題行動がある場合は、別の原因（退屈、運動不足、しつけ不足など）が考えられます。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>分離不安症の原因</h2>
            <p>分離不安症を引き起こす要因はさまざまです。</p>
            <ul>
              <li><strong>環境の変化：</strong>引っ越し、家族構成の変化（赤ちゃん誕生、家族の他界など）</li>
              <li><strong>飼い主の生活リズムの変化：</strong>テレワークから出社に戻った場合など</li>
              <li><strong>トラウマ体験：</strong>留守番中の雷、地震など怖い経験</li>
              <li><strong>幼少期の経験：</strong>早期に母犬や兄弟から離された場合</li>
              <li><strong>過度な依存関係：</strong>常に一緒にいすぎて、離れることに慣れていない</li>
              <li><strong>高齢化：</strong>認知機能の低下に伴い不安感が増す</li>
            </ul>
            <p>特にコロナ禍でテレワークが増え、その後出社に戻った際に分離不安症を発症する犬が急増しました。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>改善のためのトレーニング方法</h2>
            <p>分離不安症の改善には、段階的なトレーニングが効果的です。</p>
            <p><strong>ステップ1：短時間の分離から始める</strong></p>
            <p>別の部屋に数秒だけ移動し、犬が落ち着いていたら戻って褒めます。これを繰り返し、徐々に時間を延ばしていきます。</p>
            <p><strong>ステップ2：外出の合図を分散させる</strong></p>
            <p>鍵を持つ、コートを着るなどの外出サインに犬が反応しなくなるよう、外出しないのにこれらの動作を日常的に行います。</p>
            <p><strong>ステップ3：出発と帰宅を淡々と行う</strong></p>
            <p>出かける時に「行ってくるね、いい子にしてね」と声をかけたり、帰宅時に大げさに喜んだりすると、出入りが特別なイベントになってしまいます。淡々とした態度を心がけましょう。</p>
            <p><strong>ステップ4：一人の時間を楽しくする</strong></p>
            <p>知育玩具やコングにフードを詰めて与えることで、留守番中の暇つぶしと「飼い主がいない時にも良いことがある」という学習につながります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>やってはいけないNG対応</h2>
            <p>分離不安症の犬に対して、以下の対応は逆効果になります。</p>
            <ul>
              <li><strong>叱る・罰を与える：</strong>問題行動は不安の表れであり、叱ると余計に不安が強くなります</li>
              <li><strong>別の犬を飼う：</strong>飼い主への依存が原因なので、犬同士の関係では解決しません</li>
              <li><strong>無視して放置する：</strong>パニック状態を放置すると自傷や脱走のリスクがあります</li>
              <li><strong>急に長時間の留守番をさせる：</strong>段階的に慣らすことが大切です</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>動物病院でできる治療</h2>
            <p>重度の分離不安症の場合、行動トレーニングだけでは改善が難しいことがあります。動物病院では以下のサポートが可能です。</p>
            <p><strong>薬物療法：</strong>抗不安薬やSSRI（選択的セロトニン再取り込み阻害薬）を使用することで、不安レベルを下げ、トレーニングの効果を高めることができます。薬物療法は単独ではなく、行動療法と併用することで効果を発揮します。</p>
            <p><strong>サプリメント：</strong>α-カソゼピンやL-テアニンなど、不安を軽減するサプリメントもあります。</p>
            <p><strong>行動診療：</strong>個々の犬の状況に合わせた行動修正プランを獣医師と一緒に作成します。</p>
            <p>分離不安症は飼い主さんにとっても辛い問題です。バウ・ミュウ動物病院では、行動の相談も受け付けています。「もしかして分離不安？」と思ったら、一度ご相談ください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>まとめ</h2>
            <p>分離不安症は「わがまま」や「しつけ不足」ではなく、犬が感じる本当の苦痛です。適切なトレーニングと必要に応じた獣医療的サポートで改善が期待できます。大切なのは焦らず、犬のペースに合わせて進めること。困った時はバウ・ミュウ動物病院にお気軽にご相談ください。</p>
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
    <li><a href="/blog/dog-car-sickness" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬の車酔い対策｜動物病院への移動を快適にする方法</a></li>
    <li><a href="/blog/puppy-first-visit" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>子犬を迎えたら｜最初の動物病院受診ガイド</a></li>
    <li><a href="/blog/cat-stress-signs" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫のストレスサイン｜見逃しやすい7つの行動変化</a></li>
  </ul>
</div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
    </main>
  )
}
