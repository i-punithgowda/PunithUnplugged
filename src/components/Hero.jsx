import { crafts, person } from '../data/content'
import CraftCard from './CraftCard'

const DECK = [...crafts, ...crafts, ...crafts]

export default function Hero() {
  const step = 360 / DECK.length

  return (
    <section
      id="top"
      aria-label="Intro"
      className="sticky top-0 z-0 flex min-h-[100lvh] flex-col overflow-hidden bg-grass"
    >
      <div className="flex w-full grow flex-col">
        <div className="wrap flex grow flex-col items-center justify-center pb-6 pt-20 text-center">
          <h1 className="font-display whitespace-nowrap text-[clamp(2.4rem,11vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.05em]">
            Punith Gowda
          </h1>
          <p className="font-display mt-6 text-[clamp(1.25rem,2.8vw,1.75rem)] font-medium italic leading-tight tracking-wide text-ink/70">
            {person.role}
          </p>
          <p className="t-micro mt-3 text-ink/55">{person.micro}</p>
        </div>

        <div className="shrink-0">
          <div className="deck" aria-hidden="true">
            <div className="deck-stage">
              <div className="deck-ring">
                {DECK.map((craft, i) => (
                  <figure
                    key={`${craft.title}-${i}`}
                    className="deck-card"
                    style={{ '--a': `${i * step}deg` }}
                  >
                    <CraftCard craft={craft} />
                  </figure>
                ))}
              </div>
            </div>
            <div className="deck-veil" />
          </div>
        </div>

        <div aria-hidden="true" className="min-h-[clamp(72px,min(10vw,14vh),124px)] shrink-0 grow-[0.5]" />
      </div>
    </section>
  )
}
