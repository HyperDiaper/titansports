'use client'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, MapPin, Phone, Star, Clock } from 'lucide-react'
import Reveal from '@/components/Reveal'

const STAR = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const reviews = [
  { name: 'Aamir Syed', role: 'Local Guide · 54 reviews', text: 'Excellent Turf near University. Quality of turf and equipment is fantastic! Pricing is way lesser than turfs in Nagpur and very appropriate for Amravati.' },
  { name: 'Salman Khan', role: 'Verified Visitor', text: 'An excellent spot to play, practice, learn, or simply enjoy quality time with friends and family. The turf truly emulates professional cricket.' },
  { name: 'Mohammad Osama Siddiqui', role: 'Local Guide · 103 reviews', text: 'Excellent quality turf with affordable pricing. Owner and management are very friendly. First-of-a-kind sports café coming up too. Must visit!' },
  { name: 'Asim Oneplus', role: '11 reviews', text: 'Ground professionally built, support staff amazing. Had great fun with friends. Ample parking. Highly recommend!' },
  { name: 'Mujahid Husain', role: 'Local Guide · 11 reviews', text: 'Nice turf to play cricket and football. Soft and impact proof. Reasonable rate ₹650–₹1000/hr. Free equipment available.' },
  { name: 'Vivek Uikey', role: '3 reviews', text: 'Awesome experience of playing football and cricket with reasonable price. Most recommended turf in Amravati!' },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex items-center overflow-hidden" style={{ height: '100vh', minHeight: 620 }}>
        <div className="absolute inset-0">
          <img src="/images/turf-night.png" alt="Titan Sports Arena at night" className="w-full h-full object-cover" style={{ objectPosition: 'center 40%' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(13,26,13,0.91) 0%,rgba(13,26,13,0.55) 55%,rgba(139,26,26,0.18) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full" style={{ paddingTop: 80 }}>
          <div className="max-w-2xl" style={{ animation: 'revealUp 0.9s ease 0.1s both' }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold tracking-widest uppercase text-white px-3 py-1" style={{ background: '#4a8c4a', borderRadius: 2 }}>FIFA-Approved Turf</span>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>Amravati, Maharashtra</span>
            </div>
            <h1 className="font-display text-white leading-none mb-6" style={{ fontSize: 'clamp(3.8rem,11vw,7.5rem)', letterSpacing: '0.02em', animation: 'revealUp 0.9s ease 0.2s both' }}>
              WHERE<br /><span style={{ color: '#c0392b' }}>CHAMPIONS</span><br />PLAY
            </h1>
            <p className="mb-8 leading-relaxed" style={{ fontSize: '1.05rem', color: 'rgba(245,240,232,0.75)', maxWidth: 480, animation: 'revealUp 0.9s ease 0.35s both' }}>
              Amravati's largest multi-sport arena — 7,000 sq. ft. of FIFA-approved turf for cricket, football & more. Open dawn to midnight, every day.
            </p>
            <div className="flex flex-wrap gap-4" style={{ animation: 'revealUp 0.9s ease 0.5s both' }}>
              <Link href="/book" className="btn-red">Book a Session <ArrowRight size={16} /></Link>
              <Link href="/facilities" className="btn-outline-light">Explore Arena</Link>
            </div>
            <div className="flex flex-wrap gap-3 mt-9" style={{ animation: 'revealUp 0.9s ease 0.65s both' }}>
              {[
                { icon: <Clock size={12} />, text: '6AM – 12AM Daily' },
                { icon: <MapPin size={12} />, text: 'Near SGB University' },
                { icon: <Star size={12} fill="#f59e0b" stroke="none" />, text: '4.5 ★ (29 Reviews)' },
              ].map((p, i) => (
                <span key={i} className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(245,240,232,0.75)' }}>{p.icon}{p.text}</span>
              ))}
            </div>
          </div>
        </div>
        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1" style={{ color: 'rgba(255,255,255,0.35)', animation: 'revealUp 1.4s ease 1s both' }}>
          <span style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'bounce 1.6s ease infinite' }}><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#1a3a1a', padding: '36px 24px' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[['7,000', 'sq.ft', 'Arena Size'], ['4.5', '★', 'Google Rating'], ['₹650', '+', 'Per Hour'], ['18', 'hrs', 'Open Daily']].map(([v, s, l]) => (
            <div key={l}>
              <p className="font-display" style={{ fontSize: '2.5rem', color: '#a8d4a8', letterSpacing: '0.04em' }}>{v}<span style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)', marginLeft: 2 }}>{s}</span></p>
              <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-24 px-6" style={{ background: '#f5f0e8' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div style={{ width: 44, height: 3, background: '#c0392b', marginBottom: 20 }} />
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#2d5a2d' }}>Amravati's Finest</p>
            <h2 className="font-display leading-none mb-6" style={{ fontSize: 'clamp(2.5rem,5vw,3.8rem)', color: '#0d1a0d' }}>MORE THAN<br />JUST A TURF</h2>
            <p className="leading-relaxed mb-4" style={{ color: '#555', fontSize: '0.95rem' }}>Titan Sports Arena is Amravati's most premium multi-sport destination — a professionally built, FIFA-approved double-color turf spanning 7,000 sq. ft., designed for cricket, football, and everything in between.</p>
            <p className="leading-relaxed mb-7" style={{ color: '#555', fontSize: '0.95rem' }}>Whether you're a seasoned player, a family looking for a fun day out, or simply someone who loves the game — Titan is your home ground.</p>
            <ul className="space-y-3 mb-8">
              {['FIFA-approved double-color artificial turf','High-ceiling cage & state-of-the-art LED lighting','Free equipment — bats, balls, football included','Ample parking, friendly & cooperative staff','Mini Machines Café with RC cars & board games'].map(t => (
                <li key={t} className="check-item"><CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#2d5a2d' }} />{t}</li>
              ))}
            </ul>
            <Link href="/about" className="btn-red">Learn More <ArrowRight size={16} /></Link>
          </Reveal>
          <Reveal delay={0.15} className="relative" style={{ paddingBottom: 40, paddingRight: 16 }}>
            <div className="overflow-hidden" style={{ height: 440 }}>
              <img src="/images/turf-aerial.png" alt="Aerial view" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bg-white shadow-xl p-5" style={{ bottom: -8, left: -16, maxWidth: 180, border: '1px solid rgba(0,0,0,0.08)' }}>
              <p className="font-display" style={{ fontSize: '2.5rem', color: '#c0392b', lineHeight: 1 }}>29+</p>
              <p className="text-xs mt-1" style={{ color: '#666', lineHeight: 1.5 }}>5-star Google reviews from happy players</p>
            </div>
            <div className="absolute" style={{ top: -14, right: -14, width: 92, height: 92, background: '#c0392b', opacity: 0.12 }} />
          </Reveal>
        </div>
      </section>

      {/* ── FACILITIES PREVIEW ── */}
      <section className="py-24 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <div style={{ width: 44, height: 3, background: '#c0392b', margin: '0 auto 20px' }} />
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#2d5a2d' }}>What We Offer</p>
            <h2 className="font-display leading-none" style={{ fontSize: 'clamp(2.5rem,5vw,3.8rem)', color: '#0d1a0d' }}>WORLD-CLASS<br />FACILITIES</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: '/images/turf-cricket.png', tag: 'Cricket', title: 'Box Cricket', desc: 'Professional pitch with stumps and crease markings. Perfect for competitive or casual cricket on a premium FIFA-grade surface.', href: '/facilities' },
              { img: '/images/turf-night.png', tag: 'Football', title: 'Football', desc: 'Full-size goals, penalty spots, and ample space for 5-a-side or larger matches under state-of-the-art floodlights.', href: '/facilities', pos: 'center 40%' },
              { img: '/images/cafe-interior.png', tag: 'Experience', title: 'Mini Machines Café', desc: "Amravati's first sports-themed café with RC cars, board games, live screen, and great food & drinks.", href: '/cafe' },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="sport-card">
                  <div className="sport-card-img overflow-hidden" style={{ height: 230 }}>
                    <img src={c.img} alt={c.title} className="w-full h-full object-cover" style={{ objectPosition: c.pos || 'center' }} />
                  </div>
                  <div className="p-7">
                    <span className="inline-block text-xs font-bold tracking-widest uppercase text-white mb-3 px-2 py-1" style={{ background: '#4a8c4a', borderRadius: 2 }}>{c.tag}</span>
                    <h3 className="font-display text-2xl mb-2" style={{ color: '#0d1a0d' }}>{c.title}</h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: '#666' }}>{c.desc}</p>
                    <Link href={c.href} className="text-xs font-bold tracking-widest uppercase flex items-center gap-2 no-underline transition-all" style={{ color: '#c0392b' }}>Explore <ArrowRight size={14} /></Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-10">
            <Link href="/facilities" className="btn-red">View All Facilities <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      {/* ── CAFÉ SPLIT ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: 500 }}>
        <div className="relative overflow-hidden" style={{ minHeight: 360 }}>
          <img src="/images/cafe-interior.png" alt="Mini Machines Café" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(13,26,13,0.25)' }} />
        </div>
        <Reveal className="flex flex-col justify-center px-10 py-16" style={{ background: '#0d1a0d' }}>
          <div style={{ width: 44, height: 3, background: '#c0392b', marginBottom: 20 }} />
          <p className="text-xs font-bold tracking-widest uppercase mb-2 text-green-400">Now Open</p>
          <h2 className="font-display text-white leading-none mb-5" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>MINI MACHINES<br />CAFÉ</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(245,240,232,0.65)' }}>Amravati's first-of-its-kind sports café. Race RC cars on a real track, challenge friends to board games, watch live sport — all with great food.</p>
          <ul className="space-y-2 mb-8">
            {['RC Cars & Trucks on Sand Track','Board Games — Chess, Carrom & More','Live Sport on Projection Screen','Comfortable Seating for Groups'].map(t => (
              <li key={t} className="text-sm flex items-center gap-2" style={{ color: 'rgba(245,240,232,0.7)' }}><span style={{ color: '#c0392b' }}>—</span>{t}</li>
            ))}
          </ul>
          <Link href="/cafe" className="btn-red self-start">Visit the Café <ArrowRight size={16} /></Link>
        </Reveal>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-24 px-6" style={{ background: '#f5f0e8' }}>
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <div style={{ width: 44, height: 3, background: '#c0392b', margin: '0 auto 20px' }} />
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#2d5a2d' }}>Hear From Players</p>
            <h2 className="font-display leading-none mb-3" style={{ fontSize: 'clamp(2.5rem,5vw,3.8rem)', color: '#0d1a0d' }}>WHAT THEY SAY</h2>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => <STAR key={i} />)}
              <span className="text-sm ml-2" style={{ color: '#888' }}>4.5 on Google · 29 Reviews</span>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.07}>
                <div className="bg-white p-7 transition-all" style={{ border: '1px solid rgba(0,0,0,0.07)', borderLeft: '3px solid transparent' }}
                  onMouseEnter={e => e.currentTarget.style.borderLeftColor = '#c0392b'}
                  onMouseLeave={e => e.currentTarget.style.borderLeftColor = 'transparent'}>
                  <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, j) => <STAR key={j} />)}</div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#555' }}>"{r.text}"</p>
                  <p className="text-sm font-semibold" style={{ color: '#0d1a0d' }}>{r.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#aaa' }}>{r.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/turf-sunset.png" alt="Turf at sunset" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(13,26,13,0.83)' }} />
        </div>
        <Reveal className="relative z-10 max-w-2xl mx-auto text-center text-white">
          <h2 className="font-display leading-none mb-4" style={{ fontSize: 'clamp(3rem,8vw,5rem)' }}>READY TO PLAY?</h2>
          <p className="mb-8 text-base" style={{ color: 'rgba(245,240,232,0.75)' }}>Book your slot today. Open 6 AM – 12 AM, every day. Walk-ins welcome.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book" className="btn-red">Book Now <ArrowRight size={16} /></Link>
            <a href="tel:+919325981046" className="btn-outline-light"><Phone size={15} /> Call Us</a>
          </div>
        </Reveal>
      </section>

      {/* ── LOCATION STRIP ── */}
      <div className="px-6 py-5" style={{ background: '#1a3a1a' }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-white text-sm">
            <MapPin size={15} style={{ color: '#a8d4a8' }} />
            Plot No. 7/8, Mardi Road, near Animation College, Amravati 444602
          </div>
          <a href="https://www.google.com/maps/place/Titan+Sports+Arena/@20.9438211,77.8016039,17.59z" target="_blank" rel="noopener noreferrer"
            className="text-xs font-bold tracking-widest uppercase no-underline flex items-center gap-1" style={{ color: '#a8d4a8' }}>
            Get Directions <ArrowRight size={12} />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(5px)} }
      `}</style>
    </>
  )
}
