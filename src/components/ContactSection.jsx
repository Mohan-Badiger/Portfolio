import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactSection() {
  const [result, setResult] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(null)

  const onSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setIsSuccess(null)
    setResult('>> Transmitting message payload...')

    const form = event.target
    const formData = new FormData(form)

    // Honeypot spam check
    if (formData.get('botcheck')) {
      setIsSubmitting(false)
      return
    }

    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'd2ebae31-4a62-4d7e-8fee-bc974f2063ab'
    formData.append('access_key', accessKey)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      }).then((res) => res.json())

      if (response.success) {
        setIsSuccess(true)
        setResult('>> Success! Message sent successfully. Mohan will get back to you shortly.')
        form.reset()
      } else {
        setIsSuccess(false)
        setResult(`>> Transmission failed: ${response.message || 'Please try again or email directly.'}`)
      }
    } catch {
      setIsSuccess(false)
      setResult('>> Network error: Could not reach the server. Please email mohanbadiger250@gmail.com directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: '-40px' }}
      id="contact"
      aria-label="Contact Mohan Badiger"
      className="w-full px-4 xs:px-6 sm:px-12 lg:px-[12%] py-16 sm:py-24 scroll-mt-20 sm:scroll-mt-24 relative overflow-hidden"
    >
      {/* Background radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 -z-10 aurora-purple pointer-events-none rounded-full blur-[80px] sm:blur-[110px] opacity-25 animate-float-slow" />

      {/* Header section */}
      <div className="flex flex-col items-start text-left mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-slate-200 dark:border-white/[0.04] bg-slate-100/50 dark:bg-white/[0.02] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-antigravityBlue" />
          <span className="text-[10px] uppercase font-bold tracking-widest font-mono text-slate-600 dark:text-gray-400">
            Get in Touch
          </span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl xs:text-4xl sm:text-5xl font-bold font-Inter text-slate-900 dark:text-white tracking-tight leading-tight"
        >
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-500 dark:text-gray-400 max-w-lg mt-2 sm:mt-3 font-Inter text-xs sm:text-sm leading-relaxed">
          I am actively exploring SDE / Software Developer opportunities and open to immediate joining. Let's connect!
        </motion.p>
      </div>

      {/* Recruiter Quick Direct Access Strip - Sleek, Minimal & Premium */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-8 rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-white/80 dark:bg-[#0d1117]/80 backdrop-blur-md p-5 sm:p-6 shadow-sm font-Inter"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4 sm:divide-x divide-slate-200/80 dark:divide-white/[0.06]">
          {/* Email */}
          <div className="flex flex-col text-left sm:pr-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-gray-500 font-semibold mb-1">
              Direct Email
            </span>
            <a
              href="mailto:mohanbadiger250@gmail.com"
              className="text-xs sm:text-[13px] font-medium text-slate-900 dark:text-white hover:text-antigravityBlue dark:hover:text-antigravityBlue transition-colors break-words"
            >
              mohanbadiger250@gmail.com
            </a>
          </div>

          {/* Phone / WhatsApp */}
          <div className="flex flex-col text-left sm:px-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-gray-500 font-semibold mb-1">
              Phone / WhatsApp
            </span>
            <a
              href="tel:+916362893798"
              className="text-xs sm:text-[13px] font-medium text-slate-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
            >
              +91 6362893798
            </a>
          </div>

          {/* Location & Relocation */}
          <div className="flex flex-col text-left sm:pl-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-gray-500 font-semibold mb-1">
              Location & Availability
            </span>
            <span className="text-xs sm:text-[13px] font-medium text-slate-900 dark:text-white">
              Bengaluru, India
            </span>
            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to Relocate
            </span>
          </div>
        </div>
      </motion.div>

      {/* IDE-styled Git submission form */}
      <motion.form
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        aria-label="Contact form for Mohan Badiger"
        className="max-w-2xl mx-auto terminal-card rounded-xl border border-white/[0.06] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden font-mono text-xs flex flex-col relative z-10"
      >
        {/* IDE tab header */}
        <div className="px-4 py-2.5 bg-[#0b0b0f]/60 border-b border-white/[0.06] flex items-center justify-between select-none">
          <div className="flex gap-2 items-center text-[10px] text-gray-500 font-mono">
            <span className="text-gray-300 bg-white/[0.04] border border-white/[0.04] px-2.5 py-1 rounded flex items-center gap-1.5">
              <span>🚀</span>
              send_message.sh
            </span>
          </div>
          <span className="font-mono text-[9px] text-gray-500">
            SECURE HTTPS / SMTP
          </span>
        </div>

        {/* Editor workspace pane */}
        <div className="p-5 bg-[#0d0e12]/20 flex flex-col gap-6 relative">
          {/* Honeypot spam field */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <input
            type="hidden"
            name="subject"
            value="Mohan Badiger - New Contact Form Submission"
          />

          {/* Row 01: Name */}
          <div className="flex items-start gap-4 text-left">
            <span className="text-gray-600 font-mono text-[11px] select-none pt-1 w-5 text-right flex-shrink-0">
              01
            </span>
            <div className="flex-1 flex flex-col">
              <label htmlFor="name" className="text-[11px] text-antigravityBlue font-mono mb-1.5 cursor-pointer">
                const <span className="text-purple-400">senderName</span> =
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder='"Your name"'
                className="w-full px-4 py-2.5 outline-none border border-white/10 rounded bg-[#111217]/50 text-white font-mono text-[16px] sm:text-xs transition-all duration-300 focus:border-antigravityBlue/50 focus:bg-[#111217]/80 focus:shadow-[0_0_15px_rgba(66,133,244,0.15)]"
              />
            </div>
          </div>

          {/* Row 02: Email */}
          <div className="flex items-start gap-4 text-left">
            <span className="text-gray-600 font-mono text-[11px] select-none pt-1 w-5 text-right flex-shrink-0">
              02
            </span>
            <div className="flex-1 flex flex-col">
              <label htmlFor="email" className="text-[11px] text-antigravityBlue font-mono mb-1.5 cursor-pointer">
                const <span className="text-purple-400">senderEmail</span> =
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder='"your.email@example.com"'
                className="w-full px-4 py-2.5 outline-none border border-white/10 rounded bg-[#111217]/50 text-white font-mono text-[16px] sm:text-xs transition-all duration-300 focus:border-antigravityBlue/50 focus:bg-[#111217]/80 focus:shadow-[0_0_15px_rgba(66,133,244,0.15)]"
              />
            </div>
          </div>

          {/* Row 03: Message */}
          <div className="flex items-start gap-4 text-left">
            <span className="text-gray-600 font-mono text-[11px] select-none pt-1 w-5 text-right flex-shrink-0">
              03
            </span>
            <div className="flex-1 flex flex-col">
              <label htmlFor="message" className="text-[11px] text-antigravityBlue font-mono mb-1.5 cursor-pointer">
                const <span className="text-purple-400">payloadMessage</span> =
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder='`Hello Mohan, I would like to discuss...`'
                className="w-full px-4 py-2.5 outline-none border border-white/10 rounded bg-[#111217]/50 text-white font-mono text-[16px] sm:text-xs transition-all duration-300 focus:border-antigravityBlue/50 focus:bg-[#111217]/80 focus:shadow-[0_0_15px_rgba(66,133,244,0.15)] resize-none"
              />
            </div>
          </div>
        </div>

        {/* IDE Footer: Action dispatch bar */}
        <div className="px-5 py-4 bg-[#0a0a0d] border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-[10px] text-gray-500 font-mono select-none">STATUS:</span>
            <div
              aria-live="polite"
              className={`text-[11px] font-mono truncate max-w-xs sm:max-w-md ${isSuccess === true
                  ? 'text-emerald-400'
                  : isSuccess === false
                    ? 'text-rose-400'
                    : 'text-gray-400'
                }`}
            >
              {result || '>> Awaiting user dispatch...'}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 rounded bg-antigravityBlue hover:bg-blue-600 active:bg-blue-700 text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(66,133,244,0.3)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <span className="text-[10px]">&gt;&gt;</span>
              </>
            )}
          </motion.button>
        </div>
      </motion.form>
    </motion.section>
  )
}
