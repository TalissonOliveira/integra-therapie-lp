'use client'

import { StarIcon } from '@/components/icons/star-icon'
import { ServiceCard } from '@/components/service-card'

const servicesData = [
  {
    id: 'ortomolecular',
    title: 'Ortomolecular',
    description:
      'Terapia voltada para o equilíbrio químico do corpo, utilizando vitaminas, minerais e antioxidantes para restaurar a saúde celular e prevenir doenças.',
    isHighlighted: true,
  },
  {
    id: 'terapias-injetaveis',
    title: 'Terapias Injetáveis',
    description:
      'Procedimentos com aplicação de substâncias específicas para estimular a regeneração, melhorar a estética e tratar diversas condições de saúde.',
    isHighlighted: false,
  },
  {
    id: 'medicina-canabica',
    title: 'Medicina Canábica',
    description:
      'Uso médico da Cannabis para alívio de dores crônicas, ansiedade, distúrbios do sono e outras doenças, com acompanhamento especializado.',
    isHighlighted: false,
  },
  {
    id: 'harmonizacao-facial',
    title: 'Harmonização Facial',
    description:
      'Procedimentos estéticos minimamente invasivos que realçam a beleza natural, melhorando contornos faciais, volume e simetria de forma segura.',
    isHighlighted: false,
  },
  {
    id: 'medicina-esporte',
    title: 'Medicina do Esporte',
    description:
      'Avaliação, prevenção e tratamento de lesões, além de orientações para otimizar desempenho e saúde física de atletas e praticantes.',
    isHighlighted: false,
  },
]

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="py-16 md:py-28 bg-accent-light"
      aria-labelledby="servicos-title"
    >
      <div className="container max-w-[1140px] mx-auto px-6 lg:px-2">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <StarIcon className="fill-accent" />
            <p className="text-sm md:text-base font-sans text-primary-dark uppercase tracking-widest">
              Nosso Serviços
            </p>
          </div>

          <h2
            id="servicos-title"
            className="text-3xl md:text-4xl lg:text-5xl font-heading text-primary-dark leading-tight max-w-4xl mx-auto"
          >
            Cuidando de você com serviços integrativos e especializados
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {servicesData.slice(0, 5).map(service => (
            <div key={service.id}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
