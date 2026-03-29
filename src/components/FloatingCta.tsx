'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { HOSPITAL } from '@/lib/hospital'

export default function FloatingCta() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2.5 sm:hidden">
      {/* LINEボタン */}
      {HOSPITAL.line_url && (
        <a
          href={HOSPITAL.line_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-[#06C755] px-5 py-3 text-sm font-bold text-white shadow-xl transition-transform hover:scale-105 active:scale-95"
        >
          <MessageCircle size={16} />
          <span>LINE相談</span>
        </a>
      )}

      {/* 電話ボタン */}
      <a
        href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
        className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white shadow-xl transition-transform hover:scale-105 active:scale-95"
      >
        <Phone size={16} />
        <span>電話する</span>
      </a>
    </div>
  )
}
