import { useEffect, useState } from 'react'
import { profile, workStack } from '../data/content'
import { ArrowIcon } from './Icons'

export default function Hero() {
  const full = profile.heroGreeting
  const [typed, setTyped] = useState('')

  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      i += 1
      setTyped(full.slice(0, i))
      if (i >= full.length) clearInterval(t)
    }, 90)
    return () => clearInterval(t)
  }, [full])

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="glow absolute inset-0" />
      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-6 pb-24 pt-40 md:min-h-screen md:pt-44">
        <p className="mb-5 font-mono text-sm text-[var(--color-accent-2)]">
          {'> '}
          {profile.role} · {profile.location}
        </p>

        <h1 className="font-mono text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
          <span className="gradient-text">{typed}</span>
          <span className="cursor text-[var(--color-accent)]">_</span>
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-[var(--color-ink)] md:text-2xl">{profile.heroTagline}</p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-muted)]">{profile.heroBlurb}</p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-all hover:gap-3 hover:bg-[var(--color-accent)]/90"
          >
            View my work
            <ArrowIcon width={18} height={18} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)]"
          >
            Download résumé
          </a>
        </div>

        <div className="mt-16">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">Work stack</p>
          <div className="flex flex-wrap gap-2">
            {workStack.map((t) => (
              <span
                key={t}
                className="rounded-md border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1.5 font-mono text-xs text-[var(--color-muted)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
