import { motion } from 'framer-motion'
import { useState } from 'react'

function ServiceCard({ service, index }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Rotation degrees calculation
    const rotX = -((y - rect.height / 2) / (rect.height / 2)) * 10
    const rotY = ((x - rect.width / 2) / (rect.width / 2)) * 10

    setRotateX(rotX)
    setRotateY(rotY)
    setSpotlightPos({ x, y })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
        transition: isHovered ? 'none' : 'transform 0.5s ease',
      }}
      className="p-6 sm:p-8 rounded-xl relative overflow-hidden select-none preserve-3d group cursor-pointer card-shadow-hover shadow-sm hover:shadow-md"
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 180px at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(66, 133, 244, 0.08), transparent)`
          }}
        />
      )}

      {/* Card Header: Simulated Dev Stats */}
      <div 
        className="flex items-center justify-between font-mono text-[9px] text-gray-500 mb-6 uppercase"
        style={{ transform: 'translateZ(15px)' }}
      >
        <span>SYS_SVC_0{index + 1}</span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-gray-500 dark:text-gray-400">ONLINE</span>
        </div>
      </div>

      <div style={{ transform: 'translateZ(30px)' }} className="mb-5">
        <img
          src={service.icon}
          alt=""
          className="w-8 h-8 object-contain dark:invert invert-0"
        />
      </div>

      <h3
        style={{ transform: 'translateZ(25px)' }}
        className="text-base font-bold font-GoogleSans text-slate-900 dark:text-white mb-2"
      >
        {service.name}
      </h3>

      <p
        style={{ transform: 'translateZ(10px)' }}
        className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 font-GoogleSans font-light leading-relaxed mb-6"
      >
        {service.description}
      </p>

      <a
        href={service.link || '#contact'}
        style={{ transform: 'translateZ(20px)' }}
        className="inline-flex items-center gap-2 text-[11px] font-medium font-GoogleSans text-antigravityBlue group-hover:text-slate-950 dark:group-hover:text-white transition-colors"
      >
        View Module
        <img
          src="./assets/right-arrow.png"
          alt=""
          className="w-3 h-3 object-contain dark:invert transform group-hover:translate-x-1 transition-transform"
        />
      </a>
    </motion.div>
  )
}

export default function Services() {
  const services = [
    {
      name: 'Web Design & Architecture',
      icon: './assets/web-icon.png',
      description: 'Crafting responsive, high-performance web structures using modern frameworks and SEO standards.',
      link: '',
    },
    {
      name: 'Mobile App Layouts',
      icon: './assets/mobile-icon.png',
      description: 'Designing modular, interactive components optimized for multi-device cross-platform application design.',
      link: '',
    },
    {
      name: 'UI/UX Design Systems',
      icon: './assets/ui-icon.png',
      description: 'Building modern interfaces backed by structured design languages, high-fidelity prototypes, and wireframes.',
      link: '',
    },
    {
      name: 'Graphics & Brand Identity',
      icon: './assets/graphics-icon.png',
      description: 'Engineering visual branding systems, vector assets, and digital media to define memorable online products.',
      link: '',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      id="services"
      className="w-full px-6 sm:px-12 lg:px-[12%] py-24 scroll-mt-24 relative overflow-hidden"
    >
      {/* Background aurora blur blobs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 -z-10 translate-x-[-30%] translate-y-[-50%] aurora-blue pointer-events-none rounded-full blur-[110px] opacity-35" />

      {/* Header section */}
      <div className="flex flex-col items-start text-left mb-16">
        <motion.h4
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-antigravityBlue font-bold tracking-widest text-xs uppercase mb-2 font-GoogleSans"
        >
          02 / Capability
        </motion.h4>
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-black font-GoogleSans text-slate-900 dark:text-white tracking-tight leading-none"
        >
          My Services
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-slate-600 dark:text-gray-400 max-w-lg mt-4 font-GoogleSans font-light text-xs sm:text-sm leading-relaxed"
        >
          I deliver premium developer services combining fast loading speeds, responsive engineering, and beautiful pixel-perfect user interfaces.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.name}
            service={service}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  )
}