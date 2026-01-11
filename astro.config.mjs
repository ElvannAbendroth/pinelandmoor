import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel'
import lenis from 'astro-lenis'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), lenis()],
  output: 'server',
  adapter: vercel(),
  vite: { plugins: [tailwindcss()] },
  redirects: {
    '/spotify': 'https://open.spotify.com/artist/0N4Yr8uzw1NdbZlYW7r9lJ?si=5vAmh_32SXmTaeNk5gXWrg',
  },
})
