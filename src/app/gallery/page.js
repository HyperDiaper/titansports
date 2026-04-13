'use client'
import { useState } from 'react'
import { X } from 'lucide-react'
import Reveal from '@/components/Reveal'

// isPortrait: true = render at natural portrait ratio; false = force landscape crop
const photos = [
  { src: '/images/turf-aerial.png', alt: 'Aerial view of the arena', label: 'The Arena', cat: 'turf', portrait: false, scale: 'scale-[1.0]' },
  { src: '/images/turf-night.png', alt: 'Turf under floodlights at night', label: 'Night Sessions', cat: 'turf', portrait: false, scale: 'scale-[1.0]' },
  { src: '/images/turf-cricket.png', alt: 'Cricket setup with stumps', label: 'Cricket Ready', cat: 'turf', portrait: false, scale: 'scale-[1.32]' },
  { src: '/images/turf-sunset.png', alt: 'Turf at golden hour', label: 'Golden Hour', cat: 'turf', portrait: false, scale: 'scale-[1.4]' },
  { src: '/images/turf-day.png', alt: 'Turf during the day', label: 'Day Play', cat: 'turf', portrait: false, scale: 'scale-[1.0]' },
  { src: '/images/cafe-interior.png', alt: 'Mini Machines Café interior', label: 'Mini Machines Café', cat: 'cafe', portrait: false, scale: 'scale-[1.0]' },
  { src: '/images/rc-excavator.png', alt: 'RC excavator on sand track', label: 'RC Excavator', cat: 'cafe', portrait: false, scale: 'scale-[1.0]' },
  { src: '/images/rc-cars.png', alt: 'RC cars racing', label: 'RC Cars', cat: 'cafe', portrait: 'false', scale: 'scale-[1.12]' },
  { src: '/images/board-games.png', alt: 'Board games mural', label: 'Board Games', cat: 'cafe', portrait: true, scale: 'scale-[1.3]' },
  { src: '/images/cafe-side.png', alt: 'Café ambiance shot', label: 'Café Ambiance', cat: 'cafe', portrait: 'false', scale: 'scale-[1.3]' },
  { src: '/images/cafe-interior2.png', alt: 'Café seating area', label: 'Seating Area', cat: 'cafe', portrait: 'false', scale: 'scale-[1.3]' },
  { src: '/images/cafe-logo.png', alt: 'Mini Machines Café logo wall', label: 'Café Logo', cat: 'cafe', portrait: true, scale: 'scale-[1.12]' },
]

const cats = [
  { key: 'all', label: 'All' },
  { key: 'turf', label: 'The Turf' },
  { key: 'cafe', label: 'The Café' },
]

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [lb, setLb] = useState(null)
  const filtered = filter === 'all' ? photos : photos.filter(p => p.cat === filter)

  return (
    <>
      <section className="relative pt-36 pb-20 px-6 overflow-hidden" style={{ background: '#0d1a0d' }}>
        <div className="absolute inset-0">
          <img src="/images/turf-aerial.png" alt="Gallery hero" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,26,13,0.3), rgba(13,26,13,0.9))' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <Reveal><span className="text-xs font-bold tracking-widest uppercase mb-3 block text-green-400">Visual Tour</span></Reveal>
          <Reveal delay={0.1}><h1 className="font-display leading-none" style={{ fontSize: 'clamp(3.5rem,10vw,7rem)' }}>GALLERY</h1></Reveal>
          <Reveal delay={0.2}><p className="text-base mt-4" style={{ color: 'rgba(245,240,232,0.65)' }}>See the arena, the café, and everything in between.</p></Reveal>
        </div>
      </section>

      {/* Filter */}
      <div className="flex items-center justify-center gap-3 flex-wrap py-6 px-6" style={{ background: 'var(--titan-cream)', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        {cats.map(c => (
          <button key={c.key} onClick={() => setFilter(c.key)}
            className="px-6 py-2 text-xs font-bold tracking-widest uppercase transition-all cursor-pointer"
            style={{ background: filter === c.key ? '#1a3a1a' : 'white', color: filter === c.key ? 'white' : '#0d1a0d', border: `1px solid ${filter === c.key ? '#1a3a1a' : 'rgba(0,0,0,0.12)'}` }}>
            {c.label}
          </button>
        ))}
      </div>

      {/* Grid — perfect squares */}
      <section className="py-10 px-6" style={{ background: 'var(--titan-cream)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((photo, i) => (
            <div
              key={photo.src + filter}
              className="relative overflow-hidden cursor-pointer w-full group"
              onClick={() => setLb(photo)}
              style={{ animationDelay: `${(i % 4) * 0.07}s`, aspectRatio: '1/1', background: '#0d1a0d' }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className={`absolute w-full h-full object-cover ${photo.portrait === 'cw' ? 'rotate-90' : photo.portrait === true ? '-rotate-90' : ''} ${photo.scale}`}
                style={{ top: 0, left: 0 }}
              />
              <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/40 pointer-events-none transition-colors duration-300 group-hover:bg-black/50">
                <span className="text-white text-sm font-bold tracking-widest uppercase text-center relative z-10">{photo.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-14 px-6 text-center" style={{ background: '#1a3a1a', color: 'white' }}>
        <Reveal>
          <p className="font-display text-3xl mb-3">FOLLOW US</p>
          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>Stay up to date with the latest from Titan Sports Arena.</p>
          <a href="https://www.instagram.com/titansportsarena/" target="_blank" rel="noopener noreferrer" className="btn-red">@titansportsarena</a>
        </Reveal>
      </section>

      {/* Lightbox */}
      {lb && (
        <div className="lightbox-overlay" onClick={() => setLb(null)}>
          <button className="absolute top-5 right-5 text-white p-2 hover:text-red-400 transition-colors" onClick={() => setLb(null)}><X size={28} /></button>
          <div onClick={e => e.stopPropagation()} className="max-w-5xl mx-4 flex flex-col items-center">
            <img src={lb.src} alt={lb.alt}
              className={lb.portrait === 'cw' ? 'rotate-90' : lb.portrait === true ? '-rotate-90' : ''}
              style={{ maxWidth: '90vw', maxHeight: '82vh', objectFit: 'contain', display: 'block', transform: lb.portrait === 'cw' ? 'rotate(90deg) scale(0.85)' : lb.portrait === true ? 'rotate(-90deg) scale(0.85)' : 'none' }} />
            <p className="text-center mt-3 text-sm" style={{ color: 'rgba(255,255,255,0.55)', zIndex: 10 }}>{lb.label}</p>
          </div>
        </div>
      )}
    </>
  )
}
