import { useEffect, useState } from 'react'
import { navItems, person } from '../data/content'

const NIGHT_SECTIONS = ['method', 'work', 'experience', 'contact']

export default function Header() {
  const [open, setOpen] = useState(false)
  const [onNight, setOnNight] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const nightNodes = NIGHT_SECTIONS.map((id) => document.getElementById(id)).filter(Boolean)
    const spyNodes = navItems
      .map((item) => ({
        href: item.href,
        el: document.getElementById(item.href.slice(1)),
      }))
      .filter((item) => item.el)

    const update = () => {
      const y = 88
      let current = ''
      for (const item of spyNodes) {
        if (item.el.getBoundingClientRect().top <= y) current = item.href
      }
      setActive(current)

      if (document.documentElement.dataset.dockLock) return
      const hit = nightNodes.some((el) => {
        const r = el.getBoundingClientRect()
        return r.top <= 40 && r.bottom > 40
      })
      setOnNight(hit)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('dockchange', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('dockchange', update)
    }
  }, [])

  useEffect(() => {
    if (document.documentElement.dataset.dockLock) return
    document.documentElement.style.setProperty('--dock-fg', onNight ? '#f5f1e4' : '#2c2e2a')
  }, [onNight])

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 transition-colors duration-500"
      style={{ color: 'var(--dock-fg, currentColor)' }}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="text-[15px] font-medium uppercase tracking-[0.14em]">
          {person.name}
        </a>

        <nav aria-label="Site" className="hidden md:block">
          <ul className="flex items-center gap-5 lg:gap-8" role="list">
            {navItems.map((item) => {
              const isActive = active === item.href
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`text-[12px] font-medium uppercase tracking-[0.1em] transition-opacity duration-300 lg:text-[13px] lg:tracking-[0.12em] ${
                      isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-11 w-11 items-center justify-center md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div
          id="site-menu"
          className="border-t border-ink/10 bg-cream text-ink md:hidden"
        >
          <ul className="wrap py-4" role="list">
            {navItems.map((item) => {
              const isActive = active === item.href
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`flex items-center gap-2.5 py-3 text-[15px] font-medium uppercase tracking-[0.12em] ${
                      isActive ? 'opacity-100' : 'opacity-55'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-grass" aria-hidden="true" />
                    )}
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
