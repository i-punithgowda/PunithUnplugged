import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/content'
import ProjectDialog from './ProjectDialog'
import summarizeImg from '../assets/work/summarize.jpg'
import yachthubImg from '../assets/work/yachthub.jpg'
import mentoringImg from '../assets/work/mentoring.jpg'
import edtechImg from '../assets/work/edtech.jpg'

const IMAGES = {
  summarize: summarizeImg,
  yachthub: yachthubImg,
  mentoring: mentoringImg,
  edtech: edtechImg,
}

gsap.registerPlugin(ScrollTrigger)

const LETTERS = ['W', 'O', 'R', 'K']

function isLight(hex) {
  const n = parseInt(hex.slice(1), 16)
  return (0.2126 * ((n >> 16) & 255) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255)) / 255 > 0.6
}

function dim(hex) {
  const n = parseInt(hex.slice(1), 16)
  const ch = (v) => Math.round(0.55 * v)
  return `rgb(${ch((n >> 16) & 255)}, ${ch((n >> 8) & 255)}, ${ch(n & 255)})`
}

function lockDock(color) {
  const root = document.documentElement
  if (color) {
    root.dataset.dockLock = '1'
    root.style.setProperty('--dock-fg', color)
  } else {
    delete root.dataset.dockLock
    root.style.removeProperty('--dock-fg')
    window.dispatchEvent(new Event('dockchange'))
  }
}

export default function Work() {
  const rootRef = useRef(null)
  const [open, setOpen] = useState(null)
  const project = open != null ? projects[open] : null
  const cardRefs = useRef([])

  const closeDialog = () => {
    const i = open
    setOpen(null)
    requestAnimationFrame(() => {
      cardRefs.current[i]?.focus({ preventScroll: true })
    })
  }

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const reel = root.querySelector('[data-reel]')
        if (!reel) return

        const rows = gsap.utils.toArray('[data-letter-row]', root)
        const cards = gsap.utils.toArray('[data-card]', reel)
        let glitch
        let active = -1
        let pinned = false

        const setActive = (index) => {
          if (index === active) return
          active = index
          const project = projects[index]
          if (!project) return
          const accent = project.accent
          const light = isLight(accent)

          gsap.to(root, {
            backgroundColor: light ? '#f5f1e4' : '#1e201b',
            duration: 0.6,
            ease: 'power2.out',
            overwrite: 'auto',
          })
          gsap.to(rows, {
            color: light ? dim(accent) : accent,
            duration: 0.6,
            ease: 'power2.out',
            overwrite: 'auto',
          })

          glitch?.kill()
          glitch = gsap
            .timeline()
            .set(rows, {
              skewX: 2.4,
              textShadow: '-3px 0 rgba(255,0,90,.9), 3px 0 rgba(0,220,255,.9)',
            })
            .set(rows, {
              skewX: -1.8,
              textShadow: '3px 0 rgba(255,0,90,.75), -3px 0 rgba(0,220,255,.75)',
            }, '+=0.045')
            .set(rows, {
              skewX: 1.3,
              textShadow: '-2px 0 rgba(255,0,90,.5), 2px 0 rgba(0,220,255,.5)',
            }, '+=0.045')
            .set(rows, {
              skewX: -0.6,
              textShadow: '1px 0 rgba(255,0,90,.3), -1px 0 rgba(0,220,255,.3)',
            }, '+=0.05')
            .to(rows, {
              skewX: 0,
              textShadow: '0px 0 rgba(255,0,90,0), 0px 0 rgba(0,220,255,0)',
              duration: 0.18,
              ease: 'power2.out',
            }, '+=0.02')

          if (pinned) lockDock(light ? '#2c2e2a' : '#ffffff')
        }

        ScrollTrigger.create({
          trigger: root,
          start: 'top 72px',
          end: 'bottom 72px',
          onToggle: (self) => {
            pinned = self.isActive
            if (self.isActive && active >= 0) {
              const accent = projects[active].accent
              lockDock(isLight(accent) ? '#2c2e2a' : '#ffffff')
            } else {
              lockDock(null)
            }
          },
        })

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          onUpdate: () => {
            const mid = window.innerWidth / 2
            let next = 0
            let best = Infinity
            cards.forEach((card, i) => {
              const r = card.getBoundingClientRect()
              const dist = Math.abs(r.left + r.width / 2 - mid)
              if (dist < best) {
                best = dist
                next = i
              }
            })
            setActive(next)
          },
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        })

        tl.fromTo(
          reel,
          { x: () => 0.7 * window.innerWidth },
          { x: () => -(reel.scrollWidth - 0.3 * window.innerWidth), duration: 0.96 },
          0.02
        )

        rows.forEach((row, i) => {
          tl.fromTo(
            row,
            { xPercent: i % 2 ? -14 : -2 },
            { xPercent: i % 2 ? -2 : -14, duration: 0.98 },
            0.01
          )
        })

        setActive(0)
        ScrollTrigger.refresh()
      })
    }, root)

    return () => {
      lockDock(null)
      ctx.revert()
    }
  }, [])

  return (
    <section
      id="work"
      ref={rootRef}
      data-show-root="true"
      aria-label="Work"
      className="relative scroll-mt-16 bg-night motion-reduce:h-auto"
      style={{ height: `${42 * projects.length + 120}lvh` }}
    >
      <div data-show-sticky="true" className="sticky top-0 isolate h-[100lvh] overflow-hidden motion-reduce:static motion-reduce:h-auto motion-reduce:py-24">
        <div data-letters="true" aria-hidden="true" className="absolute inset-0 z-0 flex flex-col justify-around py-2 motion-reduce:hidden">
          {LETTERS.map((letter) => (
            <div key={letter} className="flex items-center">
              <span
                data-letter-row="true"
                className="whitespace-nowrap text-[19lvh] font-medium leading-none tracking-[-0.04em]"
                style={{ color: projects[0].accent }}
              >
                {letter.repeat(48)}
              </span>
            </div>
          ))}
        </div>

        <div
          data-reel="true"
          className="absolute top-1/2 z-10 flex w-max -translate-y-1/2 items-center gap-[5vw] pl-[4vw] motion-reduce:relative motion-reduce:top-auto motion-reduce:translate-y-0 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:w-full motion-reduce:px-[4vw]"
        >
          {projects.map((item, i) => (
            <div key={item.id} data-card="true">
              <button
                type="button"
                ref={(el) => {
                  cardRefs.current[i] = el
                }}
                onClick={() => setOpen(i)}
                aria-label={`${item.title}. Open details.`}
                className="group flex aspect-[16/10] h-[30vh] shrink-0 flex-col rounded-[24px] bg-white p-2 text-left transition-transform duration-500 ease-out hover:-translate-y-1.5 md:h-[42vh]"
              >
                <span className="relative block w-full grow overflow-hidden rounded-[16px] bg-sandstone">
                  <img
                    src={IMAGES[item.id]}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </span>
                <span className="flex shrink-0 items-center gap-2 px-1.5 pb-0.5 pt-2.5">
                  <span
                    className="h-[18px] w-[18px] shrink-0 rounded-full"
                    style={{ background: item.accent }}
                    aria-hidden="true"
                  />
                  <span className="t-micro min-w-0 truncate text-ink">{item.title}</span>
                </span>
              </button>
            </div>
          ))}
        </div>

        <p
          data-work-chip="true"
          className="t-micro absolute left-1/2 top-[calc(max(20px,env(safe-area-inset-top))+56px)] flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-full bg-white px-4 py-2 text-ink"
        >
          <span className="h-2 w-2 rounded-full bg-grass" aria-hidden="true" />
          The work
        </p>
      </div>

      {project && (
        <ProjectDialog
          project={project}
          image={IMAGES[project.id]}
          onClose={closeDialog}
          onPrev={() => setOpen((i) => (i - 1 + projects.length) % projects.length)}
          onNext={() => setOpen((i) => (i + 1) % projects.length)}
        />
      )}
    </section>
  )
}
