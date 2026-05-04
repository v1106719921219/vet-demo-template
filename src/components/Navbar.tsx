'use client'

import { useState } from 'react'
import Image from 'next/image'

const links = [
  { id: '#philosophy', label: '当院について' },
  { id: '#features', label: '診療案内' },
  { id: '#director', label: '院長紹介' },
  { id: '#access', label: 'アクセス' },
  { id: '#hours', label: '診療時間' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a href="#" className="nav-brand">
          <div className="nav-logo"><Image src="/logo.png" alt="バウミュウ動物病院" width={40} height={40} /></div>
          <div>
            <div className="nav-brand-text">バウミュウ動物病院</div>
            <span className="nav-brand-sub">Bow-Mew Animal Hospital</span>
          </div>
        </a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.id}><a className="nav-link" href={l.id}>{l.label}</a></li>
          ))}
        </ul>
        <div className="nav-cta">
          <div className="nav-phone">
            <small>TEL</small>
            <span>0436-41-1008</span>
          </div>
          <a href="#cta" className="btn btn-orange">ご予約 <span className="arrow">&rarr;</span></a>
          <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
