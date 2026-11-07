import { motion } from 'framer-motion'
import { EXPERIENCES } from './experienceData'

export default function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="experience"
      aria-label="Professional Experience of Mohan Badiger"
      className="w-full px-6 sm:px-12 lg:px-[12%] py-24 scroll-mt-24 relative overflow-hidden"
    >
      {/* Background aurora ambient light */}
      <div className="absolute top-1/3 left-0 w-96 h-96 -z-10 translate-x-[-30%] aurora-blue pointer-events-none rounded-full blur-[120px] opacity-25" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 -z-10 translate-x-[30%] aurora-purple pointer-events-none rounded-full blur-[120px] opacity-20" />

      <h2 className="sr-only">Professional Experience – Mohan Badiger SDE</h2>

      {/* Section Header */}
      <div className="flex flex-col items-start text-left mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-slate-200 dark:border-white/[0.04] bg-slate-100/50 dark:bg-white/[0.02] mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-[10px] uppercase font-bold tracking-widest font-Inter text-slate-600 dark:text-gray-400">
            Work History
          </span>
        </div>
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold font-Inter text-slate-900 dark:text-white tracking-tight leading-none"
        >
          Professional Experience
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-600 dark:text-gray-400 max-w-xl mt-4 font-Inter text-sm leading-relaxed"
        >
          Practical engineering experience building scalable web applications, integrating full-stack APIs, and collaborating through agile software lifecycles.
        </motion.p>
      </div>

      {/* Experience Timeline */}
      <div className="relative border-l border-slate-200 dark:border-white/[0.08] ml-3 sm:ml-6 pl-6 sm:pl-8 flex flex-col gap-10">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Timeline node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-[#08080c] border-2 border-antigravityBlue shadow-[0_0_10px_rgba(66,133,244,0.5)] group-hover:scale-125 transition-transform duration-300" />

            {/* Experience Card */}
            <div className="p-6 sm:p-7 rounded-xl border border-slate-200/90 dark:border-white/[0.06] bg-white/80 dark:bg-[#0d0e12]/80 backdrop-blur-md hover:border-antigravityBlue/40 transition-all duration-300 shadow-sm hover:shadow-lg">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold font-Inter text-slate-900 dark:text-white">
                    {exp.role}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-semibold font-Inter text-antigravityBlue">
                      {exp.company}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-gray-500">•</span>
                    <span className="text-xs font-Inter text-slate-500 dark:text-gray-400">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-mono border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-slate-600 dark:text-gray-300 w-fit">
                  {exp.period}
                </span>
              </div>

              {/* Bullet highlights from resume */}
              <ul className="space-y-2 mb-5">
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-Inter text-slate-600 dark:text-gray-300 leading-relaxed">
                    <span className="text-antigravityBlue mt-1 flex-shrink-0">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100 dark:border-white/[0.04]">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded border border-slate-200/60 dark:border-white/[0.05] bg-slate-50 dark:bg-white/[0.02] text-slate-700 dark:text-gray-300"
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
