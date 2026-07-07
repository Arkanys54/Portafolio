import { motion } from 'framer-motion'
import { socials } from '@/data/socials'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from './ContactForm'
import { ContactMethod } from './ContactMethod'
import { fadeInUp, revealOnView } from '@/utils/animations'

export function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading subtitle="¿Tienes un proyecto en mente? Hablemos.">
        Contacto
      </SectionHeading>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div variants={fadeInUp} {...revealOnView}>
          <Card className="p-6 sm:p-8">
            <ContactForm />
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp} {...revealOnView}>
          <Card className="flex h-full flex-col justify-center gap-5 p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-slate-800 dark:text-slate-100">
              Información de contacto
            </h3>
            {socials.map((social) => (
              <ContactMethod key={social.id} {...social} />
            ))}
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
