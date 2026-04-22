import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
    // Placeholder projects for future demonstration
    {
      name: 'Project Alpha',
      icon: './assets/work-1.png',
      description: 'Coming Soon',
      link: '#',
    },
    {
      name: 'Project Beta',
      icon: './assets/work-2.png',
      description: 'Coming Soon',
      link: '#',
    },
  ]

  // Logic to show 4 projects or all
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  }

  return (
    <motion.section
      layout
      id="work"
      aria-label="Projects by Mohan Badiger"
      className="w-full px-[16%] sm:px-[12%] py-10 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* ✅ SEO-only invisible heading */}
      <h2 className="sr-only">
        Projects by Mohan Badiger – Full Stack MERN Developer
      </h2>

      {/* Restore original visible headings and font styling */}
      <motion.h4
        layout
        variants={itemVariants}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My portfolio
      </motion.h4>
      <motion.h3
        layout
        variants={itemVariants}
        className="text-center text-5xl font-Ovo"
      >
        My latest work
      </motion.h3>

      <motion.p
        layout
        variants={itemVariants}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I have experience building responsive websites and full stack web
        applications using HTML, CSS, JavaScript, React.js, Node.js, and MongoDB.
      </motion.p>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5 dark:text-black"
      >
        <AnimatePresence mode="popLayout">
          {displayedWork.map((item) => (
            <motion.article
              layout
              key={item.name}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
              style={{ backgroundImage: `url(${item.icon})` }}
              aria-label={`${item.name} project by Mohan Badiger`}
            >
              {/* SEO-only invisible image */}
              <img
                src={item.icon}
                alt={`${item.name} project screenshot`}
                className="sr-only"
              />

              {/* Original centered info box style */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-sm"
                aria-label={`View ${item.name} project`}
              >
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>

                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                  <img
                    src="./assets/send-icon.png"
                    alt="Open project link"
                    className="w-5"
                  />
                </div>
              </a>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Restore original button style */}
      <motion.button
        layout
        variants={itemVariants}
        onClick={() => setShowAll(!showAll)}
        className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white"
        aria-label={showAll ? 'Show less projects' : 'Show more projects'}
      >
        {showAll ? 'Show less' : 'Show more'}
        <motion.img
          animate={{ rotate: showAll ? 180 : 0 }}
          src="./assets/right-arrow-bold.png"
          alt="arrow"
          className="w-4 dark:hidden"
        />
        <motion.img
          animate={{ rotate: showAll ? 180 : 0 }}
          src="./assets/right-arrow-bold-dark.png"
          alt="arrow"
          className="w-4 hidden dark:block"
        />
      </motion.button>
    </motion.section>
  )
}
