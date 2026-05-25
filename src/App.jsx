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

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Scroll to top on reload to avoid browser offset bugs with custom scroll hooks
    window.scrollTo(0, 0)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[#030008] text-gray-100 bg-grid-pattern overflow-x-hidden selection:bg-purple-600/40 selection:text-white">
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
      </main>

      {/* Footer credits and social map */}
      <Footer />
    </div>
  )
}
