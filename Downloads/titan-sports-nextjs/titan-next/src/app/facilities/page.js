import Link from 'next/link'
import { ArrowRight, Shield, Star, Users, Clock } from 'lucide-react'
import Reveal from '@/components/Reveal'

export const metadata = { title: 'Facilities | Titan Sports Arena' }

export default function Facilities() {
  return (
    <>
      <section className="relative pt-36 pb-24 px-6 overflow-hidden" style={{ background: '#0d1a0d' }}>
        <div className="absolute inset-0">
          <img src="/images/turf-day.png" alt="Turf" className="w-full h-full object-cover opacity-30" style={{ objectPosition: 'center 30%' }} />
          <div className="absolute inset-0" style={{ background: 'rgba(13,26,13,0.82)' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <Reveal><span className="text-xs font-bold tracking-widest uppercase mb-3 block text-green-400">Everything You Need</span></Reveal>
          <Reveal delay={0.1}><h1 className="font-display leading-none mb-4" style={{ fontSize: 'clamp(3.5rem,10vw,7rem)' }}>FACILITIES</h1></Reveal>
          <Reveal delay={0.2}><p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(245,240,232,0.7)' }}>Professional-grade infrastructure built for players who demand the best.</p></Reveal>
        </div>
      </section>

      {/* Cricket */}
      <section className="py-24 px-6" style={{ background: '#f5f0e8' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <Reveal>
              <div className="overflow-hidden" style={{ height: 420 }}>
                <img src="/images/turf-cricket.png" alt="Box Cricket" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-white mb-4 px-2 py-1" style={{ background: '#4a8c4a', borderRadius: 2 }}>Cricket</span>
              <h2 className="font-display leading-none mb-4" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: '#0d1a0d' }}>BOX CRICKET</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#555' }}>Experience cricket like never before on our FIFA-approved turf. The soft, impact-resistant surface mimics a real pitch — so every drive, sweep, or yorker feels authentic. The enclosed high-ceiling cage ensures the game never stops.</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[['Professional pitch setup', Shield], ['Free bats & tennis balls', Star], ['Suitable for all team sizes', Users], ['₹650–₹1000 per hour', Clock]].map(([text, Icon]) => (
                  <div key={text} className="flex items-center gap-2 text-sm" style={{ color: '#555' }}>
                    <Icon size={15} style={{ color: '#2d5a2d', flexShrink: 0 }} />{text}
                  </div>
                ))}
              </div>
              <Link href="/book" className="btn-red">Book Cricket Session <ArrowRight size={16} /></Link>
            </Reveal>
          </div>

          {/* Football */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal delay={0.1} className="order-2 lg:order-1">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-white mb-4 px-2 py-1" style={{ background: '#4a8c4a', borderRadius: 2 }}>Football</span>
              <h2 className="font-display leading-none mb-4" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: '#0d1a0d' }}>FOOTBALL</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#555' }}>Full-size football goals, perfectly marked pitch lines, and a double-color turf that makes every match feel stadium-worthy. Great for 5-a-side, 7-a-side, or casual kick-abouts with friends.</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[['Full-size goals included', Shield], ['Free football provided', Star], ['Great for 5s, 7s & more', Users], ['Flexible slot timings', Clock]].map(([text, Icon]) => (
                  <div key={text} className="flex items-center gap-2 text-sm" style={{ color: '#555' }}>
                    <Icon size={15} style={{ color: '#2d5a2d', flexShrink: 0 }} />{text}
                  </div>
                ))}
              </div>
              <Link href="/book" className="btn-red">Book Football Session <ArrowRight size={16} /></Link>
            </Reveal>
            <Reveal className="order-1 lg:order-2">
              <div className="overflow-hidden" style={{ height: 420 }}>
                <img src="/images/turf-night.png" alt="Football at night" className="w-full h-full object-cover" style={{ objectPosition: 'center 40%' }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <div style={{ width: 44, height: 3, background: '#c0392b', margin: '0 auto 20px' }} />
            <h2 className="font-display leading-none" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: '#0d1a0d' }}>AMENITIES</h2>
            <p className="text-sm mt-3 max-w-md mx-auto" style={{ color: '#666' }}>Everything included in your visit — no hidden extras.</p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              ['🏏', 'Free Cricket Gear', 'Bats, stumps & tennis balls'],
              ['⚽', 'Free Football', 'Match-grade football included'],
              ['💡', 'Floodlighting', 'State-of-the-art LED lights'],
              ['🅿️', 'Ample Parking', 'Safe, spacious parking area'],
              ['☕', 'On-Site Café', 'Mini Machines Café'],
              ['🎮', 'RC Cars', 'Remote-controlled vehicles & sand track'],
              ['♟️', 'Board Games', 'Chess, carrom & more'],
              ['📺', 'Big Screen', 'Live sport on projection screen'],
              ['🌿', 'FIFA Turf', 'Double-color artificial grass'],
              ['🏟️', 'Cage Design', 'High-ceiling enclosed arena'],
              ['👨‍👩‍👧‍👦', 'Family-Friendly', 'Suitable for all ages & genders'],
              ['📍', 'Central Location', 'Near SGB University, Mardi Rd'],
            ].map(([emoji, title, desc], i) => (
              <Reveal key={title} delay={i * 0.04}>
                <div className="text-center p-6 bg-white border hover:border-green-700 transition-colors" style={{ border: '1px solid rgba(0,0,0,0.09)' }}>
                  <div className="text-3xl mb-3">{emoji}</div>
                  <h4 className="font-semibold text-sm mb-1" style={{ color: '#0d1a0d' }}>{title}</h4>
                  <p className="text-xs" style={{ color: '#888' }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 text-center" style={{ background: '#1a3a1a', color: 'white' }}>
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div style={{ width: 44, height: 3, background: '#a8d4a8', margin: '0 auto 20px' }} />
            <h2 className="font-display leading-none mb-3" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)' }}>PRICING</h2>
            <p className="text-sm mb-12" style={{ color: 'rgba(255,255,255,0.55)' }}>Quality that rivals Nagpur, priced right for Amravati.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {[
              { sport: 'Box Cricket', price: '₹650 – ₹1,000', note: 'Includes free bats, stumps & tennis ball', highlight: false },
              { sport: 'Football', price: '₹650 – ₹1,000', note: 'Includes a match football', highlight: true },
            ].map(p => (
              <Reveal key={p.sport}>
                <div className="text-left p-8" style={{ background: p.highlight ? '#c0392b' : 'rgba(255,255,255,0.07)', border: p.highlight ? 'none' : '1px solid rgba(255,255,255,0.12)' }}>
                  <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>{p.sport}</p>
                  <p className="font-display mb-1" style={{ fontSize: '2.5rem' }}>{p.price}</p>
                  <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>per hour</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{p.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="text-xs mb-6" style={{ color: 'rgba(255,255,255,0.35)' }}>* Pricing may vary. Call us for bulk or event bookings.</p>
            <Link href="/book" className="btn-red">Book a Session <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
