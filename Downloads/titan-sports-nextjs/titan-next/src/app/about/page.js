import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Reveal from '@/components/Reveal'

export const metadata = { title: 'About | Titan Sports Arena' }

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden" style={{ background: '#0d1a0d' }}>
        <div className="absolute inset-0">
          <img src="/images/turf-day.png" alt="Turf" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0" style={{ background: 'rgba(13,26,13,0.82)' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <Reveal><span className="text-xs font-bold tracking-widest uppercase mb-3 block text-green-400">Our Story</span></Reveal>
          <Reveal delay={0.1}><h1 className="font-display leading-none mb-5" style={{ fontSize: 'clamp(3.5rem,10vw,7rem)' }}>ABOUT<br /><span style={{ color: '#c0392b' }}>TITAN</span></h1></Reveal>
          <Reveal delay={0.2}><p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: 'rgba(245,240,232,0.7)' }}>Born from a love of sport, built for the people of Amravati.</p></Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6" style={{ background: '#f5f0e8' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div style={{ width: 44, height: 3, background: '#c0392b', marginBottom: 20 }} />
            <h2 className="font-display leading-none mb-6" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: '#0d1a0d' }}>OUR STORY</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#555' }}>Titan Sports Arena was founded with a single mission: to bring a world-class sporting experience to the heart of Amravati. Located near SGB Amravati University on Mardi Road, we set out to build a space where students, families, and professionals could all come together through sport.</p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#555' }}>Our FIFA-approved double-color artificial turf spans over 7,000 sq. ft. — the most premium surface available — designed to give you the closest experience to a professional pitch. The high-ceiling cage design and state-of-the-art LED floodlights ensure you can play any time, dawn to midnight.</p>
            <p className="text-sm leading-relaxed" style={{ color: '#555' }}>More than a turf, we've grown into a full recreational destination. Mini Machines Café — Amravati's first sports-themed café with RC cars, board games, and live sport — makes every visit an experience, not just a game.</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="overflow-hidden" style={{ height: 460 }}>
              <img src="/images/turf-aerial.png" alt="Aerial view" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Titan */}
      <section className="py-20 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <div style={{ width: 44, height: 3, background: '#c0392b', margin: '0 auto 20px' }} />
            <h2 className="font-display leading-none" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: '#0d1a0d' }}>WHY TITAN?</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { emoji: '🏆', title: 'FIFA-Approved', desc: 'Our double-color turf meets international FIFA standards for quality, safety, and performance.' },
              { emoji: '👨‍👩‍👧', title: 'For Everyone', desc: 'Welcoming to all — beginners, professionals, men, women, and children of all ages.' },
              { emoji: '💰', title: 'Affordable', desc: 'Premium quality at rates significantly lower than comparable facilities in larger cities.' },
              { emoji: '⚡', title: 'Always Open', desc: 'Open 6 AM to 12 AM, seven days a week. Early morning or late-night — we\'ve got you.' },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="p-7 bg-white border hover:border-green-700 transition-colors" style={{ border: '1px solid rgba(0,0,0,0.1)' }}>
                  <div className="text-3xl mb-3">{v.emoji}</div>
                  <h3 className="font-display text-xl mb-2" style={{ color: '#0d1a0d' }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 px-6" style={{ background: '#1a3a1a', color: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <div style={{ width: 44, height: 3, background: '#a8d4a8', margin: '0 auto 20px' }} />
            <h2 className="font-display leading-none" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)' }}>THE SPECS</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              ['Total Area', '7,000 sq. ft.'],['Surface Type', 'FIFA-Approved Artificial Turf'],['Turf Style', 'Double-Color'],
              ['Sports Supported', 'Cricket, Football & More'],['Lighting', 'State-of-the-Art LED Floodlights'],['Enclosure', 'High-Ceiling Cage Design'],
              ['Equipment', 'Free — Bats, Balls, Football'],['Parking', 'Ample On-Site Parking'],['Hours', '6 AM – 12 AM, 7 Days a Week'],
            ].map(([label, value], i) => (
              <Reveal key={label} delay={i * 0.05}>
                <div className="flex items-center justify-between px-5 py-4" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>{label}</span>
                  <span className="text-sm font-semibold text-right ml-4">{value}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo grid + CTA */}
      <section className="py-24 px-6" style={{ background: '#f5f0e8' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-3" style={{ height: 460 }}>
              <div className="overflow-hidden"><img src="/images/turf-cricket.png" alt="Cricket" className="w-full h-full object-cover" /></div>
              <div className="flex flex-col gap-3">
                <div className="flex-1 overflow-hidden"><img src="/images/turf-sunset.png" alt="Sunset" className="w-full h-full object-cover" /></div>
                <div className="flex-1 overflow-hidden"><img src="/images/turf-night.png" alt="Night" className="w-full h-full object-cover" /></div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ width: 44, height: 3, background: '#c0392b', marginBottom: 20 }} />
            <h2 className="font-display leading-none mb-6" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: '#0d1a0d' }}>BUILT FOR<br />REAL PLAYERS</h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#555' }}>Every element of Titan Sports Arena has been designed with the player in mind. The surface is soft, impact-proof, and consistent — giving you the feel of a real pitch without the wear on your body.</p>
            <ul className="space-y-3 mb-8">
              {['Soft, impact-proof FIFA-grade turf surface','No rough patches — maintained regularly','Full-height nets ensure no stoppages','Proper crease and goal markings for both sports','Seating and viewing areas for spectators'].map(t => (
                <li key={t} className="check-item"><CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#2d5a2d' }} />{t}</li>
              ))}
            </ul>
            <Link href="/book" className="btn-red">Book Your Slot <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
