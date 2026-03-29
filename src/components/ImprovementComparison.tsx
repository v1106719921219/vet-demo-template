'use client'

import { motion } from 'framer-motion'
import { HOSPITAL, ComparisonSection } from '@/lib/hospital'

// comparison未設定時のフォールバック
function getAutoSection(hospital: typeof HOSPITAL): ComparisonSection {
  const { weakness, name } = hospital
  const items = [
    weakness.mobile === false && {
      label: 'スマホで見たとき',
      before: '崩れて読めない',
      after: '美しく表示',
      impact: '→ 78%の飼い主に届いていない',
      stat: 'スマホ検索は全体の78%',
      active: true,
    },
    weakness.reservation_form === false && {
      label: '夜中の問い合わせ',
      before: '電話のみ',
      after: '24時間受付',
      impact: '→ 翌朝には別院の患者になっている',
      stat: '問い合わせの32%は診療時間外に発生',
      active: true,
    },
    weakness.ssl === false && {
      label: 'Google検索順位',
      before: 'SSL非対応で圏外',
      after: '上位表示へ',
      impact: '→ 見つけてもらえない',
      active: true,
    },
    weakness.last_update_year < 2021 && {
      label: '第一印象の信頼感',
      before: `更新 ${weakness.last_update_year}年`,
      after: `${new Date().getFullYear()}年 最新`,
      impact: '→「まだやってるの？」と思われる',
      active: true,
    },
    weakness.response_time_ms > 2000 && {
      label: 'サイトを開いた瞬間',
      before: `${(weakness.response_time_ms / 1000).toFixed(1)}秒で離脱`,
      after: '1秒以内に表示',
      impact: '→ 読み込みが遅く閉じられる',
      stat: '読み込み3秒超で53%が離脱',
      active: true,
    },
  ].filter(Boolean) as ComparisonSection['items']

  return {
    headline: '今日、何人の飼い主が\n別の病院を選びましたか？',
    subtext: 'スマートフォン検索が78%を占める今、サイトの第一印象で来院を決める飼い主が増えています。',
    closing: `先生の実績と信頼が、\nサイトのせいで届いていないかもしれません。`,
    items,
  }
}

export default function ImprovementComparison() {
  const section = HOSPITAL.comparison ?? getAutoSection(HOSPITAL)
  const items = section.items.filter((item) => item.active)

  if (items.length === 0) return null

  return (
    <section className="bg-[#1A1A1A] py-24 px-4">
      <div className="mx-auto max-w-4xl">

        {/* ヘッドライン */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-3xl font-bold leading-snug text-white sm:text-4xl">
            {section.headline.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < section.headline.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-zinc-400 max-w-xl mx-auto">
            {section.subtext}
          </p>
        </motion.div>

        {/* 比較テーブル */}
        <motion.div
          className="overflow-hidden rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* ヘッダー行（sm以上のみ表示） */}
          <div className="hidden sm:grid grid-cols-[1fr_1fr_1fr] border-b border-white/10 bg-white/5 px-5 py-3 text-xs font-medium text-zinc-500">
            <span></span>
            <span className="text-center">現在のサイト</span>
            <span className="text-center">このサイト</span>
          </div>

          {/* データ行 */}
          {items.map((item, i) => (
            <div
              key={item.label}
              className={i < items.length - 1 ? 'border-b border-white/[0.06]' : ''}
            >
              {/* モバイル：カードレイアウト */}
              <div className="sm:hidden px-4 py-4 space-y-3">
                <div>
                  <p className="text-sm font-medium text-white">{item.label}</p>
                  {item.impact && (
                    <p className="mt-1 text-xs text-zinc-500 leading-relaxed">{item.impact}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <span className="flex-1 text-center rounded-lg bg-red-500/10 border border-red-500/20 px-2 py-2 text-xs text-red-400 leading-snug">
                    ✗ {item.before}
                  </span>
                  <span className="flex-1 text-center rounded-lg bg-green-500/10 border border-green-500/20 px-2 py-2 text-xs text-green-400 leading-snug">
                    ✓ {item.after}
                  </span>
                </div>
                {item.stat && (
                  <p className="text-[10px] text-zinc-600 leading-tight">{item.stat}</p>
                )}
              </div>

              {/* デスクトップ：3カラムグリッド */}
              <div className="hidden sm:grid grid-cols-[1fr_1fr_1fr] px-5 py-4">
                <div className="pr-4">
                  <p className="text-sm font-medium text-white">{item.label}</p>
                  {item.impact && (
                    <p className="mt-1 text-xs text-zinc-500 leading-relaxed">{item.impact}</p>
                  )}
                </div>
                <div className="flex flex-col items-center justify-center text-center px-2">
                  <span className="inline-block rounded-lg bg-red-500/10 border border-red-500/20 px-3 py-1.5 text-xs text-red-400 leading-snug">
                    ✗ {item.before}
                  </span>
                  {item.stat && (
                    <p className="mt-2 text-[10px] text-zinc-600 leading-tight">{item.stat}</p>
                  )}
                </div>
                <div className="flex items-center justify-center text-center px-2">
                  <span className="inline-block rounded-lg bg-green-500/10 border border-green-500/20 px-3 py-1.5 text-xs text-green-400 leading-snug">
                    ✓ {item.after}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* クロージング */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="font-serif text-xl font-bold text-white leading-relaxed">
            {section.closing.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < section.closing.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
          <div className="mt-8">
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_DEMO_CONTACT ?? ''}`}
              className="inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/20 transition-opacity hover:opacity-90"
            >
              このサイトについて問い合わせる
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
