import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Visor de imágenes a pantalla completa (primer plano).
 * @param {{ images: {src,alt}[], index: number, onIndexChange: fn, onClose: fn }} props
 */
export function Lightbox({ images, index, onIndexChange, onClose }) {
  const total = images.length
  const move = (dir) => onIndexChange((index + dir + total) % total)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') move(1)
      else if (e.key === 'ArrowLeft') move(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden' // bloquea el scroll de fondo
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, total])

  const current = images[index]
  const arrow = (dir) => (e) => {
    e.stopPropagation()
    move(dir)
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Vista de imagen a pantalla completa"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X className="size-6" />
      </button>

      {total > 1 && (
        <button
          type="button"
          onClick={arrow(-1)}
          aria-label="Imagen anterior"
          className="absolute left-3 grid size-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
        >
          <ChevronLeft className="size-6" />
        </button>
      )}

      <img
        src={current.src}
        alt={current.alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
      />

      {total > 1 && (
        <button
          type="button"
          onClick={arrow(1)}
          aria-label="Imagen siguiente"
          className="absolute right-3 grid size-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
        >
          <ChevronRight className="size-6" />
        </button>
      )}

      {total > 1 && (
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white/80">
          {index + 1} / {total}
        </span>
      )}
    </div>
  )
}
