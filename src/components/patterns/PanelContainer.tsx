import { cn } from '@/lib/utils'

type PanelContainerProps = {
  className?: string
  children: React.ReactNode
}

export function PanelContainer({ className, children }: PanelContainerProps) {
  return <div className={cn('flex flex-col space-y-4 p-6', className)}>{children}</div>
}
