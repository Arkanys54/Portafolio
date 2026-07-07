import { KeyRound } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { CopyButton } from '@/components/ui/CopyButton'

/** Lista de credenciales de acceso (demo) de un proyecto. */
export function ProjectCredentials({ credentials }) {
  return (
    <section className="mt-10">
      <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-slate-800 dark:text-slate-100">
        <KeyRound className="size-5 text-accent" /> Credenciales de acceso (demo)
      </h2>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Usa cualquiera de estos usuarios para explorar los distintos roles.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {credentials.map((c) => (
          <Card key={c.email} className="p-4">
            <p className="text-sm font-semibold text-accent">{c.role}</p>
            <dl className="mt-2 space-y-1 text-sm">
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-slate-600 dark:text-slate-300">{c.email}</span>
                <CopyButton value={c.email} />
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-slate-600 dark:text-slate-300">{c.password}</span>
                <CopyButton value={c.password} />
              </div>
            </dl>
          </Card>
        ))}
      </div>
    </section>
  )
}
