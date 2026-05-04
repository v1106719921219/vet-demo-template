import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '冬の関節ケア｜シニア犬猫の寒さ対策と注意点｜市原市の動物病院 バウ・ミュウ動物病院',
  description: '千葉県市原市のバウ・ミュウ動物病院が、冬のシニア犬猫の関節ケアと寒さ対策を解説。関節炎の症状、自宅でのケア方法、受診の目安をご紹介します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/winter-joint-care' },
  openGraph: {
    title: '冬の関節ケア｜シニア犬猫の寒さ対策と注意点｜市原市の動物病院 バウ・ミュウ動物病院',
    description: '千葉県市原市のバウ・ミュウ動物病院が、冬のシニア犬猫の関節ケアと寒さ対策を解説。関節炎の症状、自宅でのケア方法、受診の目安をご紹介します。',
    url: 'https://bowmew-ah.com/blog/winter-joint-care',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/winter-joint-care.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '冬の関節ケア｜シニア犬猫の寒さ対策と注意点｜市原市の動物病院 バウ・ミュウ動物病院',
    description: '千葉県市原市のバウ・ミュウ動物病院が、冬のシニア犬猫の関節ケアと寒さ対策を解説。関節炎の症状、自宅でのケア方法、受診の目安をご紹介します。',
    images: ['https://bowmew-ah.com/blog/winter-joint-care.webp'],
  },
}

export default function WinterJointCarePage() {
  return (
    <main className="site">
      <header className="header"><div className="headerInner"><a className="logo" href="/"><img src="/logo.png" alt="バウ・ミュウ動物病院" className="logoMark" style={{ width: 100, height: 100, borderRadius: 0, background: 'transparent' }} /><span><strong>バウ・ミュウ動物病院</strong><small>犬と猫のホームドクター</small></span></a><nav className="nav"><a href="/about">当院について</a><a href="/services">診療案内</a><a href="/price">料金</a><a href="/first-visit">初めての方</a><a href="/access">アクセス</a><a href="/blog">コラム</a></nav><a className="headerBtn" href="tel:0436411008">電話する</a></div></header>
      <article className="section warm">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="eyebrow">COLUMN</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2025-11-15</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>冬の関節ケア｜シニア犬猫の寒さ対策と注意点</h1>
          <img src={`/blog/winter-joint-care.webp`} alt="シニア犬猫の冬の関節ケア" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>冬の寒さは、シニア期の犬や猫の関節に大きな負担をかけます。寒くなると関節がこわばり、痛みが増すことで、散歩を嫌がったり、動きが鈍くなったりすることがあります。</p>
            <p>千葉県市原市でも冬は気温が下がり、特に朝晩の冷え込みが厳しくなります。この記事では、シニア犬猫の冬の関節ケアについて、バウ・ミュウ動物病院が詳しく解説します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>なぜ冬に関節トラブルが増えるのか</h2>
            <p>寒さによって血行が悪くなると、関節周囲の筋肉や靭帯が硬くなり、関節の動きが制限されます。また、気温が低いと関節液の粘度が上がり、クッション機能が低下します。</p>
            <p>特に以下のような犬猫は冬の関節トラブルに注意が必要です。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>7歳以上のシニア犬・シニア猫</li>
              <li>大型犬（ゴールデンレトリバー、ラブラドールなど）</li>
              <li>肥満気味のペット</li>
              <li>過去に関節の怪我や手術をしたことがある子</li>
              <li>関節炎と診断されている子</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>関節トラブルのサイン</h2>
            <p>犬や猫は痛みを隠す傾向があるため、飼い主さまが注意深く観察することが大切です。以下のサインが見られたら、関節に問題がある可能性があります。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>散歩を嫌がる、歩く速度が遅くなった</li>
              <li>立ち上がるのに時間がかかる</li>
              <li>階段の昇り降りを避ける</li>
              <li>足を引きずる、かばう</li>
              <li>触ると痛がる部位がある</li>
              <li>猫がジャンプしなくなった</li>
              <li>寝ている時間が増えた</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>自宅でできる冬の関節ケア</h2>
            <p><strong>1. 室温管理</strong></p>
            <p>室内の温度を20〜25度程度に保ちましょう。床からの冷えを防ぐため、ペット用のホットカーペットや毛布を用意してあげると効果的です。ただし、低温やけどには注意が必要です。</p>
            <p><strong>2. 適度な運動</strong></p>
            <p>寒いからと運動を完全にやめてしまうと、筋力が低下してさらに関節への負担が増します。無理のない範囲で毎日の散歩を続けましょう。冬は日中の暖かい時間帯がおすすめです。</p>
            <p><strong>3. 体重管理</strong></p>
            <p>体重が増えると関節への負担が大きくなります。冬は運動量が減りがちなので、食事量を調整して適正体重を維持しましょう。</p>
            <p><strong>4. 滑り止め対策</strong></p>
            <p>フローリングの床は滑りやすく、関節に負担がかかります。カーペットや滑り止めマットを敷いてあげましょう。</p>
            <p><strong>5. マッサージ</strong></p>
            <p>関節周囲の筋肉を優しくマッサージすることで、血行を促進し、筋肉のこわばりを和らげることができます。強く押しすぎないよう注意してください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>動物病院での関節ケア</h2>
            <p>関節の痛みがひどい場合や、上記のサインが見られる場合は、動物病院での診察をおすすめします。当院では以下の対応が可能です。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>レントゲン検査による関節の状態確認</li>
              <li>消炎鎮痛剤の処方</li>
              <li>関節サプリメント（グルコサミン、コンドロイチンなど）のご案内</li>
              <li>体重管理のための食事指導</li>
              <li>リハビリテーションのアドバイス</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>市原市でシニア犬猫の関節ケアをお考えの方へ</h2>
            <p>バウ・ミュウ動物病院では、シニア犬猫の関節ケアについて丁寧にご相談に応じています。「最近歩き方がおかしい」「立ち上がりが遅くなった」など、少しでも気になることがあればお気軽にご来院ください。</p>
            <p>予約不要・当日受付OKですので、寒い冬でもお気軽にお越しいただけます。</p>
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
    <li><a href="/blog/senior-dog-care" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>シニア犬の健康管理｜7歳からの定期健診のすすめ</a></li>
    <li><a href="/blog/dog-health-checkup-cost" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>【市原市】犬の健康診断の費用と検査内容｜年1回がおすすめ</a></li>
    <li><a href="/blog/summer-heatstroke" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬の熱中症に注意！市原市の夏を安全に過ごすための対策</a></li>
  </ul>
</div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
      <footer className="footer"><div className="container footerInner"><div><strong>バウ・ミュウ動物病院</strong><p>〒290-0062 千葉県市原市八幡520<br />TEL 0436-41-1008</p></div><small>&copy; Bow-Mew Animal Hospital</small></div></footer>
    </main>
  )
}
