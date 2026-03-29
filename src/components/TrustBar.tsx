import { Calendar, Scan, Car, HeartHandshake } from 'lucide-react'
import { HOSPITAL } from '@/lib/hospital'

function getSundayLabel(hospital: typeof HOSPITAL): string {
  const sun = hospital.hours['日']
  if (!sun) return '平日のみ診療'
  return '日祝も午前診療'
}

function getTrustItems(hospital: typeof HOSPITAL) {
  return [
    {
      Icon: Calendar,
      label: getSundayLabel(hospital),
      sub: '地域に根付いた安心',
    },
    {
      Icon: Scan,
      label: hospital.equipment?.includes('CT・MRI') ? 'CT・MRI完備' : '充実した検査設備',
      sub: '高度医療にも対応',
    },
    {
      Icon: Car,
      label: hospital.parking === 'あり（無料）' || hospital.parking === 'あり' ? '駐車場無料' : '駐車場あり',
      sub: 'お車でも安心',
    },
    {
      Icon: HeartHandshake,
      label: hospital.features.includes('高度医療センター連携') ? '高度医療と連携' : '専門病院と連携',
      sub: '難しい病気も対応',
    },
  ]
}

export default function TrustBar() {
  const items = getTrustItems(HOSPITAL)

  return (
    <section className="bg-cream border-b border-wood/20 py-6">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3 py-2">
              <div className="flex-shrink-0">
                <item.Icon size={32} className="text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-bold text-primary">{item.label}</p>
                <p className="text-xs text-muted">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
