'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HOSPITAL } from '@/lib/hospital'
import { isDemoMode } from '@/lib/config'

export default function DirectorMessage() {
  const { director } = HOSPITAL

  return (
    <section id="director" style={{ backgroundColor: '#3A2E22' }} className="py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-white/60">Director</p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl lg:text-[36px]">院長メッセージ</h2>
          <div className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-white/30" />
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-10 lg:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* 写真エリア */}
          <div className="flex-shrink-0">
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-white/30">
              <Image
                src="/director.png"
                alt={director.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="font-serif text-lg font-bold text-white">{director.name}</p>
              <p className="text-sm text-white/70">{director.title}</p>
              {director.education && (
                <p className="mt-1 text-xs text-white/70">{director.education}</p>
              )}
              {isDemoMode && (
                <p className="mt-2 text-[10px] text-white/40">※ 写真はイメージです</p>
              )}
            </div>
          </div>

          {/* メッセージ */}
          <div className="flex-1 rounded-2xl bg-white/10 border border-white/20 p-8">
            <div className="mb-4 h-1 w-12 rounded-full" style={{ backgroundColor: '#C8A882' }} />
            <blockquote className="font-serif text-base leading-[1.9] text-white/90">
              <span className="font-serif text-4xl leading-none text-white/20 select-none" aria-hidden>&ldquo;</span>
              {director.message ?? `地域の皆様のペットのかかりつけ医として、どんな小さな悩みもお気軽にご相談ください。`}
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
