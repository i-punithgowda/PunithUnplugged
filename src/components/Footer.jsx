import { person } from '../data/content'

const footerLinks = [
  { href: '#work', label: 'Work' },
  { href: '#recognition', label: 'Awards' },
  { href: '#about', label: 'About' },
]

export default function Footer() {
  return (
    <footer
      aria-label="Footer"
      className="border-t border-cream/10 bg-night pb-[max(28px,env(safe-area-inset-bottom))] pt-10 text-cream"
      data-nav="dark"
    >
      <div className="wrap flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
        <p className="t-label">{person.name}</p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2" role="list">
          {footerLinks.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="u-link t-sm text-cream/85 hover:text-cream">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="t-micro tnum text-cream/55">
          © {new Date().getFullYear()} {person.name} · {person.location}
        </p>
      </div>
    </footer>
  )
}
