import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark')
    setDarkTheme(isDark)
    localStorage.theme = isDark ? 'dark' : 'light'
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)

    // Default to dark theme on initialize
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
    { name: 'Home', href: '#top' },
    { name: 'About me', href: '#about' },
    { name: 'My Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Contact me', href: '#contact' },
  ]

  return (
    <>
      {/* Background aurora blur blobs */}
      <div className="fixed top-0 right-0 w-2/3 h-96 -z-10 translate-y-[-50%] translate-x-[20%] aurora-blob-1 pointer-events-none rounded-full" />
      <div className="fixed top-1/3 left-0 w-96 h-96 -z-10 translate-x-[-50%] aurora-blob-2 pointer-events-none rounded-full" />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
        className={`w-full fixed top-0 left-0 px-6 sm:px-12 lg:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 backdrop-blur-xl border-b border-white/5 bg-black/35 dark:bg-black/30' 
            : 'bg-transparent'
        }`}
      >
        <a href="#" className="flex items-center gap-1 group">
          <span className="text-2xl font-bold tracking-wider font-Outfit transition-all duration-300 text-black dark:text-white glow-text-purple dark:group-hover:text-pink-400">
            Mohan<span className="text-purple-500 font-extrabold group-hover:animate-ping inline-block">.</span>
          </span>
        </a>

        {/* Desktop menu items */}
        <ul className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 glass-card bg-white/5 dark:bg-black/20 font-Outfit text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="px-4 py-1.5 rounded-full text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-200 block"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle visual theme"
            className="p-2 rounded-full border border-white/10 glass-card hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-200"
          >
            <motion.img
              key={darkTheme ? 'sun' : 'moon'}
              initial={{ rotate: -90, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={darkTheme ? './assets/sun_icon.png' : './assets/moon_icon.png'}
              alt={darkTheme ? 'Light mode' : 'Dark mode'}
              className="w-5 h-5 dark:invert-0 invert"
            />
          </button>

          {/* Contact Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-6 py-2 border border-white/10 glass-card hover:border-purple-500/50 hover:bg-purple-950/20 text-sm font-Outfit rounded-full transition-all duration-300 text-black dark:text-white"
          >
            Connect
            <img src="./assets/arrow-icon.png" alt="" className="w-3 dark:invert invert-0" />
          </motion.a>

          {/* Mobile Menu trigger */}
          <button
            className="block md:hidden p-2 rounded-full border border-white/10 glass-card hover:bg-white/10 dark:hover:bg-white/5"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <img
              src={darkTheme ? './assets/menu-white.png' : './assets/menu-black.png'}
              alt="Menu"
              className="w-5 h-5"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer (with AnimatePresence) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Sidebar drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-72 h-full glass-card-premium bg-slate-900/90 dark:bg-black/85 backdrop-blur-2xl z-50 flex flex-col p-8 border-l border-white/10 shadow-2xl text-white"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-2xl font-bold tracking-wider glow-text-purple">
                  Mohan<span className="text-purple-500 font-extrabold">.</span>
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full border border-white/10 glass-card hover:bg-white/10"
                  aria-label="Close mobile menu"
                >
                  <img
                    src="./assets/close-white.png"
                    alt="Close"
                    className="w-4 h-4"
                  />
                </button>
              </div>

              <ul className="flex flex-col gap-6 text-lg font-Outfit">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 border-b border-white/5 hover:text-purple-400 hover:pl-2 transition-all duration-300"
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
                  className="w-full flex items-center justify-center gap-2 py-3 border border-purple-500/30 bg-purple-950/20 text-white rounded-full text-center font-Outfit text-sm hover:bg-purple-900/30 transition-colors"
                >
                  Get in touch
                  <img src="./assets/arrow-icon.png" alt="" className="w-3 invert" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}