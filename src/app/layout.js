import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading', display: 'swap' })

export const metadata = {
  title: 'Bolenmanita - Premium Authentic Bolen',
  description: 'Nikmati kelezatan Bolenmanita yang lumer, crunchy, dan premium. Tersedia berbagai varian rasa: Cokelat, Keju, Sosis, dan Mix.',
  keywords: 'bolen, bolen pisang, bolen cokelat, oleh-oleh, kue, pastry, bakery',
  openGraph: {
    title: 'Bolenmanita - Premium Authentic Bolen',
    description: 'Enak, Lumer, Crunchy. Pesan sekarang!',
    type: 'website',
    locale: 'id_ID',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Bolenmanita',
              image: '/images/bolen-cokelat.png', // Ideally absolute URL in prod
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
              url: 'https://bolenmanita.com', // Placeholder URL
              menu: 'https://bolenmanita.com/#menu',
              servesCuisine: 'Indonesian Bakery'
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
