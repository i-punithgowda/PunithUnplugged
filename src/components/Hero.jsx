import { getYearsExperience, hero, person } from '../data/content'
import profilePicture from '../assets/profile_picture.jpeg'

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Intro"
      className="hero-band relative flex min-h-[100lvh] flex-col overflow-hidden text-cream"
    >
      <p
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 z-0 select-none text-center font-display font-extrabold uppercase leading-[0.88] tracking-[-0.05em] text-cream/[0.11] max-lg:bottom-[8%] max-lg:top-auto max-lg:text-[clamp(3.2rem,18vw,5.5rem)] lg:top-[46%] lg:left-1/2 lg:w-full lg:-translate-x-1/2 lg:-translate-y-1/2 lg:text-[clamp(4.5rem,18vw,14rem)] lg:text-cream/[0.1]"
      >
        {hero.watermark.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>

      <div className="relative z-10 mx-auto flex w-full max-w-[100vw] flex-1 flex-col gap-14 px-[clamp(20px,4vw,48px)] pb-16 pt-28 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:pb-28 lg:pt-24">
        <div className="w-full max-w-xl shrink-0 lg:max-w-[32rem]">
          <p className="t-micro tracking-[0.18em] text-cream/75">{hero.kicker}</p>

          <h1 className="font-display mt-5 text-[clamp(3.4rem,12vw,7.25rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.05em]">
            <span className="block text-cream">{person.firstName}</span>
            <span className="hero-name-soft block">{person.lastName}</span>
          </h1>

          <p className="mt-7 max-w-[36ch] text-[clamp(1rem,2vw,1.2rem)] leading-relaxed text-cream/90">
            {hero.line}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={hero.primaryCta.href} className="pill bg-cream text-ink">
              {hero.primaryCta.label}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </a>
            <a
              href={hero.secondaryCta.href}
              className="pill border border-cream/55 bg-transparent text-cream hover:bg-cream/10"
            >
              {hero.secondaryCta.label}
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[540px] shrink-0 flex-col items-center gap-8 lg:mx-0 lg:w-auto lg:max-w-none lg:flex-row lg:items-center lg:justify-end lg:gap-6">
          <div className="hero-blob relative aspect-[4/5] w-[min(100%,280px)] shrink-0 overflow-hidden bg-night/35 sm:w-[min(100%,340px)] lg:w-[min(100%,440px)]">
            <img
              src={profilePicture}
              alt={person.name}
              className="h-full w-full object-cover object-[center_18%]"
            />
          </div>

          <ul
            className="flex w-full max-w-[340px] shrink-0 flex-row justify-between gap-3 sm:max-w-[400px] lg:w-auto lg:max-w-none lg:flex-col lg:justify-start lg:gap-9"
            role="list"
          >
            {hero.stats.map((stat) => {
              const value =
                stat.id === 'years' ? getYearsExperience() : stat.value
              return (
                <li key={stat.id} className="min-w-0 text-center lg:min-w-[5.5rem] lg:text-left">
                  <p className="font-display text-[clamp(1.5rem,6vw,2.6rem)] font-extrabold leading-none tracking-[-0.04em]">
                    {value}
                    {stat.suffix}
                  </p>
                  <p className="t-micro mt-2 tracking-[0.12em] text-cream/70">{stat.label}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <a
        href="#work"
        className="t-micro absolute bottom-[max(88px,env(safe-area-inset-bottom))] left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/70 transition-opacity hover:opacity-100 lg:flex"
      >
        Scroll
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>

      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -mb-px block h-[clamp(40px,6vw,90px)] w-full"
      >
        <path
          d="M0 90 L0 52 C 120 12 240 12 360 44 C 480 76 600 76 720 44 C 840 12 960 12 1080 44 C 1200 76 1320 76 1440 48 L1440 90 Z"
          fill="var(--color-night)"
        />
      </svg>
    </section>
  )
}
