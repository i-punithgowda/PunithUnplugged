import { person } from '../data/content'

const footerLinks = [
  { href: '#work', label: 'Work' },
  { href: '#recognition', label: 'Awards' },
  { href: '#about', label: 'About' },
]

export default function Footer() {
  return (
    <footer aria-label="Footer" className="bg-night">
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="-mb-px block h-[clamp(40px,6vw,90px)] w-full"
      >
        <path
          d="M0 90 V56 Q30 18 66 44 Q96 62 132 38 Q168 12 208 40 Q244 64 284 38 Q320 10 360 36 Q398 60 440 34 Q478 10 520 38 Q556 62 600 36 Q640 8 684 38 Q720 62 760 36 Q800 10 844 40 Q880 64 920 38 Q958 12 1000 40 Q1040 64 1080 36 Q1118 10 1160 40 Q1200 62 1240 36 Q1280 10 1324 40 Q1360 62 1400 40 Q1420 30 1440 44 V90 Z"
          fill="var(--color-sun)"
        />
      </svg>
      <div className="bg-sun pb-[max(28px,env(safe-area-inset-bottom))] pt-10 text-ink">
        <div className="wrap flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
          <p className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-white">
              <span className="h-4 w-4 rounded-full bg-grass" aria-hidden="true" />
            </span>
            <span className="t-label">{person.name}</span>
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2" role="list">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="u-link t-sm">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="t-micro tnum text-ink/70">
            © {new Date().getFullYear()} {person.name} · {person.location}
          </p>
        </div>
      </div>
    </footer>
  )
}
