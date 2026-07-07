import { Mail, MessageCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons'

/** Redes y canales de contacto. El icono es un componente de lucide-react. */
export const socials = [
  {
    id: 'github',
    label: 'GitHub',
    handle: 'github.com/Arkanys54',
    href: 'https://github.com/Arkanys54',
    icon: GithubIcon,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'in/juan-sebastian-lozada-ceballos',
    href: 'https://www.linkedin.com/in/juan-sebastian-lozada-ceballos-51a27a358/',
    icon: LinkedinIcon,
  },
  {
    id: 'email',
    label: 'Email',
    handle: 'juansebaslc54@gmail.com',
    href: 'mailto:juansebaslc54@gmail.com',
    icon: Mail,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    handle: '+57 3132871763',
    href: 'https://wa.me/573132871763',
    icon: MessageCircle,
  },
]
