import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import Reveal from '@/components/Reveal'

export const metadata = { title: 'Mini Machines Café | Titan Sports Arena' }

// Portrait images need square/portrait crop — landscape images use standard crop
const FEATURES = [
  { img: '/images/rc-cars.png', isPortrait: false, scale: 1, tag: 'Activity', title: 'RC Car Racing', desc: 'Race remote-controlled cars on a dedicated embedded track. Compete with friends for speed and control.' },
  { img: '/images/rc-excavator.png', isPortrait: false, tag: 'Activity', title: 'RC Excavators & Trucks', desc: 'Operate full-scale RC construction vehicles on a real sand pit — a unique, hands-on experience for all ages.' },
  { img: '/images/board-games.png', isPortrait: true, tag: 'Games', title: 'Board Games', desc: 'Challenge someone to chess, carrom, Jenga, and more board games in a relaxed café setting.' },
  { img: '/images/cafe-interior.png', isPortrait: false, tag: 'Entertainment', title: 'Live Sport Screening', desc: 'Watch live cricket, football, and other sports on the large projection screen with great sound.' },
  { img: '/images/cafe-side.png', isPortrait: false, scale: 1, tag: 'Experience', title: 'Themed Ambiance', desc: 'Hand-painted graffiti murals, industrial-chic décor, and dramatic lighting make every visit memorable.' },
  { img: '/images/cafe-interior2.png', isPortrait: false, scale: 1, tag: 'Seating', title: 'Comfortable Seating', desc: 'Spacious group tables, bar-height stools, and cosy corners for every type of gathering.' },
]

export default function Cafe() {
  return (
    <>
      <section className="relative pt-36 pb-24 px-6 overflow-hidden" style={{ background: '#0d1a0d' }}>
        <div className="absolute inset-0">
          <img src="/images/cafe-interior.png" alt="Café" className="w-full h-full object-cover scale-[1.4]" style={{ objectPosition: 'center center' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,26,13,0.15), rgba(13,26,13,0.82))' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <Reveal>
            <img src="/images/cafe-logo.png" alt="Mini Machines Café" className="mx-auto mb-6 object-contain"
              style={{ width: 96, height: 96, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', padding: 8 }} />
          </Reveal>
          <Reveal delay={0.1}><span className="text-xs font-bold tracking-widest uppercase mb-3 block text-green-400">Now Open at Titan Sports Arena</span></Reveal>
          <Reveal delay={0.15}><h1 className="font-display leading-none mb-4" style={{ fontSize: 'clamp(3rem,10vw,6rem)' }}>MINI MACHINES<br /><span style={{ color: '#c0392b' }}>CAFÉ</span></h1></Reveal>
          <Reveal delay={0.25}><p className="text-base max-w-lg mx-auto" style={{ color: 'rgba(245,240,232,0.7)' }}>Amravati's first sports-themed café. Play, eat, race, and relax — all under one roof.</p></Reveal>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6" style={{ background: 'var(--titan-cream)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div style={{ width: 44, height: 3, background: '#c0392b', marginBottom: 20 }} />
            <h2 className="font-display leading-none mb-6" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: '#0d1a0d' }}>A CAFÉ UNLIKE<br />ANY OTHER</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#555' }}>Mini Machines Café is the first of its kind in Amravati — a full sports-themed café experience built inside Titan Sports Arena. Whether you're fuelling up before a game, celebrating after a win, or just hanging out with friends, Mini Machines is the place to be.</p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#555' }}>The café is themed around RC vehicles, speed, and machines — with stunning hand-painted murals, live sport projection, and an actual RC car racing track embedded in the floor.</p>
            <p className="text-sm leading-relaxed" style={{ color: '#555' }}>Beyond the aesthetics, it's packed with activities: remote-controlled cars and trucks, carrom, chess, Jenga, and more. There's something for everyone.</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="overflow-hidden" style={{ height: 460 }}>
              <img src="/images/cafe-interior.png" alt="Café interior" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* What's Inside — fixed image orientations */}
      <section className="py-20 px-6" style={{ background: 'var(--titan-card)' }}>
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <div style={{ width: 44, height: 3, background: '#c0392b', margin: '0 auto 20px' }} />
            <h2 className="font-display leading-none" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: '#0d1a0d' }}>WHAT'S INSIDE</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.07}>
                <div className="sport-card">
                  <div className="overflow-hidden relative flex justify-center items-center" style={{ height: 220 }}>
                    {f.isPortrait ? (
                      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2">
                        <img
                          src={f.img}
                          alt={f.title}
                          className="w-full h-full object-cover"
                          style={{
                            transform: f.scale ? `rotate(-90deg) scale(${f.scale})` : 'rotate(-90deg) scale(0.95)'
                          }}
                        />
                      </div>
                    ) : (
                      <img
                        src={f.img}
                        alt={f.title}
                        className={`absolute w-full h-full object-cover ${f.scale ? '' : 'scale-[1.4]'}`}
                        style={f.scale ? { transform: `scale(${f.scale})` } : {}}
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-xs font-bold tracking-widest uppercase text-white mb-3 px-2 py-1" style={{ background: '#4a8c4a' }}>{f.tag}</span>
                    <h3 className="font-display text-xl mb-2" style={{ color: '#0d1a0d' }}>{f.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Design — no black borders */}
      <section className="py-20 px-6" style={{ background: '#0d1a0d', color: 'white' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <Reveal className="lg:col-span-2">
            {/* Full bleed image in a contained box — no outline/border */}
            <div className="overflow-hidden w-full" style={{ height: 400, background: '#0d1a0d' }}>
              <img src="/images/cafe-interior.png" alt="Café design" className="w-full h-full object-cover scale-[1.6]" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center">
            <div style={{ width: 40, height: 3, background: '#c0392b', marginBottom: 20 }} />
            <h3 className="font-display text-3xl mb-4">THE DESIGN</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(245,240,232,0.6)' }}>Every wall tells a story. Hand-painted graffiti murals celebrate iconic car culture and motorsport. The RC track is embedded directly into the floor.</p>
            <ul className="space-y-2">
              {['Hand-painted graffiti murals','Embedded RC track in the floor','Tyre installations & décor','Projection screen for live sport','Industrial-chic lighting'].map(d => (
                <li key={d} className="text-sm flex items-center gap-2" style={{ color: 'rgba(245,240,232,0.65)' }}><span style={{ color: '#c0392b' }}>—</span>{d}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: 'var(--titan-cream)' }}>
        <Reveal className="max-w-xl mx-auto">
          <div style={{ width: 44, height: 3, background: '#c0392b', margin: '0 auto 20px' }} />
          <h2 className="font-display leading-none mb-4" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: '#0d1a0d' }}>COME VISIT US</h2>
          <p className="text-sm mb-8" style={{ color: '#666' }}>The café is open during arena hours. Walk in anytime, no reservation needed for the café.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-red">Get Directions <ArrowRight size={16} /></Link>
            <a href="tel:+919325981046" className="btn-outline-light" style={{ borderColor: 'rgba(0,0,0,0.25)', color: '#0d1a0d' }}><Phone size={15} /> Call Us</a>
          </div>
        </Reveal>
      </section>
    </>
  )
}
