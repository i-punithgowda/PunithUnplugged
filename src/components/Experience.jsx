import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experience } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const line = root.querySelector('[data-line]')
        const roles = gsap.utils.toArray('[data-role]', root)

        if (line) {
          gsap.fromTo(
            line,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: root,
                start: 'top 72%',
                end: 'bottom 55%',
                scrub: 0.4,
              },
            },
          )
        }

        roles.forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 36,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 86%',
            },
          })
        })
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="experience"
      ref={rootRef}
      aria-label="Experience"
      className="band relative scroll-mt-16 overflow-hidden bg-night text-cream"
    >
      <div className="wrap">
        <p className="t-micro flex items-center gap-2.5 text-fog">
          <span className="h-2 w-2 rounded-full bg-coral" aria-hidden="true" />
          Experience
        </p>
        <h2 className="t-heading mt-5 max-w-[18ch]">At Techcanopy.</h2>
        <p className="t-sm mt-5 text-fog">Aug 2023 → now.</p>

        <ol className="relative mt-20" role="list">
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-[5px] top-4 w-px bg-cream/10 md:left-[calc(11rem+5px)]"
          />
          <span
            data-line
            aria-hidden="true"
            className="absolute bottom-4 left-[5px] top-4 w-px origin-top scale-y-0 bg-coral md:left-[calc(11rem+5px)] motion-reduce:scale-y-100"
          />

          {experience.map((item) => (
            <li
              key={item.title}
              data-role
              className="relative grid grid-cols-[24px_1fr] items-start gap-5 pb-16 last:pb-0 md:grid-cols-[9rem_24px_1fr] md:gap-8"
            >
              <p className="hidden font-display text-[clamp(2.2rem,4vw,3.6rem)] font-medium leading-none tracking-[-0.06em] text-cream/25 md:block md:text-right">
                {item.year}
              </p>
              <span
                className={`relative z-10 mt-2 h-2.5 w-2.5 rounded-full ${
                  item.mark ? 'bg-coral live-ring' : 'bg-cream/35'
                }`}
                aria-hidden="true"
              />
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="t-micro text-fog md:hidden">{item.year}</p>
                  {item.mark && (
                    <span className="pill h-8 min-h-8 bg-coral px-3 text-[12px] text-ink">{item.mark}</span>
                  )}
                </div>
                <h3
                  className={`mt-2 font-medium tracking-tight ${
                    item.mark
                      ? 'text-[clamp(1.7rem,3.2vw,2.6rem)] leading-[1.1]'
                      : 'text-[clamp(1.45rem,2.6vw,2.1rem)] leading-[1.15]'
                  }`}
                >
                  {item.title}
                </h3>
                <p className="t-sm mt-1 text-fog">{item.place}</p>
                <p className="t-micro mt-3 text-fog/70">{item.range}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
