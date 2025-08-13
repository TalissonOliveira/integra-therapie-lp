import Image from 'next/image'
import Link from 'next/link'

const companyLinks = [
  { name: 'Início', href: '/' },
  { name: 'Sobre Nós', href: '#sobre' },
  { name: 'Nossa Missão', href: '#sobre' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Nosso Time', href: '#equipe' },
  { name: 'Contato', href: '#contato' },
]

const servicesLinks = [
  { name: 'Ortomolecular', href: '#servicos' },
  { name: 'Terapias Injetáveis', href: '#servicos' },
  { name: 'Medicina Canábica', href: '#servicos' },
  { name: 'Harmonização Facial', href: '#servicos' },
  { name: 'Medicina do Esporte', href: '#servicos' },
  { name: 'Psicanálise', href: '#servicos' },
]

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/integratherapie',
    icon: (
      <svg
        className="w-3.5 h-3.5"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 320 512"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/integra.therapie',
    icon: (
      <svg
        className="w-4 h-4"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z" />
      </svg>
    ),
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-6 pt-16">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16">
          <div className="lg:w-1/2">
            <div className="mb-5">
              <Link
                href="/"
                aria-label="Ir para a página inicial"
                className="inline-block"
              >
                <Image
                  src="/lp/images/logo/logo.svg"
                  alt="Logo Integra Therapie"
                  width={361.79}
                  height={60}
                  className="w-full h-auto"
                  priority
                />
              </Link>
            </div>

            <p className="text-accent-light font-sans leading-relaxed mb-8 max-w-md">
              Entre em contato conosco durante o horário comercial. Nossa equipe
              terá prazer em responder às suas perguntas.
            </p>

            <div className="flex space-x-3">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 bg-primary hover:bg-accent rounded-full flex items-center justify-center text-white hover:text-white transition-all duration-250 hover:scale-105"
                  aria-label={`Siga-nos no ${social.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16 lg:items-start">
            <div className="lg:flex lg:flex-col">
              <h3 className="text-xl text-white font-sans font-medium leading-snug mb-6">
                Empresa
              </h3>
              <nav aria-label="Links da empresa">
                <ul className="space-y-4">
                  {companyLinks.map(link => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-accent-light hover:text-accent font-sans transition-colors duration-300 hover:underline"
                        aria-label={`Ir para a página de ${link.name}`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="lg:flex lg:flex-col">
              <h3 className="text-xl text-white font-sans font-medium leading-snug mb-6">
                Serviços
              </h3>
              <nav aria-label="Links de serviços">
                <ul className="space-y-4">
                  {servicesLinks.map((link, index) => (
                    <li key={`${link.name}-${index}`}>
                      <Link
                        href={link.href}
                        className="text-accent-light hover:text-accent font-sans transition-colors duration-300 hover:underline"
                        aria-label={`Ir para a página de ${link.name}`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="border-t border-white-soft/10 mt-14 py-8">
          <div className="text-center">
            <p className="text-white/70 font-sans text-sm">
              Copyright © Integra Therapie, {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
