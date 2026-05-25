import { assets } from './assets.js'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

export default function Header() {
  // Motion values for 3D parallax tilt
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Transform motion values to rotation degrees
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 150, damping: 25 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 25 })

  // Mouse move handler over the container
  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const mouseX = (event.clientX - rect.left) / rect.width - 0.5
    const mouseY = (event.clientY - rect.top) / rect.height - 0.5
    x.set(mouseX)
    y.set(mouseY)
  }

  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div 
      className="w-full min-h-screen flex items-center justify-center pt-24 pb-16 px-6 sm:px-12 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] aurora-blob-3 pointer-events-none rounded-full blur-[120px] opacity-75" />

      {/* SEO H1 */}
      <h1 className="sr-only">
        Mohan Badiger – Full Stack MERN Developer
      </h1>

      {/* 3D Tilting Card */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="w-full max-w-3xl glass-card-premium rounded-[32px] p-8 sm:p-12 md:p-16 flex flex-col items-center text-center gap-6 shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-white/10 relative z-10 select-none preserve-3d"
      >
        {/* Double rotating neon rings behind profile picture */}
        <div className="relative w-36 h-36 flex items-center justify-center mb-2" style={{ transform: 'translateZ(40px)' }}>
          {/* Neon Ring 1 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/60 blur-[2px]"
          />
          {/* Neon Ring 2 */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-2 rounded-full border border-pink-500/40 blur-[4px]"
          />
          
          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            src="./assets/profile_img.jpg"
            alt="Mohan Badiger profile photo"
            className="rounded-full w-32 h-32 object-cover border-4 border-black/50 shadow-2xl relative z-10"
          />
        </div>

        {/* Greeting message */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 text-lg sm:text-xl font-Outfit tracking-wide text-gray-400 dark:text-gray-300"
          style={{ transform: 'translateZ(30px)' }}
        >
          Hi, I'm <span className="text-white font-semibold underline decoration-purple-500/60 decoration-2 underline-offset-4">Mohan Badiger</span>
          <motion.img
            animate={{ rotate: [0, 15, -10, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            src="./assets/hand-icon.png"
            alt="waving hand icon"
            className="w-6 h-6 object-contain"
          />
        </motion.h2>

        {/* Heading */}
        <motion.h3
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight font-Outfit leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-purple-400"
          style={{ transform: 'translateZ(50px)' }}
        >
          Full-Stack <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-amber-400 glow-text-purple">Developer</span>
        </motion.h3>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-xl mx-auto text-sm sm:text-base text-gray-500 dark:text-gray-400 font-Outfit font-light leading-relaxed"
          style={{ transform: 'translateZ(20px)' }}
        >
          BCA Student | Passionate about Full-Stack Development. I engineer responsive web architectures using <span className="text-white font-medium">React</span>, <span className="text-white font-medium">Node.js</span>, <span className="text-white font-medium">MongoDB</span>, <span className="text-white font-medium">Docker</span>, and <span className="text-white font-medium">AWS</span>.
        </motion.p>

        {/* Call-to-actions */}
        <div 
          className="flex flex-col sm:flex-row items-center gap-4 mt-4"
          style={{ transform: 'translateZ(35px)' }}
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] text-white flex items-center justify-center gap-2 font-Outfit text-sm font-semibold shadow-[0_10px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_30px_rgba(139,92,246,0.5)] transition-all duration-300"
          >
            Contact me
            <img src="./assets/right-arrow-white.png" alt="right arrow" className="w-4 h-4 object-contain" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="./assets/Mohan_FullStack Resume.pdf"
            download
            className="px-8 py-3 rounded-full border border-white/10 glass-card bg-white/5 hover:bg-white/10 text-white flex items-center justify-center gap-2 font-Outfit text-sm font-semibold transition-all duration-300"
          >
            My resume
            <img
              src="./assets/download-icon.png"
              alt="download resume"
              className="w-4 h-4 object-contain dark:invert-0 invert"
            />
          </motion.a>
        </div>

        {/* Social connections */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex gap-4 mt-6 justify-center"
          style={{ transform: 'translateZ(25px)' }}
        >
          {[
            { url: 'https://github.com/Mohan-Badiger', lightIcon: assets.github, darkIcon: assets.githubdark, alt: 'GitHub' },
            { url: 'https://www.linkedin.com/in/mohan-badiger', lightIcon: assets.linkedin, darkIcon: assets.linkedindark, alt: 'LinkedIn' },
            { url: 'https://www.youtube.com/@MohanBadiger250', lightIcon: assets.youtube, darkIcon: assets.youtubedark, alt: 'YouTube' },
            { url: 'https://www.instagram.com/mohan_badiger250', lightIcon: assets.instagram, darkIcon: assets.instagramdark, alt: 'Instagram' }
          ].map((soc, idx) => (
            <motion.a
              key={idx}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -4 }}
              className="w-11 h-11 rounded-full border border-white/10 glass-card flex items-center justify-center hover:border-purple-500/50 hover:bg-purple-950/20 shadow-md transition-all duration-300"
              aria-label={`Mohan Badiger ${soc.alt}`}
            >
              {/* Light Theme Icon */}
              <img src={soc.lightIcon} alt={soc.alt} className="w-5 h-5 object-contain dark:hidden" />
              {/* Dark Theme Icon */}
              <img src={soc.darkIcon} alt={soc.alt} className="w-5 h-5 object-contain hidden dark:block" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
