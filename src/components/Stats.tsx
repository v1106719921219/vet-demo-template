'use client'

import SectionLabel from '@/components/SectionLabel'

const stats = [
  {
    num: '30+',
    label: '年以上',
    desc: '地域のかかりつけ医として市原市で診療を続けてきた歴史',
  },
  {
    num: '4.2',
    label: 'Google 評価',
    desc: '飼い主様から頂いたGoogleクチコミの平均評価',
  },
  {
    num: '365',
    label: '日 毎朝診療',
    desc: '日曜も祝日も休まず午前診療。いつでも頼れる安心感',
  },
  {
    num: '4',
    label: '提携病院',
    desc: '高度医療センターとの連携で難しい症例にも対応',
  },
]

const Stats = () => {
  return (
    <section className="section section-pad" id="stats">
      <div className="wrap">
        <SectionLabel
          idx="01"
          label="By The Numbers"
          jp="実績と信頼"
          meta="CH. 01 / 06"
        />

        <div className="stats-head">
          <h2>
            数字で見る、
            <br />
            地域のかかりつけ医。
          </h2>
          <p>
            30年以上にわたり市原市八幡で診療を続けてきた実績。
            日曜祝日も毎朝診療し、高度医療連携で難しい症例にも対応しています。
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat" key={s.num}>
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
              <span className="stat-desc">{s.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
