'use client'

import { HOSPITAL } from '@/lib/hospital'

export default function FloatingCta() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'rgba(28,28,26,0.92)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        padding: '10px 16px',
        display: 'flex',
        gap: 10,
      }}
      className="md:hidden"
    >
      <a
        href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
        className="btn"
        style={{
          flex: 1,
          justifyContent: 'center',
          background: 'var(--forest)',
          color: 'var(--bone)',
          borderColor: 'var(--forest)',
          fontSize: 13,
          padding: '12px 0',
        }}
      >
        {'\u260E \u96FB\u8A71\u3059\u308B'}
      </a>
      {HOSPITAL.line_url && (
        <a
          href={HOSPITAL.line_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{
            flex: 1,
            justifyContent: 'center',
            background: '#06C755',
            color: '#fff',
            borderColor: '#06C755',
            fontSize: 13,
            padding: '12px 0',
          }}
        >
          {'LINE\u76F8\u8AC7'}
        </a>
      )}
    </div>
  )
}
