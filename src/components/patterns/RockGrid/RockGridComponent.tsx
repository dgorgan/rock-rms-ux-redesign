import { ReactNode } from 'react'
import { RockGrid } from './RockGrid'
import { RockGridHeader } from './RockGridHeader'
import { RockGridBody } from './RockGridBody'
import { RockGridRow } from './RockGridRow'
import { RockGridCell } from './RockGridCell'
import { RockGridActionCell } from './RockGridActionCell'

type DataRow = {
  id: string
  [key: string]: unknown
}

export interface RockGridColumn {
  key: string
  header: string
  width?: string
  align?: 'left' | 'center' | 'right'
}

export interface RockGridAction {
  label: string
  icon?: string
  onClick: (row: DataRow) => void
}

interface RockGridComponentProps {
  columns: RockGridColumn[]
  data: DataRow[]
  actions?: RockGridAction[]
  className?: string
}

export function RockGridComponent({ columns, data, actions, className }: RockGridComponentProps) {
  return (
    <RockGrid className={className}>
      <RockGridHeader>
        <RockGridRow>
          {columns.map(column => (
            <RockGridCell
              key={column.key}
              className={`text-muted font-medium ${
                column.align === 'center'
                  ? 'text-center'
                  : column.align === 'right'
                    ? 'text-right'
                    : 'text-left'
              } ${column.width ? `w-[${column.width}]` : ''}`}
            >
              {column.header}
            </RockGridCell>
          ))}
          {actions && actions.length > 0 && (
            <RockGridCell className="text-muted w-24 text-right font-medium">Actions</RockGridCell>
          )}
        </RockGridRow>
      </RockGridHeader>
      <RockGridBody>
        {data.length === 0 ? (
          <RockGridRow>
            <RockGridCell className="text-muted h-24 text-center">No data available</RockGridCell>
          </RockGridRow>
        ) : (
          data.map((row, index) => (
            <RockGridRow key={row.id || index.toString()}>
              {columns.map(column => (
                <RockGridCell
                  key={column.key}
                  className={
                    column.align === 'center'
                      ? 'text-center'
                      : column.align === 'right'
                        ? 'text-right'
                        : 'text-left'
                  }
                >
                  {row[column.key] as ReactNode}
                </RockGridCell>
              ))}
              {actions && actions.length > 0 && <RockGridActionCell actions={actions} row={row} />}
            </RockGridRow>
          ))
        )}
      </RockGridBody>
    </RockGrid>
  )
}
