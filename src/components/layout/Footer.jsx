import { personal } from '@/data/personal'
import { socials } from '@/data/socials'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200/70 bg-white py-10 dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <ul className="mb-6 flex justify-center gap-4">
          {socials.map(({ id, label, href, icon: Icon }) => (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-slate-200 text-slate-500 transition-all hover:-translate-y-1 hover:border-accent hover:text-accent dark:border-white/10 dark:text-slate-400"
              >
                <Icon className="size-5" />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} — Portafolio de {personal.name}. Todos los derechos reservados.
        </p>
        <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
          Hecho con React, Tailwind CSS y 💙
        </p>
      </div>
    </footer>
  )
}
