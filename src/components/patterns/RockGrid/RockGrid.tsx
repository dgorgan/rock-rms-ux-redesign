import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface RockGridProps {
  children: ReactNode
  className?: string
}

export function RockGrid({ children, className }: RockGridProps) {
  return <table className={cn('w-full', className)}>{children}</table>
}
