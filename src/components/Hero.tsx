'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { HOSPITAL } from '@/lib/hospital'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const catchcopy = HOSPITAL.catchcopy ?? `${HOSPITAL.name}\nへようこそ`
  const subcopy = HOSPITAL.subcopy ?? `${HOSPITAL.address}｜${HOSPITAL.animals.join('・')}の診療`
  const lines = catchcopy.split('\n')

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src="/hero-vet.png"
        alt="動物病院イメージ"
        fill
        className="object-cover object-top"
        priority
      />

      {/* 温かみのあるグラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2D3E2E]/90 via-[#3A5C3C]/70 to-[#5C7A5E]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2C2416]/50 via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-start justify-center px-6 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 動物バッジ */}
          <motion.p
            variants={itemVariants}
            className="mb-6 inline-block rounded-full border border-[#C8A882]/50 bg-[#C8A882]/10 px-4 py-1.5 text-xs text-[#F5EDD8]/90 backdrop-blur-sm"
          >
            {HOSPITAL.animals.join(' ・ ')} の診療
          </motion.p>

          {/* キャッチコピー（1行ずつstagger） */}
          <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[56px]">
            {lines.map((line, i) => (
              <motion.span key={i} variants={itemVariants} className="block">
                {line}
              </motion.span>
            ))}
          </h1>

          {/* サブコピー */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base leading-[1.9] text-white/80 sm:text-lg max-w-xl"
          >
            {subcopy.split('\n').map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </motion.p>

          {/* 住所 */}
          <motion.p variants={itemVariants} className="mt-3 text-sm text-[#C8A882]/80">
            {HOSPITAL.address.replace(/^〒\S+\s*/, '')} ｜ {HOSPITAL.access}
          </motion.p>

          {/* ボタン */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-3 sm:flex-row">
            {HOSPITAL.line_url && (
              <a
                href={HOSPITAL.line_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#06C755] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-opacity hover:opacity-90"
              >
                <MessageCircle size={16} />
                LINEで気軽に相談
              </a>
            )}
            <Link
              href="/reservation"
              className="flex items-center justify-center rounded-full border border-[#C8A882]/50 bg-[#C8A882]/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-[#C8A882]/20"
            >
              ご予約フォームへ
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* スクロールインジケーター */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] text-[#C8A882]/70 uppercase tracking-widest">Scroll</span>
          <ChevronDown size={16} className="text-[#C8A882]/70" />
        </motion.div>
      </motion.div>

      {/* 下部の有機的な波形 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,30 1440,60 L1440,100 L0,100 Z" fill="#FBF8F2" />
        </svg>
      </div>
    </section>
  )
}
