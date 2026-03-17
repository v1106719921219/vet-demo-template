'use client'

import { motion } from 'framer-motion'
import { HOSPITAL } from '@/lib/hospital'

const equipmentDetails: Record<string, { icon: string; desc: string }> = {
  'CT・MRI': { icon: '🔬', desc: '詳細な断層画像で、腫瘍・骨・神経疾患を精密に診断します。' },
  '内視鏡': { icon: '🩻', desc: '消化管の検査・処置を、開腹せずに低侵襲で行います。' },
  'デジタルX線': { icon: '📡', desc: '高精細な画像を即時取得。骨・胸部疾患の診断に使用。' },
  '超音波エコー': { icon: '📊', desc: '内臓・心臓の状態をリアルタイムで確認できます。' },
  '猫専用待合室': { icon: '🐱', desc: '猫ちゃんが犬と分離された静かな空間でお待ちいただけます。' },
}

export default function Equipment() {
  const equipmentList = HOSPITAL.equipment ?? Object.keys(equipmentDetails)

  return (
    <section id="equipment" className="bg-white py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-primary">Equipment</p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-text-main sm:text-3xl">設備紹介</h2>
          <p className="mt-3 text-sm text-muted">充実した設備で、最善の診断・治療を提供します</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {equipmentList.map((name, i) => {
            const detail = equipmentDetails[name] ?? { icon: '⚕️', desc: '高度な医療機器で精密な診断を行います。' }
            return (
              <motion.div
                key={name}
                className="flex items-start gap-4 rounded-2xl border border-primary-light bg-primary-light/40 p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="text-2xl flex-shrink-0" role="img" aria-hidden>
                  {detail.icon}
                </span>
                <div>
                  <h3 className="font-serif text-sm font-bold text-text-main">{name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{detail.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
