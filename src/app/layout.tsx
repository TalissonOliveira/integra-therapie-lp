import type { Metadata } from 'next'
import { marcellus, montserrat, mynaruseFlareBook } from '@/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Integra Therapie',
  description: 'Integra Therapie',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${marcellus.variable} ${montserrat.variable} ${mynaruseFlareBook.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
