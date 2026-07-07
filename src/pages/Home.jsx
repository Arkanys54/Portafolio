import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'

/**
 * Página principal del portafolio: compone las secciones en orden.
 * Cuando agregues más páginas (blog, detalle de proyecto, etc.) crea
 * nuevos archivos en esta carpeta y enrútalos desde App.
 */
export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </>
  )
}
