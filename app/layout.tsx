import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { StructuredData } from '@/components/structured-data'

import './globals.css'

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant'
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'TRECAFFÉ - Café Italiano de Especialidad | Mérida, Yucatán',
  description: 'Café italiano de especialidad en el corazón de Mérida. Espressos perfectos, latte art y espacio de coworking. WiFi gratuito. Calle 47 x 60, Centro.',
  keywords: ['café Mérida', 'coffee shop Mérida', 'café italiano', 'espresso', 'cafetería Yucatán'],
  openGraph: {
    title: 'TRECAFFÉ - Donde Italia Encuentra a Yucatán',
    description: 'Café italiano de especialidad en Mérida',
    images: ['/images/og-image.jpg'],
    locale: 'es_MX',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
