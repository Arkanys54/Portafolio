import { useState } from 'react'
import { Copy, CheckCheck } from 'lucide-react'

/** Botón para copiar un texto al portapapeles, con feedback visual. */
export function CopyButton({ value, className = '' }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard no disponible */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copiar ${value}`}
      className={`text-slate-400 transition-colors hover:text-accent ${className}`}
    >
      {copied ? <CheckCheck className="size-4 text-success" /> : <Copy className="size-4" />}
    </button>
  )
}
