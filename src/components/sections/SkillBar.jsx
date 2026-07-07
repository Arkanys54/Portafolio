import { motion } from 'framer-motion'
import { TechIcon } from '@/components/icons/TechIcon'
import { fadeInUp } from '@/utils/animations'

/** Muestra una habilidad con su barra de progreso animada al entrar en vista. */
export function SkillBar({ skill }) {
  const { name, level, slug } = skill

  return (
    <motion.div variants={fadeInUp}>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          <TechIcon slug={slug} className="size-4 shrink-0" />
          {name}
        </span>
        <span className="text-xs text-slate-400">{level}%</span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Nivel de ${name}`}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-success"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}
