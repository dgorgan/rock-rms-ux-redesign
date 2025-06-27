import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PanelHeaderProps {
  children: ReactNode
  actions?: ReactNode
  className?: string
}

export function PanelHeader({ children, actions, className }: PanelHeaderProps) {
  return (
    <div
      className={cn(
        'px-md py-sm border-rock-secondary-100 flex items-center justify-between border-b',
        className
      )}
    >
      <div className="text-strong text-lg font-bold">{children}</div>
      {actions && <div className="gap-sm flex items-center">{actions}</div>}
    </div>
  )
}
