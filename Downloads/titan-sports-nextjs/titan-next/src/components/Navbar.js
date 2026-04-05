'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/cafe', label: 'Café' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
        style={{ background: scrolled ? 'rgba(13,26,13,0.97)' : 'linear-gradient(to bottom,rgba(13,26,13,0.85),transparent)', backdropFilter: scrolled ? 'blur(12px)' : 'none' }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <img src="/images/logo.png" alt="Titan Sports Arena" className="w-10 h-10 object-contain" />
            <div className="hidden sm:block leading-none">
              <p className="font-display text-white text-xl tracking-wider leading-none">Titan Sports Arena</p>
              <p className="text-xs text-green-400 font-semibold tracking-widest uppercase" style={{ fontSize: '0.6rem' }}>Amravati</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.href} href={l.href} className={`nav-link-item ${pathname === l.href ? 'active' : ''}`}>{l.label}</Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:+919325981046" className="hidden md:flex items-center gap-2 text-white text-sm font-medium hover:text-green-400 transition-colors" style={{ fontSize: '0.82rem' }}>
              <Phone size={14} /> +91 93259 81046
            </a>
            <Link href="/book" className="hidden md:block btn-red" style={{ padding: '10px 20px', fontSize: '0.74rem' }}>Book Now</Link>
            <button onClick={() => setOpen(true)} className="lg:hidden text-white" aria-label="Open menu"><Menu size={24} /></button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-nav ${open ? 'open' : ''}`}>
        <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-white" aria-label="Close"><X size={28} /></button>
        <img src="/images/logo.png" alt="Logo" className="w-16 h-16 object-contain mb-2" />
        {links.map(l => (
          <Link key={l.href} href={l.href} className="font-display text-white no-underline hover:text-red-500 transition-colors" style={{ fontSize: '2.8rem', letterSpacing: '0.08em' }}>{l.label}</Link>
        ))}
        <Link href="/book" className="btn-red mt-4">Book Now</Link>
        <a href="tel:+919325981046" className="text-green-400 text-sm mt-2 no-underline flex items-center gap-2"><Phone size={14} /> +91 93259 81046</a>
      </div>
    </>
  )
}
