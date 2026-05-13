'use client'

import { useState } from 'react'

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className="menuBtn" onClick={() => setOpen(!open)} aria-label="メニュー">
        <span style={open ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
        <span style={open ? { opacity: 0 } : {}} />
        <span style={open ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
      </button>
      <div className={`mobileNav${open ? ' open' : ''}`} onClick={() => setOpen(false)}>
        <a href="/about">当院について</a>
        <a href="/services">診療案内</a>
        <a href="/first-visit">初めての方</a>
        <a href="/access">アクセス・診療時間</a>
        <a href="/blog">コラム・お知らせ</a>
        <a href="/faq">よくある質問</a>
        <a href="tel:0436411008" style={{ color: '#ff8a3d', fontWeight: 800 }}>電話する（0436-41-1008）</a>
      </div>
    </>
  )
}
