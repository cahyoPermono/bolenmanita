import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading', display: 'swap' })

export const metadata = {
  title: 'Bolenmanita - Bolen Pisang Premium Khas Surabaya',
  description: 'Pusat Bolen Surabaya yang enak, lumer, dan crunchy. Tersedia varian Cokelat, Keju, dan Sosis. Oleh-oleh wajib khas Surabaya.',
  keywords: 'bolen surabaya, bolen pisang surabaya, oleh-oleh surabaya, bolen enak surabaya, bolen lumer, kuliner surabaya',
  openGraph: {
    title: 'Bolenmanita - Bolen Pisang Premium Khas Surabaya',
    description: 'Enak, Lumer, Crunchy. Pesan sekarang untuk oleh-oleh khas Surabaya!',
    type: 'website',
    locale: 'id_ID',
  },
  icons: {
    icon: '/bolenmanita/icon.png',
    apple: '/bolenmanita/icon.png',
  },
  verification: {
    google: 'fF_v8goJI1556v92AoM9jdPIeU-FZHSaBZ4fGU0ElnQ',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'Bolenmanita',
                url: 'https://cahyoPermono.github.io/bolenmanita/',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: 'https://cahyoPermono.github.io/bolenmanita/?q={search_term_string}',
                  'query-input': 'required name=search_term_string'
                }
              },
              {
                '@context': 'https://schema.org',
                '@type': 'LocalBusiness',
                name: 'Bolenmanita',
                image: 'https://cahyoPermono.github.io/bolenmanita/images/bolen-cokelat.png', // Ideally absolute URL in prod
                description: 'Bolen Pisang Premium dengan isian lumer dan kulit crunchy. Oleh-oleh khas dan snack favorit keluarga.',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Surabaya Utara',
                  addressLocality: 'Surabaya', 
                  addressRegion: 'Jawa Timur',
                  addressCountry: 'ID'
                },
                priceRange: 'IDR 28.000 - IDR 55.000',
                telephone: '+6282233064655',
                url: 'https://cahyoPermono.github.io/bolenmanita/',
                menu: 'https://cahyoPermono.github.io/bolenmanita/#menu',
                servesCuisine: 'Indonesian Bakery'
              }
            ])
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
