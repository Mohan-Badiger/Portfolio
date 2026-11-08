import { motion } from 'framer-motion'
import { useState } from 'react'
import PropTypes from 'prop-types'

function SkillCard({ competency, index }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotX = -((y - rect.height / 2) / (rect.height / 2)) * 8
    const rotY = ((x - rect.width / 2) / (rect.width / 2)) * 8

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
      className="p-6 sm:p-7 rounded-xl relative overflow-hidden select-none preserve-3d group card-shadow-hover shadow-sm hover:shadow-md flex flex-col justify-between"
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 180px at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(66, 133, 244, 0.08), transparent)`,
          }}
        />
      )}

      <div>
        {/* Card Header: Icon */}
        <div style={{ transform: 'translateZ(30px)' }} className="mb-5 flex items-center justify-between">
          <img
            src={competency.icon}
            alt={`${competency.name} icon`}
            width={32}
            height={32}
            decoding="async"
            className="w-8 h-8 object-contain"
          />
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-gray-500">
            {competency.badge}
          </span>
        </div>

        <h4
          style={{ transform: 'translateZ(25px)' }}
          className="text-base font-bold font-Inter text-slate-900 dark:text-white mb-2"
        >
          {competency.name}
        </h4>

        <p
          style={{ transform: 'translateZ(10px)' }}
          className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 font-Inter font-light leading-relaxed mb-5"
        >
          {competency.description}
        </p>
      </div>

      <div style={{ transform: 'translateZ(15px)' }}>
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-white/[0.04]">
          {competency.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded border border-slate-200/60 dark:border-white/[0.04] bg-slate-50 dark:bg-white/[0.02] text-slate-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

SkillCard.propTypes = {
  competency: PropTypes.shape({
    name: PropTypes.string.isRequired,
    badge: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
}

export default function Services() {
  const competencies = [
    {
      name: 'Frontend Engineering',
      badge: 'Client Layer',
      icon: '/assets/react.png',
      description: 'Building modern, high-performance web applications with modular components, responsive design, and smooth user experiences.',
      tags: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5/CSS3'],
    },
    {
      name: 'Backend & REST APIs',
      badge: 'Server Layer',
      icon: '/assets/nodejs.png',
      description: 'Designing scalable RESTful APIs, securing endpoints with JWT & OAuth 2.0, implementing webhooks, and managing backend logic.',
      tags: ['Node.js', 'Express.js', 'REST APIs', 'JWT / OAuth', 'PHP'],
    },
    {
      name: 'Databases & Data Modeling',
      badge: 'Data Layer',
      icon: '/assets/mongodb.png',
      description: 'Architecting relational and NoSQL databases with optimized schemas, aggregation pipelines, and efficient query design.',
      tags: ['MongoDB', 'MySQL', 'PostgreSQL', 'Mongoose', 'CRUD Operations'],
    },
    {
      name: 'Cloud, DevOps & Tools',
      badge: 'Infrastructure',
      icon: '/assets/EC2.png',
      description: 'Containerizing environments with Docker, managing AWS cloud deployments, automating workflows, and version controlling with Git.',
      tags: ['Docker', 'AWS EC2', 'Git / GitHub', 'Postman', 'Vercel / Cloudinary'],
    },
  ]

  const csFundamentals = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (OOP)',
    'Database Management Systems (DBMS)',
    'Operating Systems',
    'Computer Networks',
    'System Design & API Security',
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: '-40px' }}
      id="skills"
      aria-label="Technical Skills and Competencies"
      className="w-full px-4 xs:px-6 sm:px-12 lg:px-[12%] py-16 sm:py-24 scroll-mt-20 sm:scroll-mt-24 relative overflow-hidden"
    >
      {/* Background aurora ambient lights */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 -z-10 translate-x-[-30%] translate-y-[-50%] aurora-blue pointer-events-none rounded-full blur-[80px] sm:blur-[110px] opacity-35" />

      {/* Header section */}
      <div className="flex flex-col items-start text-left mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-slate-200 dark:border-white/[0.04] bg-slate-100/50 dark:bg-white/[0.02] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-antigravityBlue" />
          <span className="text-[10px] uppercase font-bold tracking-widest font-mono text-slate-600 dark:text-gray-400">
            Technical Stack
          </span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl xs:text-4xl sm:text-5xl font-bold font-Inter text-slate-900 dark:text-white tracking-tight leading-tight"
        >
          Technical Competencies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-600 dark:text-gray-400 max-w-xl mt-3 sm:mt-4 font-Inter text-xs sm:text-sm leading-relaxed"
        >
          Core software engineering capabilities spanning full-stack development, distributed API integration, database engineering, and computer science fundamentals.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 my-8 sm:my-10">
        {competencies.map((comp, index) => (
          <SkillCard
            key={comp.name}
            competency={comp}
            index={index}
          />
        ))}
      </div>

      {/* CS Fundamentals Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, margin: '-20px' }}
        className="mt-6 sm:mt-10 p-5 sm:p-7 rounded-xl border border-slate-200/90 dark:border-white/[0.06] bg-white/70 dark:bg-[#0d0e12]/60 backdrop-blur-md"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm sm:text-base font-bold font-Inter text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-antigravityBlue">⚡</span>
              Computer Science Fundamentals
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 font-Inter mt-1">
              Strong core foundation supporting reliable software design, algorithmic optimization, and system design.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {csFundamentals.map((item) => (
              <span
                key={item}
                className="text-xs font-Inter px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-white/[0.03] text-slate-700 dark:text-gray-200 font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
