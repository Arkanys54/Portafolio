import { useEffect, useRef, useState } from 'react'
import { Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { Lightbox } from '@/components/ui/Lightbox'
import { PhoneFrame } from '@/components/ui/PhoneFrame'
import { BrowserFrame } from '@/components/ui/BrowserFrame'

const AUTOPLAY_MS = 3500

/** Carrusel de capturas tipo Play Store: desplazable, auto-avance y bucle. */
export function ProjectScreenshots({ screenshots }) {
  const trackRef = useRef(null)
  const paused = useRef(false)
  const [lightbox, setLightbox] = useState(-1) // -1 = cerrado

  const step = (dir) => {
    const el = trackRef.current
    if (!el) return
    const slide = el.querySelector('[data-slide]')
    const amount = slide ? slide.offsetWidth + 16 : el.clientWidth
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8
    const atStart = el.scrollLeft <= 8

    if (dir > 0 && atEnd) {
      el.scrollTo({ left: 0, behavior: 'smooth' }) // bucle: vuelve al inicio
    } else if (dir < 0 && atStart) {
      el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' })
    } else {
      el.scrollBy({ left: amount * dir, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (!screenshots?.length) return
    const id = setInterval(() => {
      if (!paused.current) step(1)
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [screenshots])

  const openLightbox = (i) => {
    paused.current = true
    setLightbox(i)
  }
  const closeLightbox = () => {
    paused.current = false
    setLightbox(-1)
  }

  const hasShots = screenshots && screenshots.length > 0

  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-semibold text-slate-800 dark:text-slate-100">
        Capturas de pantalla
      </h2>

      {hasShots ? (
        <>
          <div
            className="group relative mt-4"
            onMouseEnter={() => (paused.current = true)}
            onMouseLeave={() => (paused.current = false)}
          >
            <div
              ref={trackRef}
              className="no-scrollbar flex snap-x snap-mandatory items-end gap-6 overflow-x-auto scroll-smooth px-1 pb-2"
            >
              {screenshots.map((shot, i) => {
                const Frame = shot.device === 'phone' ? PhoneFrame : BrowserFrame
                return (
                  <button
                    key={shot.src}
                    type="button"
                    data-slide
                    onClick={() => openLightbox(i)}
                    aria-label={`Ampliar: ${shot.alt}`}
                    className="shrink-0 snap-center rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    <Frame>
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        loading="lazy"
                        className="size-full cursor-zoom-in object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </Frame>
                  </button>
                )
              })}
            </div>

            {/* Flechas de navegación */}
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Captura anterior"
              className="absolute left-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-700 opacity-0 shadow-md transition-opacity hover:text-accent focus-visible:opacity-100 group-hover:opacity-100 dark:bg-slate-800/90 dark:text-slate-200"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Captura siguiente"
              className="absolute right-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-700 opacity-0 shadow-md transition-opacity hover:text-accent focus-visible:opacity-100 group-hover:opacity-100 dark:bg-slate-800/90 dark:text-slate-200"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          <p className="mt-2 text-center text-xs text-slate-400">
            Haz clic en una imagen para verla en pantalla completa
          </p>
        </>
      ) : (
        <div className="mt-4 grid h-40 place-items-center rounded-xl border border-dashed border-slate-300 text-slate-400 dark:border-white/10">
          <span className="flex items-center gap-2 text-sm">
            <ImageIcon className="size-5" /> Capturas próximamente
          </span>
        </div>
      )}

      {lightbox >= 0 && (
        <Lightbox
          images={screenshots}
          index={lightbox}
          onIndexChange={setLightbox}
          onClose={closeLightbox}
        />
      )}
    </section>
  )
}
