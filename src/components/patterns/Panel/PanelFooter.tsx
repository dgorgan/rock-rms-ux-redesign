import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface PanelFooterProps {
  footerActions?: ReactNode
  groupEditButtons?: ReactNode
  className?: string
}

export function PanelFooter({ footerActions, groupEditButtons, className }: PanelFooterProps) {
  return (
    <div
      className={cn(
        'border-rock-secondary-100 flex h-[66px] items-center justify-between border-t px-6',
        className
      )}
    >
      {footerActions && <div className="flex items-center gap-4">{footerActions}</div>}
      {groupEditButtons && <div className="flex items-center">{groupEditButtons}</div>}
    </div>
  )
}
