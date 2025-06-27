import { ReactNode } from "react"

interface AppSidebarItemProps {
  icon: ReactNode
  isActive?: boolean
  onClick?: () => void
}

export function AppSidebarItem({ icon, isActive = false, onClick }: AppSidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-[31px] h-[31px] 
        flex items-center justify-center 
        rounded-md 
        transition-colors 
        hover:bg-rock-primary-600
        ${isActive ? 'bg-rock-primary-600' : ''}
      `}
      aria-current={isActive ? 'page' : undefined}
    >
      <span className="text-white text-lg">
        {icon}
      </span>
    </button>
  )
} 