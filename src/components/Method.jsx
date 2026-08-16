import { useEffect, useRef } from 'react'
import { method } from '../data/content'

const ROAD =
  'M90 140 C 190 140 230 380 330 380 S 500 140 600 140 S 770 380 870 380 S 1010 140 1110 140'

const STATIONS = [
  { left: '7.5%', top: '26.92%' },
  { left: '27.5%', top: '73.08%' },
  { left: '50%', top: '26.92%' },
  { left: '72.5%', top: '73.08%' },
  { left: '92.5%', top: '26.92%' },
]

export default function Method() {
  const rootRef = useRef(null)
  const roadRef = useRef(null)
  const travellerRef = useRef(null)

  useEffect(() => {
    const path = roadRef.current
    if (!path) return
    const length = path.getTotalLength()
    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = `${length}`

    const onScroll = () => {
      const root = rootRef.current
      if (!root) return
      const rect = root.getBoundingClientRect()
      const total = root.offsetHeight - window.innerHeight
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(total, 1)))
      path.style.strokeDashoffset = `${length * (1 - progress)}`

      if (travellerRef.current) {
        const pt = path.getPointAtLength(length * progress)
        travellerRef.current.setAttribute('transform', `translate(${pt.x} ${pt.y})`)
        travellerRef.current.setAttribute('opacity', progress > 0.02 && progress < 0.98 ? '1' : '0')
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="method"
      ref={rootRef}
      aria-label="How I build"
      className="relative h-[200vh] scroll-mt-16 bg-night text-cream motion-reduce:h-auto"
    >
      <div className="sticky top-0 flex h-[100lvh] flex-col justify-center overflow-hidden pt-[clamp(56px,8vh,90px)] motion-reduce:static motion-reduce:h-auto motion-reduce:py-24">
        <div className="wrap w-full">
          <p className="t-micro flex items-center gap-2.5 text-fog">
            <span className="h-2 w-2 rounded-full bg-grass" aria-hidden="true" />
            {method.kicker}
          </p>
          <h2 className="t-heading-lg mt-5 max-w-[20ch]">{method.heading}</h2>
        </div>

        <div className="wrap w-full">
          <div className="relative mt-6 h-[clamp(220px,34vh,380px)] w-full">
            <svg viewBox="0 0 1200 520" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 h-full w-full" fill="none">
              <path d={ROAD} stroke="var(--color-night-soft)" strokeWidth="10" strokeLinecap="round" />
              <path ref={roadRef} d={ROAD} stroke="var(--color-grass)" strokeWidth="10" strokeLinecap="round" />
              <g ref={travellerRef} opacity="0">
                <path d="M0 -0.01 L0 0.01" stroke="var(--color-white)" strokeWidth="24" strokeLinecap="round" />
                <path d="M0 -0.01 L0 0.01" stroke="var(--color-grass)" strokeWidth="11" strokeLinecap="round" />
              </g>
            </svg>

            <ol role="list" aria-label="Delivery loop">
              {method.steps.map((step, i) => (
                <li
                  key={step.n}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-2.5 py-1.5 text-center text-ink sm:px-5 sm:py-2.5"
                  style={STATIONS[i]}
                >
                  <span className="block whitespace-nowrap text-[12px] font-medium sm:text-[15px]">
                    {step.n} · {step.title}
                  </span>
                  <span className="t-micro block whitespace-nowrap text-stone max-lg:hidden">{step.detail}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
