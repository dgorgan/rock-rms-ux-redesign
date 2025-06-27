import { useTabsContext } from './useTabsContext'

type TabTriggerProps = {
  label: string
  value: string
}

export function TabTrigger({ label, value }: TabTriggerProps) {
  const { activeTab, onChange } = useTabsContext()
  const isActive = activeTab === value

  return (
    <button
      onClick={() => onChange(value)}
      className={`px-md py-sm border-b-2 text-sm font-semibold transition-colors ${
        isActive
          ? 'border-rock-primary-500 text-rock-primary-500'
          : 'text-rock-secondary-500 hover:text-rock-primary-500 border-transparent'
      }`}
    >
      {label}
    </button>
  )
}
