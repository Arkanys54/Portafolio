import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from '@/context/ThemeProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { Home } from '@/pages/Home'

// Carga diferida: la página de detalle se descarga solo al visitarla.
const ProjectDetail = lazy(() =>
  import('@/pages/ProjectDetail').then((m) => ({ default: m.ProjectDetail })),
)

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />

      {/* Accesibilidad: saltar directo al contenido */}
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main>
        <Suspense
          fallback={
            <div className="grid min-h-[60vh] place-items-center text-slate-400">Cargando…</div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyecto/:id" element={<ProjectDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </ThemeProvider>
  )
}

export default App
