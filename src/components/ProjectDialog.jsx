import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import TechIcon, { hasTechIcon } from './TechIcon'

function Arrow() {
  return (
    <span className="hidden text-fog sm:inline" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8h10M9.5 4.5 13 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export default function ProjectDialog({ project, image, onClose, onPrev, onNext }) {
  const panelRef = useRef(null)
  const onCloseRef = useRef(onClose)
  const onPrevRef = useRef(onPrev)
  const onNextRef = useRef(onNext)
  onCloseRef.current = onClose
  onPrevRef.current = onPrev
  onNextRef.current = onNext

  useEffect(() => {
    const html = document.documentElement
    const prevOverscroll = html.style.overscrollBehavior
    html.style.overscrollBehavior = 'none'

    const block = (e) => {
      const panel = panelRef.current
      if (panel && panel.contains(e.target)) return
      e.preventDefault()
    }

    const onKey = (e) => {
      if (e.key === 'Escape') onCloseRef.current()
      if (e.key === 'ArrowRight') onNextRef.current()
      if (e.key === 'ArrowLeft') onPrevRef.current()
      if ([' ', 'PageDown', 'PageUp', 'Home', 'End'].includes(e.key)) {
        const panel = panelRef.current
        if (!panel || !panel.contains(e.target)) e.preventDefault()
      }
    }

    window.addEventListener('wheel', block, { passive: false })
    window.addEventListener('touchmove', block, { passive: false })
    window.addEventListener('keydown', onKey)

    return () => {
      html.style.overscrollBehavior = prevOverscroll
      window.removeEventListener('wheel', block)
      window.removeEventListener('touchmove', block)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-night/80 p-3 backdrop-blur-[2px] sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink sm:flex"
        aria-label="Previous project"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>

      <article
        className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-[28px] bg-cream shadow-[0_40px_80px_-24px_#1e201b88]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative shrink-0">
          <img
            src={image}
            alt=""
            className="h-[min(38vh,280px)] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/25 to-transparent" />
          <button
            type="button"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink"
            aria-label="Close"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p className="t-micro flex items-center gap-2 text-cream/80">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: project.accent }}
                aria-hidden="true"
              />
              {project.period} · {project.role}
            </p>
            <h3 className="mt-2 text-[clamp(1.7rem,4vw,2.6rem)] font-medium leading-[0.95] tracking-[-0.05em] text-cream">
              {project.title}
            </h3>
          </div>
        </div>

        <div
          ref={panelRef}
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain"
        >
          <div className="bg-night px-6 py-5 sm:px-8">
            <p className="t-micro text-fog">How it fits</p>
            <ol className="mt-4 flex flex-wrap items-center gap-2" role="list">
              {project.architecture.map((step, i) => (
                <li key={step.label} className="flex items-center gap-2">
                  {i > 0 && <Arrow />}
                  <span className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-ink">
                    {hasTechIcon(step.icon) && (
                      <TechIcon name={step.icon} size={16} />
                    )}
                    <span className="t-sm font-medium">{step.label}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="px-6 py-7 sm:px-8 sm:py-8">
            <p className="max-w-[52ch] text-[1.05rem] leading-relaxed">{project.summary}</p>
            <ul className="mt-6" role="list">
              {project.points.map((point) => (
                <li key={point} className="border-t border-ink/10 py-3 t-sm leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-2" role="list">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 rounded-full bg-white px-3 py-2 t-sm"
                >
                  {hasTechIcon(tech) && <TechIcon name={tech} size={15} />}
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <button
        type="button"
        className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink sm:flex"
        aria-label="Next project"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>,
    document.body,
  )
}
