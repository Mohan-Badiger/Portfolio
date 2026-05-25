import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import CursorTrail from './components/CursorTrail'
import BigDeveloperTitle from './components/BigDeveloperTitle'


export default function App() {
  // Initialize Lenis smooth scroll globally
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth inertia ease
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    })

    window.lenis = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Intercept anchor link clicks to scroll smoothly with Lenis
    const handleAnchorClick = (e) => {
      const link = e.target.closest('a')
      if (!link) return
      const href = link.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetEl = targetId === 'top' || targetId === ''
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

    // Scroll to top on reload to avoid browser offset bugs with custom scroll hooks
    window.scrollTo(0, 0)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 dark:bg-[#08080c] dark:text-[#f8fafc] bg-dot-grid overflow-x-hidden selection:bg-purple-600/40 selection:text-white transition-colors duration-500">
      {/* High-performance custom canvas cursor trail & sprinkles */}
      <CursorTrail />

      {/* Floating navigation bar */}
      <Navbar />

      <main>
        {/* Hero header */}
        <Header />

        {/* Core sections */}
        <About />
        <Services />
        <Work />
        <ContactSection />
        <BigDeveloperTitle />
      </main>

      {/* Footer credits and social map */}
      <Footer />
    </div>
  )
}
