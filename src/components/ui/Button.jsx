const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60 disabled:pointer-events-none'

const variants = {
  primary:
    'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-accent/30 hover:-translate-y-0.5 hover:shadow-accent/50',
  secondary:
    'border-2 border-accent text-accent hover:bg-accent hover:text-white hover:-translate-y-0.5',
  ghost:
    'text-slate-600 hover:text-accent dark:text-slate-300 dark:hover:text-accent',
}

/**
 * Botón reutilizable. Se renderiza como <a> si recibe `href`, si no como <button>.
 * @param {'primary'|'secondary'|'ghost'} [variant]
 */
export function Button({ variant = 'primary', href, className = '', children, ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
