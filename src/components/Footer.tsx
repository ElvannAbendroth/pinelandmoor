import type { FC } from 'react'
import Icon, { type IconKey } from '@/ui/icon'

export type Social = {
  href: string
  target?: string
  icon: IconKey
}

export const socials: Social[] = [
  {
    icon: 'Spotify',
    href: 'https://open.spotify.com/artist/0N4Yr8uzw1NdbZlYW7r9lJ?si=93bIPwT2TauxXEGAQmp4GA',
    target: '_blank',
  },
  { icon: 'Instagram', href: 'https://www.instagram.com/pinelandmoorband/', target: '_blank' },
  { icon: 'Facebook', href: 'https://www.facebook.com/pinelandmoor/', target: '_blank' },
] as const

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="bg-background text-foreground flex flex-col align-middle items-center">
      <div className="p-4 w-full max-w-layout rounded-t-lg gap-12 py-12 px-8">
        <div className="flex flex-col gap-4 items-center">
          {/* <a
            className="font-bold text-xl font-display hover:text-foreground-hover flex gap-3 place-items-center"
            href="/"
          >
            <span>Pineland Moor</span>
          </a> */}

          <div className="flex flex-row gap-4">
            {socials.map(social => (
              <a key={social.href} href={social.href} target={social.target}>
                <Icon name={social.icon} size={21} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-3 gap-2">
          <p className="text-sm">Copyright © 2026 Pineland Moor</p>
          <p className="text-sm">
            Website design by{' '}
            <a href="https://www.oodri.dev" target="_blank">
              oodri.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
