import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'secondary'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const base = 'inline-flex items-center justify-center px-2 py-1 text-sm font-medium rounded'

  const variants = {
    default: 'bg-rock-secondary-100 text-rock-secondary-700',
    secondary: 'bg-rock-primary-100 text-rock-primary-700',
  }

  return <span className={cn(base, variants[variant], className)}>{children}</span>
}
