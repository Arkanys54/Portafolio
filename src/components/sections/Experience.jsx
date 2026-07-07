import { motion } from 'framer-motion'
import { experience } from '@/data/experience'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { fadeInUp, staggerContainer, revealOnView } from '@/utils/animations'

export function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <SectionHeading>Experiencia y Formación</SectionHeading>

      <motion.ol
        className="relative border-s border-accent/30 ps-6"
        variants={staggerContainer}
        {...revealOnView}
      >
        {experience.map((item) => (
          <motion.li key={item.id} variants={fadeInUp} className="mb-8 last:mb-0">
            <span
              className="absolute -start-[7px] mt-1.5 size-3 rounded-full bg-accent ring-4 ring-white dark:ring-slate-950"
              aria-hidden="true"
            />
            <Card className="p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display font-semibold text-accent">
                  {item.title}
                </h3>
                <span className="text-xs text-slate-400">{item.period}</span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-slate-500 dark:text-slate-400">
                {item.place}
              </p>
              <p className="mt-2 text-justify text-sm text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </Card>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  )
}
