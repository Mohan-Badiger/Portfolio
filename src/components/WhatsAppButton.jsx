import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  // Trigger tooltip once shortly after page loads to draw subtle attention
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  // Close tooltip automatically after some time if not hovered
  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false)
      }, 9000)
      return () => clearTimeout(timer)
    }
  }, [showTooltip])

  const message = "Hi Mohan, I saw your portfolio and would love to connect!"
  const whatsappUrl = `https://wa.me/916362893798?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip text */}
      <AnimatePresence>
        {(isHovered || showTooltip) && (
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 15, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 15, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setShowTooltip(false)}
            className="hidden sm:flex flex-col items-start bg-white/95 dark:bg-[#0d0e12]/95 border border-slate-200 dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)] backdrop-blur-md px-4 py-2.5 rounded-lg select-none cursor-pointer text-left transition-colors duration-300"
          >
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-mono text-emerald-500 font-bold tracking-wider uppercase">ONLINE</span>
            </div>
            <span className="text-xs font-bold font-GoogleSans text-slate-800 dark:text-white leading-tight">
              Chat with Mohan
            </span>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => {
          setIsHovered(true)
          setShowTooltip(false) // permanently hide initial timer tooltip once interacted
        }}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{
          scale: 1.08,
          transition: { type: "spring", stiffness: 400, damping: 15 }
        }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-tr from-emerald-500 to-teal-400 text-white shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.5)] border border-emerald-400/20 dark:border-emerald-400/40 relative cursor-pointer group transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing Back Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping opacity-75 pointer-events-none" />

        {/* WhatsApp Icon (Clean, modern SVG) */}
        <svg
          className="w-6 h-6 fill-current transition-transform duration-700 ease-out group-hover:rotate-[360deg]"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.56 0 11.9-5.336 11.902-11.894a11.864 11.864 0 00-3.481-8.413z" />
        </svg>
      </motion.a>
    </div>
  )
}
