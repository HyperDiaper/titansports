'use client'
import { useState } from 'react'
import { MapPin, Phone, Clock, Instagram, ArrowRight, CheckCircle2 } from 'lucide-react'
import Reveal from '@/components/Reveal'

export default function Contact() {
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
          <img src="/images/turf-aerial.png" alt="Contact" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: 'rgba(13,26,13,0.88)' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <Reveal><span className="text-xs font-bold tracking-widest uppercase mb-3 block text-green-400">We'd Love to Hear From You</span></Reveal>
          <Reveal delay={0.1}><h1 className="font-display leading-none" style={{ fontSize: 'clamp(3.5rem,10vw,7rem)' }}>CONTACT</h1></Reveal>
          <Reveal delay={0.2}><p className="text-base mt-4 max-w-md mx-auto" style={{ color: 'rgba(245,240,232,0.7)' }}>Questions, bookings, events — reach out and we'll get back to you quickly.</p></Reveal>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: '#f5f0e8' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info */}
          <Reveal>
            <div style={{ width: 44, height: 3, background: '#c0392b', marginBottom: 20 }} />
            <h2 className="font-display text-3xl mb-8" style={{ color: '#0d1a0d' }}>FIND US</h2>
            <div className="space-y-7">
              {[
                {
                  icon: <MapPin size={18} />,
                  label: 'Address',
                  content: (<>
                    <p className="text-sm leading-relaxed" style={{ color: '#555' }}>Plot No. 7/8, Mardi Road,<br />near Animation College,<br />Yogiraj Nagar, Amravati,<br />Maharashtra 444602</p>
                    <a href="https://www.google.com/maps/place/Titan+Sports+Arena/@20.9438211,77.8016039,17.59z" target="_blank" rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-widest no-underline mt-2 inline-flex items-center gap-1" style={{ color: '#2d5a2d' }}>
                      Get Directions <ArrowRight size={12} />
                    </a>
                  </>)
                },
                {
                  icon: <Phone size={18} />,
                  label: 'Phone & WhatsApp',
                  content: (<>
                    <a href="tel:+919325981046" className="text-sm font-medium no-underline" style={{ color: '#444' }}>+91 93259 81046</a><br />
                    <a href="https://wa.me/919325981046" target="_blank" rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-widest no-underline mt-2 inline-flex items-center gap-1" style={{ color: '#25D366' }}>
                      Chat on WhatsApp <ArrowRight size={12} />
                    </a>
                  </>)
                },
                {
                  icon: <Clock size={18} />,
                  label: 'Hours',
                  content: (<><p className="text-sm" style={{ color: '#555' }}>Monday – Sunday</p><p className="text-sm font-semibold" style={{ color: '#0d1a0d' }}>6:00 AM – 12:00 AM</p></>)
                },
                {
                  icon: <Instagram size={18} />,
                  label: 'Instagram',
                  content: (<a href="https://www.instagram.com/titansportsarena/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium no-underline" style={{ color: '#444' }}>@titansportsarena</a>)
                },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-white" style={{ background: '#c0392b' }}>{item.icon}</div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: '#aaa' }}>{item.label}</p>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center p-16 bg-white h-full" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
                  <CheckCircle2 size={56} style={{ color: '#2d5a2d' }} className="mb-5" />
                  <h3 className="font-display text-3xl mb-3" style={{ color: '#0d1a0d' }}>MESSAGE SENT!</h3>
                  <p className="text-sm max-w-sm mb-6" style={{ color: '#666' }}>Thank you for reaching out. We'll get back to you as soon as possible.</p>
                  <a href="https://wa.me/919325981046" target="_blank" rel="noopener noreferrer" className="btn-red">Open WhatsApp <ArrowRight size={16} /></a>
                </div>
              ) : (
                <div className="bg-white p-8 md:p-10" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
                  <h3 className="font-display text-3xl mb-2" style={{ color: '#0d1a0d' }}>SEND A MESSAGE</h3>
                  <p className="text-sm mb-8" style={{ color: '#888' }}>We'll respond to your enquiry as quickly as possible.</p>

                  {/* Netlify hidden form for build-time detection */}
                  <form name="contact" data-netlify="true" hidden>
                    <input type="text" name="name" /><input type="tel" name="phone" />
                    <select name="subject"></select><textarea name="message"></textarea>
                  </form>

                  <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-5">
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden><label>Skip: <input name="bot-field" /></label></p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div><label className="form-label">Your Name *</label><input type="text" name="name" required placeholder="Full name" className="form-field" /></div>
                      <div><label className="form-label">Phone Number *</label><input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" className="form-field" /></div>
                    </div>

                    <div>
                      <label className="form-label">Subject *</label>
                      <select name="subject" required className="form-field">
                        <option value="">Select a topic</option>
                        <option value="booking">Booking Enquiry</option>
                        <option value="pricing">Pricing Information</option>
                        <option value="event">Event / Tournament Hosting</option>
                        <option value="cafe">Mini Machines Café</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div><label className="form-label">Message *</label><textarea name="message" required rows="5" placeholder="How can we help you?" className="form-field" style={{ resize: 'vertical' }} /></div>

                    <button type="submit" className="btn-red w-full justify-center py-4" style={{ display: 'flex', letterSpacing: '0.1em' }}>
                      Send Message <ArrowRight size={16} />
                    </button>
                  </form>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <div style={{ height: 420 }}>
        <iframe
          title="Titan Sports Arena Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1877.6!2d77.8016039!3d20.9438211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a3004ea052f5%3A0x7272e651ba9e8d13!2sTitan%20Sports%20Arena!5e0!3m2!1sen!2sin!4v1710000000000"
          width="100%" height="420" style={{ border: 0, display: 'block' }}
          allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Quick contact strip */}
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
