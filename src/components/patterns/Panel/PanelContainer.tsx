import { cn } from '@/lib/utils'

type PanelContainerProps = {
  className?: string
  children: React.ReactNode
}

export function PanelContainer({ className, children }: PanelContainerProps) {
  return <div className={cn('shadow-card flex flex-col space-y-4', className)}>{children}</div>
}
