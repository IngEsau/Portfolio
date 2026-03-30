import type { Metadata } from 'next'
import {
  Cinzel,
  Cinzel_Decorative,
  Lato,
  Playfair_Display,
} from 'next/font/google'
import './globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-body',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-title',
  display: 'swap',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-cinzel',
  display: 'swap',
})

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel-decorative',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Esaú Aguilar | Portfolio',
  description: 'Portfolio about me UX/UI Designer & Frontend Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body
        className={`${lato.variable} ${playfair.variable} ${cinzel.variable} ${cinzelDecorative.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
