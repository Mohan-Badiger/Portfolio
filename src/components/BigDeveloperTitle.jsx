import { motion } from 'framer-motion'

export default function BigDeveloperTitle() {
  return (
    <div className="w-full overflow-hidden select-none py-12 relative flex justify-center items-center pointer-events-none">
      {/* Aurora glow underneath */}
      <div className="absolute w-[600px] h-32 -z-10 bg-gradient-to-r from-antigravityBlue/5 via-antigravityPurple/5 to-antigravityPink/5 pointer-events-none rounded-full blur-[60px]" />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-[13vw] sm:text-[15vw] md:text-[17vw] lg:text-[21vw] big-developer-text font-semibold tracking-tight leading-none select-none text-center pointer-events-auto cursor-default"
      >
        Developer
      </motion.h2>
    </div>
  )
}
