import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Al navegar a una ruta nueva (sin ancla), vuelve al inicio de la página. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}
