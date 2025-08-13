import { StarIcon } from './icons/star-icon'
import { StarSimpleIcon } from './icons/star-simple-icon'

interface ServiceCardProps {
  service: {
    id: string
    title: string
    description: string
    isHighlighted: boolean
  }
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className={`
        rounded-lg p-8 h-full
        ${
          service.isHighlighted
            ? 'bg-primary text-white'
            : 'bg-white text-primary-dark'
        }
      `}
    >
      <div
        className={`
          w-12 h-12 rounded-full flex items-center justify-center mb-8
          ${service.isHighlighted ? 'bg-accent' : 'bg-accent'}
        `}
      >
        {service.isHighlighted ? (
          <StarSimpleIcon className="fill-accent-light" />
        ) : (
          <StarIcon className="fill-accent-light" />
        )}
      </div>

      <h3
        className={`
          text-xl md:text-2xl font-heading mb-3.5 leading-tight
          ${service.isHighlighted ? 'text-white' : 'text-primary-dark'}
        `}
      >
        {service.title}
      </h3>

      <p
        className={`
          text-sm font-sans leading-relaxed
          ${service.isHighlighted ? 'text-accent-light' : 'text-primary'}
        `}
      >
        {service.description}
      </p>
    </div>
  )
}
