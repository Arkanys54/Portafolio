import { useState } from 'react'
import { Check } from 'lucide-react'

/**
 * Un método de contacto (email, LinkedIn, GitHub…). Responsabilidad única:
 * renderizar el enlace con su comportamiento correcto según el tipo.
 * - Enlaces web (http): abren en una pestaña nueva.
 * - mailto/tel: navegan en la misma pestaña (evita la pestaña en blanco) y,
 *   al hacer clic, copian el valor al portapapeles con un aviso "¡Copiado!".
 */
export function ContactMethod({ label, handle, href, icon: Icon }) {
  const [copied, setCopied] = useState(false)
  const isExternal = href.startsWith('http')
  const isCopyable = href.startsWith('mailto:') || href.startsWith('tel:')

  const handleClick = () => {
    if (!isCopyable) return
    const value = href.replace(/^(mailto:|tel:)/, '')
    navigator.clipboard
      ?.writeText(value)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch(() => {})
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex items-center gap-4"
    >
      <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white transition-transform group-hover:scale-105">
        <Icon className="size-5" />
      </span>
      <span>
        <span className="block text-xs text-slate-400">{label}</span>
        <span className="flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-accent dark:text-slate-200">
          {handle}
          {copied && (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-success">
              <Check className="size-3.5" /> ¡Copiado!
            </span>
          )}
        </span>
      </span>
    </a>
  )
}
