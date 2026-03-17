import Link from 'next/link'
import { HOSPITAL } from '@/lib/hospital'

export default function CtaBanner() {
  return (
    <section
      className="py-16 px-4 text-center"
      style={{ backgroundColor: '#3D7A5E' }}
    >
      <p className="font-serif text-xl font-bold text-white sm:text-2xl">まずはお電話ください</p>
      <a
        href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
        className="mt-4 block font-serif text-4xl font-bold text-white hover:opacity-80 transition-opacity sm:text-5xl"
      >
        {HOSPITAL.phone}
      </a>
      <p className="mt-2 text-sm text-white/70">
        受付時間：診療時間中（年末年始を除く）
      </p>
      <div className="mt-8">
        <Link
          href="/reservation"
          className="inline-block rounded-full border-2 border-white px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-primary"
        >
          ご予約フォームはこちら
        </Link>
      </div>
    </section>
  )
}
