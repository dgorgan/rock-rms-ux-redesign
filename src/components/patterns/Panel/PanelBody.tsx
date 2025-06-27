import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PanelBodyProps {
  children: ReactNode
  className?: string
}

export function PanelBody({ children, className }: PanelBodyProps) {
  return <div className={cn('px-md py-md', className)}>{children}</div>
}
