import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { assets } from './assets.js'

// Mock logs reflecting Mohan's real SDE credentials
const agentLogs = [
  { text: ">> Initializing Mohan Badiger | SDE Console [v2.5.0]...", color: "text-gray-400" },
  { text: ">> Verifying professional experience...", color: "text-gray-400" },
  { text: "   - Bluestock Fintech: SDE Intern (React, Node.js, REST APIs)", color: "text-emerald-400" },
  { text: "   - Infidata Technologies: Web Dev Intern (PHP, MySQL, CRUD)", color: "text-emerald-400" },
  { text: ">> Synchronizing featured production systems...", color: "text-gray-400" },
  { text: "   - Temple-Platform: 11+ REST APIs, Razorpay HMAC, OAuth 2.0", color: "text-purple-400" },
  { text: "   - Droplyx-SaaS: Next.js, Puppeteer tracker, Docker", color: "text-purple-400" },
  { text: "   - ReelVerse: Real-time booking, QR passes, Razorpay", color: "text-purple-400" },
  { text: ">> Stack: React, Next.js, Node.js, Express, MongoDB, Docker, AWS", color: "text-sky-400" },
  { text: ">> CS Fundamentals: DSA, OOP, DBMS, OS, Networks [READY]", color: "text-yellow-400" },
  { text: ">> Status: AVAILABLE FOR SDE ROLES • IMMEDIATE JOINER", color: "text-emerald-400 animate-pulse" },
]

export default function Header() {
  const [logs, setLogs] = useState([])
  const [logIndex, setLogIndex] = useState(0)

  // Simulation loop for typing out agent logs
  useEffect(() => {
    if (logIndex < agentLogs.length) {
      const timeout = setTimeout(() => {
        setLogs((prev) => [...prev, agentLogs[logIndex]])
        setLogIndex((prev) => prev + 1)
      }, logIndex === 0 ? 500 : Math.random() * 800 + 400) // Varied delay for typing realism

      return () => clearTimeout(timeout)
    } else {
      // Loop logs from start after idling for a bit
      const resetTimeout = setTimeout(() => {
        setLogs([])
        setLogIndex(0)
      }, 8000)
      return () => clearTimeout(resetTimeout)
    }
  }, [logIndex])

  return (
    <div className="w-full min-h-[92vh] sm:min-h-screen relative flex items-center justify-center pt-20 sm:pt-24 pb-14 sm:pb-16 px-4 xs:px-6 sm:px-10 lg:px-[8%] bg-dot-grid overflow-hidden">
      {/* Aurora glow light leaks - Scaled down for mobile GPU performance */}
      <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] -z-10 aurora-blue pointer-events-none rounded-full blur-[80px] sm:blur-[130px] opacity-40 animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] -z-10 aurora-purple pointer-events-none rounded-full blur-[70px] sm:blur-[120px] opacity-30 animate-float-normal" />

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Side: Expanded 7-column layout for breathing room */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 text-left"
        >
          {/* Subtle & Premium Live Status Pill */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/[0.04] dark:bg-emerald-400/[0.05] backdrop-blur-sm w-fit select-none">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-mono tracking-wider text-slate-700 dark:text-emerald-300 font-medium">
              Open to SDE Roles • Immediate Joiner
            </span>
          </div>

          {/* Semantic SEO Primary H1 */}
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-Inter tracking-tight leading-[0.95] break-words">
            <span className="text-slate-900 dark:text-white font-medium">Mohan</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-antigravityBlue via-antigravityPurple to-antigravityPink font-semibold tracking-wide md:tracking-wider">
              Badiger
            </span>
          </h1>

          {/* Semantic Subtitle H2 */}
          <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[25px] font-normal font-Inter tracking-tight text-slate-600 dark:text-gray-300 leading-snug whitespace-normal sm:whitespace-nowrap">
            Software Development Engineer <span className="text-antigravityBlue font-semibold">(Full Stack / MERN)</span>
          </h2>

          <p className="max-w-xl text-xs xs:text-sm sm:text-base text-slate-600 dark:text-gray-400 font-Inter font-light leading-relaxed">
            Software Development Engineer with hands-on internship experience at <span className="text-slate-900 dark:text-white font-semibold">Bluestock Fintech</span> and <span className="text-slate-900 dark:text-white font-semibold">Infidata Technologies</span>. Engineering high-performance web systems using <span className="text-slate-900 dark:text-white font-semibold">React.js, Next.js, Node.js, Express, MongoDB, Docker</span>, and <span className="text-slate-900 dark:text-white font-semibold">AWS</span>, backed by strong CS fundamentals.
          </p>

          {/* Action CTAs - Side-by-Side Premium Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <motion.a
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="#work"
              className="px-6 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-[#08080c] dark:hover:bg-slate-100 font-Inter text-xs font-semibold shadow-xl transition-all duration-200 w-auto"
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="/assets/Mohan_Resume_SDE.pdf"
              download
              className="px-6 py-3 rounded-lg border border-slate-200 dark:border-white/[0.08] hover:bg-slate-100 dark:hover:bg-white/[0.02] text-slate-800 dark:text-white font-Inter text-xs font-semibold transition-all duration-200 flex items-center gap-2 w-auto"
            >
              <svg className="w-4 h-4 text-antigravityBlue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Resume
            </motion.a>
          </div>

          {/* Social Links & Fast Recruiter Contacts */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
            <div className="flex gap-2.5 sm:gap-3 items-center">
              {[
                { url: 'https://github.com/Mohan-Badiger', icon: assets.github, darkIcon: assets.githubdark, name: 'GitHub' },
                { url: 'https://www.linkedin.com/in/mohan-badiger', icon: assets.linkedin, darkIcon: assets.linkedindark, name: 'LinkedIn' },
                { url: 'https://www.youtube.com/@MohanBadiger250', icon: assets.youtube, darkIcon: assets.youtubedark, name: 'YouTube' },
                { url: 'https://www.instagram.com/mohan_badiger250', icon: assets.instagram, darkIcon: assets.instagramdark, name: 'Instagram' }
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg border border-slate-250 dark:border-white/[0.08] bg-slate-100/40 dark:bg-white/[0.02] flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/[0.06] hover:border-antigravityBlue/50 dark:hover:border-antigravityBlue/50 hover:shadow-lg hover:shadow-antigravityBlue/10 transition-all duration-300 group"
                  aria-label={`Mohan Badiger ${soc.name}`}
                >
                  <img
                    src={soc.icon}
                    alt={soc.name}
                    width={18}
                    height={18}
                    decoding="async"
                    className="w-4 h-4 object-contain dark:hidden group-hover:scale-110 transition-transform duration-300"
                  />
                  <img
                    src={soc.darkIcon}
                    alt={soc.name}
                    width={18}
                    height={18}
                    decoding="async"
                    className="w-4 h-4 object-contain hidden dark:block group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>

            <div className="hidden sm:block h-6 w-px bg-slate-200 dark:bg-white/10" />

            <div className="flex items-center gap-3 text-xs font-Inter text-slate-600 dark:text-gray-300">
              <a
                href="mailto:mohanbadiger250@gmail.com"
                className="hover:text-antigravityBlue transition-colors flex items-center gap-1.5 py-1"
                title="Send email"
              >
                <span className="text-slate-400 dark:text-gray-500">✉</span>
                mohanbadiger250@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Refined, compact 5-column Agent Terminal (Hidden on small screens) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block lg:col-span-5 w-full animate-float-normal">
          {/* Mock Console Outer Frame */}
          <div className="w-full terminal-card rounded-xl border border-white/[0.06] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden font-mono text-xs select-none">
            {/* Window bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#0d0e12] border-b border-white/[0.06]">
              {/* Left Mock Dots */}
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              {/* Tab Title */}
              <div className="flex gap-2 text-[10px] text-gray-500 font-Inter">
                <span className="text-gray-300 font-medium px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.04]">
                  sde_profile.log
                </span>
              </div>
              {/* Right diagnostics */}
              <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ACTIVE
              </div>
            </div>

            {/* Simulated Shell Screen - Clean compact height */}
            <div className="p-4 sm:p-5 h-[300px] overflow-y-auto flex flex-col gap-2.5 text-left leading-relaxed scrollbar-thin">
              {logs.map((log, index) => (
                <div key={index} className={`font-mono text-[11px] ${log.color}`}>
                  {log.text}
                </div>
              ))}

              {/* Blinking Shell Cursor */}
              {logIndex < agentLogs.length && (
                <div className="flex items-center gap-1">
                  <span className="text-gray-500">&gt;&gt;</span>
                  <span className="w-1.5 h-4 bg-antigravityBlue animate-pulse" />
                </div>
              )}
            </div>

            {/* Diagnostics Stats Bar */}
            <div className="px-4 py-2 bg-[#0d0e12] border-t border-white/[0.06] flex items-center justify-between text-[10px] text-gray-500 font-Inter font-light">
              <div className="flex gap-4">
                <span>STACK: <span className="text-emerald-400 font-medium">MERN / CLOUD</span></span>
                <span>STATUS: <span className="text-sky-400 font-medium">ONLINE</span></span>
              </div>
              <div>
                <span className="text-purple-400 font-medium">SDE-READY</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
