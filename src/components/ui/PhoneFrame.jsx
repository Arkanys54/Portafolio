/**
 * Marco de teléfono para enmarcar capturas verticales (app móvil).
 * Recibe la imagen como `children` y la ajusta al área de pantalla (9:20).
 * Solo presentacional: no gestiona estado ni eventos.
 */
export function PhoneFrame({ children, className = '' }) {
  return (
    <div
      className={`relative shrink-0 rounded-[2rem] bg-slate-900 px-1.5 pb-1.5 pt-4 shadow-xl ring-1 ring-black/10 ${className}`}
    >
      {/* Altavoz superior */}
      <span className="absolute left-1/2 top-1.5 h-1 w-12 -translate-x-1/2 rounded-full bg-slate-600" />
      <div className="aspect-[9/20] h-[320px] overflow-hidden rounded-[1.5rem] bg-slate-800 sm:h-[380px]">
        {children}
      </div>
    </div>
  )
}
