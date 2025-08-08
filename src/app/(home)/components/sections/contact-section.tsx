'use client'

import { ContactItem } from '@/components/contact-card'
import { StarIcon } from '@/components/icons/star-icon'
import { ClockIcon, MailIcon, MapPin, PhoneIcon } from 'lucide-react'

const contactInfo = {
  phones: ['(11) 98559-7144'],
  address: 'R. Barata Ribeiro, 380 - Bela Vista, São Paulo - SP',
  emails: ['clinicaintegratherapie@gmail.com'],
  hours: {
    weekdays: 'Seg. a Sex.: 09h00 às 18h00',
    weekend: 'Sáb e Dom: Fechado',
  },
}

export function ContactSection() {
  return (
    <section
      id="contato"
      className="grid lg:grid-cols-2"
      aria-labelledby="contato-section"
    >
      <div className="bg-accent-light py-16 md:py-28 pl-6 lg:pl-12 flex items-center justify-center">
        <div className="w-full max-w-xl lg:ml-auto lg:pr-14">
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <StarIcon className="fill-accent" />
              <p className="text-sm md:text-base font-sans text-primary-dark uppercase tracking-widest">
                Contato
              </p>
            </div>

            <h2
              id="contato-section"
              className="text-3xl md:text-4xl lg:text-5xl font-heading text-primary-dark leading-tight mb-12"
            >
              Estamos aqui para ajudar você!
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-y-8">
            <ContactItem
              title="Telefone"
              icon={<PhoneIcon className="w-5 h-5 text-white" />}
              content={contactInfo.phones.map(phone => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\D/g, '')}`}
                  className="block text-sm font-sans text-primary hover:text-primary-dark transition-colors"
                  aria-label={`Ligar para ${phone}`}
                >
                  {phone}
                </a>
              ))}
            />

            <ContactItem
              title="Endereço"
              icon={<MapPin className="w-5 h-5 text-white" />}
              content={
                <address className="not-italic">
                  <p>{contactInfo.address}</p>
                </address>
              }
            />

            <ContactItem
              title="E-mail"
              icon={<MailIcon className="w-5 h-5 text-white" />}
              content={contactInfo.emails.map(email => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="block text-sm font-sans text-primary hover:text-primary-dark transition-colors break-all"
                  aria-label={`Enviar e-mail para ${email}`}
                >
                  {email}
                </a>
              ))}
            />

            <ContactItem
              title="Horários"
              icon={<ClockIcon className="w-5 h-5 text-white" />}
              content={
                <>
                  <p className="min-w-full">{contactInfo.hours.weekdays}</p>
                  <p className="min-w-full">{contactInfo.hours.weekend}</p>
                </>
              }
            />
          </div>
        </div>
      </div>

      <div className="relative min-h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3342732032784!2d-46.654049400000005!3d-23.556435099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce594f32389f0f%3A0x755655fce2370761!2sCl%C3%ADnica%20Integra%20Therapie!5e0!3m2!1spt-BR!2sbr!4v1754655583141!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da Integra Therapie - Rua Barata Ribeiro, 380 Cj 14 - Bela Vista"
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
    </section>
  )
}
