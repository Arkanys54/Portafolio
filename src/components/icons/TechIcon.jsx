import {
  siJavascript,
  siReact,
  siHtml5,
  siCss,
  siPhp,
  siLaravel,
  siDotnet,
  siMysql,
  siGit,
} from 'simple-icons'

/** Logos de marca (simple-icons) indexados por slug. */
const registry = {
  javascript: siJavascript,
  react: siReact,
  reactnative: siReact, // React Native usa el mismo logo de React
  html5: siHtml5,
  css3: siCss,
  php: siPhp,
  laravel: siLaravel,
  dotnet: siDotnet,
  mysql: siMysql,
  git: siGit,
}

/** C# no está en simple-icons (retirado por marca), así que lo dibujamos. */
function CsharpIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#512BD4" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="10.5"
        fontWeight="700"
        fill="#ffffff"
      >
        C#
      </text>
    </svg>
  )
}

/**
 * Icono de una tecnología, renderizado con su color de marca.
 * @param {{ slug: string, className?: string }} props
 */
export function TechIcon({ slug, className = '' }) {
  if (slug === 'csharp') return <CsharpIcon className={className} />

  const icon = registry[slug]
  if (!icon) return null

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role="img"
      aria-hidden="true"
      fill={`#${icon.hex}`}
    >
      <path d={icon.path} />
    </svg>
  )
}
