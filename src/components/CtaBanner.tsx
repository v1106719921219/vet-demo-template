'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, MessageCircle, CalendarDays } from 'lucide-react'
import { HOSPITAL } from '@/lib/hospital'
import { getClinicStatus, type ClinicStatusResult } from '@/lib/clinicStatus'

const badgeStyles: Record<ClinicStatusResult['badgeColor'], string> = {
  green:  'bg-green-500 text-white',
  yellow: 'bg-yellow-400 text-yellow-900',
  gray:   'bg-white/20 text-white/80',
  blue:   'bg-blue-400 text-white',
}

export default function CtaBanner() {
  const [clinicStatus, setClinicStatus] = useState<ClinicStatusResult | null>(null)

  useEffect(() => {
    setClinicStatus(getClinicStatus())
    const timer = setInterval(() => setClinicStatus(getClinicStatus()), 60000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section style={{ backgroundColor: '#3A2E22' }} className="py-20 px-4">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-white/50 mb-4">Contact</p>

        <h2 className="font-serif text-4xl font-bold text-white lg:text-[48px] leading-snug">
          大切な命に、<br />
          <span className="text-accent">いつでも。</span>
        </h2>

        {/* 診療ステータスバッジ */}
        {clinicStatus && (
          <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
            <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${badgeStyles[clinicStatus.badgeColor]}`}>
              ● {clinicStatus.label}
            </span>
            <span className="text-white/60 text-sm">{clinicStatus.subLabel}</span>
          </div>
        )}

        {/* 3択CTA */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* 電話 */}
          <a
            href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-6 py-6 transition-all hover:bg-white/10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
              <Phone size={22} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-white/50 mb-1">お電話で予約</p>
              <p className="font-serif text-lg font-bold text-white">{HOSPITAL.phone}</p>
              <p className="text-xs text-white/40 mt-1">受付：診療時間内</p>
            </div>
          </a>

          {/* LINE */}
          {HOSPITAL.line_url && (
            <a
              href={HOSPITAL.line_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-2xl border border-[#06C755]/40 bg-[#06C755]/10 px-6 py-6 transition-all hover:bg-[#06C755]/20"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06C755]/20 group-hover:bg-[#06C755]/30 transition-colors">
                <MessageCircle size={22} className="text-[#06C755]" />
              </div>
              <div>
                <p className="text-xs text-white/50 mb-1">LINEで気軽に相談</p>
                <p className="font-serif text-lg font-bold text-white">LINE公式</p>
                <p className="text-xs text-white/40 mt-1">24時間メッセージ可</p>
              </div>
            </a>
          )}

          {/* フォーム */}
          <Link
            href="/reservation"
            className="group flex flex-col items-center gap-3 rounded-2xl border border-accent/40 bg-accent/10 px-6 py-6 transition-all hover:bg-accent/20"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
              <CalendarDays size={22} className="text-accent" />
            </div>
            <div>
              <p className="text-xs text-white/50 mb-1">Web予約フォーム</p>
              <p className="font-serif text-lg font-bold text-white">予約する</p>
              <p className="text-xs text-white/40 mt-1">24時間受付</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
