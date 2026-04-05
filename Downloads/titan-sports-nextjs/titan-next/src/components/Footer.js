import Link from 'next/link'
import { MapPin, Phone, Clock, Instagram } from 'lucide-react'

const WA_SVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer style={{ background: '#0d1a0d', color: '#f5f0e8' }}>
      <div style={{ height: 3, background: '#c0392b' }} />
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/images/logo.png" alt="Titan Sports Arena" className="w-11 h-11 object-contain" />
            <div className="font-display text-white text-lg leading-tight tracking-wider">
              <div>Titan Sports</div><div>Arena</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(245,240,232,0.55)' }}>
            Amravati's premier FIFA-approved multi-sport arena with a first-of-its-kind sports café experience.
          </p>
          <div className="flex gap-2">
            {[
              { href: 'https://www.instagram.com/titansportsarena/', label: 'Instagram', icon: <Instagram size={15} /> },
              { href: 'https://wa.me/919325981046', label: 'WhatsApp', icon: <WA_SVG /> },
            ].map(s => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.08)', color: '#f5f0e8' }}
                onMouseEnter={e => e.currentTarget.style.background = '#c0392b'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgba(245,240,232,0.35)' }}>Quick Links</p>
          <ul className="space-y-2">
            {[['/', 'Home'], ['/about', 'About Us'], ['/facilities', 'Facilities'], ['/cafe', 'Mini Machines Café'], ['/gallery', 'Gallery'], ['/book', 'Book a Session'], ['/contact', 'Contact']].map(([href, label]) => (
              <li key={href}><Link href={href} className="text-sm no-underline transition-colors" style={{ color: 'rgba(245,240,232,0.6)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#f5f0e8'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.6)'}>{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgba(245,240,232,0.35)' }}>Hours</p>
          <div className="flex items-start gap-3 mb-3">
            <Clock size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#c0392b' }} />
            <div>
              <p className="text-sm font-semibold text-white">Monday – Sunday</p>
              <p className="text-sm" style={{ color: 'rgba(245,240,232,0.6)' }}>6:00 AM – 12:00 AM</p>
            </div>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(245,240,232,0.4)' }}>Open every day. Early morning & late-night sessions available.</p>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgba(245,240,232,0.35)' }}>Get In Touch</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#c0392b' }} />
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.6)' }}>Plot No. 7/8, Mardi Road, near Animation College, Yogiraj Nagar, Amravati 444602</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={15} className="flex-shrink-0" style={{ color: '#c0392b' }} />
              <a href="tel:+919325981046" className="text-sm no-underline" style={{ color: 'rgba(245,240,232,0.6)' }}>+91 93259 81046</a>
            </div>
          </div>
          <a href="https://www.google.com/maps/place/Titan+Sports+Arena/@20.9438211,77.8016039,17.59z" target="_blank" rel="noopener noreferrer"
            className="inline-block mt-4 text-xs font-bold uppercase tracking-wider no-underline" style={{ color: '#4a8c4a' }}>
            View on Google Maps →
          </a>
        </div>
      </div>

      <div className="border-t max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <p className="text-xs" style={{ color: 'rgba(245,240,232,0.3)' }}>© {new Date().getFullYear()} Titan Sports Arena. All rights reserved.</p>
        <p className="text-xs" style={{ color: 'rgba(245,240,232,0.2)' }}>Amravati's Premier Sports Destination</p>
      </div>
    </footer>
  )
}
