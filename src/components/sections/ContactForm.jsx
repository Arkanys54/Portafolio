import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { sendContactMessage } from '@/services/contactService'

const initialForm = { name: '', email: '', message: '' }

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition-colors placeholder:text-slate-400 focus:border-accent focus:outline-none dark:border-white/10 dark:bg-slate-900 dark:text-slate-200'

/**
 * Formulario de contacto controlado con validación básica.
 * El envío se delega en @/services/contactService (Web3Forms).
 */
export function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSending(true)
    setError(null)
    const { ok, error: sendError } = await sendContactMessage(form)
    setSending(false)
    if (ok) {
      setSent(true)
      setForm(initialForm)
      setTimeout(() => setSent(false), 5000)
    } else {
      setError(sendError ?? 'No se pudo enviar el mensaje.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-slate-600 dark:text-slate-300">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Tu nombre completo"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-slate-600 dark:text-slate-300">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-slate-600 dark:text-slate-300">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Escribe tu mensaje aquí..."
          className={`${inputClass} resize-y`}
        />
      </div>

      <Button type="submit" className="w-full" disabled={sending}>
        <Send className="size-4" /> {sending ? 'Enviando…' : 'Enviar Mensaje'}
      </Button>

      {sent && (
        <p role="status" className="flex items-center gap-2 text-sm font-medium text-success">
          <CheckCircle className="size-4" /> ¡Gracias por tu mensaje! Te contactaré pronto.
        </p>
      )}

      {error && (
        <p
          role="alert"
          className="flex items-center gap-2 text-sm font-medium text-red-500 dark:text-red-400"
        >
          <AlertCircle className="size-4" /> {error}
        </p>
      )}
    </form>
  )
}
