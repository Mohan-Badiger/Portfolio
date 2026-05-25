import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Work() {
  const projects = [
    {
      name: 'BNT Temples',
      file: 'bnt_temples.jsx',
      icon: './assets/work-1.png',
      description: 'A Full Stack Web Application engineered for managing community temples, containing visual asset grids, search nodes, and user dashboard paths.',
      link: 'https://kds-temple-frontend.vercel.app',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
      status: 'STABLE [99.8%]',
      size: '14.2 MB',
    },
    {
      name: 'Easy Share',
      file: 'easy_share.ts',
      icon: './assets/work-2.png',
      description: 'A cloud-based File Sharing Web Application featuring fast socket connections, encrypted packet paths, drag-and-drop triggers, and download links.',
      link: 'https://easysharefiles.vercel.app',
      tags: ['React', 'Tailwind', 'Socket.IO', 'Express', 'Node'],
      status: 'STABLE [99.4%]',
      size: '8.7 MB',
    },
    {
      name: 'Fotx Digital',
      file: 'fotx_digital.py',
      icon: './assets/work-7.png',
      description: 'A sleek visual portal for a digital agency startup, featuring glassmorphic animations, custom vector templates, and automated contact flows.',
      link: 'https://fotx.site',
      tags: ['HTML', 'CSS', 'JavaScript', 'Framer Motion'],
      status: 'ONLINE',
      size: '5.1 MB',
    },
    {
      name: 'Droplyx',
      file: 'droplyx.json',
      icon: './assets/work-6.png',
      description: 'An E-commerce price tracking and alert dashboard. Implements background polling scripts to trace price drops and trigger notifications.',
      link: 'https://droplyx.vercel.app',
      tags: ['React', 'Node.js', 'Puppeteer', 'CronJobs'],
      status: 'ACTIVE',
      size: '11.8 MB',
    },
    {
      name: 'Vishwakarma',
      file: 'vishwakarma.html',
      icon: './assets/work-3.png',
      description: 'A responsive visual front-end portal designed for community outreach, built with high-fidelity grid snapping and accessible markup layers.',
      link: 'https://vishwakarma-temple-website.vercel.app',
      tags: ['HTML', 'CSS', 'JavaScript', 'AOS'],
      status: 'STABLE [100.0%]',
      size: '3.4 MB',
    },
    {
      name: 'HireNext',
      file: 'hirenext.go',
      icon: './assets/work-4.png',
      description: 'An online developer exam and recruitment dashboard supporting live code execution evaluation, timing thresholds, and grading spreadsheets.',
      link: 'https://hirenext-frontend-mohan.vercel.app',
      tags: ['React', 'Node.js', 'MongoDB', 'Docker', 'AWS EC2'],
      status: 'MAINTENANCE',
      size: '22.6 MB',
    },
  ]

  const [activeIdx, setActiveIdx] = useState(0)
  const current = projects[activeIdx]

  // Interactive 3D tilt variables for the screenshot preview
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotX = -((y - rect.height / 2) / (rect.height / 2)) * 8
    const rotY = ((x - rect.width / 2) / (rect.width / 2)) * 8

    setRotateX(rotX)
    setRotateY(rotY)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovered(false)
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="work"
      aria-label="Projects by Mohan Badiger"
      className="w-full px-6 sm:px-12 lg:px-[12%] py-24 scroll-mt-24 relative overflow-hidden"
    >
      {/* Background aurora light leak */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] -z-10 translate-x-[20%] translate-y-[-50%] aurora-blue pointer-events-none rounded-full blur-[120px] opacity-30" />

      <h2 className="sr-only">Projects by Mohan Badiger – Full Stack MERN Developer</h2>

      {/* Header section */}
      <div className="flex flex-col items-start text-left mb-16">
        <motion.h4
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-antigravityBlue font-bold tracking-widest text-xs uppercase mb-2 font-GoogleSans"
        >
          03 / Artifacts
        </motion.h4>
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-black font-GoogleSans text-white tracking-tight leading-none"
        >
          Code Explorer
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-lg mt-4 font-GoogleSans font-light text-xs sm:text-sm leading-relaxed"
        >
          Select a project file tab from the explorer to run build analyses, inspect specifications, and compile live URLs.
        </motion.p>
      </div>

      {/* Full Mock IDE Wrapper */}
      <div className="w-full rounded-xl border border-white/[0.06] bg-[#0d0e12]/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row min-h-[500px]">
        {/* Left IDE Sidebar: File Explorer */}
        <div className="w-full md:w-60 border-r border-white/[0.06] bg-[#0b0b0f]/80 flex flex-col p-4 flex-shrink-0">
          <div className="text-[10px] uppercase font-bold tracking-wider font-mono text-gray-500 mb-4 select-none pl-2">
            WORKSPACE / PROJECTS
          </div>
          
          <ul className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible gap-1.5 pb-2 md:pb-0 scrollbar-none">
            {projects.map((proj, idx) => {
              const isActive = idx === activeIdx
              return (
                <li key={proj.name} className="flex-shrink-0">
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`w-full text-left font-mono text-xs px-3.5 py-2.5 rounded transition-all flex items-center gap-2 select-none ${
                      isActive 
                        ? 'bg-white/[0.04] text-white border-l-2 border-antigravityBlue font-medium' 
                        : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.02] border-l-2 border-transparent'
                    }`}
                  >
                    <span className={`text-[10px] ${isActive ? 'text-antigravityBlue' : 'text-gray-600'}`}>
                      📄
                    </span>
                    {proj.file}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Right IDE Panel: Active Editor Tab */}
        <div className="flex-1 flex flex-col bg-[#0d0e12]/30">
          {/* Active Tab Bar */}
          <div className="px-4 py-2.5 bg-[#0b0b0f]/60 border-b border-white/[0.06] flex items-center justify-between">
            <div className="flex gap-2 items-center text-[10px] text-gray-500 font-mono">
              <span className="text-gray-300 bg-white/[0.04] border border-white/[0.04] px-2.5 py-1 rounded flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-antigravityBlue animate-pulse" />
                {current.file}
              </span>
            </div>
            <span className="font-mono text-[9px] text-gray-600 uppercase">
              SIZE: {current.size}
            </span>
          </div>

          {/* Tab Work Content Area */}
          <div className="p-6 sm:p-10 flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left: 3D Tilting Image Mockup */}
            <div className="flex items-center justify-center">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                  transformStyle: 'preserve-3d',
                  transition: isHovered ? 'none' : 'transform 0.5s ease',
                }}
                className="w-full aspect-[4/3] max-w-sm rounded-xl overflow-hidden border border-white/10 shadow-2xl relative select-none preserve-3d group"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${current.icon})` }}
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/10 transition-colors" />
                
                {/* Visual glow on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-antigravityBlue/10 to-transparent" />
              </motion.div>
            </div>

            {/* Right: Technical Spec Panel */}
            <div className="flex flex-col gap-4 text-left">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 block mb-1">
                  FILE_DESCRIPTION
                </span>
                <h4 className="text-xl sm:text-2xl font-bold font-GoogleSans text-white tracking-tight leading-tight">
                  {current.name}
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 font-GoogleSans font-light leading-relaxed">
                {current.description}
              </p>

              {/* Technical Specifications */}
              <div className="p-4 rounded border border-white/[0.04] bg-[#111217]/50 font-mono text-[10px] text-gray-500 flex flex-col gap-2">
                <div className="flex justify-between">
                  <span>MODULE_STATUS:</span>
                  <span className="text-emerald-400 font-bold">{current.status}</span>
                </div>
                <div className="flex justify-between">
                  <span>FILE_SIZE:</span>
                  <span className="text-gray-300">{current.size}</span>
                </div>
                <div className="flex flex-col gap-1.5 mt-1 border-t border-white/[0.04] pt-2.5">
                  <span className="uppercase text-[9px] tracking-wider text-gray-600">DEPENDENCY_TREE:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {current.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.04] text-[9px] text-gray-300 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action trigger button */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={current.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full sm:w-fit px-6 py-2.5 rounded bg-gradient-to-r from-antigravityBlue to-antigravityPurple text-white text-xs font-semibold font-GoogleSans flex items-center justify-center gap-2 shadow-lg"
              >
                Launch Artifact
                <img
                  src="./assets/send-icon.png"
                  alt="open"
                  className="w-3.5 h-3.5 object-contain invert"
                />
              </motion.a>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  )
}
