'use client'

import { StarIcon } from '@/components/icons/star-icon'
import { TeamMemberCard } from '@/components/team-member-card'

const teamData = [
  {
    id: 1,
    name: 'Waltraud Piana',
    specialty: 'Endodontista',
    image: '/lp/images/team/professional-1.png',
    alt: 'Waltraud Piana - Especialista em Endodontia',
  },
  {
    id: 2,
    name: 'Guilherme Chiqueto',
    specialty: 'Psicanalista Clínico',
    image: '/lp/images/team/professional-2.png',
    alt: 'Guilherme Chiqueto - Psicanalista Clínico',
  },
  {
    id: 3,
    name: 'Julia Lourenço',
    specialty: 'Enfermagem Estética',
    image: '/lp/images/team/professional-3.png',
    alt: 'Julia Lourenço - Enfermeira Esteta',
  },
  {
    id: 4,
    name: 'Dr. Alexandre Santana Hilel',
    specialty:
      'Clínica Médica, Cardiologia, Medicina do Esporte e Prática Ortomolecular',
    image: '/lp/images/team/professional-4.png',
    alt: 'Dr. Alexandre Santana Hilel - Especialista médico',
  },
  {
    id: 5,
    name: 'Dr. Heloi Jose Stefani',
    specialty: 'Médico de Família, Clínico Geral e Cirurgião Dermatológico',
    image: '/lp/images/team/professional-5.png',
    alt: 'Dr. Heloi Jose Stefani - Especialista médico',
  },
]

export function TeamSection() {
  return (
    <section
      id="equipe"
      className="py-16 md:py-28 bg-white-soft"
      aria-labelledby="team-title"
    >
      <div className="container max-w-[1140px] mx-auto px-6 lg:px-2">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <StarIcon />
            <p className="text-sm md:text-base font-sans text-primary-dark uppercase tracking-widest">
              Profissionais dedicados para cuidar de você
            </p>
          </div>

          <h2
            id="team-title"
            className="text-3xl md:text-4xl lg:text-5xl font-heading text-primary-dark leading-tight max-w-4xl mx-auto"
          >
            Conheça Nosso Time de Especialistas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 gap-y-8 lg:gap-y-8">
          {teamData.map(member => (
            <article key={member.id} aria-labelledby={`member-${member.id}`}>
              <TeamMemberCard member={member} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
