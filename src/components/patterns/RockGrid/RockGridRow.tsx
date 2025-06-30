import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface RockGridRowProps {
  children: ReactNode
  className?: string
}

export function RockGridRow({ children, className }: RockGridRowProps) {
  return <tr className={cn('border-rock-secondary-200 border-b', className)}>{children}</tr>
}
