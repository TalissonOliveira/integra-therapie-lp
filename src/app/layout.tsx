import type { Metadata } from 'next'
import { marcellus, montserrat, mynaruseFlareBook } from '@/fonts'
import { Header } from '@/components/layout/header'
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
        <Header />
        {children}
      </body>
    </html>
  )
}
