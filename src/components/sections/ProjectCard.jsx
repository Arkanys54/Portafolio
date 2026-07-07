import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { GithubIcon } from '@/components/icons/BrandIcons'
import { fadeInUp } from '@/utils/animations'

/**
 * Muestra un único proyecto (componente presentacional).
 * Toda la tarjeta (imagen incluida) navega al detalle mediante un <Link> que
 * la cubre; los botones de Demo/GitHub quedan por encima para no interferir,
 * y "Detalles" es su propio enlace.
 */
export function ProjectCard({ project }) {
  const { id, title, description, tech, demoUrl, repoUrl, screenshots } = project
  // Para la portada preferimos una captura horizontal (navegador); las
  // verticales del móvil se recortarían mal en el encabezado de la tarjeta.
  const cover = (screenshots?.find((shot) => shot.device !== 'phone') ?? screenshots?.[0])?.src
  const detailUrl = `/proyecto/${id}`

  return (
    <motion.article variants={fadeInUp} className="w-full max-w-sm">
      <Card className="group relative flex h-full flex-col overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20">
        {/* Enlace que cubre toda la tarjeta (por encima de imagen y texto) */}
        <Link
          to={detailUrl}
          aria-label={`Ver detalles de ${title}`}
          className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        />

        {/* Imagen de portada (o degradado si el proyecto aún no tiene capturas) */}
        {cover ? (
          <div className="h-44 shrink-0 overflow-hidden">
            <img
              src={cover}
              alt={`Vista previa de ${title}`}
              loading="lazy"
              className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="grid h-44 shrink-0 place-items-center bg-gradient-to-br from-primary to-accent">
            <span className="font-display text-2xl font-bold text-white/90">{title}</span>
          </div>
        )}

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-semibold text-slate-800 dark:text-slate-100">
            {title}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm text-slate-500 dark:text-slate-400">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>

          {/* Acciones ancladas abajo (mt-auto) y por encima del enlace (z-20) */}
          <div className="relative z-20 mt-auto flex flex-wrap items-center gap-3 pt-6">
            {demoUrl && (
              <Button
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs"
              >
                <ExternalLink className="size-4" /> Ver Demo
              </Button>
            )}
            {repoUrl && (
              <Button
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="px-4 py-2 text-xs"
              >
                <GithubIcon className="size-4" /> GitHub
              </Button>
            )}
            <Link
              to={detailUrl}
              className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-accent transition-colors hover:text-primary"
            >
              Detalles <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </Card>
    </motion.article>
  )
}
