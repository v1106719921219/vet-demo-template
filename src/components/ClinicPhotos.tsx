'use client'
import SectionLabel from '@/components/SectionLabel'

const photos = [
  { c: 'tall', tag: 'Reception', num: '01', cap: '受付・待合室', en: 'THE FRONT DESK' },
  { c: '', tag: 'Cat Room', num: '02', cap: '猫専用待合室', en: 'FELINE-ONLY AREA' },
  { c: '', tag: 'Exam', num: '03', cap: '診察室', en: 'EXAMINATION' },
  { c: 'wide', tag: 'Imaging', num: '04', cap: 'CT・MRI 室', en: 'ADVANCED IMAGING SUITE' },
  { c: '', tag: 'Grooming', num: '05', cap: 'トリミング室', en: 'GROOMING ROOM' },
]

export default function ClinicPhotos() {
  return (
    <section className="section section-pad">
      <div className="wrap">
        <SectionLabel idx="03" label="Inside The Clinic" jp="院内の風景" meta="CH. 03 / 06" />

        <div className="photos-head">
          <h2>{'静かで、清潔で、\n犬と猫にやさしい空間。'}</h2>
          <div className="caption">
            院内は犬エリアと猫エリアを完全に分離。待合室から診察室まで、それぞれが安心して過ごせる設計です。
          </div>
        </div>

        <div className="filmstrip">
          {photos.map((p) => (
            <div className={`film${p.c ? ` ${p.c}` : ''}`} key={p.num}>
              <div className="tag">{p.tag}</div>
              <div className="num">{p.num}</div>
              <div className="cap">
                {p.cap}
                <small>{p.en}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
