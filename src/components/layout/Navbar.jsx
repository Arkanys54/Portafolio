import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/navLinks'
import { personal } from '@/data/personal'
import { useActiveSection } from '@/hooks/useActiveSection'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const sectionIds = navLinks.map((link) => link.id)

export function Navbar() {
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleNav = (id) => {
    setOpen(false)
    if (onHome) {
      scrollToSection(id)
    } else {
      // Ir al inicio y luego desplazarse a la sección una vez montada.
      navigate('/')
      setTimeout(() => scrollToSection(id), 80)
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/80">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
        aria-label="Navegación principal"
      >
        <Link
          to="/"
          className="bg-gradient-to-r from-accent to-success bg-clip-text font-display text-lg font-bold text-transparent"
        >
          {personal.shortName}
          <span className="text-slate-400"> | Developer</span>
        </Link>

        {/* Menú de escritorio */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleNav(link.id)}
                aria-current={onHome && activeId === link.id ? 'true' : undefined}
                className={`relative text-sm font-medium transition-colors hover:text-accent ${
                  onHome && activeId === link.id
                    ? 'text-accent'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full border border-slate-200 text-slate-600 md:hidden dark:border-white/10 dark:text-slate-300"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-slate-200/70 bg-white px-4 py-3 md:hidden dark:border-white/10 dark:bg-slate-950">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleNav(link.id)}
                className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-600 transition-colors hover:bg-accent/10 hover:text-accent dark:text-slate-300"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
