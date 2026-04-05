import Link from 'next/link'
import { ArrowRight, Shield, Star, Users, Clock, Wifi, Car, Tv, Coffee, Zap } from 'lucide-react'
import Reveal from '@/components/Reveal'

export const metadata = { title: 'Facilities | Titan Sports Arena' }

const AMENITIES = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M2 20h20M6 20V10l6-6 6 6v10"/><path d="M10 20v-5h4v5"/></svg>, title: 'Free Cricket Gear', desc: 'Bats, stumps & tennis balls' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><circle cx="12" cy="12" r="10"/><path d="M4.93 4.93c4.08 4.08 10.06 4.08 14.14 0M4.93 19.07c4.08-4.08 10.06-4.08 14.14 0M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, title: 'Free Football', desc: 'Match-grade ball included' },
  { icon: <Zap size={22} />, title: 'LED Floodlighting', desc: 'State-of-the-art lighting system' },
  { icon: <Car size={22} />, title: 'Ample Parking', desc: 'Safe, spacious parking area' },
  { icon: <Coffee size={22} />, title: 'On-Site Café', desc: 'Mini Machines Café' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>, title: 'RC Cars & Trucks', desc: 'Sand track & remote vehicles' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, title: 'Board Games', desc: 'Chess, carrom & more' },
  { icon: <Tv size={22} />, title: 'Big Screen', desc: 'Live sport projection screen' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>, title: 'FIFA-Grade Turf', desc: 'Double-color artificial grass' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, title: 'High-Ceiling Cage', desc: 'Fully enclosed arena design' },
  { icon: <Users size={22} />, title: 'Family-Friendly', desc: 'Suitable for all ages & genders' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, title: 'Central Location', desc: 'Near SGB University, Mardi Rd' },
]

export default function Facilities() {
  return (
    <>
      <section className="relative pt-36 pb-24 px-6 overflow-hidden" style={{ background: '#0d1a0d' }}>
        <div className="absolute inset-0">
          <img src="/images/turf-night.png" alt="Turf" className="w-full h-full object-cover opacity-70 scale-[1.15]" style={{ objectPosition: 'center 40%' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,26,13,0.3), rgba(13,26,13,0.85))' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <Reveal><span className="text-xs font-bold tracking-widest uppercase mb-3 block text-green-400">Everything You Need</span></Reveal>
          <Reveal delay={0.1}><h1 className="font-display leading-none mb-4" style={{ fontSize: 'clamp(3.5rem,10vw,7rem)' }}>FACILITIES</h1></Reveal>
          <Reveal delay={0.2}><p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(245,240,232,0.7)' }}>Professional-grade infrastructure built for players who demand the best.</p></Reveal>
        </div>
      </section>

      {/* Cricket */}
      <section className="py-24 px-6" style={{ background: 'var(--titan-cream)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <Reveal>
              <div className="overflow-hidden" style={{ height: 420 }}>
                <img src="/images/turf-cricket.png" alt="Box Cricket" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-white mb-4 px-2 py-1" style={{ background: '#4a8c4a' }}>Cricket</span>
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
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-white mb-4 px-2 py-1" style={{ background: '#4a8c4a' }}>Football</span>
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

      {/* Amenities — icon-based, no emojis */}
      <section className="py-20 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <div style={{ width: 44, height: 3, background: '#c0392b', margin: '0 auto 20px' }} />
            <h2 className="font-display leading-none mb-3" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: '#0d1a0d' }}>AMENITIES</h2>
            <p className="text-sm max-w-md mx-auto" style={{ color: '#888' }}>Everything included in your visit — no hidden extras.</p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {AMENITIES.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.04}>
                <div className="amenity-item">
                  <div className="flex justify-center mb-3" style={{ color: '#2d5a2d' }}>{a.icon}</div>
                  <h4 className="font-semibold text-sm mb-1" style={{ color: '#0d1a0d' }}>{a.title}</h4>
                  <p className="text-xs" style={{ color: '#888' }}>{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing — improved visual design */}
      <section className="py-20 px-6" style={{ background: '#1a3a1a', color: 'white' }}>
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-12">
            <div style={{ width: 44, height: 3, background: '#a8d4a8', margin: '0 auto 20px' }} />
            <h2 className="font-display leading-none mb-3" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)' }}>PRICING</h2>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>Quality that rivals Nagpur, priced right for Amravati.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {[
              { sport: 'Box Cricket', price: '₹650 – ₹1,000', unit: 'per hour', note: 'Includes free bats, stumps & tennis ball', highlight: false, tag: 'Most Popular' },
              { sport: 'Football', price: '₹650 – ₹1,000', unit: 'per hour', note: 'Includes a match football', highlight: true, tag: 'Weekend Favourite' },
            ].map(p => (
              <Reveal key={p.sport}>
                <div className={`price-card relative transition-transform hover:-translate-y-1`} style={{ background: p.highlight ? 'linear-gradient(135deg, #cc3b2c 0%, #901a1a 100%)' : 'linear-gradient(135deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.03) 100%)', border: p.highlight ? 'none' : '1px solid rgba(255,255,255,0.15)', boxShadow: p.highlight ? '0 12px 30px rgba(192,57,43,0.3)' : '0 8px 24px rgba(0,0,0,0.2)' }}>
                  <div className="flex items-start justify-between mb-4">
                    <p className="text-xs font-bold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.6)' }}>{p.sport}</p>
                    <span className="text-xs font-semibold px-2 py-0.5" style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}>{p.tag}</span>
                  </div>
                  <p className="font-display mb-1" style={{ fontSize: '2.8rem', lineHeight: 1, letterSpacing: '-0.01em' }}>{p.price}</p>
                  <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>{p.unit}</p>
                  <div style={{ height: 1, background: 'rgba(255,255,255,0.15)', marginBottom: 16 }} />
                  <p className="text-xs flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="20 6 9 17 4 12"/></svg>
                    {p.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center">
            <p className="text-xs mb-6" style={{ color: 'rgba(255,255,255,0.35)' }}>* Pricing may vary. Call us for bulk or event bookings.</p>
            <Link href="/book" className="btn-red">Book a Session <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
