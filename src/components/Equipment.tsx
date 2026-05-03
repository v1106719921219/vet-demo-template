'use client'
import SectionLabel from '@/components/SectionLabel'

const items = [
  { n: 'i', t: 'CT・MRI', en: 'ADVANCED IMAGING', d: '院内で高精度の画像診断。迅速に原因を特定します。' },
  { n: 'ii', t: '内視鏡', en: 'ENDOSCOPE', d: '誤飲物の摘出、消化管の観察を低侵襲で実施します。' },
  { n: 'iii', t: 'デジタルX線', en: 'DIGITAL RADIOGRAPHY', d: 'その場で画像を確認でき、再撮影も最小限です。' },
  { n: 'iv', t: '超音波エコー', en: 'ULTRASOUND', d: '心臓、腹部臓器のリアルタイム観察に用います。' },
  { n: 'v', t: '猫専用待合室', en: 'FELINE WAITING', d: '犬と完全分離。猫のストレスを最小限に抑えます。' },
]

export default function Equipment() {
  return (
    <section className="section equip section-pad" id="equipment">
      <div className="wrap">
        <SectionLabel idx="04" label="Equipment" jp="医療設備" meta="CH. 04 / 06" />

        <div className="equip-head">
          <h2>市原の地で、<em>先端設備</em>。{'\n'}原因を早く、正確に。</h2>
          <p>画像診断を中心に、院内で完結できる検査体制を整えています。外部機関への搬送を減らし、診断から治療までの時間を短縮します。</p>
        </div>

        <div className="equip-list">
          {items.map((item) => (
            <div className="equip-item" key={item.n}>
              <div className="e-num">&#8470; {item.n}</div>
              <h4>{item.t}</h4>
              <div className="en">{item.en}</div>
              <p>{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
