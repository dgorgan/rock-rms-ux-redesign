import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface PanelFooterProps {
  children: ReactNode
  className?: string
}

export function PanelFooter({ children, className }: PanelFooterProps) {
  return <div className={cn('px-md py-md border-rock-secondary-100', className)}>{children}</div>
}
