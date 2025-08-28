import type { FC } from 'react'
import Icon from '@/ui/icon'

import type { icons } from 'lucide-react'

export type Social = {
  href: string
  target?: string
  icon: keyof typeof icons
}

export const socials: Social[] = [
  { icon: 'Github', href: 'https://github.com/ElvannAbendroth', target: '_bank' },
  { icon: 'Linkedin', href: 'https://www.linkedin.com/in/oodri/', target: '_bank' },
  { icon: 'Globe', href: 'http://www.oodri.dev', target: '_bank' },
]

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="bg-input text-foreground flex flex-col align-middle items-center">
      <div className="p-4 w-full max-w-layout rounded-t-lg gap-12 py-12 px-8">
        <div className="flex flex-col gap-4 items-center">
          <a
            className="font-bold text-xl font-display hover:text-foreground-hover flex gap-3 place-items-center"
            href="/"
          >
            <Icon name="Rocket" /> <span>Rock Your Astro (Blank)</span>
          </a>
          <p>Welcome to this awesome website</p>
          <div className="flex flex-row gap-4">
            {socials.map(social => {
              return (
                <a href="/" target={social.target}>
                  <Icon name={social.icon} size={21} />
                </a>
              )
            })}
          </div>
        </div>
        <div className="flex justify-center py-3">
          <p className="text-sm">All right reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
