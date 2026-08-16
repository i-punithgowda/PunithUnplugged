import { getYearsExperience, intro } from '../data/content'

function Scribble({ color }) {
  return (
    <svg
      viewBox="0 0 220 150"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute -left-[16%] -top-[13%] h-[128%] w-[132%]"
    >
      <path
        d="M 30 96 C 12 62, 44 22, 106 16 C 168 10, 208 40, 206 74 C 204 110, 156 136, 100 134 C 52 132, 22 114, 26 88 C 29 70, 44 58, 62 54"
        fill="none"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function InfinityMark() {
  return (
    <svg
      viewBox="1 6 22 12"
      aria-hidden="true"
      className="h-[0.58em] w-[1.72em]"
      fill="none"
    >
      <path
        d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"
        stroke="currentColor"
        strokeWidth="2.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Intro() {
  return (
    <section aria-label="Introduction" className="band relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-16 hidden h-56 w-56 animate-drift md:block">
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <path
            fill="var(--color-grass)"
            d="M48 96 C 44 48 92 20 132 36 C 174 53 184 104 160 144 C 135 184 72 184 52 148 C 40 127 50 118 48 96 Z"
          />
        </svg>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute -right-10 bottom-24 h-20 w-20 animate-drift md:h-24 md:w-24">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle cx="50" cy="50" r="46" fill="var(--color-sky)" />
        </svg>
      </div>

      <div className="wrap">
        <p className="t-micro flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-live rounded-full bg-grass" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-grass" />
          </span>
          {intro.kicker}
        </p>

        <h2 className="t-heading mt-8 max-w-[24ch]">{intro.heading}</h2>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#work" className="pill bg-grass text-ink">
            See the work
            <span className="h-2 w-2 rounded-full bg-ink" aria-hidden="true" />
          </a>
          <a href="#method" className="pill pillow rounded-full">
            How I ship
            <span className="h-2 w-2 rounded-full bg-coral" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-20 flex flex-col gap-y-14 sm:flex-row sm:items-start sm:gap-x-14 lg:gap-x-20">
          {intro.stats.map((stat) => {
            const value =
              stat.id === 'years'
                ? getYearsExperience()
                : stat.display ?? String(stat.value).padStart(2, '0')
            return (
            <div key={stat.label} className="w-fit max-w-full">
              <span className="relative inline-block px-[0.14em]">
                <Scribble color={stat.ring} />
                <span className="t-display tnum relative flex min-w-[2.2ch] items-center justify-center leading-none">
                  {stat.id === 'problems' ? <InfinityMark /> : `${value}${stat.suffix}`}
                </span>
              </span>
              <span className="t-sm mt-4 block w-0 min-w-full text-stone">{stat.label}</span>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
