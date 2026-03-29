'use client'

import { motion } from 'framer-motion'
import { Stethoscope, Syringe, Scan, Microscope, Scissors, Home } from 'lucide-react'
import { HOSPITAL } from '@/lib/hospital'

const baseServices = [
  {
    Icon: Stethoscope,
    title: '一般内科・外科',
    desc: '体調不良・ケガ・術後ケアまで。高度医療センターとも連携し、難しい症例も対応します。',
  },
  {
    Icon: Syringe,
    title: '予防医療・ワクチン',
    desc: '混合ワクチン・フィラリア予防・狂犬病予防接種。年間の予防スケジュールを一緒に管理します。',
  },
  {
    Icon: Scan,
    title: '画像診断（CT・MRI・エコー）',
    desc: '院内にCT・MRI・内視鏡を完備。専門病院への紹介なしに精密検査が受けられます。',
  },
  {
    Icon: Microscope,
    title: '皮膚科・腫瘍科',
    desc: 'アレルギー・皮膚炎・腫瘍まで対応。じっくり時間をかけて診察します。',
  },
]

function getOptionalServices(hospital: typeof HOSPITAL) {
  const opts: { Icon: typeof Scissors; title: string; desc: string }[] = []
  if (hospital.features.includes('トリミング')) {
    opts.push({ Icon: Scissors, title: 'トリミング', desc: 'プロのトリマーが丁寧にケア。診察と同日も対応可能です。' })
  }
  if (hospital.features.includes('ペットホテル')) {
    opts.push({ Icon: Home, title: 'ペットホテル', desc: '旅行・出張中もお預かり。毎日の散歩・体調管理も行います。' })
  }
  if (opts.length === 0) {
    opts.push({ Icon: Home, title: '入院・術後ケア', desc: '安心・安全な入院環境で、回復をしっかりサポートします。' })
    opts.push({ Icon: Stethoscope, title: '専門病院との連携', desc: '高度医療センターとの連携で、難しい病気にも最善を。' })
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
          <h2 className="mt-2 font-serif text-2xl font-bold text-text-main sm:text-3xl lg:text-[36px]">診療案内</h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-primary" />
          <p className="mt-3 text-sm text-muted">
            {HOSPITAL.animals.join('・')}の幅広い診療に対応しています
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group relative rounded-2xl border border-wood/20 bg-[#FDFAF5] p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="inline-flex items-center justify-center rounded-xl bg-primary-light p-3">
                <s.Icon size={24} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="mt-3 font-serif text-base font-bold text-text-main">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              {/* ボトムアクセントライン */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
