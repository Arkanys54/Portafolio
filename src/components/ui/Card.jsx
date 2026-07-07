/** Contenedor con estilo de tarjeta, coherente en modo claro y oscuro. */
export function Card({ className = '', children, ...props }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur transition-all duration-300 dark:border-white/10 dark:bg-slate-900/60 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
