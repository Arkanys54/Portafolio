import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

/** Botón para alternar entre modo claro y oscuro. */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
      className="grid size-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-accent hover:text-accent dark:border-white/10 dark:text-slate-300"
    >
      {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  )
}
