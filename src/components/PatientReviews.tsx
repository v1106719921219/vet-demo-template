'use client'
import SectionLabel from '@/components/SectionLabel'
import { HOSPITAL } from '@/lib/hospital'

const stars = (n: number) => '★★★★★☆☆☆☆☆'.slice(5 - n, 10 - n)

const reviews = [
  {
    q: '何でも相談できて安心できる先生です。代々お世話になっています。',
    who: '柴犬のオーナー',
    pet: 'SHIBA INU · DOG',
    av: 'S',
    stars: 5,
  },
  {
    q: 'ベテランの先生の診る目と技術に感謝しています。',
    who: 'スコティッシュのオーナー',
    pet: 'SCOTTISH FOLD · CAT',
    av: 'C',
    stars: 5,
  },
  {
    q: '旅行中も預かってくれて、散歩もさせてくれました。',
    who: 'トイプードルのオーナー',
    pet: 'TOY POODLE · DOG',
    av: 'T',
    stars: 4,
  },
]

const PatientReviews = () => {
  return (
    <section
      className="section section-pad"
      id="reviews"
      style={{ background: 'var(--bone-warm)' }}
    >
      <SectionLabel
        idx="06"
        label="Patient Reviews"
        jp="飼い主さまの声"
        meta="CH. 05 / 06"
      />

      <div className="reviews-head">
        <h2>
          飼い主さまから、
          <br />
          いただいた言葉。
        </h2>
        <div className="rating-badge">
          <span className="rating">{HOSPITAL.google_rating ?? 4.2}</span>
          <span className="stars">{stars(5)}</span>
          <span>{HOSPITAL.review_count ?? 18}件のレビュー</span>
        </div>
      </div>

      <div className="reviews-list">
        {reviews.map((r, i) => (
          <div className="review" key={i}>
            <div className="quote-mark">&ldquo;</div>
            <p>{r.q}</p>
            <div className="review-meta">
              <span className="avatar">{r.av}</span>
              <span className="who">{r.who}</span>
              <span className="stars">{stars(r.stars)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PatientReviews
