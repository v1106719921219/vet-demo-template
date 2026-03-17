'use client'

import { motion } from 'framer-motion'
import { HOSPITAL } from '@/lib/hospital'

export default function ImprovementComparison() {
  const { weakness } = HOSPITAL

  const items: { label: string; before: string; after: string; active: boolean }[] = [
    {
      label: 'スマートフォン対応',
      before: '非対応（画面が崩れる）',
      after: '完全対応',
      active: !weakness.mobile,
    },
    {
      label: 'SSL（https）セキュリティ',
      before: '非対応（http）',
      after: '対応済み',
      active: !weakness.ssl,
    },
    {
      label: '24時間オンライン予約',
      before: 'なし（電話のみ）',
      after: 'あり',
      active: !weakness.reservation_form,
    },
    {
      label: '最終更新',
      before: `${weakness.last_update_year}年`,
      after: `${new Date().getFullYear()}年`,
      active: weakness.last_update_year < 2021,
    },
    {
      label: 'ページ表示速度',
      before: `遅い（${(weakness.response_time_ms / 1000).toFixed(1)}秒）`,
      after: '高速（1秒以内）',
      active: weakness.response_time_ms > 2000,
    },
  ].filter((item) => item.active)

  if (items.length === 0) return null

  return (
    <section className="bg-primary py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-white/60">Comparison</p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
            現在のサイトとの比較
          </h2>
          <p className="mt-3 text-sm text-white/70">
            このデモサイトで実現できる改善点
          </p>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid grid-cols-3 bg-white/10 py-3 px-4 text-xs font-medium text-white/70">
            <span>項目</span>
            <span className="text-center">現在のサイト</span>
            <span className="text-center">このサイト</span>
          </div>
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`grid grid-cols-3 items-center py-4 px-4 text-sm ${
                i < items.length - 1 ? 'border-b border-white/10' : ''
              }`}
            >
              <span className="font-medium text-white">{item.label}</span>
              <span className="text-center">
                <span className="inline-block rounded-full bg-red-500/20 px-2 py-1 text-xs text-red-300">
                  ✗ {item.before}
                </span>
              </span>
              <span className="text-center">
                <span className="inline-block rounded-full bg-green-500/20 px-2 py-1 text-xs text-green-300">
                  ✓ {item.after}
                </span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
