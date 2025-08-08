import Image from 'next/image'

interface TeamMemberCardProps {
  member: {
    id: number
    name: string
    specialty: string
    image: string
    alt: string
  }
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="group w-full max-w-[364px] mx-auto">
      <div className="relative mb-2 overflow-hidden rounded-lg bg-gray-100 aspect-[364/304]">
        <Image
          src={member.image}
          alt={member.alt}
          className="object-cover transition-transform duration-300"
          fill
          quality={90}
        />
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-xl md:text-2xl font-sans font-medium text-primary-dark mb-2 leading-tight">
          {member.name}
        </h3>
        <p className="text-base font-sans text-accent">{member.specialty}</p>
      </div>
    </div>
  )
}
