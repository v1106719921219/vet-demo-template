'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Eye, Zap, Waves, Heart, LucideIcon } from 'lucide-react'
import { HOSPITAL } from '@/lib/hospital'

const equipmentDetails: Record<string, { Icon?: LucideIcon; desc: string; featured?: boolean }> = {
  'CT・MRI': { desc: '詳細な断層画像で、腫瘍・骨・神経疾患を精密に診断します。院内完備のため専門病院への紹介なしに当日検査が可能です。', featured: true },
  '内視鏡':      { Icon: Eye,   desc: '消化管の検査・処置を、開腹せずに低侵襲で行います。' },
  'デジタルX線':  { Icon: Zap,   desc: '高精細な画像を即時取得。骨・胸部疾患の診断に使用。' },
  '超音波エコー': { Icon: Waves, desc: '内臓・心臓の状態をリアルタイムで確認できます。' },
  '猫専用待合室': { Icon: Heart, desc: '猫ちゃんが犬と分離された静かな空間でお待ちいただけます。' },
}

export default function Equipment() {
  const equipmentList = HOSPITAL.equipment ?? Object.keys(equipmentDetails)
  const featuredName = equipmentList.find((n) => equipmentDetails[n]?.featured) ?? equipmentList[0]
  const restList = equipmentList.filter((n) => n !== featuredName)

  return (
    <section id="equipment" className="bg-bg py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-primary">Equipment</p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-text-main sm:text-3xl lg:text-[36px]">設備紹介</h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-primary" />
          <p className="mt-3 text-sm text-muted">充実した設備で、最善の診断・治療を提供します</p>
        </motion.div>

        {/* CT・MRI フィーチャードカード */}
        <motion.div
          className="relative mb-6 overflow-hidden rounded-2xl"
          style={{ aspectRatio: '21/9' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/clinic-ct.png"
            alt="CT・MRI設備"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-primary-dark/20" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12">
            <p className="text-xs font-medium uppercase tracking-widest text-white/60">Featured</p>
            <h3 className="mt-2 font-serif text-2xl font-bold text-white md:text-3xl">{featuredName}</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
              {equipmentDetails[featuredName]?.desc ?? '高度な医療機器で精密な診断を行います。'}
            </p>
          </div>
        </motion.div>

        {/* その他設備カード */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {restList.map((name, i) => {
            const detail = equipmentDetails[name] ?? { Icon: Zap, desc: '高度な医療機器で精密な診断を行います。' }
            const Icon = detail.Icon ?? Zap
            return (
              <motion.div
                key={name}
                className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex-shrink-0 inline-flex items-center justify-center rounded-xl bg-primary-light p-2.5">
                  <Icon size={18} className="text-primary" strokeWidth={1.5} />
                </div>
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
