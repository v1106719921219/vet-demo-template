import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '犬が骨折した時の応急処置と治療｜市原市の動物病院｜バウ・ミュウ動物病院',
  description: '犬が骨折した時の応急処置・治療法・リハビリについてバウ・ミュウ動物病院が解説。骨折の症状の見分け方と、動物病院に行くまでの正しい対応を市原市の獣医師がご案内します。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/dog-fracture-first-aid' },
  openGraph: {
    title: '犬が骨折した時の応急処置と治療｜市原市の動物病院｜バウ・ミュウ動物病院',
    description: '犬が骨折した時の応急処置・治療法・リハビリについてバウ・ミュウ動物病院が解説。骨折の症状の見分け方と、動物病院に行くまでの正しい対応を市原市の獣医師がご案内します。',
    url: 'https://bowmew-ah.com/blog/dog-fracture-first-aid',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/dog-fracture-first-aid.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '犬が骨折した時の応急処置と治療｜市原市の動物病院｜バウ・ミュウ動物病院',
    description: '犬が骨折した時の応急処置・治療法・リハビリについてバウ・ミュウ動物病院が解説。骨折の症状の見分け方と、動物病院に行くまでの正しい対応を市原市の獣医師がご案内します。',
    images: ['https://bowmew-ah.com/blog/dog-fracture-first-aid.webp'],
  },
}

export default function DogFractureFirstAidPage() {
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
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2026-03-28</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>犬が骨折した時の応急処置と治療｜市原市の動物病院</h1>
          <img src={`/blog/dog-fracture-first-aid.webp`} alt="犬の骨折の応急処置" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>犬の骨折は、落下事故や交通事故、激しい運動中のアクシデントなどで起こります。特に小型犬はソファや飼い主の腕からの落下で骨折するケースが多く、注意が必要です。骨折が疑われる場合は、適切な応急処置を行い、できるだけ早く動物病院を受診することが大切です。</p>
            <p>この記事では、犬の骨折の見分け方・応急処置・治療法について解説します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>犬の骨折の症状と見分け方</h2>
            <p>犬が骨折している場合、以下のような症状が見られます。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>足を地面につけない：</strong>患肢を持ち上げたまま3本足で歩く</li>
              <li><strong>患部の腫れ：</strong>骨折部位が腫れて熱を持つ</li>
              <li><strong>触ると激しく痛がる：</strong>鳴く、噛もうとする</li>
              <li><strong>足の形が不自然：</strong>あり得ない方向に曲がっている</li>
              <li><strong>動かなくなる：</strong>痛みでじっとしている</li>
              <li><strong>骨が皮膚から出ている：</strong>開放骨折（非常に重症）</li>
            </ul>
            <p>捻挫や打撲でも足を上げることはありますが、完全に足をつかない、触ると非常に痛がるといった場合は骨折の可能性が高いです。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>骨折の応急処置</h2>
            <p>犬が骨折したと思われる時、動物病院に着くまでの応急処置として以下を行ってください。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>まず落ち着く：</strong>飼い主が慌てると犬もパニックになります。落ち着いて対応しましょう</li>
              <li><strong>動かさない：</strong>骨折部位をなるべく動かさないようにします。無理に固定しようとしないでください</li>
              <li><strong>安静にさせる：</strong>犬を安全な場所に静かに寝かせます</li>
              <li><strong>保温する：</strong>ショック状態になることがあるため、タオルや毛布で体を温めます</li>
              <li><strong>出血があれば圧迫止血：</strong>清潔なガーゼやタオルで傷口を押さえます</li>
              <li><strong>移動は慎重に：</strong>板やタオルなどに乗せて、なるべく体を動かさずに車に乗せます</li>
            </ul>
            <p><strong>やってはいけないこと：</strong></p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>素人判断で骨を元に戻そうとする</li>
              <li>患部を強く固定する（血流が止まる恐れ）</li>
              <li>人間用の鎮痛剤を与える（犬に有害なものが多い）</li>
              <li>食べ物や水を与える（麻酔が必要になる場合に備えて）</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>動物病院での検査</h2>
            <p>動物病院では、以下の検査で骨折の状態を正確に把握します。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>レントゲン検査：</strong>骨折の部位・種類・程度を確認する基本検査</li>
              <li><strong>身体検査：</strong>骨折以外の外傷（内臓損傷など）の確認</li>
              <li><strong>血液検査：</strong>全身状態の評価、手術に備えた検査</li>
              <li><strong>CT検査：</strong>複雑な骨折の場合、詳細な画像診断（必要に応じて）</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>骨折の治療法</h2>
            <p>骨折の治療法は、骨折の種類や部位によって選択されます。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li><strong>外固定（ギプス・副木）：</strong>ヒビや安定した骨折で使用。骨がずれていない若い犬に適する</li>
              <li><strong>プレート固定：</strong>金属プレートとスクリューで骨を固定する手術。最も一般的な方法</li>
              <li><strong>ピンニング：</strong>骨の中に金属ピンを入れて固定する</li>
              <li><strong>創外固定：</strong>骨の外からピンを刺し、外部のフレームで固定する</li>
            </ul>
            <p>小型犬の前足の骨折（橈尺骨骨折）は治りにくいことで知られており、専門的な手術が必要になることがあります。治療費は骨折の部位や治療法によって大きく異なりますので、詳しくは獣医師にご相談ください。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>骨折の予防</h2>
            <p>犬の骨折を予防するために、以下の点に注意しましょう。</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>ソファやベッドからの飛び降りを防ぐ（スロープやステップを設置）</li>
              <li>抱っこ中の落下に注意する</li>
              <li>フローリングに滑り止めマットを敷く</li>
              <li>散歩中はリードを装着し、交通事故を防ぐ</li>
              <li>バランスの良い食事で骨を丈夫に保つ</li>
              <li>肥満を予防する（体重が骨への負担を増やす）</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>犬の骨折でお困りの方へ</h2>
            <p>バウ・ミュウ動物病院では、犬の骨折について迅速な検査と適切な治療を行っています。骨折が疑われる場合は、まずお電話ください。来院までの応急処置についてもご案内いたします。</p>
            <p>愛犬の突然のケガに慌てないために、かかりつけ動物病院の電話番号をすぐに確認できる場所に控えておくことをおすすめします。</p>
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
    <li><a href="/blog/dog-foreign-body" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬が異物を飲み込んだ！誤飲時の対処法と受診の目安</a></li>
    <li><a href="/blog/pet-insurance-guide" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>ペット保険は必要？選び方のポイントを動物病院が解説</a></li>
  </ul>
</div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
      <footer className="footer"><div className="container footerInner"><div><strong>バウ・ミュウ動物病院</strong><p>〒290-0062 千葉県市原市八幡520<br />TEL 0436-41-1008</p></div><small>&copy; Bow-Mew Animal Hospital</small></div></footer>
    </main>
  )
}
