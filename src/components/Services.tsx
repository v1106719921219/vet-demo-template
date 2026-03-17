'use client'

import { motion } from 'framer-motion'
import { HOSPITAL } from '@/lib/hospital'

const baseServices = [
  {
    icon: '🩺',
    title: '一般内科・外科',
    desc: '体調不良・ケガ・術後ケアまで、幅広く対応します。',
  },
  {
    icon: '💉',
    title: '予防医療・ワクチン',
    desc: 'ワクチン接種・フィラリア予防・健康診断で病気を未然に防ぎます。',
  },
  {
    icon: '🔬',
    title: '画像診断（CT・MRI・エコー）',
    desc: '最新の画像診断機器で、より精密な診断を行います。',
  },
  {
    icon: '🧬',
    title: '皮膚科・腫瘍科',
    desc: '皮膚疾患・腫瘍・アレルギーなどの専門的な診療を行います。',
  },
]

// 設備・フィーチャーに応じて追加カードを動的生成
function getOptionalServices(hospital: typeof HOSPITAL) {
  const opts = []
  if (hospital.features.includes('トリミング')) {
    opts.push({ icon: '✂️', title: 'トリミング', desc: 'プロのトリマーが丁寧にケア。ワンちゃんも快適に。' })
  }
  if (hospital.features.includes('ペットホテル')) {
    opts.push({ icon: '🏨', title: 'ペットホテル', desc: '旅行・出張中もペットをお預かり。毎日の散歩も対応します。' })
  }
  if (opts.length === 0) {
    opts.push({ icon: '🤝', title: '専門病院との連携', desc: '高度医療センターとの連携で、難しい病気にも最善を。' })
    opts.push({ icon: '🏠', title: '入院・術後ケア', desc: '安心・安全な入院環境で、回復をしっかりサポートします。' })
  }
  return opts
}

export default function Services() {
  const services = [...baseServices, ...getOptionalServices(HOSPITAL)].slice(0, 6)

  return (
    <section id="services" className="bg-bg py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-primary">Services</p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-text-main sm:text-3xl">診療案内</h2>
          <p className="mt-3 text-sm text-muted">
            {HOSPITAL.animals.join('・')}の幅広い診療に対応しています
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="rounded-2xl border border-primary-light bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="text-3xl" role="img" aria-hidden>
                {s.icon}
              </span>
              <h3 className="mt-3 font-serif text-base font-bold text-text-main">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
