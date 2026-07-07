import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from './ProjectCard'
import { staggerContainer, revealOnView } from '@/utils/animations'

export function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading subtitle="Algunos de los proyectos en los que he trabajado.">
        Portafolio de Proyectos
      </SectionHeading>

      <motion.div
        className="flex flex-wrap justify-center gap-6"
        variants={staggerContainer}
        {...revealOnView}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  )
}
