import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import { IconButton } from '@/components/ui/IconButton'
import { RockGridAction } from './RockGridComponent'

type DataRow = {
  id: string
  [key: string]: unknown
}

interface RockGridActionCellProps {
  children?: ReactNode
  className?: string
  actions?: RockGridAction[]
  row?: DataRow
}

export function RockGridActionCell({ children, className, actions, row }: RockGridActionCellProps) {
  if (actions && row) {
    return (
      <td className={cn('px-4 py-3 text-right', className)}>
        <div className="flex items-center justify-end gap-1">
          {actions.map((action, index) => (
            <IconButton
              key={index}
              icon={action.icon || 'more'}
              onClick={() => action.onClick(row)}
              variant="default"
            />
          ))}
        </div>
      </td>
    )
  }

  return (
    <td className={cn('px-4 py-3 text-right', className)}>
      <div className="flex items-center justify-end gap-1">{children}</div>
    </td>
  )
}
