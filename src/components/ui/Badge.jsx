/** Etiqueta pequeña para tecnologías o habilidades blandas. */
export function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent ${className}`}
    >
      {children}
    </span>
  )
}
