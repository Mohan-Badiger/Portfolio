import { motion } from 'framer-motion'

export default function About() {
  const tools = [
    { name: 'VS Code', icon: './assets/vscode.png' },
    { name: 'React', icon: './assets/react.png' },
    { name: 'JavaScript', icon: './assets/javascript.png' },
    { name: 'Node.js', icon: './assets/nodejs.png' },
    { name: 'MongoDB', icon: './assets/mongodb.png' },
    { name: 'Figma', icon: './assets/figma.png' },
    { name: 'Git', icon: './assets/git.png' },
    { name: 'AWS EC2', icon: './assets/EC2.png' },
    { name: 'Socket.IO', icon: './assets/socket.png' },
  ]

  const data = [
    {
      name: 'Languages',
      icon1: './assets/code-icon.png',
      icon2: './assets/code-icon-dark.png',
      description: 'HTML, CSS, JS, React, Next.js, Node.js',
    },
    {
      name: 'Education',
      icon1: './assets/edu-icon.png',
      icon2: './assets/edu-icon-dark.png',
      description: 'BCA (Bachelor of Computer Applications)',
    },
    {
      name: 'Projects',
      icon1: './assets/project-icon.png',
      icon2: './assets/project-icon-dark.png',
      description: 'Built multiple production-ready applications',
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="about"
      aria-label="About Mohan Badiger"
      className="w-full px-6 sm:px-12 lg:px-[12%] py-20 scroll-mt-24 relative overflow-hidden"
    >
      {/* Background neon blob */}
      <div className="absolute bottom-0 right-0 w-80 h-80 -z-10 translate-x-[20%] translate-y-[20%] aurora-blob-2 pointer-events-none rounded-full blur-[100px]" />

      <h2 className="sr-only">
        About Mohan Badiger – Full Stack MERN Developer
      </h2>

      <div className="flex flex-col items-center mb-16 text-center">
        <motion.h4
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-purple-400 font-semibold tracking-widest text-xs uppercase mb-3 font-Outfit"
        >
          Introduction
        </motion.h4>
        <motion.h3
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold font-Outfit text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300"
        >
          About me
        </motion.h3>
      </div>

      <div className="flex w-full flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Profile Image container with glowing shadow border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ rotate: 2, scale: 1.03 }}
          className="w-64 sm:w-80 aspect-square rounded-[32px] p-2 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-transparent border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer group"
        >
          <img
            src="./assets/user_image.jpg"
            alt="Mohan Badiger developer profile image"
            className="w-full h-full object-cover rounded-[24px] filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>

        {/* Content text and stats cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <p className="mb-8 text-gray-400 font-Outfit font-light leading-relaxed text-base sm:text-lg">
            I am Mohan Badiger, a passionate Full-Stack MERN Developer. I enjoy engineering responsive, user-centric web applications with clean architecture and modern visuals. Eager to grow my skills and deliver outstanding real-world performance, I specialize in crafting elegant experiences using cutting-edge tools.
          </p>

          {/* Core Info Cards */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {data.map((item) => (
              <motion.li
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                key={item.name}
                className="glass-card-premium rounded-2xl p-6 border border-white/5 hover:border-purple-500/40 hover:bg-purple-950/10 shadow-lg cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <img
                    src={item.icon1}
                    alt={`${item.name} icon`}
                    className="w-7 h-7 object-contain dark:hidden block mb-4"
                  />
                  <img
                    src={item.icon2}
                    alt={`${item.name} icon`}
                    className="w-7 h-7 object-contain hidden dark:block mb-4 dark:invert-0 invert"
                  />
                  <h4 className="font-semibold text-lg font-Outfit text-white mb-2">
                    {item.name}
                  </h4>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm font-Outfit leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Grid */}
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 mb-5 text-gray-300 font-Outfit font-medium text-lg"
          >
            Tools & Technologies
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-3"
          >
            {tools.map((tool) => (
              <motion.li
                whileHover={{ scale: 1.1, y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                key={tool.name}
                className="flex items-center gap-2.5 px-4 py-2 border border-white/5 bg-white/5 hover:border-purple-500/30 hover:bg-purple-950/15 rounded-xl cursor-pointer shadow-md select-none transition-colors"
              >
                <img
                  src={tool.icon}
                  alt={`${tool.name} tool icon`}
                  className="w-5 h-5 object-contain"
                />
                <span className="text-xs font-Outfit font-medium text-gray-300 group-hover:text-white">
                  {tool.name}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  )
}
