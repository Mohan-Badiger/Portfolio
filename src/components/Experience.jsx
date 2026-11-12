import { motion } from 'framer-motion'
import { EXPERIENCES } from './experienceData'

export default function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: '-40px' }}
      id="experience"
      aria-label="Professional Experience of Mohan Badiger"
      className="w-full px-4 xs:px-6 sm:px-12 lg:px-[12%] py-16 sm:py-24 scroll-mt-20 sm:scroll-mt-24 relative overflow-hidden" >
      {/* Background aurora ambient light */}
      <div className="absolute top-1/3 left-0 w-72 sm:w-96 h-72 sm:h-96 -z-10 translate-x-[-30%] aurora-blue pointer-events-none rounded-full blur-[80px] sm:blur-[120px] opacity-25" />
      <div className="absolute bottom-1/4 right-0 w-72 sm:w-96 h-72 sm:h-96 -z-10 translate-x-[30%] aurora-purple pointer-events-none rounded-full blur-[80px] sm:blur-[120px] opacity-20" />

      {/* Section Header */}
      <div className="flex flex-col items-start text-left mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-slate-200 dark:border-white/[0.04] bg-slate-100/50 dark:bg-white/[0.02] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-[10px] uppercase font-bold tracking-widest font-mono text-slate-600 dark:text-gray-400">
            Work History
          </span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl xs:text-4xl sm:text-5xl font-bold font-Inter text-slate-900 dark:text-white tracking-tight leading-tight"
        >
          Professional Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-600 dark:text-gray-400 max-w-xl mt-3 sm:mt-4 font-Inter text-xs sm:text-sm leading-relaxed"
        >
          Practical engineering experience building scalable web applications, integrating full-stack APIs, and collaborating through agile software lifecycles.
        </motion.p>
      </div>

      {/* Experience Timeline - Mobile First */}
      <div className="relative border-l border-slate-200 dark:border-white/[0.08] ml-2 sm:ml-6 pl-4 sm:pl-8 flex flex-col gap-8 sm:gap-10">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: true, margin: '-30px' }}
            className="relative group"
          >
            {/* Timeline node */}
            <div className="absolute -left-[23px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-[#08080c] border-2 border-antigravityBlue shadow-[0_0_10px_rgba(66,133,244,0.5)] group-hover:scale-125 transition-transform duration-300" />

            {/* Experience Card */}
            <div className="p-4 sm:p-7 rounded-xl border border-slate-200/90 dark:border-white/[0.06] bg-white/80 dark:bg-[#0d0e12]/80 backdrop-blur-md hover:border-antigravityBlue/40 transition-all duration-300 shadow-sm hover:shadow-lg">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 sm:mb-4">
                <div>
                  <h3 className="text-base sm:text-xl font-bold font-Inter text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs sm:text-sm font-semibold font-Inter text-antigravityBlue">
                      {exp.company}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-gray-500">•</span>
                    <span className="text-xs font-Inter text-slate-500 dark:text-gray-400">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium font-mono border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-slate-600 dark:text-gray-300 w-fit">
                  {exp.period}
                </span>
              </div>

              {/* Bullet highlights from resume */}
              <ul className="space-y-2 mb-4 sm:mb-5">
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-Inter text-slate-600 dark:text-gray-300 leading-relaxed">
                    <span className="text-antigravityBlue mt-1 flex-shrink-0">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 border-t border-slate-100 dark:border-white/[0.04]">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-0.5 rounded border border-slate-200/60 dark:border-white/[0.05] bg-slate-50 dark:bg-white/[0.02] text-slate-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
