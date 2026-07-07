import { motion } from 'framer-motion'
import { Download, Rocket } from 'lucide-react'
import { personal } from '@/data/personal'
import { Button } from '@/components/ui/Button'
import { fadeInUp, staggerContainer } from '@/utils/animations'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 pb-16"
    >
      {/* Resplandor decorativo de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 size-[32rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
      />

      <motion.div
        className="mx-auto max-w-2xl text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          variants={fadeInUp}
          src={personal.photo}
          alt={`Foto de ${personal.name}`}
          width={176}
          height={176}
          className="mx-auto mb-8 size-44 rounded-full border-4 border-accent object-cover shadow-xl shadow-accent/30"
        />

        <motion.h1
          variants={fadeInUp}
          className="bg-gradient-to-r from-accent to-success bg-clip-text pb-1 font-display text-4xl font-extrabold leading-tight text-transparent sm:text-5xl"
        >
          Hola, soy {personal.shortName}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-4 text-lg font-medium text-slate-600 dark:text-slate-300"
        >
          {personal.tagline}
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-4 max-w-xl text-slate-500 dark:text-slate-400"
        >
          {personal.intro}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Button
            href={personal.resumeUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="size-4" /> Descargar CV
          </Button>
          <Button href="#proyectos" variant="secondary">
            <Rocket className="size-4" /> Ver Proyectos
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
