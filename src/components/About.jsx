import { motion } from 'framer-motion'

export default function About() {
  const tools = [
    { name: 'VS Code', icon: './assets/vscode.png', status: 'SYS_EDIT' },
    { name: 'React', icon: './assets/react.png', status: 'SYS_CORE' },
    { name: 'JavaScript', icon: './assets/javascript.png', status: 'SYS_COMP' },
    { name: 'Node.js', icon: './assets/nodejs.png', status: 'SYS_EXEC' },
    { name: 'MongoDB', icon: './assets/mongodb.png', status: 'SYS_DATA' },
    { name: 'Figma', icon: './assets/figma.png', status: 'SYS_DRAW' },
    { name: 'Git', icon: './assets/git.png', status: 'SYS_SYNC' },
    { name: 'AWS EC2', icon: './assets/EC2.png', status: 'SYS_SERV' },
    { name: 'Socket.IO', icon: './assets/socket.png', status: 'SYS_CONN' },
  ]

  const data = [
    {
      module: 'MOD_01',
      name: 'Languages',
      icon1: './assets/code-icon.png',
      icon2: './assets/code-icon-dark.png',
      description: 'HTML, CSS, JS, React, Next.js, Node.js',
    },
    {
      module: 'MOD_02',
      name: 'Education',
      icon1: './assets/edu-icon.png',
      icon2: './assets/edu-icon-dark.png',
      description: 'BCA (Bachelor of Computer Applications)',
    },
    {
      module: 'MOD_03',
      name: 'Capabilities',
      icon1: './assets/project-icon.png',
      icon2: './assets/project-icon-dark.png',
      description: 'Full stack architecture, server hosting, real-time sync',
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="about"
      aria-label="About Mohan Badiger"
      className="w-full px-6 sm:px-12 lg:px-[12%] py-24 scroll-mt-24 relative overflow-hidden"
    >
      {/* Background visual light blob */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] -z-10 translate-x-[20%] translate-y-[20%] aurora-pink pointer-events-none rounded-full blur-[110px]" />

      <h2 className="sr-only">About Mohan Badiger – Full Stack MERN Developer</h2>

      {/* Header section */}
      <div className="flex flex-col items-start mb-16 text-left">
        <motion.h4
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-antigravityBlue font-bold tracking-widest text-xs uppercase mb-2 font-GoogleSans"
        >
          01 / Biography
        </motion.h4>
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-black font-GoogleSans text-slate-900 dark:text-white tracking-tight leading-none"
        >
          Developer Profile
        </motion.h3>
      </div>

      <div className="flex w-full flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Profile Image with Blueprint Frame (Zero Gravity) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-64 sm:w-80 aspect-[3/4] relative select-none animate-float-slow flex-shrink-0"
        >
          {/* Blueprint corners styling */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-antigravityBlue/40" />
          <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-antigravityBlue/40" />
          <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-antigravityBlue/40" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-antigravityBlue/40" />

          {/* Grid coordinates indicator */}
          <span className="absolute -top-6 left-0 text-[9px] font-mono text-gray-550 dark:text-gray-600 uppercase">
            REF_POS: 42.85N / 9B.72E
          </span>

          <div className="w-full h-full rounded border border-slate-200 dark:border-white/[0.06] p-2 bg-white/50 dark:bg-[#111217]/50 backdrop-blur-md relative overflow-hidden group">
            <img
              src="./assets/user_image.jpg"
              alt="Mohan Badiger developer profile image"
              className="w-full h-full object-cover rounded filter grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        {/* Biography text and developer module panels */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <p className="mb-10 text-slate-600 dark:text-gray-400 font-GoogleSans font-light leading-relaxed text-sm sm:text-base">
            I am Mohan Badiger, a MERN developer focused on constructing robust full stack code bases. Utilizing modular microservices and automated development workflows, I configure responsive front-end pages and scalable database schemas. Eager to partner on production releases and build high-performance applications.
          </p>

          {/* Developer Module panels */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {data.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded backdrop-blur-sm flex flex-col justify-between h-40 cursor-pointer card-shadow-hover"
              >
                <div>
                  {/* Console Header */}
                  <div className="flex items-center justify-between font-mono text-[9px] text-gray-500 dark:text-gray-600 mb-4 uppercase">
                    <span>{item.module}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-antigravityBlue/50" />
                  </div>
                  <h4 className="font-bold text-base font-GoogleSans text-slate-900 dark:text-white leading-tight mb-2">
                    {item.name}
                  </h4>
                </div>
                <p className="text-slate-500 dark:text-gray-400 text-xs font-GoogleSans font-light leading-normal">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Diagnostics Tools & Modules */}
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 mb-5 text-slate-700 dark:text-gray-300 font-GoogleSans font-medium text-sm sm:text-base uppercase tracking-wider"
          >
            SYSTEM MODULES & DEPENDENCIES
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-3"
          >
            {tools.map((tool) => (
              <motion.li
                key={tool.name}
                whileHover={{ scale: 1.03, y: -2 }}
                className="flex items-center gap-3 px-3.5 py-2 border border-slate-200 dark:border-white/[0.05] bg-white dark:bg-[#111217]/40 hover:bg-slate-100 dark:hover:bg-[#111217]/70 text-slate-800 dark:text-gray-300 rounded cursor-pointer select-none transition-all duration-200 shadow-sm"
              >
                <img
                  src={tool.icon}
                  alt={`${tool.name} tool`}
                  className="w-5 h-5 object-contain flex-shrink-0"
                />
                <div className="flex flex-col text-left">
                  <span className="text-xs font-semibold font-GoogleSans text-slate-700 dark:text-gray-300">
                    {tool.name}
                  </span>
                  <span className="font-mono text-[8px] text-gray-500 dark:text-gray-600">
                    {tool.status} // [OK]
                  </span>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  )
}
