import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ペット保険は必要？選び方のポイントを動物病院が解説｜バウ・ミュウ動物病院',
  description: 'ペット保険は本当に必要なのか、選び方のポイントを獣医師の視点から解説。補償内容の比較、加入のベストタイミング、注意点をまとめました。',
  alternates: { canonical: 'https://bowmew-ah.com/blog/pet-insurance-guide' },
  openGraph: {
    title: 'ペット保険は必要？選び方のポイントを動物病院が解説｜バウ・ミュウ動物病院',
    description: 'ペット保険は本当に必要なのか、選び方のポイントを獣医師の視点から解説。補償内容の比較、加入のベストタイミング、注意点をまとめました。',
    url: 'https://bowmew-ah.com/blog/pet-insurance-guide',
    siteName: 'バウ・ミュウ動物病院',
    images: [{ url: 'https://bowmew-ah.com/blog/pet-insurance-guide.webp', width: 1792, height: 1024 }],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ペット保険は必要？選び方のポイントを動物病院が解説｜バウ・ミュウ動物病院',
    description: 'ペット保険は本当に必要なのか、選び方のポイントを獣医師の視点から解説。補償内容の比較、加入のベストタイミング、注意点をまとめました。',
    images: ['https://bowmew-ah.com/blog/pet-insurance-guide.webp'],
  },
}

export default function PetInsuranceGuide() {
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
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>2025.12.20</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '32px', lineHeight: 1.5 }}>ペット保険は必要？選び方のポイントを動物病院が解説</h1>
          <img src={`/blog/pet-insurance-guide.webp`} alt="ペット保険の選び方" style={{ width: '100%', borderRadius: '16px', marginBottom: '32px' }} />
          <div style={{ lineHeight: 2, fontSize: '16px' }}>
            <p>ペットには人間のような公的健康保険がないため、動物病院での治療費は全額自己負担になります。手術や入院が必要になると数十万円の費用がかかることも珍しくありません。「ペット保険に入った方がいいのか？」というご質問を飼い主さんからよくいただきます。動物病院の視点から、ペット保険の必要性と選び方のポイントを解説します。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>ペットの医療費はどのくらいかかる？</h2>
            <p>動物医療費の目安をご紹介します。</p>
            <ul>
              <li><strong>一般的な通院：</strong>1回 3,000〜10,000円（診察・検査・薬代）</li>
              <li><strong>血液検査：</strong>5,000〜15,000円</li>
              <li><strong>レントゲン：</strong>4,000〜8,000円</li>
              <li><strong>避妊・去勢手術：</strong>20,000〜50,000円</li>
              <li><strong>骨折手術：</strong>200,000〜500,000円</li>
              <li><strong>腫瘍摘出手術：</strong>100,000〜400,000円</li>
              <li><strong>入院（1日あたり）：</strong>3,000〜10,000円</li>
              <li><strong>慢性疾患の継続治療（月額）：</strong>10,000〜30,000円</li>
            </ul>
            <p>一般社団法人ペットフード協会の調査によると、犬の生涯医療費は平均で約80〜100万円、猫は約60〜80万円と言われています。特に高齢期に医療費が集中する傾向があります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>ペット保険の基本的な仕組み</h2>
            <p>ペット保険の基本を押さえましょう。</p>
            <p><strong>補償割合：</strong>治療費の50%または70%を補償するプランが主流です。100%補償のプランもありますが、保険料は高くなります。</p>
            <p><strong>支払い方法：</strong>窓口精算型（動物病院の会計時に保険適用）と、後日請求型（一旦全額払い、後から保険金を請求）があります。</p>
            <p><strong>年間限度額：</strong>年間の支払い上限額が設定されています。通院・入院・手術ごとに日額や回数の制限がある保険もあります。</p>
            <p><strong>免責金額：</strong>1回の治療につき一定額（例：5,000円）までは自己負担となるプランもあります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>保険選びで確認すべきポイント</h2>
            <p>ペット保険は各社で内容が大きく異なります。以下のポイントを比較しましょう。</p>
            <ul>
              <li><strong>通院補償の有無：</strong>手術・入院のみのプランは保険料が安いですが、通院が多い皮膚疾患や慢性疾患には対応できません</li>
              <li><strong>待機期間：</strong>加入後すぐに使えるわけではなく、30〜60日の待機期間がある保険が多いです</li>
              <li><strong>更新時の条件：</strong>病歴によって更新時に特定疾病が免責になることがあります</li>
              <li><strong>年齢による保険料の上昇：</strong>高齢になると保険料が大幅に上がるプランもあります</li>
              <li><strong>対象外の疾病：</strong>先天性疾患、歯科治療、予防医療（ワクチンなど）は対象外が多い</li>
              <li><strong>窓口精算対応の病院数：</strong>窓口精算型の場合、対応病院が近くにあるか確認</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>加入のベストタイミング</h2>
            <p>ペット保険は若いうちに加入するほどメリットがあります。</p>
            <ul>
              <li>若い時は保険料が安い</li>
              <li>病気になってからでは加入できないか、その疾病が免責になる</li>
              <li>先天性疾患の発症前に加入しておけば補償対象になる保険もある</li>
              <li>子犬・子猫は誤飲や事故のリスクが高い</li>
            </ul>
            <p>理想的には、ペットを迎え入れたタイミング（生後2〜3ヶ月）で加入を検討しましょう。多くの保険会社は新規加入の年齢上限を7〜12歳に設定しています。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>ペット保険が特に必要なケース</h2>
            <p>すべての飼い主さんに一律にお勧めするわけではありませんが、以下のケースでは保険加入のメリットが大きいと考えられます。</p>
            <ul>
              <li>急な出費に対応する貯蓄が十分でない場合</li>
              <li>大型犬（医療費が高額になりやすい）を飼っている場合</li>
              <li>特定の疾病リスクが高い犬種（ダックスフンドの椎間板ヘルニア、フレンチブルドッグの呼吸器疾患など）</li>
              <li>「お金の心配をせずベストな治療を受けさせたい」という場合</li>
            </ul>
            <p>一方で、毎月の保険料を積み立てて「ペット貯金」にする方法も選択肢の一つです。健康な状態が長く続けば、保険料を払い続けるよりもお得になることもあります。</p>

            <h2 style={{ fontSize: '22px', marginTop: '40px', marginBottom: '16px', color: '#ff8a3d' }}>まとめ</h2>
            <p>ペット保険は「万が一の時に治療の選択肢を狭めないための備え」です。加入するかどうかは、ペットの犬種や年齢、ご家庭の経済状況を考慮して判断しましょう。バウ・ミュウ動物病院では、治療費についてのご相談も承っています。保険の窓口精算にも対応しておりますので、保険証をお持ちの方は受付時にご提示ください。</p>
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
    <li><a href="/blog/dog-health-checkup-cost" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>【市原市】犬の健康診断の費用と検査内容｜年1回がおすすめ</a></li>
    <li><a href="/blog/pet-age-chart" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>犬猫の年齢を人間に換算すると？年齢早見表と健康管理</a></li>
    <li><a href="/blog/microchip-registration" style={{ color: '#333', textDecoration: 'none', display: 'block', padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #f0e5d7', lineHeight: 1.6 }}>ペットのマイクロチップ義務化｜登録方法と費用を解説</a></li>
  </ul>
</div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}><a href="/blog" style={{ color: '#ff8a3d', fontWeight: 700 }}>コラム一覧に戻る</a></div>
        </div>
      </article>
    </main>
  )
}
