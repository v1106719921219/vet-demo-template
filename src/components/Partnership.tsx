'use client'

import { motion } from 'framer-motion'
import { HOSPITAL } from '@/lib/hospital'
import { Building2 } from 'lucide-react'

const defaultPartnerships = [
  { name: '日本獣医生命科学大学附属動物医療センター', type: '大学附属病院' },
  { name: '東京農工大学農学部附属動物医療センター', type: '大学附属病院' },
  { name: '千葉大学附属動物病院', type: '大学附属病院' },
  { name: 'いぬねこホスピタル（高度医療センター）', type: '高度医療' },
]

export default function Partnership() {
  const partnerships = HOSPITAL.partnerships ?? defaultPartnerships

  return (
    <section style={{ backgroundColor: '#3A2E22' }} className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-white/50">Network</p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl lg:text-[36px]">連携医療機関</h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-white/30" />
          <p className="mt-3 text-sm text-white/60">難しい病気も、最善の医療へつなぎます</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partnerships.map((p, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-white/10 p-2.5">
                <Building2 size={18} className="text-white/70" strokeWidth={1.5} />
              </div>
              <p className="text-[11px] font-medium text-white/40 mb-1">{p.type}</p>
              <p className="text-sm font-medium text-white leading-snug">{p.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
