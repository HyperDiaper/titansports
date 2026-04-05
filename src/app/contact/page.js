'use client'
import { useState } from 'react'
import { MapPin, Phone, Clock, Instagram, ArrowRight, CheckCircle2, Calendar, Users } from 'lucide-react'
import Reveal from '@/components/Reveal'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formType, setFormType] = useState('booking') // 'booking' | 'inquiry'

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    }).catch(() => {})
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero — more visual, turf backdrop with overlaid stat cards */}
      <section className="relative pt-36 pb-0 overflow-hidden" style={{ background: '#0d1a0d', minHeight: 420 }}>
        <div className="absolute inset-0">
          <img src="/images/turf-night.png" alt="Contact hero" className="w-full h-full object-cover opacity-50 scale-[1.25]" style={{ objectPosition: 'center 40%' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,26,13,0.4) 0%, rgba(13,26,13,0.95) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center text-white mb-12">
            <Reveal><span className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1" style={{ background: '#1a3a1a', border: '1px solid #4a8c4a', borderRadius: '99px', color: '#a8d4a8' }}>Quick Support</span></Reveal>
            <Reveal delay={0.1}><h1 className="font-display leading-none mb-4" style={{ fontSize: 'clamp(3.5rem,10vw,7rem)' }}>GET IN TOUCH</h1></Reveal>
            <Reveal delay={0.2}><p className="text-lg max-w-md mx-auto" style={{ color: 'rgba(245,240,232,0.9)' }}>Bookings, events, or just a question — reach out and we'll respond quickly.</p></Reveal>
          </div>

          {/* Quick info strip inside hero */}
          <Reveal delay={0.25}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-12">
              {[
                { icon: <Phone size={18} />, label: 'Call or WhatsApp', value: '+91 93259 81046', href: 'tel:+919325981046' },
                { icon: <Clock size={18} />, label: 'Open Every Day', value: '6:00 AM – 12:00 AM', href: null },
                { icon: <MapPin size={18} />, label: 'Mardi Road, Amravati', value: 'Near SGB University', href: 'https://www.google.com/maps/place/Titan+Sports+Arena/@20.9438211,77.8016039,17.59z' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4 px-6 py-5 text-white" style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(8px)' }}>
                  <div style={{ color: '#c0392b', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className="text-sm font-semibold no-underline hover:text-green-400 transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-sm font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main form section */}
      <section className="py-16 px-6" style={{ background: 'var(--titan-cream)' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Sidebar */}
          <Reveal>
            <div style={{ width: 44, height: 3, background: '#c0392b', marginBottom: 20 }} />
            <h2 className="font-display text-3xl mb-6" style={{ color: '#0d1a0d' }}>REACH US</h2>

            <div className="space-y-6">
              {[
                { icon: <MapPin size={18} />, label: 'Address', content: (<><p className="text-sm leading-relaxed" style={{ color: '#555' }}>Plot No. 7/8, Mardi Road,<br />near Animation College,<br />Yogiraj Nagar, Amravati,<br />Maharashtra 444602</p><a href="https://www.google.com/maps/place/Titan+Sports+Arena/@20.9438211,77.8016039,17.59z" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest no-underline mt-2 inline-flex items-center gap-1" style={{ color: '#2d5a2d' }}>Get Directions <ArrowRight size={12} /></a></>) },
                { icon: <Phone size={18} />, label: 'Phone & WhatsApp', content: (<><a href="tel:+919325981046" className="text-sm font-medium no-underline" style={{ color: '#444' }}>+91 93259 81046</a><br /><a href="https://wa.me/919325981046" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest no-underline mt-2 inline-flex items-center gap-1" style={{ color: '#25D366' }}>Chat on WhatsApp <ArrowRight size={12} /></a></>) },
                { icon: <Clock size={18} />, label: 'Hours', content: (<><p className="text-sm" style={{ color: '#555' }}>Monday – Sunday</p><p className="text-sm font-semibold" style={{ color: '#0d1a0d' }}>6:00 AM – 12:00 AM</p></>) },
                { icon: <Instagram size={18} />, label: 'Instagram', content: (<a href="https://www.instagram.com/titansportsarena/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium no-underline" style={{ color: '#444' }}>@titansportsarena</a>) },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-white" style={{ background: '#c0392b' }}>{item.icon}</div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: '#bbb' }}>{item.label}</p>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp shortcut */}
            <a href="https://wa.me/919325981046?text=Hi%2C%20I%27d%20like%20to%20get%20in%20touch%20with%20Titan%20Sports%20Arena"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 font-bold text-sm uppercase tracking-wider text-white no-underline mt-7"
              style={{ background: '#25D366' }}>
              <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Message on WhatsApp
            </a>
          </Reveal>

          {/* Combined form — booking or inquiry */}
          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center p-16 bg-white h-full" style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.07)' }}>
                  <CheckCircle2 size={56} style={{ color: '#2d5a2d' }} className="mb-5" />
                  <h3 className="font-display text-3xl mb-3" style={{ color: '#0d1a0d' }}>
                    {formType === 'booking' ? 'BOOKING REQUEST SENT!' : 'MESSAGE SENT!'}
                  </h3>
                  <p className="text-sm max-w-sm mb-6" style={{ color: '#666' }}>
                    {formType === 'booking'
                      ? 'Our team will confirm your slot shortly via WhatsApp or call.'
                      : 'Thank you for reaching out. We\'ll get back to you as soon as possible.'}
                  </p>
                  <a href="https://wa.me/919325981046" target="_blank" rel="noopener noreferrer" className="btn-red">Open WhatsApp <ArrowRight size={16} /></a>
                </div>
              ) : (
                <div className="bg-white p-8 md:p-10" style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.07)' }}>

                  {/* Form type toggle */}
                  <div className="flex mb-8" style={{ background: 'var(--titan-cream)', padding: 4 }}>
                    {[['booking', 'Book a Session'], ['inquiry', 'Send an Enquiry']].map(([val, label]) => (
                      <button key={val} onClick={() => setFormType(val)} type="button"
                        className="flex-1 py-3 text-sm font-bold tracking-wide uppercase transition-all cursor-pointer"
                        style={{ background: formType === val ? '#0d1a0d' : 'transparent', color: formType === val ? 'white' : '#888', border: 'none' }}>
                        {label}
                      </button>
                    ))}
                  </div>

                  <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-5">
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="form-type" value={formType} />
                    <p hidden><label>Skip: <input name="bot-field" /></label></p>

                    {/* Common fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div><label className="form-label">Full Name *</label><input type="text" name="name" required placeholder="Your name" className="form-field" /></div>
                      <div><label className="form-label">Phone Number *</label><input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" className="form-field" /></div>
                    </div>

                    {/* Booking-specific fields */}
                    {formType === 'booking' && (<>
                      <div>
                        <label className="form-label">Sport *</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {['Cricket', 'Football', 'Both', 'Other'].map(s => (
                            <label key={s} className="flex items-center gap-2 p-3 cursor-pointer text-sm font-medium transition-all"
                              style={{ border: '1.5px solid rgba(0,0,0,0.12)', background: 'white' }}
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
                            <option value="2-5">2–5 players</option><option value="6-10">6–10 players</option>
                            <option value="11-15">11–15 players</option><option value="16+">16+ players</option>
                          </select>
                        </div>
                        <div>
                          <label className="form-label">Duration</label>
                          <select name="duration" className="form-field">
                            <option value="1hr">1 Hour</option><option value="2hr">2 Hours</option>
                            <option value="3hr">3 Hours</option><option value="custom">Custom (specify below)</option>
                          </select>
                        </div>
                      </div>
                      <div><label className="form-label">Additional Notes</label><textarea name="notes" rows="3" placeholder="Special requirements, tournament details..." className="form-field" style={{ resize: 'vertical' }} /></div>
                    </>)}

                    {/* Inquiry-specific fields */}
                    {formType === 'inquiry' && (<>
                      <div>
                        <label className="form-label">Subject *</label>
                        <select name="subject" required className="form-field">
                          <option value="">Select a topic</option>
                          <option value="pricing">Pricing Information</option>
                          <option value="event">Event / Tournament Hosting</option>
                          <option value="cafe">Mini Machines Café</option>
                          <option value="partnership">Partnership</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div><label className="form-label">Message *</label><textarea name="message" required rows="5" placeholder="How can we help you?" className="form-field" style={{ resize: 'vertical' }} /></div>
                    </>)}

                    <button type="submit" className="btn-red w-full justify-center py-4" style={{ display: 'flex', letterSpacing: '0.1em' }}>
                      {formType === 'booking' ? 'Submit Booking Request' : 'Send Message'} <ArrowRight size={16} />
                    </button>
                    <p className="text-xs text-center" style={{ color: '#aaa' }}>We'll respond via WhatsApp or call within a few hours.</p>
                  </form>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <div style={{ height: 420 }}>
        <iframe title="Titan Sports Arena Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1877.6!2d77.8016039!3d20.9438211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a3004ea052f5%3A0x7272e651ba9e8d13!2sTitan%20Sports%20Arena!5e0!3m2!1sen!2sin!4v1710000000000"
          width="100%" height="420" style={{ border: 0, display: 'block' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>

      {/* Bottom strip */}
      <section className="py-10 px-6" style={{ background: '#1a3a1a', color: 'white' }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-display text-2xl">GOT QUESTIONS?</p>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>We're just a call or message away.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+919325981046" className="btn-red flex items-center gap-2"><Phone size={15} /> +91 93259 81046</a>
            <a href="https://wa.me/919325981046" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 px-5 font-bold text-sm tracking-widest uppercase text-white no-underline" style={{ background: '#25D366' }}>
              <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
