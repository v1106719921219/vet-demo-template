'use client'

import { motion } from 'framer-motion'
import { HOSPITAL } from '@/lib/hospital'
import { ArrowRight } from 'lucide-react'

const defaultNews = [
  { date: '2026.03.01', category: 'お知らせ', title: '春の健康診断キャンペーンを実施しています' },
  { date: '2026.02.15', category: '診療情報', title: '猫専用待合室をリニューアルしました' },
  { date: '2026.01.20', category: 'お知らせ', title: 'CT・MRI設備を最新機器に更新しました' },
  { date: '2025.12.10', category: 'お知らせ', title: '年末年始の診療時間についてのご案内' },
]

const categoryColors: Record<string, string> = {
  'お知らせ': 'bg-primary/10 text-primary',
  '診療情報': 'bg-accent/10 text-accent',
  '採用情報': 'bg-green-100 text-green-700',
}

export default function NewsSection() {
  const news = HOSPITAL.news ?? defaultNews

  return (
    <section className="bg-white py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-primary">News</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-text-main sm:text-3xl lg:text-[36px]">お知らせ</h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
          </div>
          <a href="#" className="flex items-center gap-1 text-sm text-primary hover:opacity-70 transition-opacity">
            すべて見る <ArrowRight size={14} />
          </a>
        </motion.div>

        <div className="divide-y divide-gray-100">
          {news.slice(0, 4).map((item, i) => (
            <motion.a
              key={i}
              href="#"
              className="group flex flex-col gap-2 py-5 transition-colors hover:bg-primary-light/30 px-2 -mx-2 rounded-lg sm:flex-row sm:items-center sm:gap-6"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="flex-shrink-0 text-xs text-muted tabular-nums">{item.date}</span>
              <span className={`w-fit flex-shrink-0 rounded-full px-3 py-0.5 text-[11px] font-medium ${categoryColors[item.category] ?? 'bg-gray-100 text-gray-600'}`}>
                {item.category}
              </span>
              <span className="text-sm text-text-main group-hover:text-primary transition-colors">
                {item.title}
              </span>
              <ArrowRight size={14} className="ml-auto hidden flex-shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100 sm:block" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
