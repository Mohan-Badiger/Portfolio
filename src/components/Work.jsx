import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// GitHub language color mapping (GitHub exact colors)
const LANG_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Dockerfile: '#384d54',
}

// Featured project configs with instant data (never shows blank)
const FEATURED_PROJECTS = [
  {
    repoName: 'KDS-Temple-Website',
    description: 'Full-stack temple management platform with admin dashboard, image galleries, donation tracking, event scheduling, and community member directory.',
    homepage: 'https://kds-temple-backend.vercel.app',
    html_url: 'https://github.com/Mohan-Badiger/KDS-Temple-Website',
    languages: { JavaScript: 90, CSS: 7, HTML: 3 },
  },
  {
    repoName: 'cafe',
    description: 'Modern cafe ordering and management application with menu browsing, cart system, order placement, and real-time order status updates.',
    homepage: null,
    html_url: 'https://github.com/Mohan-Badiger/cafe',
    languages: { JavaScript: 95, CSS: 5 },
  },
  {
    repoName: 'ReelVerse',
    description: 'Cinema ticket booking platform with real-time seat selection, Razorpay payment integration, Google OAuth authentication, and QR-code digital tickets.',
    homepage: 'https://reelverse-two.vercel.app',
    html_url: 'https://github.com/Mohan-Badiger/ReelVerse',
    languages: { JavaScript: 92, CSS: 5, HTML: 3 },
  },
  {
    repoName: 'ClimateVault',
    description: 'Climate data visualization dashboard built with TypeScript and Python — tracking environmental metrics, weather patterns, and carbon footprint analytics.',
    homepage: null,
    html_url: 'https://github.com/Mohan-Badiger/ClimateVault',
    languages: { TypeScript: 60, Python: 36, JavaScript: 2, CSS: 2 },
  },
  {
    repoName: 'droplyx',
    description: 'E-commerce price tracking and alert dashboard with background polling scripts to detect price drops across stores and trigger instant notifications.',
    homepage: 'https://droplyx.vercel.app',
    html_url: 'https://github.com/Mohan-Badiger/droplyx',
    languages: { JavaScript: 96, CSS: 4 },
  },
  {
    repoName: 'dayflow',
    description: 'Daily productivity and task management app with drag-and-drop task boards, priority tagging, progress tracking, and clean minimalist interface.',
    homepage: 'https://dayflow-blue.vercel.app',
    html_url: 'https://github.com/Mohan-Badiger/dayflow',
    languages: { JavaScript: 94, CSS: 6 },
  },
  {
    repoName: 'mip',
    description: 'Admin management information portal with role-based access control, data analytics dashboards, report generation, and user management system.',
    homepage: 'https://mipadmin.vercel.app',
    html_url: 'https://github.com/Mohan-Badiger/mip',
    languages: { JavaScript: 95, CSS: 5 },
  },
  {
    repoName: 'Online-Clothing-Store',
    description: 'Full-featured online fashion store with product catalog, size filters, shopping cart, wishlist, checkout flow, and responsive mobile-first design.',
    homepage: 'https://mbfashion.vercel.app',
    html_url: 'https://github.com/Mohan-Badiger/Online-Clothing-Store',
    languages: { JavaScript: 92, CSS: 6, HTML: 2 },
  },
  {
    repoName: 'EasyShare',
    description: 'Cloud-based file sharing application with encrypted transfers, real-time socket connections, drag-and-drop uploads, and shareable download links.',
    homepage: 'https://easyshare-jet.vercel.app',
    html_url: 'https://github.com/Mohan-Badiger/EasyShare',
    languages: { JavaScript: 95, CSS: 5 },
  },
  {
    repoName: 'Aventisia-assessment',
    description: 'Interactive data visualization dashboard built as a technical assessment — featuring dynamic charts, filterable datasets, and responsive analytics views.',
    homepage: 'https://aventisia-assessment.vercel.app',
    html_url: 'https://github.com/Mohan-Badiger/Aventisia-assessment',
    languages: { JavaScript: 95, CSS: 5 },
  },
]

const FEATURED_NAMES = FEATURED_PROJECTS.map((p) => p.repoName)

function formatDate(dateStr) {
  if (!dateStr) return 'Recently'
  const date = new Date(dateStr)
  const now = new Date()
  const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24))
  if (diffDays === 0) return 'today'
  if (diffDays === 1) return 'yesterday'
  if (diffDays < 30) return `${diffDays}d ago`
  const months = Math.floor(diffDays / 30)
  if (diffDays < 365) return `${months}mo ago`
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

function getLanguageBars(langs) {
  if (!langs || Object.keys(langs).length === 0) return []
  const total = Object.values(langs).reduce((a, b) => a + b, 0)
  return Object.entries(langs)
    .map(([name, bytes]) => ({
      name,
      percent: Number(((bytes / total) * 100).toFixed(0)),
      color: LANG_COLORS[name] || '#8b8b8b',
    }))
    .filter((l) => l.percent > 0)
    .sort((a, b) => b.percent - a.percent)
}

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
}

function RepoCard({ repo }) {
  const langBars = getLanguageBars(repo.languages)

  return (
    <motion.div
      variants={cardVariants}
      className="group flex flex-col justify-between rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-white/90 dark:bg-[#0d1117] p-5 sm:p-6 transition-all duration-300 hover:border-antigravityBlue/50 dark:hover:border-antigravityBlue/40 hover:shadow-[0_8px_30px_rgba(66,133,244,0.08)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] relative"
    >
      <div>
        {/* Top Row: Repo Icon + Title + Public Badge */}
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2 min-w-0 flex-wrap">
            {/* GitHub Repo Book Icon */}
            <svg
              className="w-4 h-4 text-slate-400 dark:text-gray-400 flex-shrink-0"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
            </svg>

            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-semibold font-Inter text-antigravityBlue hover:underline decoration-antigravityBlue/50 underline-offset-2 truncate"
              title={repo.name}
            >
              {repo.name}
            </a>

            {/* Public Badge */}
            <span className="text-[10px] font-Inter font-medium text-slate-500 dark:text-gray-400 border border-slate-200 dark:border-white/10 rounded-full px-2 py-0.5 leading-none bg-slate-50 dark:bg-white/[0.03]">
              Public
            </span>
          </div>

          {/* GitHub Quick Icon */}
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors p-1 rounded-md hover:bg-slate-100 dark:hover:bg-white/5"
            aria-label="View on GitHub"
          >
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
            </svg>
          </a>
        </div>

        {/* Description */}
        <p className="text-[13px] text-slate-600 dark:text-gray-300 font-Inter leading-relaxed mb-4 line-clamp-3">
          {repo.description || 'No description provided.'}
        </p>

        {/* GitHub-style Languages */}
        {langBars.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
            {langBars.map((lang) => (
              <div key={lang.name} className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: lang.color }}
                />
                <span className="text-[11px] font-Inter text-slate-600 dark:text-gray-300">
                  {lang.name}
                </span>
                <span className="text-[11px] font-Inter text-slate-400 dark:text-gray-500">
                  {lang.percent}%
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Bar: Stats + Action Button */}
      <div className="pt-3.5 mt-2 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between gap-2 flex-wrap">
        {/* Metadata: Stars / Forks / Updated */}
        <div className="flex items-center gap-3 text-[11px] font-Inter text-slate-500 dark:text-gray-400">
          {repo.stargazers_count > 0 && (
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
              </svg>
              {repo.stargazers_count}
            </span>
          )}

          {repo.forks_count > 0 && (
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
                <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
              </svg>
              {repo.forks_count}
            </span>
          )}

          <span>Updated {formatDate(repo.updated_at)}</span>
        </div>

        {/* Action Button: Live Demo or GitHub Repo */}
        <div>
          {repo.homepage ? (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-[12px] font-Inter font-semibold text-slate-800 dark:text-white bg-slate-100 hover:bg-antigravityBlue hover:text-white dark:bg-white/[0.06] dark:hover:bg-antigravityBlue dark:hover:text-white border border-slate-200 dark:border-white/10 hover:border-antigravityBlue dark:hover:border-antigravityBlue shadow-sm hover:shadow-[0_4px_16px_rgba(66,133,244,0.3)] transition-all duration-300 cursor-pointer"
            >
              {/* Pulsing Green Live Radar */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Live Demo</span>
              <svg
                className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </a>
          ) : (
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-[12px] font-Inter font-medium text-slate-600 dark:text-gray-300 bg-slate-100/80 hover:bg-slate-200/80 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-slate-200/70 dark:border-white/[0.07] hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              <svg
                className="w-3.5 h-3.5 text-slate-500 dark:text-gray-400 group-hover/btn:text-slate-900 dark:group-hover/btn:text-white transition-colors"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
              </svg>
              <span>View Repo</span>
              <svg
                className="w-3 h-3 opacity-50 group-hover/btn:translate-x-0.5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Work() {
  const [allRepos, setAllRepos] = useState([])
  const [repoLanguages, setRepoLanguages] = useState({})
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          'https://api.github.com/users/Mohan-Badiger/repos?sort=updated&per_page=100&type=owner'
        )
        if (!res.ok) return
        const data = await res.json()
        const filtered = data.filter((r) => !r.fork && r.name !== 'Mohan-Badiger' && r.size > 0)
        setAllRepos(filtered)

        // Fetch languages only for featured repos to save API quota
        const featuredInApi = filtered.filter((r) => FEATURED_NAMES.includes(r.name))
        const langPromises = featuredInApi.map(async (repo) => {
          try {
            const langRes = await fetch(repo.languages_url)
            if (langRes.ok) return { name: repo.name, languages: await langRes.json() }
          } catch {
            // fallback gracefully
          }
          return { name: repo.name, languages: {} }
        })
        const langResults = await Promise.all(langPromises)
        const langMap = {}
        langResults.forEach((r) => {
          if (r.languages && Object.keys(r.languages).length > 0) {
            langMap[r.name] = r.languages
          }
        })
        setRepoLanguages(langMap)
      } catch {
        // Fallback data handles everything seamlessly
      }
    }
    fetchRepos()
  }, [])

  // Build featured cards instantly
  const featuredCards = FEATURED_PROJECTS.map((proj) => {
    const apiRepo = allRepos.find((r) => r.name === proj.repoName)
    const langs = repoLanguages[proj.repoName] || proj.languages
    return {
      name: proj.repoName,
      description: proj.description,
      homepage: apiRepo?.homepage || proj.homepage,
      html_url: apiRepo?.html_url || proj.html_url,
      stargazers_count: apiRepo?.stargazers_count || 0,
      forks_count: apiRepo?.forks_count || 0,
      updated_at: apiRepo?.updated_at || null,
      languages: langs,
    }
  })

  // Other repos for "View all"
  const otherRepos = allRepos
    .filter((r) => !FEATURED_NAMES.includes(r.name))
    .map((r) => ({
      name: r.name,
      description: r.description,
      homepage: r.homepage,
      html_url: r.html_url,
      stargazers_count: r.stargazers_count || 0,
      forks_count: r.forks_count || 0,
      updated_at: r.updated_at,
      languages: r.language ? { [r.language]: 100 } : {},
    }))

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
  }

  return (
    <section
      id="work"
      aria-label="Projects by Mohan Badiger"
      className="w-full px-4 sm:px-12 lg:px-[12%] py-20 sm:py-28 scroll-mt-24 relative overflow-hidden"
    >
      {/* Background aurora effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] -z-10 translate-x-[30%] aurora-blue pointer-events-none rounded-full blur-[140px] opacity-25" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] -z-10 -translate-x-[30%] aurora-purple pointer-events-none rounded-full blur-[120px] opacity-20" />

      <h2 className="sr-only">Projects by Mohan Badiger – Full Stack MERN Developer</h2>

      {/* Section Header */}
      <div className="flex flex-col items-start text-left mb-12">
        <h3 className="text-4xl sm:text-5xl font-bold font-Inter text-slate-900 dark:text-white tracking-tight leading-none">
          Projects
        </h3>
      </div>

      {/* Project Cards Grid - Renders instantly */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.02 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5"
      >
        {featuredCards.map((repo) => (
          <RepoCard key={repo.name} repo={repo} />
        ))}

        {/* Show extra repos when toggled */}
        {showAll &&
          otherRepos.map((repo) => (
            <RepoCard key={repo.name} repo={repo} />
          ))}
      </motion.div>

      {/* View All / Show Less Button */}
      {otherRepos.length > 0 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-slate-200 dark:border-white/[0.08] bg-white/60 dark:bg-white/[0.02] text-sm font-Inter font-medium text-slate-700 dark:text-gray-300 hover:border-antigravityBlue/30 hover:text-antigravityBlue transition-all duration-300 cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
            </svg>
            {showAll ? 'Show featured only' : `View all repositories (${otherRepos.length} more)`}
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-300 ${
                showAll ? 'rotate-180' : ''
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
