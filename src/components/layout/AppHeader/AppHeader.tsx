import { Avatar } from '@/components/ui/Avatar'
import { IconButton } from '@/components/ui/IconButton'
import { SearchBox } from '@/components/patterns/SearchBox'
import { Breadcrumbs } from '@/components/patterns/Breadcrumbs'

interface AppHeaderProps {
  title?: string
  breadcrumbs?: string[]
}

export function AppHeader({
  title = 'Shared Documents',
  breadcrumbs = ['Home', 'Shared Documents'],
}: AppHeaderProps) {
  return (
    <header className="border-rock-secondary-100 absolute right-0 left-0 flex h-[76px] items-center justify-between border-b bg-white pr-[24px] pl-0">
      {/* Page Title + Breadcrumbs */}
      <Breadcrumbs title={title} items={breadcrumbs} className="pl-[116px]" />

      {/* Top Nav Actions */}
      <div className="flex items-center gap-[12px]">
        {/* Search Box */}
        <SearchBox
          placeholder="Placeholder..."
          dropdownValue="Name"
          className="h-[40px] w-[340px]"
          onSearch={value => console.log('Searching:', value)}
        />
        {/* Top Nav Buttons */}
        <IconButton icon="bookmark" variant="nav" />
        <IconButton icon="notification" variant="nav" />
        <IconButton icon="sun" variant="nav" />

        {/* Avatar */}
        <Avatar
          src="/decker_ted.jpg"
          alt="Ted's avatar"
          name="Ted"
          showDropdown={true}
          onClick={() => console.log('User menu clicked')}
        />
      </div>
    </header>
  )
}
