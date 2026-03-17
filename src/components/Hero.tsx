'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HOSPITAL } from '@/lib/hospital'

export default function Hero() {
  const catchcopy = HOSPITAL.catchcopy ?? `${HOSPITAL.name}\nへようこそ`
  const subcopy = HOSPITAL.subcopy ?? `${HOSPITAL.address}｜${HOSPITAL.animals.join('・')}の診療`

  return (
    <section className="relative min-h-screen overflow-hidden bg-primary">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-white" />
        <div className="absolute bottom-0 -left-32 h-80 w-80 rounded-full bg-primary-dark" />
      </div>

      {/* Blobシェイプ */}
      <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden opacity-20 lg:opacity-30">
        <svg viewBox="0 0 500 500" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M440,280Q400,360,320,400Q240,440,160,400Q80,360,60,270Q40,180,100,110Q160,40,260,40Q360,40,420,130Q480,220,440,280Z"
            fill="#2A5C44"
          />
        </svg>
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-center px-6 py-24 lg:flex-row lg:items-center lg:gap-12">
        {/* テキストエリア */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 inline-block rounded-full border border-white/30 px-4 py-1 text-xs text-white/80">
            {HOSPITAL.animals.join(' ・ ')} の診療
          </p>

          <h1 className="font-serif text-3xl font-bold leading-relaxed text-white sm:text-4xl lg:text-5xl">
            {catchcopy.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h1>

          <p className="mt-6 text-sm leading-loose text-white/80">
            {subcopy.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/reservation"
              className="flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-opacity hover:opacity-90"
            >
              ご予約・お問い合わせ
            </Link>
            <a
              href="#services"
              className="flex items-center justify-center rounded-full border border-white/40 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              診療内容を見る
            </a>
          </div>
        </motion.div>

        {/* ビジュアルエリア */}
        <motion.div
          className="relative flex-1 flex items-center justify-center mt-12 lg:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-primary-light/20 lg:h-96 lg:w-96">
            <div className="absolute inset-4 rounded-full bg-primary-light/20" />
            {/* 写真プレースホルダー — 院長・病院写真に差し替えてください */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-white/60">
              <svg className="h-24 w-24 opacity-40" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="35" r="20" stroke="currentColor" strokeWidth="3" />
                <path d="M15 85 C15 65 85 65 85 85" stroke="currentColor" strokeWidth="3" />
                <path d="M30 55 C28 50 35 45 40 50" stroke="currentColor" strokeWidth="2" />
                <path d="M70 55 C72 50 65 45 60 50" stroke="currentColor" strokeWidth="2" />
              </svg>
              <p className="text-xs text-center text-white/50">
                {/* 院長・病院写真に<br />差し替えてください */}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 下部の波形 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FAFAF7" />
        </svg>
      </div>
    </section>
  )
}
