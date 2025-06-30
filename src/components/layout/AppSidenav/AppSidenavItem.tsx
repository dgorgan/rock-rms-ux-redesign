import { IconButton } from '@/components/ui/IconButton'

interface AppSidenavItemProps {
  icon: string
  isActive?: boolean
  onClick?: () => void
}

export function AppSidenavItem({ icon, isActive = false, onClick }: AppSidenavItemProps) {
  return (
    <IconButton
      icon={icon}
      variant="sidebar"
      onClick={onClick}
      className={isActive ? 'bg-rock-primary-600' : ''}
    />
  )
}
