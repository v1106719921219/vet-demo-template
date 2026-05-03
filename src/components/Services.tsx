'use client'
import SectionLabel from '@/components/SectionLabel'

const services = [
  { n: 'i', t: '一般診療', s: 'GENERAL PRACTICE', d: '体調の変化、ワクチン、予防、健康診断まで。気になることがあれば、どんな小さなことでも。', cta: '詳しく見る' },
  { n: 'ii', t: '外科・手術', s: 'SURGERY', d: '避妊・去勢から軟部・整形外科まで。必要に応じて高度医療センターと連携し、最善の治療を。', cta: '対応範囲を見る' },
  { n: 'iii', t: '高度画像診断', s: 'CT · MRI · ECHO', d: 'CT・MRI・内視鏡・デジタルX線・超音波エコーを院内完備。原因を早く、正確に。', feat: true, cta: '設備を見る' },
  { n: 'iv', t: '入院・ICU', s: 'HOSPITALIZATION', d: '犬と猫で分離された入院設備。24時間体制で経過を見守ります。', cta: '入院について' },
  { n: 'v', t: 'トリミング', s: 'GROOMING', d: '獣医師の目が届く安心のトリミング。持病のある子、高齢の子も相談ください。', cta: '予約する' },
  { n: 'vi', t: 'ペットホテル', s: 'PET HOTEL', d: 'ご旅行中のお預かり。お散歩も、食事管理も、投薬も対応します。', cta: '料金・空き状況' },
]

export default function Services() {
  return (
    <section className="section section-pad" id="services" style={{ background: 'var(--bone-warm)' }}>
      <SectionLabel idx="02" label="What We Do" jp="診療案内" meta="CH. 02 / 06" />

      <div className="services-head">
        <h2>犬と猫のための、<em>6つの</em>診療とケア。</h2>
        <p>一般診療から高度画像診断まで。日々の健康管理から専門的な治療まで、一つの病院で完結できる体制を整えています。</p>
      </div>

      <div className="services-grid">
        {services.map((svc) => (
          <div className={`service${svc.feat ? ' feat' : ''}`} key={svc.n}>
            <div className="service-num">{svc.n}</div>
            <h3>{svc.t}</h3>
            <div className="jp-sub">{svc.s}</div>
            <p>{svc.d}</p>
            <div className="service-foot">
              {svc.cta} <span>&rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
