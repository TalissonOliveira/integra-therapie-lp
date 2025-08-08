'use client'

import { StarIcon } from '@/components/icons/star-icon'
import { Button } from '@/components/ui'

export function CTASection() {
  const handleScheduleClick = () => {
    const phone = '5511985597144'
    const message = 'Olá! Gostaria de agendar uma consulta.'
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      '_blank'
    )
  }

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("lp/images/cta-banner.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3.5">
            <StarIcon className="fill-accent" />
            <p className="text-sm md:text-base font-sans text-white uppercase tracking-widest">
              Pronto para transformar sua saúde?
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-5xl font-heading text-white leading-relaxed mb-3.5">
            Agende sua consulta hoje mesmo!
          </h2>

          <p className="text-base md:text-lg text-white font-sans leading-relaxed mb-8 max-w-3xl mx-auto">
            Nós da <strong className="text-accent">Integra Therapie</strong>{' '}
            estamos prontos para oferecer o melhor atendimento integrativo,
            ajudando você a alcançar o equilíbrio e bem-estar que merece.
          </p>

          <Button
            onClick={handleScheduleClick}
            aria-label="Agendar uma consulta via WhatsApp"
          >
            AGENDE UMA CONSULTA
          </Button>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-20 h-20 border border-accent/30 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-accent/20 rounded-full animate-pulse delay-1000" />
    </section>
  )
}
