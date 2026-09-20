import worldMap from '../assets/world-map.svg?raw'
import { reach } from '../data/content'

const VIEW = '30.767 241.591 784.077 458.627'

const MARKS = [
  {
    id: 'ae',
    name: 'UAE',
    x: 533.82,
    y: 467.26,
    left: '64.16%',
    top: '46.2%',
    className: '-translate-x-full -translate-y-full pr-2',
  },
  {
    id: 'in',
    name: 'India',
    x: 600.09,
    y: 465.69,
    left: '72.61%',
    top: '43.8%',
    className: '-translate-x-1/2 -translate-y-full',
  },
  {
    id: 'th',
    name: 'Thailand',
    x: 649.91,
    y: 492.32,
    left: '79.1%',
    top: '56.4%',
    className: 'translate-x-1.5 -translate-y-1/2',
  },
]

export default function Places() {
  return (
    <section
      id="places"
      aria-label="The work commutes"
      className="band scroll-mt-16 bg-night text-cream"
    >
      <div className="wrap">
        <p className="t-micro flex items-center gap-2.5 text-fog">
          <span className="h-2 w-2 rounded-full bg-coral" aria-hidden="true" />
          {reach.kicker}
        </p>
        <h2 className="t-heading mt-5 max-w-[20ch]">{reach.heading}</h2>
      </div>

      <figure className="wrap mt-14">
        <div className="overflow-hidden rounded-[28px] bg-[#161814] px-2 py-6 sm:px-6 sm:py-10">
          <div className="relative">
            <div
              className="places-map"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: worldMap }}
            />
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox={VIEW}
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              {MARKS.map((mark) => (
                <g key={mark.id}>
                  <circle cx={mark.x} cy={mark.y} r="11" fill="#ff8a3c" fillOpacity="0.22" />
                  <circle cx={mark.x} cy={mark.y} r="4.8" fill="#ff8a3c" />
                  <circle cx={mark.x} cy={mark.y} r="1.7" fill="#f5f1e4" />
                </g>
              ))}
            </svg>
            {MARKS.map((mark) => (
              <span
                key={mark.id}
                className={`pointer-events-none absolute text-[11px] font-medium tracking-[0.04em] text-cream sm:text-[13px] ${mark.className}`}
                style={{ left: mark.left, top: mark.top }}
              >
                {mark.name}
              </span>
            ))}
          </div>
        </div>
        <figcaption className="sr-only">
          World map with India, the United Arab Emirates, and Thailand marked.
        </figcaption>
      </figure>

      <ol className="wrap mt-12 grid gap-6 sm:grid-cols-3" role="list">
        {reach.places.map((place, i) => (
          <li key={place.name} className="border-t border-cream/15 pt-5">
            <p className="t-micro tnum text-fog">{String(i + 1).padStart(2, '0')}</p>
            <p className="mt-2 font-medium">{place.name}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
