import { useState } from 'react'

export default function Contact() {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending....")
    const formData = new FormData(event.target)

    formData.append("access_key", "d2ebae31-4a62-4d7e-8fee-bc974f2063ab")

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json())

    if (res.success) {
      setResult(res.message)
      event.target.reset()
    } else {
      setResult(res.message)
    }
  }

  return (
    <section
      id="contact"
      aria-label="Contact Mohan Badiger"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
    >
      {/* ✅ SEO-only invisible heading */}
      <h2 className="sr-only">
        Contact Mohan Badiger – Full Stack MERN Developer
      </h2>

      {/* Existing visible content (unchanged) */}
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h3 className="text-center text-5xl font-Ovo">Get in touch</h3>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I&apos;d love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      <form
        onSubmit={onSubmit}
        aria-label="Contact form for Mohan Badiger"
        className="max-w-2xl mx-auto"
      >
        <input
          type="hidden"
          name="subject"
          value="Mohan Badiger - New Contact Form Submission"
        />

        {/* Hidden labels for SEO & accessibility */}
        <label htmlFor="name" className="sr-only">
          Your Name
        </label>
        <label htmlFor="email" className="sr-only">
          Your Email Address
        </label>
        <label htmlFor="message" className="sr-only">
          Your Message
        </label>

        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
          />

          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
          />
        </div>

        <textarea
          id="message"
          name="message"
          rows="6"
          required
          placeholder="Enter your message"
          className="w-full px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30"
        ></textarea>

        <div className="h-captcha mb-6 max-w-full" data-captcha="true"></div>

        <button
          type="submit"
          className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover"
        >
          Submit now
          <img
            src="./assets/right-arrow-white.png"
            alt="submit contact form"
            className="w-4"
          />
        </button>

        <p className="mt-4" aria-live="polite">
          {result}
        </p>
      </form>
    </section>
  )
}
