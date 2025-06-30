import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface RockGridBodyProps {
  children: ReactNode
  className?: string
}

export function RockGridBody({ children, className }: RockGridBodyProps) {
  return <tbody className={cn('', className)}>{children}</tbody>
}
