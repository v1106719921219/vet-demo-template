import type { Metadata } from 'next'
import { CLINIC } from '@/lib/constants'
import Link from 'next/link'
import MobileMenu from '@/components/MobileMenu'

export const metadata: Metadata = {
  title: 'コラム・お知らせ｜市原市の動物病院 バウ・ミュウ動物病院',
  description:
    '千葉県市原市バウ・ミュウ動物病院のコラム・お知らせ。犬猫の健康管理、予防医療、季節の注意点などの情報を発信しています。',
  alternates: { canonical: 'https://bowmew-ah.com/blog' },
}

const posts = [
  {
    slug: 'filaria-prevention',
    title: '【市原市】フィラリア予防はいつから？時期と費用について',
    date: '2026-05-01',
    summary: 'フィラリア予防は千葉県市原市では4月〜12月が推奨されています。予防薬の種類や費用の目安、予防しないとどうなるかを解説します。',
    tags: ['フィラリア', '予防', '市原市'],
  },
  {
    slug: 'dog-spay-surgery',
    title: '【市原市】犬の避妊手術｜適切な時期・費用・術後ケアを解説',
    date: '2026-04-28',
    summary: '犬の避妊手術の適切な時期・費用の目安・術後ケアのポイントを市原市の動物病院が解説。子宮蓄膿症や乳腺腫瘍の予防にも効果的です。',
    tags: ['避妊手術', '犬', '市原市'],
  },
  {
    slug: 'cat-neuter-cost',
    title: '猫の去勢手術の費用と流れ｜市原市の動物病院が解説',
    date: '2026-04-25',
    summary: '猫の去勢手術の費用目安・手術の流れ・術後の注意点を解説。スプレー行動や病気の予防にもつながります。',
    tags: ['去勢手術', '猫', '費用'],
  },
  {
    slug: 'dog-diarrhea-when-to-visit',
    title: '犬の下痢が続く時の受診目安｜市原市の動物病院',
    date: '2026-04-22',
    summary: '犬の下痢が続く場合の受診の目安、考えられる原因、自宅での応急処置について市原市の動物病院が解説します。',
    tags: ['下痢', '犬', '受診目安'],
  },
  {
    slug: 'vaccine-schedule',
    title: '犬と猫のワクチン接種スケジュール｜市原市の動物病院が解説',
    date: '2026-04-20',
    summary: '子犬・子猫のワクチン接種はいつ始める？混合ワクチンと狂犬病予防注射のスケジュール、費用の目安をバウ・ミュウ動物病院が解説します。',
    tags: ['ワクチン', '予防接種', '子犬', '子猫'],
  },
  {
    slug: 'cat-vomiting-causes',
    title: '猫が吐く原因と対処法｜心配な嘔吐の見分け方',
    date: '2026-04-18',
    summary: '猫が吐く原因はさまざま。毛玉・空腹・病気など、心配な嘔吐と様子見でよい嘔吐の見分け方を解説します。',
    tags: ['嘔吐', '猫', '症状'],
  },
  {
    slug: 'dog-skin-disease',
    title: '犬の皮膚病の種類と治療法｜かゆみ・赤みの原因を解説',
    date: '2026-04-15',
    summary: '犬の皮膚病の主な種類（膿皮症・アトピー・マラセチア等）と治療法。かゆみや赤みの原因を動物病院が解説します。',
    tags: ['皮膚病', '犬', '治療'],
  },
  {
    slug: 'dog-food-allergy',
    title: '犬の食物アレルギー｜症状と食事管理のポイント',
    date: '2026-04-12',
    summary: '犬の食物アレルギーの症状（皮膚のかゆみ・下痢・嘔吐）と、除去食による診断・食事管理のポイントを解説します。',
    tags: ['アレルギー', '犬', '食事'],
  },
  {
    slug: 'summer-heatstroke',
    title: '犬の熱中症に注意！市原市の夏を安全に過ごすための対策',
    date: '2026-04-10',
    summary: '千葉県市原市は夏の気温が高く、犬の熱中症リスクが高まります。症状の見分け方、応急処置、予防のポイントを解説します。',
    tags: ['熱中症', '夏', '予防'],
  },
  {
    slug: 'cat-cystitis-symptoms',
    title: '猫の膀胱炎の症状と予防｜トイレの変化に要注意',
    date: '2026-04-08',
    summary: '猫の膀胱炎の症状（頻尿・血尿・トイレ以外での排尿）と予防法。ストレスや食事との関係も解説します。',
    tags: ['膀胱炎', '猫', '泌尿器'],
  },
  {
    slug: 'dog-heart-disease',
    title: '犬の心臓病｜咳が増えたら要注意？初期症状と治療法',
    date: '2026-04-05',
    summary: '犬の心臓病（僧帽弁閉鎖不全症等）の初期症状と治療法。咳や疲れやすさなどのサインを見逃さないポイントを解説します。',
    tags: ['心臓病', '犬', '症状'],
  },
  {
    slug: 'cat-diabetes',
    title: '猫の糖尿病｜多飲多尿は要注意！症状と治療について',
    date: '2026-04-01',
    summary: '猫の糖尿病の症状（多飲多尿・体重減少）と治療法。インスリン療法や食事管理について動物病院が解説します。',
    tags: ['糖尿病', '猫', '治療'],
  },
  {
    slug: 'dog-fracture-first-aid',
    title: '犬が骨折した時の応急処置と治療｜市原市の動物病院',
    date: '2026-03-28',
    summary: '犬が骨折した時の応急処置・動物病院での治療法・回復までの流れを解説。落下や交通事故への備えも紹介します。',
    tags: ['骨折', '犬', '応急処置'],
  },
  {
    slug: 'senior-dog-care',
    title: 'シニア犬の健康管理｜7歳からの定期健診のすすめ',
    date: '2026-03-25',
    summary: '犬は7歳頃からシニア期に入ります。心臓病、腎臓病、関節疾患など加齢に伴う病気の早期発見のため、定期健診が大切です。',
    tags: ['シニア', '健康診断', '犬'],
  },
  {
    slug: 'dog-epilepsy',
    title: '犬のてんかん発作｜症状・原因・飼い主ができる対処法',
    date: '2026-03-22',
    summary: '犬のてんかん発作の症状・原因・発作時に飼い主ができる対処法を解説。投薬治療や日常の注意点も紹介します。',
    tags: ['てんかん', '犬', '発作'],
  },
  {
    slug: 'cat-stomatitis',
    title: '猫の口内炎が治らない｜原因と動物病院での治療法',
    date: '2026-03-20',
    summary: '猫の口内炎の原因（歯周病・ウイルス等）と治療法。食欲低下やよだれなどの症状がある場合は早めの受診を。',
    tags: ['口内炎', '猫', '治療'],
  },
  {
    slug: 'dog-ear-infection',
    title: '犬の耳が臭い？外耳炎の症状・原因と治療について',
    date: '2026-03-15',
    summary: '犬の外耳炎の症状（耳の臭い・かゆみ・耳垢の増加）と原因、治療法を解説。耳掃除の正しい方法も紹介します。',
    tags: ['外耳炎', '犬', '耳'],
  },
  {
    slug: 'cat-kidney-disease',
    title: '猫の腎臓病を早期発見するために｜症状と予防のポイント',
    date: '2026-03-10',
    summary: '猫は腎臓病になりやすい動物です。多飲多尿、食欲低下、体重減少などの初期症状と、早期発見のための定期検査について解説します。',
    tags: ['猫', '腎臓病', '健康診断'],
  },
  {
    slug: 'cat-spay-timing',
    title: '猫の避妊手術はいつがベスト？適切な時期とメリット',
    date: '2026-03-08',
    summary: '猫の避妊手術の最適な時期・メリット・手術の流れを解説。乳腺腫瘍や子宮疾患の予防にもつながります。',
    tags: ['避妊手術', '猫', '時期'],
  },
  {
    slug: 'dog-health-checkup-cost',
    title: '【市原市】犬の健康診断の費用と検査内容｜年1回がおすすめ',
    date: '2026-03-05',
    summary: '犬の健康診断の費用目安と検査内容（血液検査・レントゲン・エコー等）を市原市の動物病院が解説します。',
    tags: ['健康診断', '犬', '費用', '市原市'],
  },
  {
    slug: 'cat-health-checkup',
    title: '猫の健康診断｜頻度と検査項目を動物病院が解説',
    date: '2026-02-28',
    summary: '猫の健康診断の適切な頻度と検査項目を解説。シニア猫は年2回の受診がおすすめです。',
    tags: ['健康診断', '猫', '検査'],
  },
  {
    slug: 'dog-vaccine-types',
    title: '犬の混合ワクチンは何種を選ぶ？種類と違いを解説',
    date: '2026-02-25',
    summary: '犬の混合ワクチン（5種・6種・8種等）の違いと選び方を解説。生活環境に合わせた適切なワクチンをご提案します。',
    tags: ['ワクチン', '犬', '予防'],
  },
  {
    slug: 'tick-prevention',
    title: '市原市で気をつけたいノミ・マダニ対策｜予防時期と方法',
    date: '2026-02-20',
    summary: '千葉県市原市は自然が多く、ノミ・マダニのリスクがあります。予防薬の種類、投与時期、散歩時の注意点を動物病院が解説します。',
    tags: ['ノミ', 'マダニ', '予防', '市原市'],
  },
  {
    slug: 'rabies-vaccination-ichihara',
    title: '【市原市】狂犬病予防注射の届出と接種の流れ',
    date: '2026-02-18',
    summary: '市原市での狂犬病予防注射の届出方法・集合注射の日程・動物病院での個別接種の流れを解説します。',
    tags: ['狂犬病', '予防注射', '市原市'],
  },
  {
    slug: 'dog-neuter-benefits',
    title: '犬の去勢手術｜メリット・デメリットと適切な時期',
    date: '2026-02-15',
    summary: '犬の去勢手術のメリット（マーキング・攻撃性の軽減、病気予防）とデメリット、適切な手術時期を解説します。',
    tags: ['去勢手術', '犬', 'メリット'],
  },
  {
    slug: 'microchip-registration',
    title: 'ペットのマイクロチップ義務化｜登録方法と費用を解説',
    date: '2026-02-10',
    summary: 'ペットのマイクロチップ装着の義務化について、登録方法・費用・メリットを動物病院が解説します。',
    tags: ['マイクロチップ', '義務化', '登録'],
  },
  {
    slug: 'emergency-vet-ichihara',
    title: '【市原市】ペットの夜間救急｜緊急時の対応と連絡先',
    date: '2026-02-05',
    summary: '市原市周辺のペット夜間救急対応について。緊急時の判断基準と応急処置、連絡先をまとめました。',
    tags: ['夜間救急', '市原市', '緊急'],
  },
  {
    slug: 'dental-care',
    title: '犬と猫の歯周病予防｜自宅でできる歯磨きの方法',
    date: '2026-02-05',
    summary: '3歳以上の犬猫の80%が歯周病と言われています。口臭や歯茎の腫れなどの症状、自宅でできる歯磨きの方法を解説します。',
    tags: ['歯周病', 'デンタルケア', '予防'],
  },
  {
    slug: 'dog-foreign-body',
    title: '犬が異物を飲み込んだ！誤飲時の対処法と受診の目安',
    date: '2026-01-30',
    summary: '犬が異物を誤飲した時の対処法・受診の目安・予防策を解説。危険な異物の種類と症状も紹介します。',
    tags: ['誤飲', '犬', '応急処置'],
  },
  {
    slug: 'cat-escape-injury',
    title: '猫が脱走して怪我をした時の対処法｜予防策も解説',
    date: '2026-01-25',
    summary: '猫が脱走して怪我をした時の応急処置と動物病院への連れて行き方。脱走防止の対策も紹介します。',
    tags: ['脱走', '猫', '怪我'],
  },
  {
    slug: 'obesity-prevention',
    title: 'ペットの肥満は万病のもと｜適正体重管理のポイント',
    date: '2026-01-20',
    summary: '肥満は糖尿病、関節疾患、心臓病のリスクを高めます。ボディコンディションスコアの見方と適正体重管理のコツを紹介します。',
    tags: ['肥満', '体重管理', '食事'],
  },
  {
    slug: 'dog-paw-burn',
    title: '夏の散歩で犬の肉球が火傷？アスファルトの危険と対策',
    date: '2026-01-18',
    summary: '夏のアスファルトは犬の肉球に火傷を起こす危険があります。安全な散歩時間帯と肉球ケアの方法を解説します。',
    tags: ['肉球', '犬', '夏', '散歩'],
  },
  {
    slug: 'pet-disaster-preparedness',
    title: 'ペットの災害対策｜市原市で備えておくべきこと',
    date: '2026-01-15',
    summary: '災害時にペットと安全に避難するための備え。持ち出しリスト・避難場所・日頃の準備を市原市の動物病院が解説します。',
    tags: ['災害', 'ペット', '防災', '市原市'],
  },
  {
    slug: 'puppy-first-visit',
    title: '子犬を迎えたら｜最初の動物病院受診ガイド',
    date: '2026-01-10',
    summary: '子犬を迎えたら1週間以内に動物病院を受診しましょう。初回の検査内容、持ち物、今後のワクチンスケジュールをご案内します。',
    tags: ['子犬', '初診', 'ワクチン'],
  },
  {
    slug: 'dog-car-sickness',
    title: '犬の車酔い対策｜動物病院への移動を快適にする方法',
    date: '2026-01-08',
    summary: '犬の車酔いの症状と原因、移動を快適にするための対策を解説。慣らし方や酔い止め薬についても紹介します。',
    tags: ['車酔い', '犬', '移動'],
  },
  {
    slug: 'cat-nail-trimming',
    title: '猫の爪切りのコツ｜自宅で安全に行う方法と頻度',
    date: '2026-01-05',
    summary: '猫の爪切りを自宅で安全に行う方法、適切な頻度、嫌がる猫への対処法を動物病院が解説します。',
    tags: ['爪切り', '猫', 'ケア'],
  },
  {
    slug: 'dog-separation-anxiety',
    title: '犬の分離不安症｜症状・原因と改善トレーニング',
    date: '2025-12-28',
    summary: '犬の分離不安症の症状（吠え・破壊行動・粗相）と原因、改善のためのトレーニング方法を解説します。',
    tags: ['分離不安', '犬', '行動'],
  },
  {
    slug: 'pet-insurance-guide',
    title: 'ペット保険は必要？選び方のポイントを動物病院が解説',
    date: '2025-12-20',
    summary: 'ペット保険の必要性・選び方のポイント・補償内容の比較について動物病院の視点から解説します。',
    tags: ['ペット保険', '費用', '選び方'],
  },
  {
    slug: 'cat-stress-signs',
    title: '猫のストレスサイン｜見逃しやすい7つの行動変化',
    date: '2025-12-15',
    summary: '過剰グルーミング、食欲変化、隠れるなど、猫のストレスサインを7つ紹介。原因と対処法を市原市の動物病院が解説します。',
    tags: ['猫', 'ストレス', '行動'],
  },
  {
    slug: 'pet-age-chart',
    title: '犬猫の年齢を人間に換算すると？年齢早見表と健康管理',
    date: '2025-12-10',
    summary: '犬猫の年齢を人間に換算する早見表と、年齢に応じた健康管理のポイントを紹介します。',
    tags: ['年齢', '犬猫', '健康管理'],
  },
  {
    slug: 'rainy-season-skin',
    title: '梅雨時期の犬の皮膚トラブル｜市原市の湿気対策',
    date: '2025-12-01',
    summary: '梅雨の湿気は犬の皮膚病の原因に。膿皮症、マラセチア、外耳炎などのトラブルと予防法を市原市の動物病院が解説します。',
    tags: ['皮膚', '梅雨', '市原市'],
  },
  {
    slug: 'winter-joint-care',
    title: '冬の関節ケア｜シニア犬猫の寒さ対策と注意点',
    date: '2025-11-15',
    summary: '冬の寒さはシニア犬猫の関節に負担をかけます。関節炎のサイン、自宅でのケア方法、受診の目安を解説します。',
    tags: ['関節', 'シニア', '冬'],
  },
]

export default function BlogPage() {
  return (
    <main className="site">
      <header className="header">
        <div className="headerInner">
          <a className="logo" href="/">
            <img src="/logo.png" alt={CLINIC.name} className="logoMark" style={{ width: 100, height: 100, borderRadius: 0, background: 'transparent' }} />
            <span><strong>{CLINIC.name}</strong><small>犬と猫のホームドクター</small></span>
          </a>
          <nav className="nav">
            <a href="/#features">当院の特徴</a>
            <a href="/services">診療案内</a>
            <a href="/#hours">診療時間</a>
            <a href="/access">アクセス</a>
          </nav>
          <a className="headerBtn" href={`tel:${CLINIC.phone.replace(/-/g, '')}`}>電話する</a>
          <MobileMenu />
        </div>
      </header>

      <section className="section warm">
        <div className="container">
          <div className="sectionTitle">
            <p className="eyebrow">COLUMN</p>
            <h1 style={{ fontSize: 'clamp(22px, 4vw, 40px)' }}>コラム・お知らせ｜市原市バウ・ミュウ動物病院</h1>
            <p>犬・猫の健康管理や予防医療について、市原市の動物病院が情報を発信します。</p>
          </div>

          <div style={{ display: 'grid', gap: '20px', marginTop: '40px' }}>
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <article className="featureCard" style={{ textAlign: 'left', padding: '28px 32px', cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <time style={{ fontSize: '13px', color: '#999' }}>{post.date}</time>
                    {post.tags.map((tag) => (
                      <span key={tag} style={{ background: '#fff3e8', color: '#c06a1f', padding: '2px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 600 }}>{tag}</span>
                    ))}
                  </div>
                  <h2 style={{ fontSize: '18px', marginBottom: '8px', lineHeight: 1.5 }}>{post.title}</h2>
                  <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>{post.summary}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="container ctaBox">
          <p className="eyebrow">CONTACT</p>
          <h2>お気軽にご相談ください</h2>
          <p>予約不要・当日受付OK。市原市の犬猫の健康はバウ・ミュウ動物病院へ。</p>
          <div className="ctaButtons">
            <a className="primaryBtn" href={`tel:${CLINIC.phone.replace(/-/g, '')}`}>電話で相談する</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <div><strong>{CLINIC.name}</strong><p>{CLINIC.zip} {CLINIC.address}<br />TEL {CLINIC.phone}</p></div>
          <small>&copy; Bow-Mew Animal Hospital</small>
        </div>
      </footer>
    </main>
  )
}
