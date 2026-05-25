import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function ProjectCard({ item, index }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotX = -((y - rect.height / 2) / (rect.height / 2)) * 10
    const rotY = ((x - rect.width / 2) / (rect.width / 2)) * 10

    setRotateX(rotX)
    setRotateY(rotY)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovered(false)
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.article
      layout
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
        transition: isHovered ? 'none' : 'transform 0.5s ease',
      }}
      className="aspect-[4/3] rounded-2xl relative cursor-pointer overflow-hidden border border-white/5 shadow-[0_15px_35px_rgba(0,0,0,0.4)] select-none preserve-3d group"
      aria-label={`${item.name} project by Mohan Badiger`}
    >
      {/* Background Image with Scale Zoom */}
      <motion.div
        animate={{ scale: isHovered ? 1.08 : 1.0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.icon})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-300 group-hover:from-black/95 group-hover:via-black/50" />

      {/* Screen-reader image for SEO */}
      <img
        src={item.icon}
        alt={`${item.name} project screenshot`}
        className="sr-only"
      />

      {/* Info Card Content */}
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ transform: 'translateZ(30px)' }}
        className="absolute bottom-4 left-4 right-4 p-4 rounded-xl border border-white/10 glass-card bg-black/40 backdrop-blur-md flex items-center justify-between shadow-2xl transition-all duration-300 group-hover:bottom-5 group-hover:border-purple-500/30"
        aria-label={`View ${item.name} project`}
      >
        <div className="flex-1 min-w-0 pr-2">
          <span className="text-[10px] font-bold tracking-widest text-purple-400 uppercase font-Outfit">
            Project
          </span>
          <h4 className="font-bold text-white text-base sm:text-lg font-Outfit truncate mt-0.5">
            {item.name}
          </h4>
          <p className="text-xs text-gray-400 font-Outfit truncate font-light mt-0.5">
            {item.description}
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-10 h-10 rounded-full border border-white/20 glass-card flex items-center justify-center text-white bg-white/5 transition-all duration-300 group-hover:bg-purple-500 group-hover:border-transparent group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] flex-shrink-0"
        >
          <img
            src="./assets/send-icon.png"
            alt="Open link"
            className="w-4 h-4 object-contain invert"
          />
        </motion.div>
      </a>
    </motion.article>
  )
}

export default function Work() {
  const [showAll, setShowAll] = useState(false)

  const work = [
    {
      name: 'BNT Temples',
      icon: './assets/work-1.png',
      description: 'Full Stack Web Application',
      link: 'https://kds-temple-frontend.vercel.app',
    },
    {
      name: 'Easy Share',
      icon: './assets/work-2.png',
      description: 'File Sharing Web Application',
      link: 'https://easysharefiles.vercel.app',
    },
    {
      name: 'Fotx Digital',
      icon: './assets/work-7.png',
      description: 'Digital Solutions Startup',
      link: 'https://fotx.site',
    },
    {
      name: 'Droplyx',
      icon: './assets/work-6.png',
      description: 'E-commerce Price Alert',
      link: 'https://droplyx.vercel.app',
    },
    {
      name: 'Vishwakarma',
      icon: './assets/work-3.png',
      description: 'Front-End Website',
      link: 'https://vishwakarma-temple-website.vercel.app',
    },
    {
      name: 'HireNext',
      icon: './assets/work-4.png',
      description: 'Online Exam Platform for Hiring',
      link: 'https://hirenext-frontend-mohan.vercel.app',
    },
  ]

  const displayedWork = showAll ? work : work.slice(0, 4)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.section
      layout
      id="work"
      aria-label="Projects by Mohan Badiger"
      className="w-full px-6 sm:px-12 lg:px-[12%] py-20 scroll-mt-24 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* Background neon blob */}
      <div className="absolute top-1/3 right-0 w-96 h-96 -z-10 translate-x-[30%] translate-y-[-20%] aurora-blob-1 pointer-events-none rounded-full blur-[120px] opacity-50" />

      <h2 className="sr-only">
        Projects by Mohan Badiger – Full Stack MERN Developer
      </h2>

      <div className="flex flex-col items-center text-center mb-16">
        <motion.h4
          layout
          variants={{ hidden: { y: -15, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          className="text-purple-400 font-semibold tracking-widest text-xs uppercase mb-3 font-Outfit"
        >
          My Portfolio
        </motion.h4>
        <motion.h3
          layout
          variants={{ hidden: { y: -15, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          className="text-3xl sm:text-5xl font-bold font-Outfit text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300"
        >
          My latest work
        </motion.h3>
        <motion.p
          layout
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="text-gray-400 max-w-xl mx-auto mt-4 font-Outfit font-light text-sm sm:text-base leading-relaxed"
        >
          Explore a curated selection of full stack platforms, price alerts, and modern responsive front-ends that I have developed.
        </motion.p>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10"
      >
        <AnimatePresence mode="popLayout">
          {displayedWork.map((item, index) => (
            <ProjectCard
              key={item.name}
              item={item}
              index={index}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modern Capsule Button for Expansion */}
      <motion.div layout className="flex justify-center mt-12">
        <motion.button
          layout
          onClick={() => setShowAll(!showAll)}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2.5 text-white border border-white/10 glass-card bg-white/5 hover:bg-white/10 px-8 py-3 rounded-full font-Outfit text-sm font-semibold transition-all duration-300"
          aria-label={showAll ? 'Show less projects' : 'Show more projects'}
        >
          {showAll ? 'Show less' : 'Show more'}
          <motion.img
            animate={{ rotate: showAll ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            src="./assets/right-arrow-bold-dark.png"
            alt="arrow"
            className="w-4 h-4 object-contain invert"
          />
        </motion.button>
      </motion.div>
    </motion.section>
  )
}
