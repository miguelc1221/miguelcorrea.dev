import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import ProfileImg from '../public/images/me.jpg'
import CbCli from '../public/images/cbcli.png'
import musiqRemix from '../public/images/musiq-remix.png'

const NAV = ['about', 'experience', 'projects']

const EXPERIENCE = [
  {
    period: '2025 — Now',
    role: 'Senior Full-Stack Engineer',
    company: 'MNTN',
    href: 'https://mountain.com',
    tags: ['React', 'TypeScript', 'Mapbox', 'Grafana', 'Node.js'],
  },
  {
    period: '2022 — 2025',
    role: 'Software Engineer II',
    company: 'Microsoft',
    href: 'https://microsoft.com',
    tags: ['React', 'TypeScript', 'Playwright', 'Storybook', 'Accessibility'],
  },
  {
    period: '2021 — 2022',
    role: 'Senior Software Engineer',
    company: 'Ro',
    href: 'https://ro.co',
    tags: ['React', 'TypeScript', 'Analytics', 'A/B Testing'],
  },
  {
    period: '2019 — 2021',
    role: 'Software Engineer II / III',
    company: 'Workday',
    href: 'https://workday.com',
    tags: ['React', 'Node.js', 'GraphQL', 'Kotlin'],
  },
  {
    period: '2017 — 2019',
    role: 'Senior Frontend Engineer',
    company: 'HelloFresh',
    href: 'https://hellofresh.com',
    tags: ['React', 'TypeScript', 'A/B Testing'],
  },
  {
    period: '2016 — 2017',
    role: 'Frontend Developer',
    company: 'Backbone Labs',
    href: null,
    tags: ['React', 'React Native'],
  },
]

const PROJECTS = [
  {
    href: 'https://musiq-remix.vercel.app/',
    title: 'Musiq Remix',
    desc: 'A full-featured Apple Music clone built with Remix. Includes streaming UI, playlist management, and real-time search.',
    tags: ['Remix', 'React', 'TypeScript', 'CSS'],
    src: musiqRemix,
    alt: 'Musiq Remix',
  },
  {
    href: 'https://github.com/miguelc1221/comicbook-cli',
    title: 'ComicBook CLI',
    desc: 'A command-line tool to browse and display the latest comic book releases from the terminal.',
    tags: ['Node.js', 'CLI', 'TypeScript'],
    src: CbCli,
    alt: 'ComicBook CLI',
  },
]

export default function Home(): React.JSX.Element {
  const [activeSection, setActiveSection] = useState('about')
  // Block observer updates while a programmatic scroll is in flight
  const scrollingRef = React.useRef(false)
  const scrollTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const sections = NAV.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        if (scrollingRef.current) return
        // Pick the entry that is intersecting and closest to the top
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    // Immediately reflect the click in the nav
    setActiveSection(id)
    scrollingRef.current = true
    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    // Re-enable observer after scroll animation (~800ms)
    scrollTimerRef.current = setTimeout(() => {
      scrollingRef.current = false
    }, 800)
  }

  return (
    <>
      {/* ── Mobile profile header (hidden on lg+) ─ */}
      <div className="lg:hidden px-6 pt-10 pb-6" style={{ borderBottom: '1px solid rgba(100,255,218,0.08)' }}>
        <div className="flex items-center gap-4 mb-4">
          <div
            className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"
            style={{ border: '2px solid rgba(204,214,246,0.15)' }}
          >
            <Image
              src={ProfileImg}
              alt="Miguel Correa"
              fill
              sizes="64px"
              className="object-cover object-top"
              priority
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white leading-tight">Miguel Correa</h1>
            <p className="text-sm text-slate-light">Senior Full-Stack Engineer</p>
          </div>
        </div>
        <p className="text-sm text-slate leading-relaxed mb-4">
          I build scalable web apps, drive UI architecture decisions, and ship
          revenue-impacting features across analytics and enterprise platforms.
        </p>
        {/* Mobile socials */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/miguelc1221" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/mc1221/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 256 256">
              <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055" />
            </svg>
          </a>
          <a href="https://twitter.com/Miguelc1221" target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="social-icon">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="mailto:me@miguelcorrea.dev" aria-label="Email" className="social-icon">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <a href="/miguel_correa_resume_x4.pdf" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-teal border border-teal/30 px-3 py-1 rounded-full hover:bg-teal/10 transition-colors ml-auto">
            Resume ↗
          </a>
        </div>
      </div>

      {/* ── Mobile sticky nav (hidden on lg+) ──── */}
      <div className="mobile-nav">
        <div className="flex gap-6">
          {NAV.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-xs font-bold tracking-widest uppercase transition-colors ${
                activeSection === id ? 'text-teal' : 'text-slate hover:text-white'
              }`}
            >
              {id}
            </button>
          ))}
        </div>
      </div>

      {/* ── Two-column shell ──────────────────── */}
      <div className="page-shell">

        {/* ══ SIDEBAR ════════════════════════════ */}
        <aside className="sidebar">
          {/* Top: identity */}
          <div>
            {/* Avatar */}
            <div
              className="relative w-32 h-32 rounded-full overflow-hidden mb-6"
              style={{
                border: '2px solid rgba(100,255,218,0.2)',
                animation: 'fadeSlideUp 0.5s cubic-bezier(0.645,0.045,0.355,1) both',
                animationDelay: '0s',
              }}
            >
              <Image
                src={ProfileImg}
                alt="Miguel Correa"
                fill
                sizes="128px"
                className="object-cover"
                style={{ objectPosition: 'center 25%' }}
                priority
              />
            </div>

            <h1
              className="text-4xl font-bold leading-tight mb-2"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #CCD6F6 45%, #64FFDA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'fadeSlideUp 0.5s cubic-bezier(0.645,0.045,0.355,1) both',
                animationDelay: '0.08s',
              }}
            >
              Miguel<br />Correa
            </h1>

            <p
              className="text-sm font-medium text-slate-light mb-1"
              style={{ animation: 'fadeSlideUp 0.5s cubic-bezier(0.645,0.045,0.355,1) both', animationDelay: '0.14s' }}
            >
              Senior Full-Stack Engineer
            </p>

            {/* Nav */}
            <nav
              className="flex flex-col gap-1 mt-10"
              style={{ animation: 'fadeSlideUp 0.5s cubic-bezier(0.645,0.045,0.355,1) both', animationDelay: '0.2s' }}
            >
              {NAV.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`nav-item ${activeSection === id ? 'active' : ''}`}
                >
                  {id}
                </button>
              ))}
            </nav>
          </div>

          {/* Bottom: status + socials */}
          <div
            className="sidebar-social"
            style={{ animation: 'fadeSlideUp 0.5s cubic-bezier(0.645,0.045,0.355,1) both', animationDelay: '0.26s' }}
          >
            <div className="flex items-center gap-2.5 mb-6">
              <span className="status-dot" />
              <span className="text-xs text-slate-light tracking-wide">
                Open to new opportunities
              </span>
            </div>
            <div className="flex items-center gap-5">
            <a
              href="https://github.com/miguelc1221"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-icon"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mc1221/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 256 256">
                <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055" />
              </svg>
            </a>
            <a
              href="https://twitter.com/Miguelc1221"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="social-icon"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="mailto:me@miguelcorrea.dev"
              aria-label="Email"
              className="social-icon"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a
              href="/miguel_correa_resume_x4.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="social-icon"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15h8v2H8zm0-4h8v2H8zm0-4h5v2H8z" />
              </svg>
            </a>
            </div>
          </div>
        </aside>

        {/* ══ MAIN CONTENT ═══════════════════════ */}
        <main className="main-col">

          {/* ── About ─────────────────────────── */}
          <section id="about" className="content-section scroll-mt-24">
            <h2 className="section-heading">
              <span className="section-num">01.</span>About
            </h2>

            <div className="space-y-4 text-slate text-[0.925rem] leading-relaxed max-w-[540px]">
              <p>
                I&apos;m a <span className="text-white font-medium">self-taught full-stack engineer</span> living in{' '}
                <span className="text-white font-medium">Colorado</span>. I&apos;ve spent the last decade
                building web apps, usually gravitating toward the front end but happy
                to work anywhere in the stack.
              </p>
              <p>
                I never took the traditional route into software. No computer science
                degree, no bootcamp. Just a lot of curiosity and a lot of time spent
                building things that probably shouldn&apos;t have worked but somehow did.
              </p>
              <p>
                Since then I&apos;ve shipped a launch that generated{' '}
                <span className="text-white font-medium">$15M in incremental revenue</span> at{' '}
                <a href="https://hellofresh.com" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-teal transition-colors">HelloFresh</a>,
                improved performance on products at{' '}
                <a href="https://microsoft.com" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-teal transition-colors">Microsoft</a>,
                and built geo-analytics tools at{' '}
                <a href="https://mountain.com" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-teal transition-colors">MNTN</a>{' '}
                that help advertisers make better decisions.
              </p>
              <p>
                I still get the most satisfaction from turning complicated problems
                into simple experiences.
              </p>
            </div>

          </section>

          {/* ── Experience ────────────────────── */}
          <section id="experience" className="content-section scroll-mt-24">
            <h2 className="section-heading">
              <span className="section-num">02.</span>Experience
            </h2>

            <div className="timeline-wrap">
              {EXPERIENCE.map((exp) => (
                <div key={exp.company} className="exp-row">
                  <p className="text-xs font-mono text-slate mt-1 whitespace-nowrap">
                    {exp.period}
                  </p>
                  <div>
                    <p className="exp-role text-white font-semibold text-sm mb-3 transition-colors duration-200">
                      {exp.role}
                      <span className="text-teal"> · </span>
                      {exp.href ? (
                        <a
                          href={exp.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal hover:underline underline-offset-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <span className="text-teal">{exp.company}</span>
                      )}
                    </p>
                    <p className="text-xs font-mono text-slate tracking-wide">
                      {exp.tags.join(' · ')}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/miguel_correa_resume_x4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal text-sm font-medium group"
              >
                View full résumé
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </section>

          {/* ── Projects ──────────────────────── */}
          <section id="projects" className="content-section scroll-mt-24">
            <h2 className="section-heading">
              <span className="section-num">03.</span>Projects
            </h2>

            <div className="flex flex-col gap-1">
              {PROJECTS.map((p) => (
                <a
                  key={p.title}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card group"
                  aria-label={p.title}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video rounded overflow-hidden bg-navy-2 flex-shrink-0">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="160px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-teal opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </div>

                  {/* Info */}
                  <div>
                    <p className="text-white font-semibold text-sm mb-1 flex items-center gap-1.5 group-hover:text-teal transition-colors">
                      {p.title}
                      <svg
                        className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-px"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </p>
                    <p className="text-slate text-xs leading-relaxed mb-3">
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* ── Footer note ───────────────────── */}
          <p className="text-xs text-slate leading-relaxed mt-4 pt-6" style={{ borderTop: '1px solid rgba(100,255,218,0.08)' }}>
            Built with{' '}
            <span className="text-white font-medium">Next.js</span> &{' '}
            <span className="text-white font-medium">Tailwind CSS</span>.{' '}
            © {new Date().getFullYear()} Miguel Correa.
          </p>

        </main>
      </div>
    </>
  )
}
