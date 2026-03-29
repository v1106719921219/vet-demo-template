'use client'

import { motion } from 'framer-motion'
import { HOSPITAL } from '@/lib/hospital'

const defaultReviews = [
  { text: '何でも相談できて安心できる先生です。', author: '犬のオーナー' },
  { text: 'ベテランの先生に長年お世話になっています。', author: '猫のオーナー' },
  { text: '地域で評判の動物病院です。', author: '犬のオーナー' },
]

const avatarColors = ['bg-primary', 'bg-accent', 'bg-primary-dark']

export default function PatientReviews() {
  const reviews = HOSPITAL.reviews ?? defaultReviews

  return (
    <section className="bg-bg py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-primary">Reviews</p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-text-main sm:text-3xl lg:text-[36px]">患者様の声</h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-primary" />
          {HOSPITAL.google_rating && (
            <p className="mt-3 text-sm text-muted">
              Googleマップ評価 ★{HOSPITAL.google_rating}（{HOSPITAL.review_count}件）
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.slice(0, 3).map((review, i) => {
            const starCounts = [5, 5, 4]
            const stars = starCounts[i] ?? 5
            const initial = review.author.charAt(0)
            const colorClass = avatarColors[i % avatarColors.length]
            return (
              <motion.div
                key={i}
                className="relative rounded-2xl bg-cream p-6 shadow-sm overflow-hidden border border-wood/15"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* 装飾的な大引用符 */}
                <span
                  className="absolute -top-2 right-4 select-none font-serif text-[80px] leading-none text-primary/10"
                  aria-hidden
                >
                  &ldquo;
                </span>

                <div className="mb-3 flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className={`text-sm ${j < stars ? 'text-accent' : 'text-gray-300'}`}>
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-text-main">{review.text}</p>

                <div className="mt-4 flex items-center gap-2">
                  <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${colorClass} text-xs font-bold text-white`}>
                    {initial}
                  </div>
                  <p className="text-xs text-muted">{review.author}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
