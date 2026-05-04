import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '猫の腎臓病を早期発見するために｜症状と予防のポイント｜バウ・ミュウ動物病院',
  description: '千葉県市原市のバウ・ミュウ動物病院が猫の腎臓病について解説。多飲多尿・食欲低下・体重減少は要注意。血液検査・尿検査で早期発見が可能です。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/cat-kidney-disease' },
  openGraph: {
    title: '猫の腎臓病を早期発見するために｜症状と予防のポイント｜バウ・ミュウ動物病院',
    description: '千葉県市原市のバウ・ミュウ動物病院が猫の腎臓病について解説。多飲多尿・食欲低下・体重減少は要注意。血液検査・尿検査で早期発見が可能です。',
    url: 'https://bowmew-ah.com/blog/cat-kidney-disease',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/cat-kidney-disease.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '猫の腎臓病を早期発見するために｜症状と予防のポイント｜バウ・ミュウ動物病院',
    description: '千葉県市原市のバウ・ミュウ動物病院が猫の腎臓病について解説。多飲多尿・食欲低下・体重減少は要注意。血液検査・尿検査で早期発見が可能です。',
    images: ['https://bowmew-ah.com/blog/cat-kidney-disease.webp'],
  },
}

export default function CatKidneyDiseasePage() {
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
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026-03-10</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>猫の腎臓病を早期発見するために｜症状と予防のポイント</h1>
          <img src={`/blog/cat-kidney-disease.webp`} alt="猫の腎臓病の早期発見" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>猫の死因として常に上位に挙がるのが腎臓病です。15歳以上の猫の約3割が慢性腎臓病を患っているというデータもあり、猫にとって最も注意すべき病気のひとつです。腎臓病は「沈黙の病気」とも呼ばれ、初期段階では目立った症状がないことが多く、飼い主さまが異変に気づいた時にはかなり進行しているケースが少なくありません。</p>
            <p>この記事では、市原市で猫を飼っている方に向けて、腎臓病の症状・検査方法・予防のポイントについて詳しく解説します。早期発見のためにぜひ参考にしてください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>なぜ猫は腎臓病になりやすいのか？</h2>
            <p>猫の祖先は砂漠地帯に住んでいた動物であり、少ない水分で効率よく体を維持するために、腎臓で尿を濃縮する能力が発達しています。しかし、この濃縮機能は腎臓に大きな負担をかけ続けることになり、加齢とともに腎臓の機能が徐々に低下していきます。</p>
            <p>また、猫は元来あまり水を積極的に飲まない動物です。水分摂取量が少ないと腎臓への負担がさらに増大し、慢性腎臓病の発症リスクが高まります。こうした体質的な要因が重なり、猫は他の動物に比べて腎臓病にかかりやすいのです。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>腎臓病の初期症状を見逃さないために</h2>
            <p>慢性腎臓病は腎機能の約75%が失われるまで明確な症状が出にくいとされています。しかし、注意深く観察すると以下のような変化が見られることがあります。</p>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>初期〜中期の症状</h3>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>多飲多尿：</strong>水を飲む量が増え、おしっこの量や回数が増えます。これは腎臓が尿を濃縮できなくなり、薄い尿が大量に出るためです。</li>
              <li><strong>食欲の低下：</strong>腎機能が低下すると体内に老廃物（尿毒素）が溜まり、気持ち悪さから食欲が落ちます。</li>
              <li><strong>体重減少：</strong>食欲低下に伴い、徐々に体重が減っていきます。</li>
              <li><strong>毛並みの悪化：</strong>栄養状態が低下し、被毛のツヤがなくなったりパサつくことがあります。</li>
            </ul>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>進行した場合の症状</h3>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>嘔吐や下痢が続く</li>
              <li>口臭がきつくなる（アンモニア臭）</li>
              <li>貧血（歯茎が白っぽくなる）</li>
              <li>元気がなくなり、ぐったりする</li>
              <li>脱水症状（皮膚をつまんで戻りが遅い）</li>
            </ul>
            <p>これらの症状は他の病気でも見られるため、自己判断せず、動物病院での検査を受けることが大切です。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>腎臓病の検査方法</h2>
            <p>バウ・ミュウ動物病院では、以下の検査で腎臓の状態を総合的に評価しています。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>血液検査（BUN・Cre）：</strong>BUN（血中尿素窒素）とCre（クレアチニン）は腎機能の指標です。これらの値が上昇している場合、腎臓の機能低下が疑われます。</li>
              <li><strong>SDMA検査：</strong>従来の血液検査より早い段階（腎機能が25〜40%低下した段階）で異常を検出できる比較的新しい検査項目です。</li>
              <li><strong>尿検査：</strong>尿比重（尿の濃さ）を測定し、腎臓の濃縮能力を評価します。尿たんぱくの有無も重要な指標です。</li>
              <li><strong>超音波検査：</strong>腎臓の大きさや形態、内部構造を確認します。慢性腎臓病では腎臓が萎縮していることが多く見られます。</li>
              <li><strong>血圧測定：</strong>腎臓病は高血圧を伴うことが多く、高血圧はさらに腎臓にダメージを与えるため、血圧の管理も重要です。</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>腎臓病の予防と日常のケア</h2>
            <p>腎臓病を完全に防ぐことは難しいですが、以下の対策でリスクを減らし、進行を遅らせることができます。</p>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>水分摂取を増やす工夫</h3>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>家の中の複数の場所に水飲み場を設置する</li>
              <li>流れる水を好む猫には循環式の給水器を用意する</li>
              <li>ウェットフードを取り入れて食事からの水分摂取を増やす</li>
              <li>水にほんの少し鶏のゆで汁を加えると飲みやすくなることがある</li>
            </ul>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>定期的な健康診断</h3>
            <p>腎臓病の早期発見には、何よりも定期的な健康診断が重要です。7歳までは年に1回、7歳を過ぎたら半年に1回の健康診断をおすすめしています。血液検査と尿検査を組み合わせることで、より早い段階で腎臓の異常を見つけることが可能です。</p>

            <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>食事管理</h3>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>良質なフードを選び、塩分の多いおやつや人間の食べ物は与えない</li>
              <li>腎臓病と診断された場合は、リン・ナトリウムを制限した腎臓病用の療法食に切り替える</li>
              <li>獣医師に相談しながら、猫に合った食事プランを立てる</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>市原市で猫の腎臓病が心配な方へ</h2>
            <p>バウ・ミュウ動物病院では、猫の腎臓病の早期発見と適切な治療に力を入れています。市原市の動物病院として、地域の猫の健康を守るお手伝いをさせていただきます。</p>
            <p>「最近水を飲む量が増えた」「トイレの回数が増えた気がする」など、少しでも気になることがあれば、お気軽にご来院ください。早期発見・早期治療が愛猫の生活の質を大きく左右します。</p>
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
    <li><a href="/blog/cat-cystitis-symptoms" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫の膀胱炎の症状と予防｜トイレの変化に要注意</a></li>
    <li><a href="/blog/cat-diabetes" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫の糖尿病｜多飲多尿は要注意！症状と治療について</a></li>
    <li><a href="/blog/cat-health-checkup" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>猫の健康診断｜頻度と検査項目を動物病院が解説</a></li>
  </ul>
</div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
      <footer className="footer"><div className="container footerInner"><div><strong>バウ・ミュウ動物病院</strong><p>〒290-0062 千葉県市原市八幡520<br />TEL 0436-41-1008</p></div><small>&copy; Bow-Mew Animal Hospital</small></div></footer>
    </main>
  )
}
