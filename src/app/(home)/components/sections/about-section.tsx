'use client'

import Image from 'next/image'
import { StarIcon } from '@/components/icons/star-icon'

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-16 md:py-28 bg-white-soft"
      aria-labelledby="sobre-title"
    >
      <div className="container max-w-[1140px] mx-auto px-6 lg:px-2">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 mb-8 md:mb-16">
          <div className="flex-1 lg:pr-4">
            <div className="flex items-center gap-2 mb-4">
              <StarIcon />
              <p className="text-sm md:text-base font-sans text-primary-dark uppercase tracking-widest">
                Quem somos e o que nos motiva
              </p>
            </div>

            <h2
              id="sobre-title"
              className="text-3xl md:text-4xl lg:text-5xl font-heading text-primary-dark leading-tight mb-6"
            >
              Cuidando de você de forma integrativa e personalizada
            </h2>

            <div className="space-y-4 text-base font-sans text-primary-dark">
              <p className="text-sm leading-[160%]">
                Na Integra Therapie, acreditamos que saúde é equilíbrio e que
                beleza é uma forma de cuidado. Nossa missão é oferecer um olhar
                completo para cada paciente, unindo medicina integrativa e
                estética com responsabilidade, ciência e acolhimento. Sabemos
                que cada pessoa é única, por isso, nosso atendimento é
                individualizado, respeitando as particularidades, os objetivos e
                a história de quem nos procura.
              </p>
              <p className="text-sm leading-[160%]">
                Mais do que tratar sintomas, buscamos transformar a experiência
                do cuidado: com ética, empatia e dedicação em cada detalhe.
                Aqui, o paciente não é apenas atendido, é visto por inteiro, em
                sua saúde física, emocional e estética. Nosso compromisso é
                promover qualidade de vida com resultados reais e duradouros, em
                um ambiente seguro e acolhedor.
              </p>
            </div>
          </div>

          <div className="w-full max-w-[463px] flex-shrink-0">
            <Image
              src="/lp/images/about/image-1.jpeg"
              alt="Entrada da clínica Integra Therapie, com balcão de recepção moderno e ambiente acolhedor."
              width={463}
              height={463}
              className="w-full h-auto rounded-lg object-cover"
              quality={90}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-16">
          <div className="w-full max-w-[483px] flex-shrink-0 order-2 lg:order-1">
            <Image
              src="/lp/images/about/image-2.jpeg"
              alt="Sala de atendimento da Integra Therapie com mesa, cadeiras e ambiente profissional preparado para receber pacientes."
              width={483}
              height={569}
              className="w-full h-full rounded-lg object-cover"
              quality={90}
            />
          </div>

          <div className="w-full max-w-[463px] lg:ml-auto order-1 lg:order-2">
            <div className="bg-accent-light rounded-xs">
              <h3 className="text-xl md:text-2xl font-heading text-primary-dark leading-tight py-5 px-10 mb-6">
                Nossa Missão
              </h3>
            </div>

            <div className="mt-10 space-y-10">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <StarIcon />
                  <h4 className="text-lg md:text-xl font-sans font-medium text-primary-dark">
                    Atendimento Humanizado
                  </h4>
                </div>
                <p className="text-base font-sans text-primary-dark leading-[160%]">
                  Cada paciente é acolhido com escuta ativa, respeito e
                  presença. Valorizamos o vínculo humano e colocamos o cuidado
                  verdadeiro no centro de cada atendimento.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <StarIcon />

                  <h4 className="text-lg md:text-xl font-sans font-medium text-primary-dark">
                    Integração entre Saúde e Estética
                  </h4>
                </div>
                <p className="text-base font-sans text-primary-dark leading-[160%]">
                  Unimos medicina integrativa, terapias complementares e
                  estética avançada para oferecer soluções completas e
                  personalizadas, sempre guiadas por ciência e segurança.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <StarIcon />

                  <h4 className="text-lg md:text-xl font-sans font-medium text-primary-dark">
                    Qualidade de Vida e Bem-Estar
                  </h4>
                </div>
                <p className="text-base font-sans text-primary-dark leading-[160%]">
                  Mais do que tratar sintomas, buscamos promover saúde plena,
                  equilíbrio físico e emocional, com foco em resultados
                  duradouros e satisfação real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
