import { assets } from './assets.js'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">

      {/* ✅ SEO-only invisible H1 (NO UI change) */}
      <h1 className="sr-only">
        Mohan Badiger – Full Stack MERN Developer
      </h1>

      {/* Profile image with entrance animation */}
      <motion.img
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        src="./assets/profile_img.jpg"
        alt="Mohan Badiger profile photo"
        className="rounded-full w-32"
      />

      {/* Hi! I'm Mohan Badiger */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Mohan Badiger
        <motion.img
          animate={{ rotate: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          src="./assets/hand-icon.png"
          alt="waving hand icon"
          className="w-6 mb-1"
        />
      </motion.h2>

      {/* Role heading */}
      <motion.h3
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Full-Stack Developer..
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        BCA Student | Passionate about Full-Stack Development using React, Node.js,
        MongoDB, Docker, and AWS.
      </motion.p>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          contact me
          <img src="./assets/right-arrow-white.png" alt="right arrow" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="./assets/Mohan_FullStack Resume.pdf"
          download
          className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white"
        >
          my resume
          <img
            src="./assets/download-icon.png"
            alt="download resume"
            className="w-4 dark:invert"
          />
        </motion.a>
      </div>

      {/* Social links */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="flex gap-6 opacity-90 dark:hidden"
      >
        <a href="https://github.com/Mohan-Badiger" target="_blank">
          <img src={assets.github} alt="Mohan Badiger GitHub" className="w-8 mt-3 hover:opacity-70 transition-opacity" />
        </a>
        <a href="https://www.linkedin.com/in/mohan-badiger" target="_blank">
          <img src={assets.linkedin} alt="Mohan Badiger LinkedIn" className="w-8 mt-3 hover:opacity-70 transition-opacity" />
        </a>
        <a href="https://www.youtube.com/@MohanBadiger250" target="_blank">
          <img src={assets.youtube} alt="Mohan Badiger YouTube" className="w-8 mt-3 hover:opacity-70 transition-opacity" />
        </a>
        <a href="https://www.instagram.com/mohan_badiger250" target="_blank">
          <img src={assets.instagram} alt="Mohan Badiger Instagram" className="w-8 mt-3 hover:opacity-70 transition-opacity" />
        </a>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="gap-6 opacity-90 hidden dark:flex"
      >
        <a href="https://github.com/Mohan-Badiger" target="_blank">
          <img src={assets.githubdark} alt="Mohan Badiger GitHub" className="w-8 mt-3 hover:opacity-70 transition-opacity" />
        </a>
        <a href="https://www.linkedin.com/in/mohan-badiger" target="_blank">
          <img src={assets.linkedindark} alt="Mohan Badiger LinkedIn" className="w-8 mt-3 hover:opacity-70 transition-opacity" />
        </a>
        <a href="https://www.youtube.com/@MohanBadiger250" target="_blank">
          <img src={assets.youtubedark} alt="Mohan Badiger YouTube" className="w-8 mt-3 hover:opacity-70 transition-opacity" />
        </a>
        <a href="https://www.instagram.com/mohan_badiger250" target="_blank">
          <img src={assets.instagramdark} alt="Mohan Badiger Instagram" className="w-8 mt-3 hover:opacity-70 transition-opacity" />
        </a>
      </motion.div>

    </div>
  )
}
