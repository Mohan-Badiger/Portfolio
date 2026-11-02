import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkTheme, setDarkTheme] = useState(true)
  const [activeSection, setActiveSection] = useState('home')

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark')
    setDarkTheme(isDark)
    localStorage.theme = isDark ? 'dark' : 'light'
  }

  useEffect(() => {
    // Check system preference or localStorage
    if (localStorage.theme === 'light') {
      document.documentElement.classList.remove('dark')
      setDarkTheme(false)
    } else {
      document.documentElement.classList.add('dark')
      setDarkTheme(true)
    }

    // Scroll state observer with RAF throttling to prevent layout thrashing
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Non-blocking IntersectionObserver for active section highlighting
    const sections = ['about', 'services', 'work', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const navLinks = [
    { name: 'Home', id: 'home', href: '#top' },
    { name: 'About', id: 'about', href: '#about' },
    { name: 'Services', id: 'services', href: '#services' },
    { name: 'Projects', id: 'work', href: '#work' },
    { name: 'Contact', id: 'contact', href: '#contact' },
  ]

  return (
    <>
      {/* Visual background atmospheric lights */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] -z-20 translate-y-[-50%] translate-x-[20%] aurora-blue pointer-events-none rounded-full blur-[100px]" />
      <div className="fixed top-1/2 left-0 w-96 h-96 -z-20 translate-x-[-50%] translate-y-[-50%] aurora-purple pointer-events-none rounded-full blur-[90px]" />

      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full fixed top-0 left-0 px-6 sm:px-10 lg:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 backdrop-blur-md border-b border-slate-200/50 dark:border-white/[0.04] bg-white/80 dark:bg-[#08080c]/80'
            : 'bg-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-2 group" aria-label="Mohan Badiger Home">
          <span className="text-lg font-bold font-Inter tracking-tight text-slate-900 dark:text-white">
            Mohan<span className="text-antigravityBlue">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-Inter text-sm font-light text-slate-500 dark:text-gray-400">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <li key={link.name} className="relative py-1">
                <a
                  href={link.href}
                  className={`transition-colors duration-200 ${
                    isActive
                      ? 'text-slate-900 dark:text-white font-medium'
                      : 'hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </a>

                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-antigravityBlue rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme Toggle Button (Inline Crisp Vector SVGs) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle system color theme"
            className="p-2 rounded border border-slate-200 dark:border-white/[0.08] hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors bg-white/40 dark:bg-transparent text-slate-700 dark:text-gray-300"
          >
            {darkTheme ? (
              <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth={2}>
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m14.14-14.14l-1.41 1.41" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth={2}>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>

          {/* Connect Action CTA */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-5 py-1.5 border border-antigravityBlue/20 bg-antigravityBlue/5 hover:bg-antigravityBlue/10 hover:border-antigravityBlue/50 text-xs font-medium font-Inter text-antigravityBlue rounded transition-all duration-300"
          >
            Get in Touch
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </motion.a>

          {/* Mobile Drawer Trigger (Vector Hamburger) */}
          <button
            className="block md:hidden p-2 rounded border border-slate-200 dark:border-white/[0.08] hover:bg-slate-100 dark:hover:bg-white/[0.04] text-slate-700 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              className="fixed right-0 top-0 bottom-0 w-72 h-full bg-white dark:bg-[#0d0e12]/95 border-l border-slate-200 dark:border-white/[0.06] backdrop-blur-2xl z-50 flex flex-col p-6 shadow-2xl text-slate-800 dark:text-white font-Inter"
            >
              <div className="flex justify-between items-center mb-10 pb-4 border-b border-slate-100 dark:border-white/[0.06]">
                <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
                  Mohan<span className="text-antigravityBlue">.</span>
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded border border-slate-200 dark:border-white/[0.06] hover:bg-slate-100 dark:hover:bg-white/[0.04] text-slate-700 dark:text-gray-300"
                  aria-label="Close menu"
                >
                  <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <ul className="flex flex-col gap-4 text-base font-light text-slate-600 dark:text-gray-300">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2.5 px-3 rounded hover:bg-slate-100 dark:hover:bg-white/[0.03] hover:text-slate-950 dark:hover:text-white transition-all duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-antigravityBlue hover:bg-blue-600 text-white text-sm font-semibold rounded shadow-lg transition-colors"
                >
                  Get in Touch
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
