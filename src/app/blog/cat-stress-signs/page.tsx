import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '猫のストレスサイン｜見逃しやすい7つの行動変化｜バウ・ミュウ動物病院',
  description: '千葉県市原市のバウ・ミュウ動物病院が猫のストレスサインについて解説。過剰グルーミング・食欲変化・隠れるなど、見逃しやすい7つの行動変化と対処法をご紹介。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/cat-stress-signs' },
  openGraph: {
    title: '猫のストレスサイン｜見逃しやすい7つの行動変化｜バウ・ミュウ動物病院',
    description: '千葉県市原市のバウ・ミュウ動物病院が猫のストレスサインについて解説。過剰グルーミング・食欲変化・隠れるなど、見逃しやすい7つの行動変化と対処法をご紹介。',
    url: 'https://bowmew-ah.com/blog/cat-stress-signs',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/cat-stress-signs.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '猫のストレスサイン｜見逃しやすい7つの行動変化｜バウ・ミュウ動物病院',
    description: '千葉県市原市のバウ・ミュウ動物病院が猫のストレスサインについて解説。過剰グルーミング・食欲変化・隠れるなど、見逃しやすい7つの行動変化と対処法をご紹介。',
    images: ['https://bowmew-ah.com/blog/cat-stress-signs.webp'],
  },
}

export default function CatStressSignsPage() {
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
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2025-12-15</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>猫のストレスサイン｜見逃しやすい7つの行動変化</h1>
          <img src={`/blog/cat-stress-signs.webp`} alt="猫のストレスサイン" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>猫は自分の不調を隠す動物です。野生の本能として、弱っている姿を見せることは外敵に狙われるリスクにつながるため、体調が悪くても平気な顔をしていることが多いのです。そのため、飼い主さまが猫のストレスや体調の変化に気づくのは意外と難しいことです。</p>
            <p>しかし、注意深く観察すると、ストレスを感じている猫には特有の行動の変化が現れます。この記事では、市原市で猫を飼っている方に向けて、見逃しやすい7つのストレスサインと、その原因・対処法について詳しく解説します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>1. 過剰なグルーミング（毛づくろい）</h2>
            <p>猫にとってグルーミングは正常な行動ですが、ストレスを感じると必要以上に体を舐め続けることがあります。これは「心因性脱毛」とも呼ばれ、特にお腹や内股、前足などを執拗に舐めるため、その部分の毛がはげたり、皮膚が赤くなったりします。</p>
            <p>一見すると皮膚病のように見えますが、原因がストレスである場合は皮膚の治療だけでは改善しません。舐めている部位に脱毛が見られたら、動物病院で皮膚疾患とストレスの両面から原因を探ることが大切です。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>2. 食欲の変化</h2>
            <p>ストレスにより食欲が低下する猫もいれば、逆にストレスから過食になる猫もいます。いつもと同じフードなのに急に食べなくなった場合や、異常にがっつくようになった場合は要注意です。</p>
            <p>特に猫は24時間以上食事を摂らないと、肝リピドーシス（脂肪肝）という命に関わる病気を発症するリスクがあります。食欲の低下が続く場合は、ストレスの有無に関わらず、早めに動物病院を受診してください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>3. 隠れる行動が増える</h2>
            <p>猫はもともと狭い場所や高い場所を好みますが、ストレスを感じると以前より明らかに長時間隠れるようになります。ベッドの下、クローゼットの中、家具の裏などに入り込んで出てこなくなることがあります。</p>
            <p>来客が多い、引っ越し直後、新しいペットが加わったなど、環境の変化が原因であることが多いです。猫が安心できる隠れ場所を確保しつつ、無理に引っ張り出さないことが大切です。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>4. トイレ以外での排泄</h2>
            <p>これまでトイレをきちんと使えていた猫が、突然トイレ以外の場所で排泄するようになった場合、ストレスが原因であることがあります。布団の上、ソファの上、飼い主さまの衣類の上など、飼い主さまのにおいがする場所を選ぶことが多いのが特徴です。</p>
            <p>ただし、膀胱炎や尿路結石などの泌尿器疾患が原因の場合もあるため、まずは動物病院で身体的な問題がないかを確認することが重要です。トイレの清潔さ、トイレの数（猫の頭数+1が理想）、トイレの場所なども見直してみましょう。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>5. 攻撃性の増加</h2>
            <p>普段はおとなしい猫が、急に噛んだり引っかいたりするようになった場合、ストレスや痛みが原因の可能性があります。触られることを嫌がる、近づくと威嚇するなどの行動も含まれます。</p>
            <p>攻撃性の増加は、体のどこかに痛みがあるサインの場合もあります。関節炎や口内炎、皮膚の炎症などが隠れていることがあるため、行動の変化に気づいたら動物病院で検査を受けることをおすすめします。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>6. 過度な鳴き声</h2>
            <p>猫がいつもより頻繁に、または大きな声で鳴くようになった場合、何らかの不安やストレスを感じているサインかもしれません。特に夜間に長く鳴き続ける場合は、分離不安や認知機能の低下（高齢猫の場合）が原因のことがあります。</p>
            <p>甲状腺機能亢進症（高齢猫に多い内分泌疾患）でも過度な鳴き声が見られるため、特にシニア猫の場合は血液検査を受けることをおすすめします。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>7. 嘔吐の増加</h2>
            <p>猫は毛玉を吐くことがありますが、ストレスにより嘔吐の頻度が増えることがあります。ストレス性の胃炎や、過剰グルーミングによる毛玉の増加が原因です。</p>
            <p>週に2回以上嘔吐する場合は異常のサインです。嘔吐の頻度、嘔吐物の内容（毛玉なのか、食べ物なのか、胆汁なのか）を記録して動物病院に相談しましょう。消化器疾患や異物誤飲など、他の原因が隠れている可能性もあります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>猫のストレスの主な原因</h2>
            <p>猫はとても繊細な動物で、些細な環境の変化にもストレスを感じます。主な原因は以下の通りです。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>環境の変化：</strong>引っ越し、模様替え、リフォーム、新しい家具の導入など</li>
              <li><strong>同居動物の変化：</strong>新しいペットが来た、同居猫との関係悪化</li>
              <li><strong>家族構成の変化：</strong>赤ちゃんが生まれた、家族が増えた・減った</li>
              <li><strong>騒音：</strong>工事、花火、雷、大きな音楽</li>
              <li><strong>来客：</strong>知らない人の出入りが多い</li>
              <li><strong>トイレの問題：</strong>汚い、場所が悪い、数が足りない</li>
              <li><strong>退屈：</strong>遊ぶ機会が少ない、刺激が足りない</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>ストレスを軽減するための対処法</h2>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>猫だけの安全な隠れ場所（高い場所やキャットタワー）を用意する</li>
              <li>トイレは猫の頭数+1個を清潔に保つ</li>
              <li>毎日の遊び時間を確保して適度な刺激を与える</li>
              <li>環境の変化はできるだけ段階的に行う</li>
              <li>フェリウェイ（猫のフェイシャルフェロモン製品）の使用を検討する</li>
              <li>多頭飼いの場合、それぞれの猫にフード皿・水飲み・トイレを用意する</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>市原市で猫のストレスが気になる方へ</h2>
            <p>バウ・ミュウ動物病院では、猫の行動の変化についてのご相談も承っています。ストレスサインの多くは身体的な病気と重なるため、まずは動物病院で健康状態を確認することが大切です。</p>
            <p>市原市の動物病院として、猫の気持ちに寄り添った診療を心がけています。「最近うちの猫の様子がおかしい」と感じたら、お気軽にご来院ください。早めの対応が猫の健康と幸せを守ることにつながります。</p>
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
    <li><a href="/blog/cat-vomiting-causes" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫が吐く原因と対処法｜心配な嘔吐の見分け方</a></li>
    <li><a href="/blog/cat-cystitis-symptoms" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫の膀胱炎の症状と予防｜トイレの変化に要注意</a></li>
    <li><a href="/blog/cat-escape-injury" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫が脱走して怪我をした時の対処法｜予防策も解説</a></li>
  </ul>
</div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
      <footer className="footer"><div className="container footerInner"><div><strong>バウ・ミュウ動物病院</strong><p>〒290-0062 千葉県市原市八幡520<br />TEL 0436-41-1008</p></div><small>&copy; Bow-Mew Animal Hospital</small></div></footer>
    </main>
  )
}
