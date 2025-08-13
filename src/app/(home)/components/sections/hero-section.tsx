'use client'

import { Button } from '@/components/ui'

export function HeroSection() {
  const handleScheduleClick = () => {
    const phone = '5511985597144'
    const message = 'Olá! Gostaria de agendar uma consulta.'
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      '_blank'
    )
  }

  return (
    <section
      id="inicio"
      className="bg-[url(/lp/images/backgrounds/hero-background.png)] h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-6"
      aria-labelledby="hero-title"
    >
      <div className="w-full max-w-[826px] flex flex-col items-center text-center text-white-soft">
        <p className="mb-5 text-sm md:text-base font-display font-medium uppercase tracking-[0.12em]">
          Integra Therapie - Medicina Integrativa
        </p>

        <h1
          id="hero-title"
          className="font-heading  text-4xl md:text-[3.25rem] uppercase leading-16"
        >
          Transforme Sua Saúde com Cuidados Integrativos
        </h1>

        <div className="mx-auto max-w-[538px] w-full h-px bg-white-soft my-6" />

        <p className="max-w-[538px] text-sm md:text-base mb-6 leading-[160%]">
          Oferecemos tratamentos médicos e terapias complementares para
          restaurar sua saúde, equilibrando corpo e mente.
        </p>

        <Button onClick={handleScheduleClick} aria-label="Agendar uma consulta">
          AGENDE UMA CONSULTA
        </Button>
      </div>
    </section>
  )
}
