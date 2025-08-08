import clsx from 'clsx'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  fullWidth?: boolean
}

export function Button({
  children,
  className,
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-full',
        'bg-primary text-white-soft',
        'font-heading text-base font-normal uppercase tracking-wider',
        'px-[30px] py-[20px]',
        'transition-colors duration-300 cursor-pointer hover:bg-primary-dark',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-0',
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
