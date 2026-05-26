import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { assets } from './assets.js'

// Mock logs to simulate console outputs
const agentLogs = [
  { text: ">> Initializing Mohan's Developer Console [v2.0.0]...", color: "text-gray-400" },
  { text: ">> Establishing local repository connections...", color: "text-gray-400" },
  { text: ">> Status: ONLINE", color: "text-emerald-400" },
  { text: ">> Synchronizing project metadata...", color: "text-gray-400" },
  { text: "   - bnt_temples.jsx (Loaded)", color: "text-purple-400" },
  { text: "   - easy_share.ts (Loaded)", color: "text-purple-400" },
  { text: "   - fotx_digital.py (Loaded)", color: "text-purple-400" },
  { text: "   - droplyx.json (Loaded)", color: "text-purple-400" },
  { text: ">> Mapping system architecture modules...", color: "text-gray-400" },
  { text: "   - React, Node.js, MongoDB, Docker, AWS EC2", color: "text-sky-400" },
  { text: ">> Running local check compilation checks...", color: "text-yellow-400" },
  { text: ">> Build successful: 0 errors, 0 warnings", color: "text-emerald-400" },
  { text: ">> Listening for hot reload triggers...", color: "text-gray-400" },
  { text: ">> Hot server initialized: https://mohanbadiger.site", color: "text-emerald-400 animate-pulse" },
  { text: ">> Setup ready: system idling...", color: "text-sky-400" },
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
    <div className="w-full min-h-screen relative flex items-center justify-center pt-24 pb-16 px-6 sm:px-12 lg:px-[8%] bg-dot-grid overflow-hidden">
      {/* Aurora glow light leaks */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] -z-10 aurora-blue pointer-events-none rounded-full blur-[130px] opacity-40 animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] -z-10 aurora-purple pointer-events-none rounded-full blur-[120px] opacity-30 animate-float-normal" />

      {/* SEO H1 (Invisible) */}
      <h1 className="sr-only">Mohan Badiger – Full Stack MERN Developer</h1>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side: Bold Google Sans Flex Typography */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col gap-6 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-slate-200 dark:border-white/[0.04] bg-slate-100/50 dark:bg-white/[0.02] w-fit">
            <span className="w-2 h-2 rounded-full bg-antigravityBlue animate-ping" />
            <span className="text-[10px] uppercase font-bold tracking-widest font-GoogleSans text-gray-500 dark:text-gray-400">
              Full-Stack Developer
            </span>
          </div>

          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-GoogleSans tracking-tight leading-[0.9]">
            <span className="text-slate-900 dark:text-white font-medium">Mohan</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-antigravityBlue via-antigravityPurple to-antigravityPink font-semibold tracking-wide md:tracking-wider">
              Badiger
            </span>
          </h2>

          <h3 className="text-2xl sm:text-3xl font-normal font-GoogleSans tracking-tight text-slate-500 dark:text-gray-300 leading-tight">
            Engineering high-performance web systems<span className="text-antigravityBlue font-bold">.</span>
          </h3>

          <p className="max-w-lg text-sm sm:text-base text-slate-650 dark:text-gray-400 font-GoogleSans font-light leading-relaxed">
            I develop responsive, user-friendly full-stack solutions using <span className="text-slate-900 dark:text-white font-semibold">React</span>, <span className="text-slate-900 dark:text-white font-semibold">Node.js</span>, <span className="text-slate-900 dark:text-white font-semibold">MongoDB</span>, <span className="text-slate-900 dark:text-white font-semibold">Docker</span>, and <span className="text-slate-900 dark:text-white font-semibold">AWS</span>. Translating complex code into fluid interfaces.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <motion.a
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="px-6 py-3 rounded bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-[#08080c] dark:hover:bg-slate-100 font-GoogleSans text-xs font-medium shadow-xl transition-all duration-200"
            >
              Get Started
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="./assets/Mohan_FullStack Resume.pdf"
              download
              className="px-6 py-3 rounded border border-slate-200 dark:border-white/[0.08] hover:bg-slate-100 dark:hover:bg-white/[0.02] text-slate-800 dark:text-white font-GoogleSans text-xs font-medium transition-all duration-200"
            >
              Download Resume
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 items-center">
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
                className="w-11 h-11 rounded-lg border border-slate-250 dark:border-white/[0.08] bg-slate-100/30 dark:bg-white/[0.02] flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/[0.06] hover:border-antigravityBlue/50 dark:hover:border-antigravityBlue/50 hover:shadow-lg hover:shadow-antigravityBlue/10 transition-all duration-300 group"
                aria-label={`Mohan Badiger ${soc.name}`}
              >
                <img
                  src={soc.icon}
                  alt={soc.name}
                  width={20}
                  height={20}
                  decoding="async"
                  className="w-5 h-5 object-contain dark:hidden group-hover:scale-110 transition-transform duration-300"
                />
                <img
                  src={soc.darkIcon}
                  alt={soc.name}
                  width={20}
                  height={20}
                  decoding="async"
                  className="w-5 h-5 object-contain hidden dark:block group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Antigravity Mission Control (Agent Terminal) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 w-full animate-float-normal"
        >
          {/* Mock Console Outer Frame */}
          <div className="w-full terminal-card rounded-xl border border-white/[0.06] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden font-mono text-xs select-none">
            {/* Window bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d0e12] border-b border-white/[0.06]">
              {/* Left Mock Dots */}
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              {/* Tab Title */}
              <div className="flex gap-2 text-[10px] text-gray-500 font-GoogleSans">
                <span className="text-gray-300 font-medium px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.04]">
                  information.log
                </span>
                <span className="px-2 py-0.5">profile.json</span>
              </div>
              {/* Right diagnostics */}
              <div className="text-[10px] text-gray-600 font-GoogleSans">
                Developer
              </div>
            </div>

            {/* Simulated Shell Screen */}
            <div className="p-5 h-[340px] overflow-y-auto flex flex-col gap-2.5 text-left leading-relaxed scrollbar-thin">
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
            <div className="px-4 py-2.5 bg-[#0d0e12] border-t border-white/[0.06] flex items-center justify-between text-[10px] text-gray-500 font-GoogleSans font-light">
              <div className="flex gap-4">
                <span>MODULES: <span className="text-emerald-400 font-medium">6 STABLE</span></span>
                <span>CPU: <span className="text-sky-400 font-medium">4%</span></span>
              </div>
              <div>
                <span>STATUS: <span className="text-purple-400 font-medium">SYSTEM IDLE</span></span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
