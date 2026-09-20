import { useMemo, useState } from 'react'
import { skills } from '../data/content'
import TechIcon, { hasTechIcon } from './TechIcon'

const MARQUEE = [
  'Claude',
  'Model Context Protocol',
  'LangChain',
  'Langflow',
  'Ollama',
  'Qdrant',
  'Python',
  'JavaScript',
  'TypeScript',
  'FastAPI',
  'Node.js',
  'Firebase',
  'Google Cloud',
  'Vercel',
  'React',
  'Next.js',
  'Vite',
  'Tailwind CSS',
  'GSAP',
  'Framer',
  'Three.js',
  'Flutter',
  'Git',
  'GitHub Actions',
  'Docker',
  'PostgreSQL',
  'MongoDB',
  'AWS',
  'Java',
  'HTML',
  'CSS3',
  'Express',
  'Flask',
  'Nginx',
  'Postman',
  'Redux',
  'Redis',
  'MySQL',
  'PHP',
  'GPT',
].filter(hasTechIcon)

function LogoMark({ name }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-ink">
      <TechIcon name={name} size={20} />
    </span>
  )
}

function Marquee({ names, reverse = false }) {
  const loop = [...names, ...names, ...names]
  return (
    <div className="overflow-hidden" aria-hidden="true">
      <div className={`${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} flex w-max items-center gap-3 py-1`}>
        {loop.map((name, i) => (
          <LogoMark key={`${name}-${i}`} name={name} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const [filter, setFilter] = useState('all')

  const visible = useMemo(() => {
    if (filter === 'all') return skills.items
    return skills.items.filter((s) => s.group === filter)
  }, [filter])

  return (
    <section
      id="skills"
      aria-label="Skills"
      className="relative scroll-mt-16 overflow-hidden pb-[clamp(88px,11vh,136px)] pt-6"
    >
      <Marquee names={MARQUEE} />

      <div className="wrap mt-14 text-center">
        <p className="t-micro flex items-center justify-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-sky" aria-hidden="true" />
          {skills.kicker}
        </p>
        <h2 className="t-heading mt-5">{skills.heading}</h2>
        <svg
          viewBox="0 0 240 26"
          fill="none"
          aria-hidden="true"
          preserveAspectRatio="none"
          className="mx-auto mt-3 h-[16px] w-[min(240px,48vw)]"
        >
          <path
            d="M6 16 C 26 4, 44 22, 64 13 C 84 4, 100 22, 120 13 C 140 4, 156 22, 176 13 C 196 4, 214 20, 234 11"
            stroke="var(--color-sky)"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div
        className="wrap mt-10 flex items-center gap-2 max-md:snap-x max-md:snap-mandatory max-md:flex-nowrap max-md:overflow-x-auto max-md:pb-1 md:flex-wrap md:justify-center"
        role="group"
        aria-label="Filter skills by discipline"
      >
        {skills.filters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={`t-label flex min-h-10 shrink-0 snap-start items-center gap-2 rounded-full px-4 transition-colors duration-300 ${
              filter === f.id ? 'bg-ink text-cream' : 'bg-white text-ink'
            }`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-full ${filter === f.id ? 'bg-cream' : f.color}`}
              aria-hidden="true"
            />
            {f.label}
          </button>
        ))}
      </div>

      <ul className="wrap mt-10 flex flex-wrap justify-center gap-2" role="list">
        {visible.map((item) => (
          <li
            key={item.name}
            className="flex min-h-11 items-center gap-2 rounded-full bg-white px-4 text-ink"
          >
            {hasTechIcon(item.name) && <TechIcon name={item.name} size={16} />}
            <span className="t-label">{item.name}</span>
          </li>
        ))}
      </ul>

      <div className="mt-16">
        <Marquee names={MARQUEE} reverse />
      </div>
    </section>
  )
}
