'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { HOSPITAL } from '@/lib/hospital'

const navLinks = [
  { label: '診療案内', href: '#services' },
  { label: '診療時間', href: '#hours' },
  { label: 'スタッフ', href: '#director' },
  { label: '設備', href: '#equipment' },
  { label: 'アクセス', href: '#access' },
  { label: 'ご予約', href: '/reservation' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white text-sm font-bold font-serif">
              バウ
            </div>
            <span className={`font-serif text-sm font-bold leading-tight ${scrolled ? 'text-text-main' : 'text-white'}`}>
              {HOSPITAL.name}
            </span>
          </Link>

          {/* デスクトップメニュー */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.slice(0, -1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-primary ${
                  scrolled ? 'text-text-main' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/reservation"
              className="rounded-full bg-accent px-5 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              ご予約はこちら
            </Link>
          </nav>

          {/* モバイルハンバーガー */}
          <button
            className={`lg:hidden p-2 ${scrolled ? 'text-text-main' : 'text-white'}`}
            onClick={() => setMenuOpen(true)}
            aria-label="メニューを開く"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* モバイルオーバーレイメニュー */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-primary">
          <div className="flex items-center justify-between px-6 py-4">
            <span className="font-serif text-sm font-bold text-white">{HOSPITAL.name}</span>
            <button onClick={() => setMenuOpen(false)} className="text-white p-2" aria-label="メニューを閉じる">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-2xl text-white transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="p-6 text-center">
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              className="flex items-center justify-center gap-2 text-white/80 text-sm"
            >
              <Phone size={16} />
              {HOSPITAL.phone}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
