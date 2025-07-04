interface ButtonProps {
  variant?: 'primary' | 'link' // btn-primary, btn-link
  size?: 'md'
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  onClick,
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center transition-colors cursor-pointer'

  const styles = {
    primary:
      'bg-rock-primary-500 text-white border border-rock-primary-500 hover:bg-rock-primary-600 font-bold',
    link: 'text-accent bg-transparent border-none hover:underline font-semibold',
  }

  const sizes = {
    md: 'h-[33px] w-[54px] px-0 rounded-[4px] text-base font-bold leading-[105%]',
  }

  return (
    <button className={`${base} ${styles[variant]} ${sizes[size]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
