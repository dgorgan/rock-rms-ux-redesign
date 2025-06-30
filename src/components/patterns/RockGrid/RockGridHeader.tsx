import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface RockGridHeaderProps {
  children: ReactNode
  className?: string
}

export function RockGridHeader({ children, className }: RockGridHeaderProps) {
  return <thead className={cn('', className)}>{children}</thead>
}
