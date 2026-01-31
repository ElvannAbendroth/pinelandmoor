import type { CollectionEntry, CollectionKey, ContentCollectionKey } from 'astro:content'
import type { icons } from 'lucide-react'

export type AstroBlogPagination = {
  data: CollectionEntry<'blog'>[]
  start: number
  end: number
  size: number
  total: number
  currentPage: number
  lastPage: number
  url: AstroUrl
}

export type AstroUrl = { current: string; next?: string; prev?: string }

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter?: string
    github?: string
    behance?: string
    instagram?: string
    youtube?: string
  }
  author: Author
  copyright: string
  address: {
    street: string
    city: string
    zip: string
    country: string
  }
}

export type NavItem = {
  label: string
  href: string
  disabled?: boolean
  type: 'link' | 'button'
  target?: string
  icon?: IconKey
}

export type CTAButton = {
  label: string
  href: string
  icon: IconKey
}

export type Author = {
  name: string
  href: string
  image: string
}

export type Theme = 'light' | 'dark'

export type Feature = {
  icon: IconKey
  title: string
  description: string
}

export type Testimonial = {
  message: string
  author: string
}

export type Social = {
  href: string
  target?: string
  icon: IconKey
}

export type FooterLinksCol = {
  title: string
  links: NavItem[]
}

export type HeaderLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type Heading = {
  label: string
  level: HeaderLevel
  id: string
  children?: Heading[]
}

export type AstroImage = {
  src: {
    src: string
    width: number
    height: number
    format: 'png' | 'jpg' | 'jpeg' | 'tiff' | 'webp' | 'gif' | 'svg' | 'avif'
  }
  alt: string
}
