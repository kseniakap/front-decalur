import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Decalur Application',
    short_name: 'Decalur',
    description: 'Интернет-магазин "Декалюр".Краски и декоративные штукатурки, продукция SEMIN, декоративный кирпич и гипсовые 3D панели собственного производства, термопанели, лофт мебель и многое другое.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
        purpose:'maskable'
      },
      {
        src: '/favicon/apple-icon-76x76.png',
        sizes: '76x76',
        type: 'image/png',
        purpose:'any'
      },
    ],
  }
}