import { AppSidenavItem } from './AppSidenavItem'
import { Logo } from '@/components/ui/Logo'

export function AppSidenav() {
  const navItems = [
    { icon: 'notebook', id: 'notebook' },
    { icon: 'user', id: 'user' },
    { icon: 'cash-banknote', id: 'cash-banknote' },
    { icon: 'tool', id: 'tool' },
    { icon: 'briefcase', id: 'briefcase' },
  ]

  return (
    <aside className="bg-rock-primary z-10 ml-[8px] flex w-[80px] flex-col items-center rounded-lg py-[20px]">
      <nav>
        <div className="flex flex-col items-center space-y-[20px]">
          {/* Rock RMS - Logo Mark */}
          <Logo size="lg" className="text-white" />
          {navItems.map((item, index) => (
            <AppSidenavItem
              key={item.id}
              icon={item.icon}
              isActive={index === 0} // First item active by default
              onClick={() => console.log(`Navigate to ${item.id}`)}
            />
          ))}
        </div>
      </nav>
    </aside>
  )
}
