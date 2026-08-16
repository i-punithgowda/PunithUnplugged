import { useEffect, useState } from 'react'
import { awards, credentials } from '../data/content'
import TechIcon from './TechIcon'
import patOnTheBack from '../assets/certificates/PatOnTheBack.jpeg'
import teamImpact from '../assets/certificates/TeamImpact.jpeg'
import risingStar from '../assets/certificates/RisingStar.jpeg'
import consistentContributor from '../assets/certificates/ConsistentContributor.jpeg'
import standoutPerformer from '../assets/certificates/StandoutPerformer.jpeg'

const IMAGES = {
  'pat-on-the-back': patOnTheBack,
  'team-impact': teamImpact,
  'rising-star': risingStar,
  'consistent-contributor': consistentContributor,
  'standout-performer': standoutPerformer,
}

export default function Recognition() {
  const [open, setOpen] = useState(null)

  useEffect(() => {
    if (open == null) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen((i) => (i + 1) % awards.length)
      if (e.key === 'ArrowLeft') setOpen((i) => (i - 1 + awards.length) % awards.length)
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <section id="recognition" aria-label="Awards" className="band scroll-mt-16">
      <div className="wrap">
        <p className="t-micro flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-sun" aria-hidden="true" />
          Recognition
        </p>
        <h2 className="t-heading mt-5 max-w-[18ch]">Awards at Techcanopy.</h2>
        <p className="t-sm mt-5 max-w-[44ch] text-stone">2023–2025.</p>
      </div>

      <ol className="wrap mt-16 space-y-16" role="list">
        {awards.map((award, i) => {
          const src = IMAGES[award.id]
          const isPhoto = award.kind === 'photo'

          return (
            <li key={award.id} className={isPhoto ? 'relative' : ''}>
              {isPhoto ? (
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  className="group relative block w-full overflow-hidden rounded-[28px] text-left"
                  aria-label={`${award.title} — ${award.when}. Open full photo.`}
                >
                  <img
                    src={src}
                    alt="Punith Gowda on stage at Techcanopy IGNITE Annual Awards 2024, wearing the Rising Star medal"
                    className="aspect-[16/10] w-full object-cover object-[center_18%] md:aspect-[21/9] md:min-h-[420px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
                    <div className="text-cream">
                      <p className="t-micro flex items-center gap-2 text-sun">
                        <span className="h-2 w-2 rounded-full bg-sun" />
                        {String(i + 1).padStart(2, '0')} · {award.when}
                      </p>
                      <h3 className="mt-2 text-[clamp(2rem,5vw,3.6rem)] font-medium leading-[0.95] tracking-[-0.05em]">
                        {award.title}
                      </h3>
                      <p className="t-sm mt-3 max-w-[40ch] text-cream/80">{award.copy}</p>
                    </div>
                    <span className="pill bg-sun text-ink w-fit">
                      {award.mark}
                      <span className="h-2 w-2 rounded-full bg-ink" aria-hidden="true" />
                    </span>
                  </div>
                </button>
              ) : (
                <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <p className="text-2xl font-medium tracking-tight">{String(i + 1).padStart(2, '0')}</p>
                    <p className="t-micro mt-2 text-stone">{award.when}</p>
                    <h3 className="mt-4 text-[1.7rem] font-medium tracking-tight">{award.title}</h3>
                    <p className="t-sm mt-1 text-stone">{award.org}</p>
                    <p className="t-sm mt-4 max-w-[42ch]">{award.copy}</p>
                    <span className="pill pillow mt-5 h-9 min-h-9 px-4 text-[13px]">{award.mark}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpen(i)}
                    className="group overflow-hidden rounded-[24px] bg-white p-2 text-left shadow-[0_18px_40px_-24px_#1e201b66] transition-transform duration-500 ease-out hover:-translate-y-1"
                    aria-label={`${award.title} certificate, ${award.when}. Open full image.`}
                  >
                    <img
                      src={src}
                      alt={`${award.title} certificate from ${award.org}, ${award.when}`}
                      className="aspect-[1.414/1] w-full rounded-[16px] object-cover object-top bg-sandstone"
                    />
                  </button>
                </div>
              )}
            </li>
          )
        })}
      </ol>

      <div className="wrap mt-28">
        <p className="t-micro flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-sky" aria-hidden="true" />
          SIDE QUESTS
        </p>
        <h2 className="t-heading mt-5 max-w-[18ch]">Because Work Wasn't Enough..</h2>

        <ol className="mt-16 space-y-16" role="list">
          {credentials.map((item, i) => (
            <li
              key={item.id}
              className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div>
                <p className="text-2xl font-medium tracking-tight">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="t-micro mt-2 text-stone">{item.issuer}</p>
                <h3 className="mt-4 text-[1.7rem] font-medium tracking-tight">{item.title}</h3>
                <p className="t-sm mt-1 text-stone">{item.detail}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="pill pillow mt-5 h-9 min-h-9 px-4 text-[13px]"
                >
                  {item.hrefLabel}
                  <span className="h-2 w-2 rounded-full bg-sky" aria-hidden="true" />
                </a>
              </div>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-[24px] bg-white p-2 shadow-[0_18px_40px_-24px_#1e201b66] transition-transform duration-500 ease-out hover:-translate-y-1"
                aria-label={`${item.title}, ${item.issuer}. ${item.hrefLabel}.`}
              >
                <div
                  className="relative flex aspect-[1.414/1] flex-col justify-between overflow-hidden rounded-[16px] p-7 sm:p-8"
                  style={{ background: item.accent, color: item.ink }}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                    <TechIcon name={item.icon} size={28} />
                  </span>
                  <div>
                    <p className="t-micro opacity-70">{item.issuer}</p>
                    <p className="mt-2 max-w-[14ch] text-[clamp(1.6rem,3.2vw,2.5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
                      {item.title}
                    </p>
                    <p className="t-sm mt-3 opacity-70">{item.detail}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>

      {open != null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-night/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={awards[open].title}
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink"
            aria-label="Close"
            onClick={() => setOpen(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <button
            type="button"
            className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink sm:flex"
            aria-label="Previous award"
            onClick={(e) => {
              e.stopPropagation()
              setOpen((i) => (i - 1 + awards.length) % awards.length)
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={IMAGES[awards[open].id]}
              alt=""
              className={`max-h-[82vh] w-full rounded-[20px] object-contain ${
                awards[open].kind === 'photo' ? 'bg-night' : 'bg-white p-2'
              }`}
            />
            <figcaption className="mt-4 text-center text-cream">
              <p className="t-micro text-sun">{awards[open].when}</p>
              <p className="mt-1 font-medium">{awards[open].title}</p>
            </figcaption>
          </figure>
          <button
            type="button"
            className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink sm:flex"
            aria-label="Next award"
            onClick={(e) => {
              e.stopPropagation()
              setOpen((i) => (i + 1) % awards.length)
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
