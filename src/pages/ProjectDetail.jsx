import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Check, Info, Smartphone } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import { getProjectById } from '@/data/projects'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { GithubIcon } from '@/components/icons/BrandIcons'
import { ProjectCredentials } from '@/components/sections/ProjectCredentials'
import { ProjectScreenshots } from '@/components/sections/ProjectScreenshots'
import { fadeInUp, staggerContainer } from '@/utils/animations'

function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display text-2xl font-bold text-slate-800 dark:text-slate-100">
        Proyecto no encontrado
      </h1>
      <Link to="/#proyectos" className="mt-4">
        <Button variant="secondary">
          <ArrowLeft className="size-4" /> Volver a proyectos
        </Button>
      </Link>
    </section>
  )
}

export function ProjectDetail() {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) return <NotFound />

  const {
    title,
    category,
    year,
    role,
    longDescription,
    features,
    tech,
    demoUrl,
    repoUrl,
    apkUrl,
    credentials,
    screenshots,
    note,
    links,
  } = project

  return (
    <article className="mx-auto max-w-4xl px-4 pt-28 pb-20 sm:px-6">
      <Link
        to="/#proyectos"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-accent dark:text-slate-400"
      >
        <ArrowLeft className="size-4" /> Volver a proyectos
      </Link>

      {/* Cabecera */}
      <motion.header variants={staggerContainer} initial="hidden" animate="visible">
        <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3">
          <Badge>{category}</Badge>
          <span className="text-sm text-slate-400">{year}</span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="mt-4 bg-gradient-to-r from-accent to-success bg-clip-text pb-2 font-display text-4xl font-extrabold leading-tight text-transparent sm:text-5xl"
        >
          {title}
        </motion.h1>

        {role && (
          <motion.p variants={fadeInUp} className="mt-2 text-slate-500 dark:text-slate-400">
            {role}
          </motion.p>
        )}

        <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap gap-3">
          {demoUrl && (
            <Button href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="size-4" /> Ver Demo
            </Button>
          )}
          {repoUrl && (
            <Button href={repoUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
              <GithubIcon className="size-4" /> Código
            </Button>
          )}
          {links?.map((link) => (
            <Button
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <ExternalLink className="size-4" /> {link.label}
            </Button>
          ))}
        </motion.div>
      </motion.header>

      {/* Descarga de la app (APK + QR) */}
      {apkUrl && (
        <div className="mt-8 flex flex-col items-center gap-6 rounded-2xl border border-slate-200 bg-white/60 p-6 backdrop-blur sm:flex-row sm:justify-between dark:border-white/10 dark:bg-slate-900/50">
          <div className="text-center sm:text-left">
            <h2 className="font-display text-lg font-semibold text-slate-800 dark:text-slate-100">
              Prueba la app en tu Android
            </h2>
            <p className="mt-1 max-w-md text-sm text-slate-500 dark:text-slate-400">
              Descarga el APK o escanea el código QR desde tu móvil para instalarla.
            </p>
            <Button href={apkUrl} target="_blank" rel="noopener noreferrer" className="mt-4">
              <Smartphone className="size-4" /> Descargar APK
            </Button>
          </div>
          <div className="flex shrink-0 flex-col items-center gap-2">
            <div className="rounded-xl bg-white p-3 shadow-sm">
              <QRCodeSVG value={apkUrl} size={120} />
            </div>
            <span className="text-xs text-slate-400">Escanéalo con tu móvil</span>
          </div>
        </div>
      )}

      {/* Carrusel de capturas (visual principal del proyecto) */}
      <ProjectScreenshots screenshots={screenshots} />

      {/* Descripción */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-slate-800 dark:text-slate-100">
          Sobre el proyecto
        </h2>
        {longDescription.map((paragraph) => (
          <p key={paragraph} className="mt-3 text-justify text-slate-600 dark:text-slate-400">
            {paragraph}
          </p>
        ))}
      </section>

      {/* Nota (p. ej. demo que se duerme) */}
      {note && (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/10 p-4 text-sm text-slate-600 dark:text-slate-300">
          <Info className="mt-0.5 size-5 shrink-0 text-accent" />
          <p>{note}</p>
        </div>
      )}

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {/* Características */}
        <section>
          <h2 className="font-display text-xl font-semibold text-slate-800 dark:text-slate-100">
            Características
          </h2>
          <ul className="mt-4 space-y-2.5">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400"
              >
                <Check className="mt-0.5 size-5 shrink-0 text-success" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tecnologías */}
        <section>
          <h2 className="font-display text-xl font-semibold text-slate-800 dark:text-slate-100">
            Hecho con
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </section>
      </div>

      {credentials && credentials.length > 0 && <ProjectCredentials credentials={credentials} />}
    </article>
  )
}
