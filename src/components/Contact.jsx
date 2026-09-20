import { useState } from 'react'
import resumePdf from '../assets/Punith_Gowda_S_P.pdf'
import { contact, person } from '../data/content'

function GitHubIcon() {
  return (
    <svg role="img" aria-hidden="true" viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(person.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = resumePdf
    link.download = 'Punith_Gowda_S_P_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="band scroll-mt-16 bg-night text-cream"
    >
      <div className="wrap flex flex-col items-center text-center">
        <p className="t-micro flex items-center gap-2.5 text-fog">
          <span className="relative inline-flex h-2 w-2">
            <span className="live-ring absolute inset-0 rounded-full border border-coral" />
            <span className="h-2 w-2 rounded-full bg-coral" />
          </span>
          {contact.kicker}
        </p>

        <h2 className="t-display mt-8">{contact.heading}</h2>

        <svg
          viewBox="0 0 240 26"
          fill="none"
          aria-hidden="true"
          preserveAspectRatio="none"
          className="mt-5 h-[18px] w-[min(260px,52vw)]"
        >
          <path
            d="M6 16 C 26 4, 44 22, 64 13 C 84 4, 100 22, 120 13 C 140 4, 156 22, 176 13 C 196 4, 214 20, 234 11"
            stroke="var(--color-coral)"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a href={`mailto:${person.email}`} className="pill pillow rounded-full py-3.5">
            {person.email}
            <span className="h-2 w-2 rounded-full bg-sky" aria-hidden="true" />
          </a>
          <button
            type="button"
            aria-label="Copy email address"
            onClick={copyEmail}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-night-soft text-cream"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          </button>
          <span aria-live="polite" className="t-micro text-coral">
            {copied ? 'Copied' : ''}
          </span>
        </div>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-3" role="list" aria-label="Profiles">
          <li>
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="pillow flex h-12 w-12 items-center justify-center rounded-full"
            >
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="pillow flex h-12 w-12 items-center justify-center rounded-full"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <button
              type="button"
              aria-label="Download résumé"
              onClick={downloadResume}
              className="pillow flex h-12 w-12 items-center justify-center rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12" />
                <path d="M8 11l4 4 4-4" />
                <path d="M5 21h14" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </section>
  )
}
