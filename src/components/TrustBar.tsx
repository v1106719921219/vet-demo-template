import { HOSPITAL } from '@/lib/hospital'

// 診療時間データから日曜診療の有無を動的に判定
function getSundayLabel(hospital: typeof HOSPITAL): string {
  const sun = hospital.hours['日']
  if (!sun) return '平日のみ診療'
  return '日祝も午前診療'
}

function getTrustItems(hospital: typeof HOSPITAL) {
  const items = [
    {
      icon: '🏥',
      label: getSundayLabel(hospital),
      sub: '地域に根付いた安心',
    },
    {
      icon: '🔬',
      label: hospital.equipment?.includes('CT・MRI') ? 'CT・MRI完備' : '充実した検査設備',
      sub: '高度医療にも対応',
    },
    {
      icon: '🚗',
      label: hospital.parking === 'あり（無料）' || hospital.parking === 'あり' ? '駐車場無料' : '駐車場あり',
      sub: 'お車でも安心',
    },
    {
      icon: '🤝',
      label: hospital.features.includes('高度医療センター連携') ? '高度医療と連携' : '専門病院と連携',
      sub: '難しい病気も対応',
    },
  ]
  return items
}

export default function TrustBar() {
  const items = getTrustItems(HOSPITAL)

  return (
    <section className="bg-white border-b border-primary-light py-6">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3 py-2">
              <span className="text-2xl" role="img" aria-hidden>
                {item.icon}
              </span>
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
