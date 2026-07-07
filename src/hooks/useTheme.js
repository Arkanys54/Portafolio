import { useContext } from 'react'
import { ThemeContext } from '@/context/theme-context'

/** Acceso al tema actual y al toggle. Debe usarse dentro de <ThemeProvider>. */
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un ThemeProvider')
  }
  return context
}
