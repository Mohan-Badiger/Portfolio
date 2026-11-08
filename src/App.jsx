import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Work from './components/Work'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import CursorTrail from './components/CursorTrail'
import BigDeveloperTitle from './components/BigDeveloperTitle'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  // Initialize Lenis smooth scroll globally with mobile-optimized tuning
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const lenis = new Lenis({
      duration: isMobile ? 0.8 : 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      syncTouch: false,
    })

    window.lenis = lenis

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // Intercept anchor link clicks to scroll smoothly with Lenis
    const handleAnchorClick = (e) => {
      const link = e.target.closest('a')
      if (!link) return
      const href = link.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetEl =
          targetId === 'top' || targetId === ''
            ? document.getElementById('root')
            : document.getElementById(targetId)
        if (targetEl) {
          lenis.scrollTo(targetEl, { offset: -80, duration: 1.2 })
        } else {
          lenis.scrollTo(0, { duration: 1.2 })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    // Scroll to top on reload to avoid browser offset bugs
    window.scrollTo(0, 0)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
      delete window.lenis
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 dark:bg-[#08080c] dark:text-[#f8fafc] bg-dot-grid overflow-x-hidden selection:bg-purple-600/40 selection:text-white transition-colors duration-500">
      {/* High-performance custom canvas cursor trail & sprinkles (auto-pauses when idle) */}
      <CursorTrail />

      {/* Floating navigation bar */}
      <Navbar />

      <main id="main-content">
        {/* Hero header */}
        <Header />

        {/* Core sections */}
        <About />
        <Experience />
        <Services />
        <Work />
        <ContactSection />
        <BigDeveloperTitle />
      </main>

      {/* Footer credits and social map */}
      <Footer />

      {/* Floating WhatsApp connection module */}
      <WhatsAppButton />
    </div>
  )
}
