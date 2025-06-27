import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { PanelHeader } from './PanelHeader'
import { PanelBody } from './PanelBody'

interface PanelProps {
  title?: ReactNode
  actions?: ReactNode
  children: ReactNode
  className?: string
  bodyClassName?: string
  noBodyWrapper?: boolean
}

export function Panel({
  title,
  actions,
  children,
  className,
  bodyClassName,
  noBodyWrapper = false,
}: PanelProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-md border border-[#D9D9E3] bg-white shadow-sm',
        className
      )}
    >
      {title && <PanelHeader actions={actions}>{title}</PanelHeader>}

      {noBodyWrapper ? children : <PanelBody className={bodyClassName}>{children}</PanelBody>}
    </div>
  )
}
