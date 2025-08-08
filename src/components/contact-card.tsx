interface ContactItemProps {
  title: string
  icon: React.ReactNode
  content: React.ReactNode
}

export function ContactItem({ title, icon, content }: ContactItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-sans font-medium leading-relaxed text-primary-dark mb-3.5">
          {title}
        </h3>
        <div className="space-y-2 text-sm font-sans text-primary leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  )
}
