import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-20px' }}
      aria-label="Footer"
      className="mt-14 sm:mt-20 pb-8"
    >
      <div className="text-center px-4">
        {/* Brand Name */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold font-Inter text-slate-900 dark:text-white"
        >
          Mohan<span className="text-antigravityBlue font-extrabold">_</span>
        </motion.p>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-max flex items-center gap-2.5 mx-auto mt-3 sm:mt-4 text-slate-600 dark:text-gray-300"
        >
          <svg className="w-4 h-4 text-antigravityBlue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>

          <a
            href="mailto:mohanbadiger250@gmail.com"
            aria-label="Email Mohan Badiger"
            className="text-xs sm:text-sm font-Inter hover:text-antigravityBlue transition-colors py-1"
          >
            mohanbadiger250@gmail.com
          </a>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center flex flex-col sm:flex-row items-center justify-between border-t border-slate-200 dark:border-white/[0.06] mx-4 sm:mx-[8%] lg:mx-[12%] mt-8 sm:mt-12 py-5 sm:py-6 text-xs text-slate-500 dark:text-gray-400 font-Inter gap-3"
      >
        <p>
          © {new Date().getFullYear()}{' '}
          <a
            href="https://mohanbadiger.site"
            aria-label="Mohan Badiger Portfolio Website"
            className="hover:text-antigravityBlue transition-colors"
          >
            Mohan Badiger
          </a>
          . All rights reserved.
        </p>

        <ul
          className="flex items-center gap-6 sm:gap-8 justify-center mt-2 sm:mt-0"
          aria-label="Social links"
        >
          <li>
            <motion.a
              whileHover={{ scale: 1.05, y: -1 }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Mohan-Badiger"
              className="hover:text-antigravityBlue transition-colors py-1 inline-block"
            >
              GitHub
            </motion.a>
          </li>
          <li>
            <motion.a
              whileHover={{ scale: 1.05, y: -1 }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mohan-badiger"
              className="hover:text-antigravityBlue transition-colors py-1 inline-block"
            >
              LinkedIn
            </motion.a>
          </li>
          <li>
            <motion.a
              whileHover={{ scale: 1.05, y: -1 }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/@MohanBadiger250"
              className="hover:text-antigravityBlue transition-colors py-1 inline-block"
            >
              YouTube
            </motion.a>
          </li>
        </ul>
      </motion.div>
    </motion.footer>
  )
}
