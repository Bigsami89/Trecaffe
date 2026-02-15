import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'

import './globals.css'

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'TRECAFFE - Café Italiano en Mérida, Yucatán',
  description: 'Descubre la auténtica experiencia del café italiano en el corazón de Mérida. Tradición italiana con el calor yucateco.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
