/**
 * Marco de navegador para enmarcar capturas web (panel de administración,
 * plataformas). Recibe la imagen como `children` y la ajusta al área de
 * contenido (2:1). Solo presentacional: no gestiona estado ni eventos.
 */
export function BrowserFrame({ children, className = '' }) {
  return (
    <div
      className={`shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg dark:border-white/10 dark:bg-slate-800 ${className}`}
    >
      {/* Barra del navegador */}
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-100 px-3 py-2 dark:border-white/10 dark:bg-slate-900">
        <span className="size-2.5 rounded-full bg-red-400" />
        <span className="size-2.5 rounded-full bg-amber-400" />
        <span className="size-2.5 rounded-full bg-green-400" />
        <span className="ml-2 hidden h-4 flex-1 rounded bg-white sm:block dark:bg-slate-700" />
      </div>
      <div className="aspect-[2/1] h-[240px] overflow-hidden sm:h-[280px]">{children}</div>
    </div>
  )
}
