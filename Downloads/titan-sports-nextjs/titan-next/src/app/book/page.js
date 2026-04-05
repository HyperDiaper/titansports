'use client'
import { useState } from 'react'
import { ArrowRight, Clock, Calendar, Users, Phone, CheckCircle2 } from 'lucide-react'
import Reveal from '@/components/Reveal'

export default function Book() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    }).catch(() => {})
    setSubmitted(true)
  }

  return (
    <>
      <section className="relative pt-36 pb-20 px-6 overflow-hidden" style={{ background: '#0d1a0d' }}>
        <div className="absolute inset-0">
          <img src="/images/turf-day.png" alt="Book" className="w-full h-full object-cover opacity-25" style={{ objectPosition: 'center 30%' }} />
          <div className="absolute inset-0" style={{ background: 'rgba(13,26,13,0.85)' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <Reveal><span className="text-xs font-bold tracking-widest uppercase mb-3 block text-green-400">Reserve Your Slot</span></Reveal>
          <Reveal delay={0.1}><h1 className="font-display leading-none" style={{ fontSize: 'clamp(3.5rem,10vw,7rem)' }}>BOOK NOW</h1></Reveal>
          <Reveal delay={0.2}><p className="text-base mt-4 max-w-md mx-auto" style={{ color: 'rgba(245,240,232,0.7)' }}>Fill in the form below and our team will confirm your slot via WhatsApp or call.</p></Reveal>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: '#f5f0e8' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <Reveal>
            <div style={{ width: 44, height: 3, background: '#c0392b', marginBottom: 20 }} />
            <h2 className="font-display text-3xl mb-7" style={{ color: '#0d1a0d' }}>BOOKING INFO</h2>
            <div className="space-y-6">
              {[
                { icon: <Clock size={18} />, title: 'Hours', lines: ['Monday – Sunday', '6:00 AM – 12:00 AM'] },
                { icon: <Calendar size={18} />, title: 'Availability', lines: ['Walk-ins welcome', 'Advance booking preferred'] },
                { icon: <Users size={18} />, title: 'Group Sizes', lines: ['5-a-side, 7-a-side & more', 'Custom slots for events'] },
                { icon: <Phone size={18} />, title: 'Quick Booking', lines: ['+91 93259 81046', 'WhatsApp or call'] },
              ].map(info => (
                <div key={info.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-white" style={{ background: '#1a3a1a' }}>{info.icon}</div>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: '#0d1a0d' }}>{info.title}</p>
                    {info.lines.map(l => <p key={l} className="text-sm" style={{ color: '#666' }}>{l}</p>)}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 text-white" style={{ background: '#1a3a1a' }}>
              <p className="text-sm font-semibold mb-1">Pricing</p>
              <p className="font-display text-3xl">₹650 – ₹1,000</p>
              <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>per hour · includes free equipment</p>
            </div>
            <a href="https://wa.me/919325981046?text=Hi%2C%20I%20want%20to%20book%20a%20slot%20at%20Titan%20Sports%20Arena"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 font-bold text-sm uppercase tracking-wider text-white no-underline mt-4"
              style={{ background: '#25D366' }}>
              <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Book via WhatsApp
            </a>
          </Reveal>

          {/* Form */}
          <div className="lg:col-span-2">
            <Reveal>
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center p-16 bg-white" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
                  <CheckCircle2 size={56} style={{ color: '#2d5a2d' }} className="mb-5" />
                  <h3 className="font-display text-3xl mb-3" style={{ color: '#0d1a0d' }}>BOOKING REQUEST SENT!</h3>
                  <p className="text-sm max-w-sm mb-6" style={{ color: '#666' }}>Our team will confirm your slot shortly via WhatsApp or call.</p>
                  <a href="https://wa.me/919325981046" target="_blank" rel="noopener noreferrer" className="btn-red">Open WhatsApp <ArrowRight size={16} /></a>
                </div>
              ) : (
                <div className="bg-white p-8 md:p-10" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
                  <h3 className="font-display text-3xl mb-2" style={{ color: '#0d1a0d' }}>REQUEST A BOOKING</h3>
                  <p className="text-sm mb-8" style={{ color: '#888' }}>We'll confirm your slot within a few hours.</p>

                  {/* Netlify hidden form for prerendering detection */}
                  <form name="booking" data-netlify="true" hidden>
                    <input type="text" name="name" /><input type="tel" name="phone" />
                    <input type="radio" name="sport" /><input type="date" name="date" />
                    <input type="time" name="time" /><select name="players"></select>
                    <select name="duration"></select><textarea name="notes"></textarea>
                  </form>

                  <form name="booking" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-5">
                    <input type="hidden" name="form-name" value="booking" />
                    <p hidden><label>Skip: <input name="bot-field" /></label></p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div><label className="form-label">Full Name *</label><input type="text" name="name" required placeholder="Your name" className="form-field" /></div>
                      <div><label className="form-label">Phone Number *</label><input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" className="form-field" /></div>
                    </div>

                    <div>
                      <label className="form-label">Sport *</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {['Cricket', 'Football', 'Both', 'Other'].map(s => (
                          <label key={s} className="flex items-center gap-2 p-3 cursor-pointer border text-sm font-medium transition-all" style={{ borderColor: 'rgba(0,0,0,0.12)', background: 'white' }}
                            onMouseEnter={e => e.currentTarget.style.borderColor = '#2d5a2d'}
                            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)'}>
                            <input type="radio" name="sport" value={s} required className="accent-green-700" defaultChecked={s === 'Cricket'} />
                            {s}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div><label className="form-label">Preferred Date *</label><input type="date" name="date" required className="form-field" /></div>
                      <div><label className="form-label">Preferred Time *</label><input type="time" name="time" required className="form-field" /></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label">Number of Players *</label>
                        <select name="players" required className="form-field">
                          <option value="">Select</option>
                          <option value="2-5">2–5 players</option>
                          <option value="6-10">6–10 players</option>
                          <option value="11-15">11–15 players</option>
                          <option value="16+">16+ players</option>
                        </select>
                      </div>
                      <div>
                        <label className="form-label">Duration</label>
                        <select name="duration" className="form-field">
                          <option value="1hr">1 Hour</option>
                          <option value="2hr">2 Hours</option>
                          <option value="3hr">3 Hours</option>
                          <option value="custom">Custom (specify below)</option>
                        </select>
                      </div>
                    </div>

                    <div><label className="form-label">Additional Notes</label><textarea name="notes" rows="3" placeholder="Special requirements, tournament details..." className="form-field" style={{ resize: 'vertical' }} /></div>

                    <button type="submit" className="btn-red w-full justify-center py-4" style={{ display: 'flex', letterSpacing: '0.1em' }}>
                      Submit Booking Request <ArrowRight size={16} />
                    </button>
                    <p className="text-xs text-center" style={{ color: '#aaa' }}>By submitting, you agree to be contacted to confirm your booking.</p>
                  </form>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-12">
            <div style={{ width: 44, height: 3, background: '#c0392b', margin: '0 auto 20px' }} />
            <h2 className="font-display leading-none" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: '#0d1a0d' }}>HOW IT WORKS</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: '01', title: 'Submit Request', desc: 'Fill in the booking form with your preferred date, time, sport, and number of players.' },
              { n: '02', title: 'Confirmation', desc: 'Our team contacts you within a few hours via WhatsApp or call to confirm your slot.' },
              { n: '03', title: 'Play!', desc: 'Show up at Titan Sports Arena and get ready for the best game of your life.' },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1} className="text-center">
                <p className="font-display" style={{ fontSize: '5rem', lineHeight: 1, color: 'rgba(0,0,0,0.06)', marginBottom: '-12px' }}>{s.n}</p>
                <h3 className="font-display text-xl mb-2" style={{ color: '#0d1a0d' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
