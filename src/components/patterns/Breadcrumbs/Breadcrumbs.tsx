import { cn } from '@/lib/utils'

interface BreadcrumbsProps {
  title: string
  items: string[]
  className?: string
}

export function Breadcrumbs({ title, items, className }: BreadcrumbsProps) {
  return (
    <div className={cn('flex flex-col justify-center', className)}>
      <h1 className="text-strong text-[16px] leading-[105%] font-bold">{title}</h1>
      <div className="text-muted mt-[2px] flex gap-[4px] text-[14px]">
        {items.map((item, index) =>
          index < items.length - 1 ? (
            <span key={index} className="text-accent flex items-center gap-[4px] text-sm">
              {item}
              <span>›</span>
            </span>
          ) : (
            <span key={index} className="text-muted">
              {item}
            </span>
          )
        )}
      </div>
    </div>
  )
}
