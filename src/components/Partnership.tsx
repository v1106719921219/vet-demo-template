'use client'
import SectionLabel from '@/components/SectionLabel'

const partners = [
  { n: '№ 01', name: '日本小動物医療センター', type: 'REFERRAL HOSPITAL · 所沢' },
  { n: '№ 02', name: 'どうぶつの総合病院', type: 'GENERAL HOSPITAL · 市川' },
  { n: '№ 03', name: '東京農工大学 動物医療センター', type: 'UNIVERSITY HOSPITAL · 府中' },
  { n: '№ 04', name: '日本動物高度医療センター', type: 'ADVANCED CARE · 川崎' },
]

const Partnership = () => {
  return (
    <section
      className="section section-pad"
      style={{ background: 'var(--bone-warm)' }}
    >
      <SectionLabel idx="08" label="Referral Network" jp="提携医療機関" />

      <div className="partner-head">
        <h2>
          一病院では、救えない命がある。
          <br />
          だから、<em>4つの</em>連携。
        </h2>
        <p>
          当院だけでは対応が難しい症例にも、高度医療機関との連携により最善の治療をご提案します。大学病院や専門センターとの紹介体制を整え、大切な家族の命を守ります。
        </p>
      </div>

      <div className="partner-grid">
        {partners.map((p, i) => (
          <div className="partner" key={i}>
            <span className="partner-num">{p.n}</span>
            <div>
              <h4>{p.name}</h4>
              <span className="type">{p.type}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Partnership
