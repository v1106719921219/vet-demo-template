import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Car, Navigation } from 'lucide-react'
import { HOSPITAL } from '@/lib/hospital'

const DAYS = ['月', '火', '水', '木', '金', '土', '日', '祝'] as const

export default function Footer() {
  const { hours } = HOSPITAL

  return (
    <footer style={{ backgroundColor: '#2A2018' }} className="py-14 px-4 text-white/80">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* 病院情報 */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="overflow-hidden rounded-xl bg-white/10 p-1">
                <Image src="/logo.png" alt={HOSPITAL.name} width={36} height={36} className="object-contain" />
              </div>
              <div>
                <p className="font-serif text-sm font-bold text-white">{HOSPITAL.name}</p>
                <p className="text-[10px] text-white/40 tracking-wider">Bowmew Animal Hospital</p>
              </div>
            </div>
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-2">
                <MapPin size={13} className="mt-0.5 flex-shrink-0 text-white/40" />
                {HOSPITAL.address}
              </p>
              <p className="flex items-start gap-2">
                <Navigation size={13} className="mt-0.5 flex-shrink-0 text-white/40" />
                {HOSPITAL.access}
              </p>
              <p className="flex items-start gap-2">
                <Car size={13} className="mt-0.5 flex-shrink-0 text-white/40" />
                駐車場{HOSPITAL.parking}
              </p>
            </div>
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              className="mt-4 flex items-center gap-2 text-sm font-bold text-white hover:opacity-80 transition-opacity"
            >
              <Phone size={14} />
              {HOSPITAL.phone}
            </a>
          </div>

          {/* 診療時間 */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">診療時間</h3>
            <div className="space-y-1.5 text-xs">
              {DAYS.filter((d) => d in hours).map((day) => {
                const s = hours[day]
                return (
                  <div key={day} className="flex justify-between border-b border-white/5 pb-1.5">
                    <span className="text-white/60">{day}曜</span>
                    <span>
                      {!s ? (
                        <span className="text-red-400">休診</span>
                      ) : (
                        <>
                          {s.am}
                          {s.pm ? ` / ${s.pm}` : <span className="text-white/40"> ／ 午後休</span>}
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
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">メニュー</h3>
            <nav className="space-y-2.5 text-xs">
              <a href="#services"  className="block hover:text-white transition-colors">診療案内</a>
              <a href="#hours"     className="block hover:text-white transition-colors">診療時間・アクセス</a>
              <a href="#director"  className="block hover:text-white transition-colors">院長メッセージ</a>
              <a href="#equipment" className="block hover:text-white transition-colors">設備紹介</a>
              <Link href="/reservation" className="block hover:text-white transition-colors">ご予約</Link>
            </nav>

            <div className="mt-8 rounded-xl bg-white/5 p-4">
              <p className="text-xs text-white/40 mb-1">ご予約・お問い合わせ</p>
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="font-serif text-xl font-bold text-white hover:opacity-80 transition-opacity"
              >
                {HOSPITAL.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col items-center gap-1 text-center text-xs text-white/30">
          <p>© {new Date().getFullYear()} {HOSPITAL.name}. All Rights Reserved.</p>
          <p className="text-[10px]">千葉県市原市のかかりつけ動物病院</p>
        </div>
      </div>
    </footer>
  )
}
