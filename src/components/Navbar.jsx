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

    // Scroll state observer with RAF throttling
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 25)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Non-blocking IntersectionObserver for active section highlighting
    const sections = ['about', 'experience', 'skills', 'work', 'contact']
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { name: 'Home', id: 'home', href: '#top' },
    { name: 'About', id: 'about', href: '#about' },
    { name: 'Experience', id: 'experience', href: '#experience' },
    { name: 'Skills', id: 'skills', href: '#skills' },
    { name: 'Projects', id: 'work', href: '#work' },
    { name: 'Contact', id: 'contact', href: '#contact' },
  ]

  return (
    <>
      {/* Background atmosphere lights */}
      <div className="fixed top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] -z-20 translate-y-[-50%] translate-x-[20%] aurora-blue pointer-events-none rounded-full blur-[80px] sm:blur-[100px]" />
      <div className="fixed top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 -z-20 translate-x-[-50%] translate-y-[-50%] aurora-purple pointer-events-none rounded-full blur-[70px] sm:blur-[90px]" />

      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full fixed top-0 left-0 px-4 xs:px-6 sm:px-10 lg:px-[8%] py-3 sm:py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-md border-b border-slate-200/50 dark:border-white/[0.04] bg-white/85 dark:bg-[#08080c]/85 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-2 group min-h-[44px] min-w-[44px]" aria-label="Mohan Badiger Home">
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
                  className={`transition-colors duration-200 py-1 inline-block ${
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

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button with 44px min touch target */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle system color theme"
            className="w-10 h-10 rounded-lg border border-slate-200 dark:border-white/[0.08] hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors bg-white/40 dark:bg-transparent text-slate-700 dark:text-gray-300 flex items-center justify-center cursor-pointer"
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

          {/* Desktop CTA */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-5 py-2 border border-antigravityBlue/20 bg-antigravityBlue/5 hover:bg-antigravityBlue/10 hover:border-antigravityBlue/50 text-xs font-semibold font-Inter text-antigravityBlue rounded-lg transition-all duration-300"
          >
            Get in Touch
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </motion.a>

          {/* Mobile Drawer Trigger (44px touch area) */}
          <button
            className="flex md:hidden w-10 h-10 rounded-lg border border-slate-200 dark:border-white/[0.08] hover:bg-slate-100 dark:hover:bg-white/[0.04] text-slate-700 dark:text-gray-300 items-center justify-center cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile navigation menu"
          >
            <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer with Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90]"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              className="fixed right-0 top-0 bottom-0 w-[85vw] max-w-[320px] h-full bg-white dark:bg-[#0b0c10] border-l border-slate-200 dark:border-white/[0.1] shadow-2xl z-[100] flex flex-col p-6 text-slate-900 dark:text-white font-Inter overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-200/80 dark:border-white/[0.08]">
                <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white font-Inter">
                  Mohan<span className="text-antigravityBlue">.</span>
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-xl border border-slate-200 dark:border-white/[0.1] bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-800 dark:text-white flex items-center justify-center cursor-pointer transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between min-h-[48px] px-4 rounded-xl text-base font-medium transition-all duration-200 ${
                          isActive
                            ? 'bg-antigravityBlue/10 text-antigravityBlue dark:text-antigravityBlue font-semibold border border-antigravityBlue/25 shadow-sm'
                            : 'text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-white/[0.06] hover:text-slate-950 dark:hover:text-white'
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive ? (
                          <span className="w-2 h-2 rounded-full bg-antigravityBlue shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                        ) : (
                          <svg className="w-4 h-4 text-slate-400 dark:text-slate-500 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </a>
                    </li>
                  )
                })}
              </ul>

              {/* Drawer Footer Actions */}
              <div className="mt-auto pt-6 border-t border-slate-200/80 dark:border-white/[0.08] flex flex-col gap-3">
                {/* Mobile Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="w-full min-h-[44px] flex items-center justify-between px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-100/70 dark:bg-white/[0.04] text-slate-700 dark:text-slate-200 text-sm font-medium transition-colors hover:bg-slate-200/60 dark:hover:bg-white/[0.08]"
                >
                  <span className="flex items-center gap-2.5">
                    {darkTheme ? (
                      <svg className="w-4 h-4 fill-none stroke-current text-amber-400" viewBox="0 0 24 24" strokeWidth={2}>
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m14.14-14.14l-1.41 1.41" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 fill-none stroke-current text-indigo-500" viewBox="0 0 24 24" strokeWidth={2}>
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    <span>{darkTheme ? 'Light Mode' : 'Dark Mode'}</span>
                  </span>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wider">Switch</span>
                </button>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full min-h-[46px] flex items-center justify-center gap-2 py-3 bg-antigravityBlue hover:bg-blue-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-antigravityBlue/20 transition-all active:scale-[0.98]"
                >
                  Get in Touch
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
