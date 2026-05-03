'use client'

interface SectionLabelProps {
  idx: string
  label: string
  jp: string
  meta?: string
}

const SectionLabel = ({ idx, label, jp, meta }: SectionLabelProps) => {
  return (
    <div className="section-label">
      <span className="idx">{idx}</span>
      <span>{label}</span>
      <span className="jp">— {jp}</span>
      {meta && <span className="meta">{meta}</span>}
    </div>
  )
}

export default SectionLabel
