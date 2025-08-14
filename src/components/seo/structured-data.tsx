/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
export function StructuredData() {
  const medicalOrganization = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Integra Therapie',
    alternateName: 'Integra Therapie - Medicina Integrativa',
    description:
      'Clínica especializada em medicina integrativa, canábica, ortomolecular, harmonização facial e terapias complementares em São Paulo',
    url: 'https://integratherapie.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://integratherapie.com/lp/images/logo/logo.svg',
      width: 362,
      height: 60,
    },
    image: [
      'https://integratherapie.com/lp/images/about/image-1.jpeg',
      'https://integratherapie.com/lp/images/about/image-2.jpeg',
    ],
    telephone: ['+55-11-98559-7144', '+55-11-5082-4645'],
    email: 'clinicaintegratherapie@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'R. Barata Ribeiro, 380',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '01308-000',
      addressCountry: 'BR',
      neighborhood: 'Bela Vista',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-23.5520',
      longitude: '-46.6396',
    },
    openingHours: ['Mo-Fr 09:00-18:00'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    medicalSpecialty: [
      'Medicina Integrativa',
      'Medicina Canábica',
      'Medicina Ortomolecular',
      'Harmonização Facial',
      'Medicina do Esporte',
      'Cardiologia',
      'Endodontia',
      'Psicanálise Clínica',
    ],
    currenciesAccepted: 'BRL',
    paymentAccepted: [
      'Dinheiro',
      'Cartão de Crédito',
      'Cartão de Débito',
      'PIX',
    ],
    sameAs: [
      'https://www.facebook.com/61578097332275',
      'https://www.instagram.com/integra.therapie',
    ],
  }

  const physicians = [
    {
      '@context': 'https://schema.org',
      '@type': 'Physician',
      name: 'Dr. Alexandre Santana Hilel',
      description:
        'Médico Clínico com especialização em Cardiologia, Medicina do Esporte, Prática Ortomolecular e Medicina Canábica. Doutorado em Dor, Inflamação e Agravos Crônicos.',
      medicalSpecialty: [
        'Clínica Médica',
        'Cardiologia',
        'Medicina do Esporte',
        'Medicina Canábica',
        'Medicina Ortomolecular',
      ],
      workLocation: {
        '@type': 'Place',
        name: 'Integra Therapie',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'R. Barata Ribeiro, 380',
          addressLocality: 'São Paulo',
          addressRegion: 'SP',
          addressCountry: 'BR',
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Physician',
      name: 'Dr. Heloi Jose Stefani',
      description:
        'Médico de Família, Clínico Geral, Cirurgião Dermatológico e especialista em Medicina Canábica.',
      medicalSpecialty: [
        'Medicina de Família',
        'Clínica Geral',
        'Cirurgia Dermatológica',
        'Medicina Canábica',
      ],
      workLocation: {
        '@type': 'Place',
        name: 'Integra Therapie',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'R. Barata Ribeiro, 380',
          addressLocality: 'São Paulo',
          addressRegion: 'SP',
          addressCountry: 'BR',
        },
      },
    },
  ]

  const services = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalTherapy',
      name: 'Medicina Canábica',
      description:
        'Uso médico da Cannabis para alívio de dores crônicas, ansiedade, distúrbios do sono e outras condições médicas, com acompanhamento especializado.',
      provider: {
        '@type': 'MedicalOrganization',
        name: 'Integra Therapie',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalTherapy',
      name: 'Medicina Ortomolecular',
      description:
        'Terapia voltada para o equilíbrio químico do corpo, utilizando vitaminas, minerais e antioxidantes para restaurar a saúde celular.',
      provider: {
        '@type': 'MedicalOrganization',
        name: 'Integra Therapie',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalProcedure',
      name: 'Harmonização Facial',
      description:
        'Procedimentos estéticos minimamente invasivos que realçam a beleza natural, melhorando contornos faciais.',
      provider: {
        '@type': 'MedicalOrganization',
        name: 'Integra Therapie',
      },
    },
  ]

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Integra Therapie',
    image: [
      'https://integratherapie.com/lp/images/about/image-1.jpeg',
      'https://integratherapie.com/lp/images/about/image-2.jpeg',
    ],
    telephone: '+55-11-98559-7144',
    email: 'clinicaintegratherapie@gmail.com',
    url: 'https://integratherapie.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'R. Barata Ribeiro, 380',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '01308-000',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -23.556435,
      longitude: -46.654049,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalOrganization),
        }}
      />
      {physicians.map((physician, index) => (
        <script
          key={`physician-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(physician),
          }}
        />
      ))}
      {services.map((service, index) => (
        <script
          key={`service-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(service),
          }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusiness),
        }}
      />
    </>
  )
}
