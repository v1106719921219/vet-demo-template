import type { Metadata } from 'next'
import { CLINIC } from '@/lib/constants'
import Link from 'next/link'

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
    slug: 'vaccine-schedule',
    title: '犬と猫のワクチン接種スケジュール｜市原市の動物病院が解説',
    date: '2026-04-20',
    summary: '子犬・子猫のワクチン接種はいつ始める？混合ワクチンと狂犬病予防注射のスケジュール、費用の目安をバウ・ミュウ動物病院が解説します。',
    tags: ['ワクチン', '予防接種', '子犬', '子猫'],
  },
  {
    slug: 'summer-heatstroke',
    title: '犬の熱中症に注意！市原市の夏を安全に過ごすための対策',
    date: '2026-04-10',
    summary: '千葉県市原市は夏の気温が高く、犬の熱中症リスクが高まります。症状の見分け方、応急処置、予防のポイントを解説します。',
    tags: ['熱中症', '夏', '予防'],
  },
  {
    slug: 'senior-dog-care',
    title: 'シニア犬の健康管理｜7歳からの定期健診のすすめ',
    date: '2026-03-25',
    summary: '犬は7歳頃からシニア期に入ります。心臓病、腎臓病、関節疾患など加齢に伴う病気の早期発見のため、定期健診が大切です。',
    tags: ['シニア', '健康診断', '犬'],
  },
  {
    slug: 'cat-kidney-disease',
    title: '猫の腎臓病を早期発見するために｜症状と予防のポイント',
    date: '2026-03-10',
    summary: '猫は腎臓病になりやすい動物です。多飲多尿、食欲低下、体重減少などの初期症状と、早期発見のための定期検査について解説します。',
    tags: ['猫', '腎臓病', '健康診断'],
  },
  {
    slug: 'tick-prevention',
    title: '市原市で気をつけたいノミ・マダニ対策｜予防時期と方法',
    date: '2026-02-20',
    summary: '千葉県市原市は自然が多く、ノミ・マダニのリスクがあります。予防薬の種類、投与時期、散歩時の注意点を動物病院が解説します。',
    tags: ['ノミ', 'マダニ', '予防', '市原市'],
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
        </div>
      </header>

      <section className="section warm">
        <div className="container">
          <div className="sectionTitle">
            <p className="eyebrow">COLUMN</p>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>コラム・お知らせ｜市原市バウ・ミュウ動物病院</h1>
            <p>犬・猫の健康管理や予防医療について、市原市の動物病院が情報を発信します。</p>
          </div>

          <div style={{ display: 'grid', gap: '20px', marginTop: '40px' }}>
            {posts.map((post) => (
              <article key={post.slug} className="featureCard" style={{ textAlign: 'left', padding: '28px 32px' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <time style={{ fontSize: '13px', color: '#999' }}>{post.date}</time>
                  {post.tags.map((tag) => (
                    <span key={tag} style={{ background: '#fff3e8', color: '#c06a1f', padding: '2px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 600 }}>{tag}</span>
                  ))}
                </div>
                <h2 style={{ fontSize: '18px', marginBottom: '8px', lineHeight: 1.5 }}>{post.title}</h2>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>{post.summary}</p>
              </article>
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
