export default function Footer() {
  return (
    <footer
      aria-label="Footer - Mohan Badiger Portfolio"
      className="mt-20"
    >
      {/* ✅ SEO-only invisible heading */}
      <h2 className="sr-only">
        Mohan Badiger – Full Stack MERN Developer Footer
      </h2>

      <div className="text-center">
        {/* Existing brand text (unchanged) */}
        <p className="text-2xl sm:text-2xl md:text-4xl font-medium font-outfit dark:hidden">
          Mohan<span className="text-purple-500">.</span>
        </p>
        <p className="text-2xl sm:text-2xl md:text-4xl font-medium font-outfit hidden dark:block">
          Mohan<span className="text-purple-500">.</span>
        </p>

        {/* Email */}
        <div className="w-max flex items-center gap-2 mx-auto">
          <img
            src="./assets/mail_icon.png"
            alt="Email icon"
            className="w-5 dark:hidden"
          />
          <img
            src="./assets/mail_icon_dark.png"
            alt="Email icon"
            className="w-5 hidden dark:block"
          />

          <a
            href="mailto:hello@mohanbadiger.site"
            aria-label="Email Mohan Badiger"
          >
            hello@mohanbadiger.site
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
        <p>
          © {new Date().getFullYear()}{" "}
          <a
            href="https://mohanbadiger.site"
            aria-label="Mohan Badiger Portfolio Website"
          >
            Mohan Badiger
          </a>
            , All rights reserved.
        </p>

        <ul
          className="flex items-center gap-10 justify-center mt-4 sm:mt-0"
          aria-label="Social links"
        >
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Mohan-Badiger"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mohan-badiger"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href=""
              aria-label="Mohan Badiger Twitter profile"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
