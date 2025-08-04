import { Marcellus, Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

export const marcellus = Marcellus({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const mynaruseFlareBook = localFont({
  src: '../fonts/mynaruse-flare-book.ttf',
  display: 'swap',
  variable: '--font-display',
})
