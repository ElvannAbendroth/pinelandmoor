import Icon from '@/ui/icon'
import { type FC } from 'react'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/ui/button'
import type { icons } from 'lucide-react'

export type NavItem = {
  label: string
  href: string
  disabled?: boolean
  type: 'link' | 'button'
  target?: string
  icon?: keyof typeof icons
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about', type: 'link' },
  { label: 'Contact', href: '#contact', type: 'link' },
  {
    label: 'Listen on Spotify',
    href: 'https://open.spotify.com/artist/0N4Yr8uzw1NdbZlYW7r9lJ?si=5vAmh_32SXmTaeNk5gXWrg',
    type: 'button',
    target: '_blank',
  },
]

interface NavbarProps {
  pathname: string
}

//React version of Navbar
export const Navbar: FC<NavbarProps> = ({ pathname }) => {
  return (
    <nav className="sticky top-0 bg-background/70 px-4 py-3 md:py-4 md:px-6 z-10">
      <div className="flex justify-between max-w-layout mx-auto">
        <a className="text-xl font-display hover:text-foreground-hover flex gap-3 place-items-center" href="/">
          <span>PINELAND MOOR</span>
        </a>
        <div className="flex flex-gap-12 items-center gap-4 ">
          <DesktopMenu navItems={navItems} className="hidden md:block" pathname={pathname} />
          <MobileMenu navItems={navItems} className="block md:hidden" pathname={pathname} />
          <div className="flex flex-row items-center gap-2 font-bold text-sm flex-wrap"></div>
        </div>
      </div>
    </nav>
  )
}

interface DesktopMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  navItems: NavItem[]
  pathname: string
}

export const DesktopMenu: FC<DesktopMenuProps> = ({ navItems, className, pathname, ...props }) => {
  return (
    <div className={cn('flex gap-4', className)} {...props}>
      <ul className="flex gap-4  ">
        {navItems.map(item => {
          const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
          if (item.type === 'link')
            return (
              <li key={item.label} className="align-middle self-center">
                <a
                  className={`hover:underline underline-offset-4 hover:text-primary ${
                    isActive ? 'underline text-primary' : ''
                  }`}
                  href={item.href}
                  target={item.target || '_self'}
                >
                  {item.label}
                </a>
              </li>
            )
          if (item.type === 'button')
            return (
              <li key={item.label} className="align-middle self-center">
                <a href={item.href} target={item.target || '_self'}>
                  <Button icon={item.icon}>{item.label}</Button>
                </a>
              </li>
            )
        })}
      </ul>
    </div>
  )
}

interface MobileMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  navItems: NavItem[]
  pathname: string
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ navItems, className, pathname, ...props }) => {
  return (
    <div className={cn('flex gap-4 align-center items-center', className)} {...props}>
      <Sheet>
        <SheetTrigger className="p-2 rounded-md hover:bg-input-hover data-[state=open]:bg-input-hover cursor-pointer">
          <Icon name="Menu" size={21} strokeWidth={2.3} />
        </SheetTrigger>
        <SheetContent className="flex flex-col justify-center text-center items-center md:hidden h-screen">
          {/* Add this SheetTitle for accessibility */}
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

          <ul className="md:hidden flex flex-col gap-4 align-center">
            {navItems.map(item => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
              if (item.type === 'link')
                return (
                  <li key={item.label}>
                    <a
                      className={`lowercase font-bold text-lg hover:underline underline-offset-4 hover:text-primary ${
                        isActive ? 'underline text-primary' : ''
                      }`}
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              if (item.type === 'button')
                return (
                  <li key={item.label}>
                    <a href={item.href} target={item.target || '_self'}>
                      <Button icon={item.icon} size={'lg'}>
                        {item.label}
                      </Button>
                    </a>
                  </li>
                )
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  )
}
