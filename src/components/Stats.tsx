'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { HOSPITAL } from '@/lib/hospital'

interface StatItem {
  prefix?: string
  numValue?: number
  decimals?: number
  textValue?: string
  suffix?: string
  label: string
  sub: string
}

function getStats(hospital: typeof HOSPITAL): StatItem[] {
  return [
    {
      prefix: '★',
      numValue: hospital.google_rating ?? 4.0,
      decimals: 1,
      label: 'Googleマップ評価',
      sub: `${hospital.review_count ?? 10}件のクチコミ`,
    },
    {
      prefix: '週',
      numValue: 7,
      decimals: 0,
      suffix: '日',
      label: '診療日数',
      sub: '日曜・祝日も午前診療',
    },
    {
      numValue: hospital.equipment?.length ?? 5,
      decimals: 0,
      suffix: '種類',
      label: '院内検査設備',
      sub: '専門病院への紹介なしに検査可能',
    },
    {
      textValue: hospital.animals.join('・'),
      label: '対応動物',
      sub: 'なんでもご相談ください',
    },
  ]
}

function CountUp({ value, decimals = 0, duration = 1800 }: { value: number; decimals?: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setCount(parseFloat((value * eased).toFixed(decimals)))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value, decimals, duration])

  return <span ref={ref}>{count.toFixed(decimals)}</span>
}

export default function Stats() {
  const stats = getStats(HOSPITAL)

  return (
    <section className="bg-cream py-10 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="font-serif text-2xl font-bold text-primary sm:text-3xl">
                {stat.prefix}
                {stat.numValue !== undefined
                  ? <CountUp value={stat.numValue} decimals={stat.decimals ?? 0} />
                  : stat.textValue
                }
                {stat.suffix}
              </p>
              <p className="mt-1 text-sm font-medium text-text-main">{stat.label}</p>
              <p className="mt-0.5 text-xs text-muted">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
