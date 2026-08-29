import { motion } from 'framer-motion'

export default function About() {
  const tools = [
    { name: 'VS Code', icon: './assets/vscode.png' },
    { name: 'React', icon: './assets/react.png' },
    { name: 'JavaScript', icon: './assets/javascript.png' },
    { name: 'Node.js', icon: './assets/nodejs.png' },
    { name: 'MongoDB', icon: './assets/mongodb.png' },
    { name: 'Git', icon: './assets/git.png' },
    { name: 'AWS EC2', icon: './assets/EC2.png' },
    { name: 'Socket.IO', icon: './assets/socket.png' },
  ]

  const education = [
    {
      institution: "BLDEA's BHS Arts and TGP Science College, Jamakhandi",
      period: '2022 – 2025',
      degree: 'Bachelor of Computer Applications (BCA)',
      score: 'CGPA: 8.47',
    },
    {
      institution: 'SRA PU College, Banahatti',
      period: '2021 – 2022',
      degree: 'Pre-University Education',
      score: 'Percentage: 81.83%',
    },
  ]

  const highlights = [
    {
      name: 'Languages',
      description: 'HTML, CSS, JavaScript, React, Next.js, Node.js, TypeScript, Python',
    },
    {
      name: 'Databases',
      description: 'MongoDB, MySQL, Firebase',
    },
    {
      name: 'DevOps',
      description: 'Docker, AWS EC2, CI/CD, Nginx, Git',
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
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold font-Inter text-slate-900 dark:text-white tracking-tight leading-none"
        >
          Profile
        </motion.h3>
      </div>

      <div className="flex w-full flex-col">
        {/* Bio + Skills + Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <p className="mb-10 text-slate-600 dark:text-gray-400 font-Inter leading-relaxed text-sm sm:text-base">
            I am Mohan Badiger, a MERN developer focused on constructing robust full stack code bases. Utilizing modular microservices and automated development workflows, I configure responsive front-end pages and scalable database schemas. Eager to partner on production releases and build high-performance applications.
          </p>

          {/* Skills Highlights */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {highlights.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded backdrop-blur-sm flex flex-col cursor-pointer card-shadow-hover"
              >
                <h4 className="text-base font-semibold font-Inter text-slate-900 dark:text-white leading-tight mb-2">
                  {item.name}
                </h4>
                <p className="text-slate-500 dark:text-gray-400 text-[13px] font-Inter leading-relaxed">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools */}
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 mb-5 text-slate-700 dark:text-gray-300 font-Inter font-semibold text-sm tracking-wide"
          >
            Tools & Technologies
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
                  width={20}
                  height={20}
                  decoding="async"
                  className="w-5 h-5 object-contain flex-shrink-0"
                />
                <span className="text-xs font-semibold font-Inter text-slate-700 dark:text-gray-300">
                  {tool.name}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Education */}
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 mb-5 text-slate-700 dark:text-gray-300 font-Inter font-semibold text-sm tracking-wide"
          >
            Education
          </motion.h4>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="p-5 rounded border border-slate-200 dark:border-white/[0.05] bg-white/60 dark:bg-[#111217]/40 backdrop-blur-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h5 className="text-sm font-semibold font-Inter text-slate-900 dark:text-white leading-tight">
                    {edu.institution}
                  </h5>
                  <span className="text-[12px] font-Inter font-medium text-antigravityBlue whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="text-[13px] font-Inter text-slate-500 dark:text-gray-400">
                    {edu.degree}
                  </span>
                  <span className="hidden sm:inline text-slate-300 dark:text-gray-600">•</span>
                  <span className="text-[13px] font-Inter font-semibold text-slate-700 dark:text-gray-300">
                    {edu.score}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
