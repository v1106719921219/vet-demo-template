'use client'

import { useState } from 'react'
import { isDemoMode } from '@/lib/config'

export function DemoBanner() {
  const [visible, setVisible] = useState(true)
  if (!isDemoMode || !visible) return null

  const contact = process.env.NEXT_PUBLIC_DEMO_CONTACT

  return (
    <div
      style={{ background: '#2A5C44' }}
      className="fixed top-0 left-0 right-0 z-[9999] h-11 flex items-center justify-between px-4 text-white text-[13px]"
    >
      <span className="truncate">
        {/* モバイル：短縮テキスト */}
        <span className="sm:hidden">🐾 デモサイトです</span>
        {/* タブレット以上：フルテキスト */}
        <span className="hidden sm:inline">
          🐾 バウミュウ動物病院様の情報を使って制作したデモサイトです。ご質問は →{' '}
          {contact && (
            <a href={`mailto:${contact}`} className="underline underline-offset-2 hover:opacity-80">
              {contact}
            </a>
          )}
        </span>
      </span>
      <button
        onClick={() => setVisible(false)}
        className="ml-4 flex-shrink-0 text-white/70 hover:text-white text-lg leading-none"
        aria-label="バナーを閉じる"
      >
        ×
      </button>
    </div>
  )
}
