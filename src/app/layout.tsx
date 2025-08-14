import type { Metadata } from 'next'
import { marcellus, montserrat, mynaruseFlareBook } from '@/fonts'
import { StructuredData } from '@/components/seo/structured-data'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { baseUrl } from './sitemap'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default:
      'Integra Therapie - Medicina Integrativa, Canábica e Harmonização Facial em São Paulo',
    template: '%s | Integra Therapie',
  },
  description:
    'Clínica especializada em medicina integrativa, canábica, ortomolecular e harmonização facial. Especialistas qualificados na Bela Vista, São Paulo. Agende sua consulta agora e transforme sua saúde.',
  keywords: [
    'medicina intergativa',
    'medicina canábica',
    'ortomolecular',
    'harmonização facial',
    'terapias injetáveis',
    'medicina do esporte',
    'psicanálise',
    'São Paulo',
    'Bela Vista',
    'Dr Alexandre Hilel',
    'Dr Heloi Stefani',
    'Waltraud Piana',
    'psicanalista São Paulo',
    'psicoterapeuta São Paulo',
    'psicanálise São Paulo',
    'psicoterapia para ansiedade São Paulo',
    'psicoterapia para estresse São Paulo',
    'psicanálise clínica São Paulo',
    'psicanalista para depressão São Paulo',
    'psicanálise Bela Vista',
    'tratamento ortomolecular São Paulo',
    'medicina canábica São Paulo',
    'harmonização facial São Paulo',
    'botox São Paulo',
    'preenchimento facial São Paulo',
    'psicanálise para dor crônica São Paulo',
    'medicina integrativa São Paulo',
    'tratamento de insônia São Paulo',
    'medicina do esporte São Paulo',
    'tratamento com cannabis medicinal São Paulo',
    'psicanálise para estresse São Paulo',
    'clínica de saúde São Paulo',
    'consultório de saúde estética São Paulo',
    'endodontia Bela Vista',
    'psicoterapeuta para ansiedade São Paulo',
    'psicoterapia clínica Bela Vista',
    'psicanalista para ansiedade São Paulo',
    'tratamento de ansiedade São Paulo',
  ],
  authors: [{ name: 'Integra Therapie' }],
  creator: 'Integra Therapie',
  publisher: 'Integra Therapie',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'healthcare',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${marcellus.variable} ${montserrat.variable} ${mynaruseFlareBook.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
