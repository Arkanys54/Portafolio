import { motion } from 'framer-motion'
import { skills } from '@/data/skills'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SkillBar } from './SkillBar'
import { staggerContainer, revealOnView } from '@/utils/animations'

export function Skills() {
  return (
    <section id="habilidades" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading subtitle="Tecnologías y herramientas con las que trabajo.">
        Habilidades Técnicas
      </SectionHeading>

      <Card className="p-6 sm:p-8">
        <motion.div
          className="grid gap-x-10 gap-y-6 sm:grid-cols-2"
          variants={staggerContainer}
          {...revealOnView}
        >
          {skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </Card>
    </section>
  )
}
