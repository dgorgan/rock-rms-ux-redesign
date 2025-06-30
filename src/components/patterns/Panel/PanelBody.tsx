import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PanelBodyProps {
  children: ReactNode
  className?: string
}

export function PanelBody({ children, className }: PanelBodyProps) {
  return <div className={cn('p-6', className)}>{children}</div>
}
