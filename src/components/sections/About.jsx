import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { personal } from '@/data/personal'
import { softSkills } from '@/data/skills'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeInUp, revealOnView } from '@/utils/animations'

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading>Sobre Mí</SectionHeading>

      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div variants={fadeInUp} {...revealOnView}>
          <Card className="p-6 sm:p-8">
            {personal.about.map((paragraph, index) => (
              <p
                key={index}
                className="mb-4 text-justify text-slate-600 last:mb-0 dark:text-slate-400"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-6 flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          {...revealOnView}
          className="flex justify-center"
        >
          <div className="grid size-64 place-items-center rounded-3xl bg-gradient-to-br from-primary to-accent shadow-2xl shadow-accent/30">
            <Code2 className="size-24 text-white" strokeWidth={1.25} aria-hidden="true" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
