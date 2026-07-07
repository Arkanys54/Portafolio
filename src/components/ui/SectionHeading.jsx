import { motion } from 'framer-motion'
import { fadeInUp, revealOnView } from '@/utils/animations'

/** Título de sección centrado, con degradado y animación al entrar en vista. */
export function SectionHeading({ children, subtitle }) {
  return (
    <motion.div className="mb-12 text-center" variants={fadeInUp} {...revealOnView}>
      <h2 className="bg-gradient-to-r from-accent to-success bg-clip-text pb-1 font-display text-3xl font-bold leading-tight text-transparent sm:text-4xl">
        {children}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-slate-500 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
