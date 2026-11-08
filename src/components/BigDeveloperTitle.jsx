import { motion } from 'framer-motion'

export default function BigDeveloperTitle() {
  return (
    <div className="w-full overflow-hidden select-none py-8 sm:py-12 relative flex justify-center items-center pointer-events-none" aria-hidden="true">
      {/* Aurora glow underneath */}
      <div className="absolute w-72 sm:w-[600px] h-24 sm:h-32 -z-10 bg-gradient-to-r from-antigravityBlue/5 via-antigravityPurple/5 to-antigravityPink/5 pointer-events-none rounded-full blur-[40px] sm:blur-[60px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-[12vw] sm:text-[15vw] md:text-[17vw] lg:text-[20vw] big-developer-text font-semibold tracking-tight leading-none select-none text-center pointer-events-auto cursor-default"
      >
        Developer
      </motion.div>
    </div>
  )
}
