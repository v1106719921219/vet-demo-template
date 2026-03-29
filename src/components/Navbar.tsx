'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { HOSPITAL } from '@/lib/hospital'
import { isDemoMode } from '@/lib/config'

const navLinks = [
  { label: '診療案内', href: '#services' },
  { label: '診療時間', href: '#hours' },
  { label: 'スタッフ', href: '#director' },
  { label: '設備', href: '#equipment' },
  { label: 'アクセス', href: '#access' },
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
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isDemoMode ? 'top-11' : 'top-0'
        } ${scrolled ? 'bg-[#FBF8F2]/97 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className={`overflow-hidden rounded-xl transition-all ${scrolled ? 'bg-white shadow-sm' : 'bg-white/15 backdrop-blur-sm'}`}>
              <Image
                src="/logo.png"
                alt={HOSPITAL.name}
                width={40}
                height={40}
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-serif text-[15px] font-semibold tracking-wide ${scrolled ? 'text-primary' : 'text-white'}`}>
                バウミュウ
              </span>
              <span className={`text-[10px] tracking-wider ${scrolled ? 'text-gray-400' : 'text-white/60'}`}>
                動物病院
              </span>
            </div>
          </Link>

          {/* デスクトップメニュー */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
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
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled ? 'text-primary' : 'text-white/80 hover:text-white'
              }`}
            >
              <Phone size={14} />
              {HOSPITAL.phone}
            </a>
            <Link
              href="/reservation"
              className="rounded-full bg-accent px-5 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              ご予約
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
        <div className="fixed inset-0 z-[100] flex flex-col bg-[#2C2416]">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2.5">
              <div className="overflow-hidden rounded-xl bg-white/10">
                <Image src="/logo.png" alt={HOSPITAL.name} width={36} height={36} className="object-contain p-1" />
              </div>
              <span className="font-serif text-sm font-bold text-white">{HOSPITAL.name}</span>
            </div>
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
            <Link
              href="/reservation"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-accent px-8 py-3 font-serif text-xl font-bold text-white"
            >
              ご予約
            </Link>
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
