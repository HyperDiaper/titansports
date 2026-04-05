import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Reveal from '@/components/Reveal'

export const metadata = { title: 'About | Titan Sports Arena' }

const WHY_ITEMS = [
  {
    num: '01',
    title: 'FIFA-Approved Surface',
    desc: 'Our double-color artificial turf meets international FIFA quality and safety standards — the same grade used in professional training facilities.',
  },
  {
    num: '02',
    title: 'Open to Everyone',
    desc: 'From first-timers to serious players, from kids to adults — Titan is designed to be inclusive, welcoming, and fun for all.',
  },
  {
    num: '03',
    title: 'Genuinely Affordable',
    desc: 'Premium quality at rates far below comparable facilities in Nagpur or Pune. Great sport shouldn\'t cost a fortune.',
  },
  {
    num: '04',
    title: '18 Hours a Day',
    desc: 'Open 6 AM to 12 AM, seven days a week. Early morning sessions before work or late-night games after — we\'re always ready.',
  },
]

export default function About() {
  return (
    <>
      {/* Hero — proper dark bg, real image overlay */}
      <section className="relative pt-40 pb-28 px-6 overflow-hidden" style={{ background: '#0d1a0d', minHeight: 420 }}>
        <div className="absolute inset-0">
          <img src="/images/turf-night.png" alt="Turf" className="w-full h-full object-cover scale-[1.25]" style={{ opacity: 0.8, objectPosition: 'center 40%' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,26,13,0.3) 0%, rgba(13,26,13,0.75) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <Reveal><span className="text-xs font-bold tracking-widest uppercase mb-4 block text-green-400">Our Story</span></Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display leading-none mb-5" style={{ fontSize: 'clamp(3.5rem,10vw,7rem)' }}>
              ABOUT <span style={{ color: '#c0392b' }}>TITAN</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: 'rgba(245,240,232,0.72)' }}>Born from a love of sport, built for the people of Amravati.</p>
          </Reveal>
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
            {/* turf-aerial is now cropped — no white bottom */}
            <div className="overflow-hidden" style={{ height: 460 }}>
              <img src="/images/turf-aerial.png" alt="Aerial view of Titan Sports Arena" className="w-full h-full object-cover" style={{ objectPosition: 'center top' }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Titan — clean, no emojis, numbered */}
      <section className="py-20 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <div style={{ width: 44, height: 3, background: '#c0392b', margin: '0 auto 20px' }} />
            <h2 className="font-display leading-none" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: '#0d1a0d' }}>WHY TITAN?</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHY_ITEMS.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="why-card">
                  <p className="font-display mb-3" style={{ fontSize: '3rem', lineHeight: 1, color: 'rgba(192,57,43,0.15)' }}>{v.num}</p>
                  <h3 className="font-display text-xl mb-3" style={{ color: '#0d1a0d', letterSpacing: '0.03em' }}>{v.title}</h3>
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

      {/* Built for real players — turf-day image, no black border */}
      <section className="py-24 px-6" style={{ background: 'var(--titan-cream)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-3" style={{ height: 460 }}>
              <div className="overflow-hidden"><img src="/images/turf-sunset.png" alt="Turf at sunset" className="w-full h-full object-cover scale-[1.4]" style={{ objectPosition: 'center 50%' }} /></div>
              <div className="flex flex-col gap-3">
                <div className="flex-1 overflow-hidden"><img src="/images/turf-aerial.png" alt="Arena aerial" className="w-full h-full object-cover" style={{ objectPosition: 'center 55%' }} /></div>
                <div className="flex-1 overflow-hidden"><img src="/images/turf-day.png" alt="Day session" className="w-full h-full object-cover" style={{ objectPosition: 'center 30%' }} /></div>
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
