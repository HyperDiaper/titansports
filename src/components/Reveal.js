'use client'
import { useEffect, useRef } from 'react'

export default function Reveal({ children, className = '', delay = 0, style = {} }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.transitionDelay = `${delay}s`
        el.classList.add('visible')
      }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return <div ref={ref} className={`reveal ${className}`} style={style}>{children}</div>
}
