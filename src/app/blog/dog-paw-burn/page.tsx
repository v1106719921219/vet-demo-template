import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '夏の散歩で犬の肉球が火傷？アスファルトの危険と対策｜バウ・ミュウ動物病院',
  description: '夏のアスファルトで犬の肉球が火傷するリスクと予防法を解説。安全な散歩の時間帯、肉球ケアの方法、火傷した場合の対処法を獣医師が紹介します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/dog-paw-burn' },
  openGraph: {
    title: '夏の散歩で犬の肉球が火傷？アスファルトの危険と対策｜バウ・ミュウ動物病院',
    description: '夏のアスファルトで犬の肉球が火傷するリスクと予防法を解説。安全な散歩の時間帯、肉球ケアの方法、火傷した場合の対処法を獣医師が紹介します。',
    url: 'https://bowmew-ah.com/blog/dog-paw-burn',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/dog-paw-burn.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '夏の散歩で犬の肉球が火傷？アスファルトの危険と対策｜バウ・ミュウ動物病院',
    description: '夏のアスファルトで犬の肉球が火傷するリスクと予防法を解説。安全な散歩の時間帯、肉球ケアの方法、火傷した場合の対処法を獣医師が紹介します。',
    images: ['https://bowmew-ah.com/blog/dog-paw-burn.webp'],
  },
}

export default function DogPawBurn() {
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
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026.01.20</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>夏の散歩で犬の肉球が火傷？アスファルトの危険と対策</h1>
          <img src={`/blog/dog-paw-burn.webp`} alt="犬の肉球のケア" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>夏場の日中、アスファルトの路面温度は60度を超えることがあります。靴を履かずに歩く犬にとって、これは深刻な火傷の原因になります。「まさか散歩で火傷するなんて」と思われるかもしれませんが、夏の動物病院では肉球の火傷で来院する犬が少なくありません。正しい知識で愛犬の足を守りましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>アスファルトの温度と肉球火傷のリスク</h2>
            <p>気温とアスファルトの表面温度には大きな差があります。</p>
            <ul>
              <li>気温25度 → アスファルト約52度</li>
              <li>気温30度 → アスファルト約57度</li>
              <li>気温35度 → アスファルト約65度以上</li>
            </ul>
            <p>人間の皮膚は48度以上で火傷しますが、犬の肉球も例外ではありません。肉球は厚い角質で覆われているため多少の熱には耐えられますが、高温のアスファルトを長時間歩けば確実にダメージを受けます。</p>
            <p><strong>簡単なチェック方法：</strong>手の甲をアスファルトに5秒間当てて、熱くて耐えられなければ犬の散歩には危険な温度です。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>肉球火傷の症状と見分け方</h2>
            <p>犬は痛みを我慢する動物です。以下のサインを見逃さないようにしましょう。</p>
            <ul>
              <li>散歩中に足を上げる、歩きたがらない</li>
              <li>帰宅後にしきりに足を舐める</li>
              <li>肉球が赤く腫れている、水ぶくれができている</li>
              <li>肉球の表面がめくれている、色が変わっている</li>
              <li>足を地面につけるのを嫌がる（跛行）</li>
            </ul>
            <p>軽度の火傷は赤みと軽い腫れ程度ですが、重度になると水疱形成や皮膚の壊死が起こります。重度の場合は感染症のリスクもあるため、早めの受診が必要です。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>肉球が火傷した時の応急処置</h2>
            <p>散歩後に肉球の火傷に気づいたら、以下の応急処置を行ってください。</p>
            <ul>
              <li>流水で患部を10〜15分冷やす（氷を直接当てるのはNG）</li>
              <li>清潔なガーゼやタオルで優しく水気を取る</li>
              <li>犬が舐めないようにエリザベスカラーを装着する</li>
              <li>汚れた場所を歩かせない</li>
            </ul>
            <p>人間用の塗り薬や消毒液は犬に有害な成分が含まれている場合があるため、自己判断での使用は避けてください。水疱が破れていたり、広範囲に皮がめくれている場合は、できるだけ早く動物病院を受診しましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>安全な夏の散歩のための対策</h2>
            <p>肉球の火傷を防ぐために、以下の対策を実践しましょう。</p>
            <p><strong>散歩の時間帯を変える：</strong>早朝（6時前後）か夜間（日没後1時間以上経過）が安全です。夕方でも路面にはまだ熱が残っていることがあるので注意してください。</p>
            <p><strong>日陰や芝生を選ぶ：</strong>公園の芝生や土の道はアスファルトより大幅に涼しくなります。なるべく日陰のルートを選びましょう。</p>
            <p><strong>犬用靴・靴下を活用：</strong>肉球保護用の犬用シューズやブーツが市販されています。最初は嫌がる犬も多いので、室内で練習してから外で使いましょう。</p>
            <p><strong>肉球保護クリームを塗る：</strong>散歩前に肉球用の保湿・保護クリームを塗ることで、多少の熱や摩擦から守ることができます。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>肉球を健康に保つ日頃のケア</h2>
            <p>健康な肉球は弾力があり、適度な硬さを持っています。日頃から以下のケアを心がけましょう。</p>
            <ul>
              <li>散歩後に足を洗い、しっかり乾かす</li>
              <li>肉球の乾燥やひび割れがあれば保湿クリームを塗る</li>
              <li>肉球の間の毛が伸びすぎていたらカットする（滑り防止にもなる）</li>
              <li>爪が伸びすぎていないか定期的にチェックする</li>
              <li>冬場も路面の凍結防止剤（塩化カルシウム）で肌荒れするため注意</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>まとめ</h2>
            <p>夏のアスファルトによる肉球火傷は、飼い主の意識一つで防げるトラブルです。散歩前に手の甲で地面の温度を確認する習慣をつけ、愛犬の足を守りましょう。もし肉球に異常が見られた場合は、バウ・ミュウ動物病院にお気軽にご相談ください。適切な処置と今後のケアについてアドバイスいたします。</p>
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
    <li><a href="/blog/summer-heatstroke" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬の熱中症に注意！市原市の夏を安全に過ごすための対策</a></li>
    <li><a href="/blog/dog-skin-disease" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬の皮膚病の種類と治療法｜かゆみ・赤みの原因を解説</a></li>
    <li><a href="/blog/tick-prevention" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>市原市で気をつけたいノミ・マダニ対策｜予防時期と方法</a></li>
  </ul>
</div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
    </main>
  )
}
