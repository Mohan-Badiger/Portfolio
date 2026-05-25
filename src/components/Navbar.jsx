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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)

      const sections = ['about', 'services', 'work', 'contact']
      let currentSection = 'home'
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section
            break
          }
        }
      }
      setActiveSection(currentSection)
    }
    window.addEventListener('scroll', handleScroll)

    // Check system preference or localstorage
    if (localStorage.theme === 'light') {
      document.documentElement.classList.remove('dark')
      setDarkTheme(false)
    } else {
      document.documentElement.classList.add('dark')
      setDarkTheme(true)
    }

    return () => window.removeEventListener('scroll', handleScroll)
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
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-6 h-6 rounded bg-gradient-to-tr from-antigravityBlue via-antigravityPurple to-antigravityPink flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
            M
          </div>
          <span className="text-lg font-bold font-GoogleSans tracking-tight text-slate-900 dark:text-white">
            Mohan<span className="text-antigravityBlue font-extrabold group-hover:text-antigravityPink transition-colors">_</span>
          </span>
        </a>

        {/* Minimalist Google-style menu links */}
        <ul className="hidden md:flex items-center gap-6 font-GoogleSans text-sm font-light text-slate-500 dark:text-gray-400">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <li key={link.name} className="relative py-1">
                <a
                  href={link.href}
                  className={`transition-colors duration-200 ${
                    isActive 
                      ? 'text-slate-900 dark:text-white font-medium' 
                      : 'hover:text-slate-900 dark:hover:text-gray-250'
                  }`}
                >
                  {link.name}
                </a>
                
                {/* Underline tracker for active section */}
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
          {/* Light/Dark Toggler */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle system color theme"
            className="p-1.5 rounded border border-slate-200 dark:border-white/[0.06] hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors bg-white/20 dark:bg-transparent"
          >
            <motion.img
              key={darkTheme ? 'sun' : 'moon'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={darkTheme ? './assets/sun_icon.png' : './assets/moon_icon.png'}
              alt={darkTheme ? 'Light mode' : 'Dark mode'}
              className="w-4 h-4 object-contain"
            />
          </button>

          {/* Connect Action CTA */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-5 py-1.5 border border-antigravityBlue/20 bg-antigravityBlue/5 hover:bg-antigravityBlue/10 hover:border-antigravityBlue/50 text-xs font-medium font-GoogleSans text-antigravityBlue rounded transition-all duration-300"
          >
            Deploy
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </motion.a>

          {/* Mobile Drawer Trigger */}
          <button
            className="block md:hidden p-1.5 rounded border border-slate-200 dark:border-white/[0.06] hover:bg-slate-100 dark:hover:bg-white/[0.04]"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open side panel"
          >
            <img
              src={darkTheme ? './assets/menu-white.png' : './assets/menu-black.png'}
              alt="Menu"
              className="w-4 h-4 object-contain"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer (Antigravity Terminal Panel Style) */}
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
              className="fixed right-0 top-0 bottom-0 w-72 h-full bg-white dark:bg-[#0d0e12]/95 border-l border-slate-200 dark:border-white/[0.06] backdrop-blur-2xl z-50 flex flex-col p-6 shadow-2xl text-slate-800 dark:text-white font-GoogleSans"
            >
              <div className="flex justify-between items-center mb-10 pb-4 border-b border-slate-100 dark:border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-gradient-to-tr from-antigravityBlue to-antigravityPurple" />
                  <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
                    Mohan
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded border border-slate-200 dark:border-white/[0.06] hover:bg-slate-100 dark:hover:bg-white/[0.04]"
                  aria-label="Close panel"
                >
                  <img
                    src={darkTheme ? './assets/close-white.png' : './assets/close-black.png'}
                    alt="Close"
                    className="w-3 h-3 object-contain"
                  />
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
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-antigravityBlue to-antigravityPurple text-white text-sm font-semibold rounded shadow-lg"
                >
                  Deploy Connection
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