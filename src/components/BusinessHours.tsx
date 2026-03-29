import { HOSPITAL, DaySchedule } from '@/lib/hospital'
import { MapPin, Navigation, Car } from 'lucide-react'

const DAYS = ['月', '火', '水', '木', '金', '土', '日', '祝'] as const

function getCellClass(day: string, schedule: DaySchedule): string {
  if (!schedule) return 'text-red-500 font-medium'
  if (!schedule.pm) return 'text-accent font-medium'
  return 'text-primary font-medium'
}

function getCellLabel(schedule: DaySchedule): React.ReactNode {
  if (!schedule) return <span className="text-red-500">休診</span>
  return (
    <>
      <span className="text-primary">{schedule.am}</span>
      {schedule.pm ? (
        <span className="block text-primary">{schedule.pm}</span>
      ) : (
        <span className="block text-accent text-xs">午後休診</span>
      )}
    </>
  )
}

export default function BusinessHours() {
  const { hours, phone, address } = HOSPITAL

  return (
    <section id="hours" className="bg-white py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">Hours</p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-text-main sm:text-3xl lg:text-[36px]">診療時間・アクセス</h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* 診療時間テーブル */}
          <div>
            <div className="overflow-hidden rounded-2xl border border-primary-light">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-3 px-4 text-left text-xs font-medium tracking-wider">曜日</th>
                    <th className="py-3 px-4 text-left text-xs font-medium tracking-wider">午前</th>
                    <th className="py-3 px-4 text-left text-xs font-medium tracking-wider">午後</th>
                  </tr>
                </thead>
                <tbody>
                  {DAYS.filter((d) => d in hours).map((day, i) => {
                    const schedule = hours[day]
                    return (
                      <tr
                        key={day}
                        className={`border-t border-primary-light ${i % 2 === 0 ? 'bg-white' : 'bg-primary-light/30'}`}
                      >
                        <td className="py-3 px-4 font-bold text-text-main">{day}</td>
                        <td className={`py-3 px-4 ${getCellClass(day, schedule)}`}>
                          {!schedule ? '' : schedule.am}
                        </td>
                        <td className={`py-3 px-4 ${getCellClass(day, schedule)}`}>
                          {!schedule ? (
                            <span className="text-red-500 text-xs font-medium">休診</span>
                          ) : schedule.pm ? (
                            schedule.pm
                          ) : (
                            <span className="text-accent text-xs">午後休診</span>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {/* 凡例・注記 */}
            <div className="mt-4 flex gap-4 text-xs text-muted">
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded-full bg-accent" />
                午後休診
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded-full bg-red-400" />
                終日休診
              </span>
            </div>

            {/* 電話番号 */}
            <div className="mt-6 rounded-2xl bg-primary p-4">
              <p className="text-xs text-white/70">お電話でのご予約・お問い合わせ</p>
              <a
                href={`tel:${phone.replace(/-/g, '')}`}
                className="mt-1 block font-serif text-2xl font-bold text-white hover:opacity-80"
              >
                {phone}
              </a>
            </div>
          </div>

          {/* アクセス */}
          <div id="access">
            <div className="rounded-2xl overflow-hidden border border-primary-light">
              {/* Googleマップ埋め込み */}
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed&z=16&hl=ja`}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="病院の地図"
              />
            </div>
            <div className="mt-4 space-y-2 text-sm text-text-main">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                {address}
              </p>
              <p className="flex items-start gap-2">
                <Navigation size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                {HOSPITAL.access}
              </p>
              <p className="flex items-start gap-2">
                <Car size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                駐車場{HOSPITAL.parking}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
