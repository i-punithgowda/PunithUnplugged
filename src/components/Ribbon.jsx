import { useEffect, useRef } from 'react'

const COPY = 'AI · DEVELOPMENT · PROBLEM SOLVING · SYSTEMS · REALTIME · PERFORMANCE · BENGALURU · '

export default function Ribbon() {
  const rootRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    const text = textRef.current
    if (!root || !text) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const onScroll = () => {
      const rect = root.getBoundingClientRect()
      const start = window.innerHeight
      const end = -rect.height
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)))
      const offset = -14 + progress * 30
      text.setAttribute('startOffset', `${offset}%`)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div ref={rootRef} aria-hidden="true" className="pointer-events-none relative z-20 -mt-[clamp(28px,4vw,52px)] -mb-[clamp(36px,5vw,64px)] overflow-hidden">
      <svg viewBox="0 0 1440 330" className="block w-[130%] -translate-x-[12%]" fill="none">
        <path
          id="fact-ribbon"
          d="M -80 240 C 260 90 640 310 940 185 S 1360 80 1520 165"
          stroke="var(--color-sun)"
          strokeWidth="92"
          strokeLinecap="round"
        />
        <text style={{ fontSize: 29, fontWeight: 500, letterSpacing: '0.1em', fill: 'var(--color-coral)' }}>
          <textPath ref={textRef} href="#fact-ribbon" startOffset="-14%">
            {COPY.repeat(4)}
          </textPath>
        </text>
      </svg>
    </div>
  )
}
