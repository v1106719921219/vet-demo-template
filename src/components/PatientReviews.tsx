'use client'

import { motion } from 'framer-motion'
import { HOSPITAL } from '@/lib/hospital'

const defaultReviews = [
  { text: '何でも相談できて安心できる先生です。', author: '犬のオーナー' },
  { text: 'ベテランの先生に長年お世話になっています。', author: '猫のオーナー' },
  { text: '地域で評判の動物病院です。', author: '犬のオーナー' },
]

export default function PatientReviews() {
  const reviews = HOSPITAL.reviews ?? defaultReviews

  return (
    <section className="bg-primary-light py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-primary">Reviews</p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-text-main sm:text-3xl">患者様の声</h2>
          {HOSPITAL.google_rating && (
            <p className="mt-3 text-sm text-muted">
              Googleマップ評価 ★{HOSPITAL.google_rating}（{HOSPITAL.review_count}件）
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.slice(0, 3).map((review, i) => (
            <motion.div
              key={i}
              className="rounded-2xl bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-3 flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-accent text-sm">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-text-main">&ldquo;{review.text}&rdquo;</p>
              <p className="mt-4 text-xs text-muted">— {review.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
