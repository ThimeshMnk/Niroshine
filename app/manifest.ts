import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Niroshine Cleaning Services',
    short_name: 'Niroshine',
    description: 'Professional Cleaning Services in Tasmania',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f3460',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      // You can add more icons here if you have them in your public folder
      // {
      //   src: '/icon-192.png',
      //   sizes: '192x192',
      //   type: 'image/png',
      // },
    ],
  }
}