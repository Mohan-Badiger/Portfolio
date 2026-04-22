import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      aria-label="Footer - Mohan Badiger Portfolio"
      className="mt-20"
    >
      {/* ✅ SEO-only invisible heading */}
      <h2 className="sr-only">
        Mohan Badiger – Full Stack MERN Developer Footer
      </h2>

      <div className="text-center">
        {/* Existing brand text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-2xl md:text-4xl font-medium font-outfit dark:hidden"
        >
          Mohan<span className="text-purple-500">.</span>
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-2xl md:text-4xl font-medium font-outfit hidden dark:block"
        >
          Mohan<span className="text-purple-500">.</span>
        </motion.p>

        {/* Email */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-max flex items-center gap-2 mx-auto mt-4"
        >
          <img
            src="./assets/mail_icon.png"
            alt="Email icon"
            className="w-5 dark:hidden"
          />
          <img
            src="./assets/mail_icon_dark.png"
            alt="Email icon"
            className="w-5 hidden dark:block"
          />

          <a
            href="mailto:hello@mohanbadiger.site"
            aria-label="Email Mohan Badiger"
            className="hover:text-purple-500 transition-colors"
          >
            hello@mohanbadiger.site
          </a>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6"
      >
        <p>
          © {new Date().getFullYear()}{" "}
          <a
            href="https://mohanbadiger.site"
            aria-label="Mohan Badiger Portfolio Website"
            className="hover:text-purple-500 transition-colors"
          >
            Mohan Badiger
          </a>
            , All rights reserved.
        </p>

        <ul
          className="flex items-center gap-10 justify-center mt-4 sm:mt-0"
          aria-label="Social links"
        >
          <li>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Mohan-Badiger"
              className="hover:text-purple-500 transition-colors"
            >
              GitHub
            </motion.a>
          </li>
          <li>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mohan-badiger"
              className="hover:text-purple-500 transition-colors"
            >
              LinkedIn
            </motion.a>
          </li>
          <li>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              target="_blank"
              rel="noopener noreferrer"
              href=""
              aria-label="Mohan Badiger Twitter profile"
              className="hover:text-purple-500 transition-colors"
            >
              Twitter
            </motion.a>
          </li>
        </ul>
      </motion.div>
    </motion.footer>
  )
}
