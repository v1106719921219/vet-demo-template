'use client'

import { motion } from 'framer-motion'
import { HOSPITAL } from '@/lib/hospital'

export default function DirectorMessage() {
  const { director } = HOSPITAL

  return (
    <section id="director" className="bg-primary-light py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-primary">Director</p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-text-main sm:text-3xl">院長メッセージ</h2>
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
            {/* 院長写真に差し替えてください */}
            <div className="flex h-48 w-48 items-center justify-center rounded-full bg-primary/20 text-primary/40">
              <svg className="h-24 w-24" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="38" r="22" stroke="currentColor" strokeWidth="3" fill="none" />
                <path d="M12 88 C12 65 88 65 88 88" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </div>
            <div className="mt-4 text-center">
              <p className="font-serif text-lg font-bold text-text-main">{director.name}</p>
              <p className="text-sm text-muted">{director.title}</p>
              {director.education && (
                <p className="mt-1 text-xs text-muted">{director.education}</p>
              )}
            </div>
          </div>

          {/* メッセージ */}
          <div className="flex-1 rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-4 h-1 w-12 rounded-full bg-primary" />
            <blockquote className="font-serif text-base leading-loose text-text-main">
              &ldquo;{director.message ?? `地域の皆様のペットのかかりつけ医として、どんな小さな悩みもお気軽にご相談ください。`}&rdquo;
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
