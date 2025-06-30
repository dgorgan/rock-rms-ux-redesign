import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PanelProps {
  children: ReactNode
  className?: string
}

export function Panel({ children, className }: PanelProps) {
  return (
    <div
      className={cn(
        'border-rock-background-secondary overflow-hidden rounded-md border bg-white',
        className
      )}
    >
      {children}
    </div>
  )
}
