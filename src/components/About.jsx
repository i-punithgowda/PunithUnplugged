import profilePicture from '../assets/profile_picture.jpeg'
import { about } from '../data/content'

export default function About() {
  return (
    <section id="about" aria-label="About" className="band scroll-mt-16">
      <div className="wrap grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="t-micro flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-coral" aria-hidden="true" />
            {about.kicker}
          </p>
          <h2 className="t-heading mt-5 max-w-[22ch]">{about.heading}</h2>

          <ul className="mt-12 space-y-8" role="list">
            {about.timeline.map((row) => (
              <li key={row.title} className="grid gap-1 border-t border-ink/10 pt-6 sm:grid-cols-[1.2fr_1fr]">
                <div>
                  <p className="font-medium">{row.title}</p>
                  <p className="t-sm text-stone">{row.place}</p>
                </div>
                <p className="t-sm text-stone sm:text-right">{row.meta}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-[28px] bg-sandstone">
            <img src={profilePicture} alt="Punith Gowda" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="rounded-[28px] bg-white p-7">
            <p className="t-micro text-stone">{about.offer.title}</p>
            <p className="mt-3 text-[1.05rem] font-medium tracking-tight">{about.offer.copy}</p>
            <ul className="mt-5 space-y-2">
              {about.offer.items.map((item) => (
                <li key={item} className="flex items-center gap-2 t-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="pill mt-6 bg-ink text-cream">
              Start a project
              <span className="h-2 w-2 rounded-full bg-coral" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
