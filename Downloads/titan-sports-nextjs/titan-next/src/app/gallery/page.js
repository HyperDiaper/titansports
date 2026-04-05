'use client'
import { useState } from 'react'
import { X } from 'lucide-react'
import Reveal from '@/components/Reveal'

const photos = [
  { src: '/images/turf-aerial.png', alt: 'Aerial view', label: 'The Arena', cat: 'turf' },
  { src: '/images/turf-night.png', alt: 'Night sessions', label: 'Night Sessions', cat: 'turf' },
  { src: '/images/turf-cricket.png', alt: 'Cricket setup', label: 'Cricket Ready', cat: 'turf' },
  { src: '/images/turf-sunset.png', alt: 'Turf at sunset', label: 'Golden Hour', cat: 'turf' },
  { src: '/images/turf-day.png', alt: 'Turf daytime', label: 'Day Play', cat: 'turf' },
  { src: '/images/cafe-interior.png', alt: 'Café interior', label: 'Mini Machines Café', cat: 'cafe' },
  { src: '/images/rc-excavator.png', alt: 'RC Excavator', label: 'RC Excavator', cat: 'cafe' },
  { src: '/images/rc-cars.png', alt: 'RC Cars', label: 'RC Cars', cat: 'cafe' },
  { src: '/images/board-games.png', alt: 'Board games', label: 'Board Games', cat: 'cafe' },
  { src: '/images/cafe-side.png', alt: 'Café ambiance', label: 'Café Ambiance', cat: 'cafe' },
  { src: '/images/cafe-interior2.png', alt: 'Café seating', label: 'Seating Area', cat: 'cafe' },
  { src: '/images/cafe-logo.png', alt: 'Café logo wall', label: 'MMC Logo Wall', cat: 'cafe' },
]

const cats = [{ key: 'all', label: 'All Photos' }, { key: 'turf', label: 'The Turf' }, { key: 'cafe', label: 'The Café' }]

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [lb, setLb] = useState(null)
  const filtered = filter === 'all' ? photos : photos.filter(p => p.cat === filter)

  return (
    <>
      <section className="relative pt-36 pb-20 px-6 overflow-hidden" style={{ background: '#0d1a0d' }}>
        <div className="absolute inset-0">
          <img src="/images/turf-aerial.png" alt="Gallery" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: 'rgba(13,26,13,0.87)' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <Reveal><span className="text-xs font-bold tracking-widest uppercase mb-3 block text-green-400">Visual Tour</span></Reveal>
          <Reveal delay={0.1}><h1 className="font-display leading-none" style={{ fontSize: 'clamp(3.5rem,10vw,7rem)' }}>GALLERY</h1></Reveal>
          <Reveal delay={0.2}><p className="text-base mt-4" style={{ color: 'rgba(245,240,232,0.65)' }}>See the arena, the café, and everything in between.</p></Reveal>
        </div>
      </section>

      {/* Filter bar */}
      <div className="flex items-center justify-center gap-3 flex-wrap py-7 px-6" style={{ background: '#f5f0e8', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        {cats.map(c => (
          <button key={c.key} onClick={() => setFilter(c.key)}
            className="px-5 py-2 text-xs font-bold tracking-widest uppercase transition-all cursor-pointer"
            style={{ background: filter === c.key ? '#1a3a1a' : 'white', color: filter === c.key ? 'white' : '#0d1a0d', border: `1px solid ${filter === c.key ? '#1a3a1a' : 'rgba(0,0,0,0.12)'}` }}>
            {c.label}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <section className="py-12 px-6" style={{ background: '#f5f0e8' }}>
        <div className="max-w-7xl mx-auto" style={{ columns: '1', gap: 14 }}
          className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
          {filtered.map((photo, i) => (
            <Reveal key={photo.src + filter} delay={(i % 6) * 0.06} className="gallery-item break-inside-avoid mb-3" style={{ display: 'block' }}
              onClick={() => setLb(photo)}>
              <img src={photo.src} alt={photo.alt} className="w-full object-cover block" style={{ aspectRatio: i % 3 === 0 ? '3/4' : '4/3' }} />
              <div className="gallery-overlay"><span className="text-white text-sm font-semibold">{photo.label}</span></div>
            </Reveal>
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
          <div onClick={e => e.stopPropagation()} className="max-w-4xl mx-4">
            <img src={lb.src} alt={lb.alt} className="max-w-full max-h-screen object-contain block mx-auto" style={{ maxHeight: '82vh' }} />
            <p className="text-center mt-3 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>{lb.label}</p>
          </div>
        </div>
      )}
    </>
  )
}
