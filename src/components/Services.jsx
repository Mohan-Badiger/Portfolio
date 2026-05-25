import { motion } from 'framer-motion'
import { useState } from 'react'

// Custom interactive 3D card with radial spotlight reflection
function ServiceCard({ service, index }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    
    // Position of cursor relative to card
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Rotation bounds
    const rotX = -((y - rect.height / 2) / (rect.height / 2)) * 12
    const rotY = ((x - rect.width / 2) / (rect.width / 2)) * 12

    setRotateX(rotX)
    setRotateY(rotY)
    setSpotlightPos({ x, y })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovered(false)
  }

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: index * 0.1 }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
        transition: isHovered ? 'none' : 'transform 0.5s ease'
      }}
      className="glass-card-premium rounded-2xl px-8 py-10 cursor-pointer border border-white/5 hover:border-purple-500/30 shadow-[0_15px_35px_rgba(0,0,0,0.3)] relative overflow-hidden select-none preserve-3d group"
    >
      {/* Radial Spotlight Overlay */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 180px at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(168, 85, 247, 0.08), transparent)`
          }}
        />
      )}

      {/* Floating Sparkle behind icon */}
      <div 
        className="absolute top-8 left-8 w-12 h-12 rounded-full bg-purple-500/10 blur-xl group-hover:bg-pink-500/20 transition-all duration-500" 
        style={{ transform: 'translateZ(10px)' }}
      />

      <div style={{ transform: 'translateZ(30px)' }} className="mb-6">
        <img 
          src={service.icon} 
          alt="" 
          className="w-10 h-10 object-contain dark:invert invert-0 transition-transform duration-500 group-hover:scale-110" 
        />
      </div>

      <h3 
        style={{ transform: 'translateZ(25px)' }}
        className="text-lg font-bold font-Outfit text-white mb-3"
      >
        {service.name}
      </h3>

      <p 
        style={{ transform: 'translateZ(15px)' }}
        className="text-sm text-gray-400 font-Outfit leading-relaxed font-light mb-6"
      >
        {service.description}
      </p>

      <a 
        href={service.link || '#contact'} 
        style={{ transform: 'translateZ(20px)' }}
        className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 group-hover:text-pink-400 transition-colors"
      >
        Read more 
        <img 
          src="./assets/right-arrow.png" 
          alt="" 
          className="w-3.5 h-3.5 object-contain invert dark:invert-0 transform group-hover:translate-x-1 transition-transform" 
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
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      id="services"
      className="w-full px-6 sm:px-12 lg:px-[12%] py-20 scroll-mt-24 relative overflow-hidden"
    >
      {/* Background neon blob */}
      <div className="absolute top-1/2 left-0 w-80 h-80 -z-10 translate-x-[-30%] translate-y-[-50%] aurora-blob-3 pointer-events-none rounded-full blur-[110px] opacity-60" />

      <div className="flex flex-col items-center text-center mb-16">
        <motion.h4 
          variants={{ hidden: { y: -15, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          className="text-purple-400 font-semibold tracking-widest text-xs uppercase mb-3 font-Outfit"
        >
          What I Offer
        </motion.h4>
        <motion.h2 
          variants={{ hidden: { y: -15, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          className="text-3xl sm:text-5xl font-bold font-Outfit text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300"
        >
          My services
        </motion.h2>
        <motion.p 
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="text-gray-400 max-w-xl mx-auto mt-4 font-Outfit font-light text-sm sm:text-base leading-relaxed"
        >
          I deliver premium web applications combining fast loading speeds, responsive engineering, and beautiful pixel-perfect UI.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10"
      >
        {services.map((service, index) => (
          <ServiceCard 
            key={service.name} 
            service={service} 
            index={index} 
          />
        ))}
      </motion.div>
    </motion.div>
  )
}