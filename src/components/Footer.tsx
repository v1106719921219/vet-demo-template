import Link from 'next/link'
import { HOSPITAL } from '@/lib/hospital'

const DAYS = ['月', '火', '水', '木', '金', '土', '日', '祝'] as const

export default function Footer() {
  const { hours } = HOSPITAL

  return (
    <footer className="bg-primary-dark py-12 px-4 text-white/80">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* 病院情報 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white text-xs font-bold font-serif">
                バウ
              </div>
              <span className="font-serif text-sm font-bold text-white">{HOSPITAL.name}</span>
            </div>
            <p className="text-xs leading-relaxed">
              {HOSPITAL.address}
            </p>
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              className="mt-2 block text-sm font-bold text-white hover:opacity-80"
            >
              TEL: {HOSPITAL.phone}
            </a>
            {HOSPITAL.fax && (
              <p className="mt-1 text-xs">FAX: {HOSPITAL.fax}</p>
            )}
          </div>

          {/* 診療時間 */}
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-white/50">診療時間</h3>
            <div className="space-y-1 text-xs">
              {DAYS.filter((d) => d in hours).map((day) => {
                const s = hours[day]
                return (
                  <div key={day} className="flex justify-between">
                    <span>{day}曜</span>
                    <span>
                      {!s ? (
                        <span className="text-red-400">休診</span>
                      ) : (
                        <>
                          {s.am}
                          {s.pm ? ` / ${s.pm}` : ' ／ 午後休'}
                        </>
                      )}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ナビ */}
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-white/50">メニュー</h3>
            <nav className="space-y-2 text-xs">
              <a href="#services" className="block hover:text-white transition-colors">診療案内</a>
              <a href="#hours" className="block hover:text-white transition-colors">診療時間</a>
              <a href="#director" className="block hover:text-white transition-colors">院長メッセージ</a>
              <a href="#equipment" className="block hover:text-white transition-colors">設備紹介</a>
              <a href="#access" className="block hover:text-white transition-colors">アクセス</a>
              <Link href="/reservation" className="block hover:text-white transition-colors">ご予約</Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} {HOSPITAL.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
