interface ChannelOverviewProps {
  channel: {
    description: string
    channelType: string
    itemsRequireApproval: boolean
    isIndexed: boolean
  }
}

export function ChannelOverview({ channel }: ChannelOverviewProps) {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-rock-secondary-700 text-sm leading-relaxed">{channel.description}</p>
      </div>

      <div className="grid grid-cols-2 gap-x-12 gap-y-6">
        <div>
          <div className="text-rock-secondary-900 mb-1 text-sm font-semibold">Channel Type</div>
          <div className="text-rock-secondary-700 text-sm">{channel.channelType}</div>
        </div>

        <div>
          <div className="text-rock-secondary-900 mb-1 text-sm font-semibold">
            Items Require Approval
          </div>
          <div className="text-rock-secondary-700 text-sm">
            {channel.itemsRequireApproval ? 'Yes' : 'No'}
          </div>
        </div>

        <div>
          <div className="text-rock-secondary-900 mb-1 text-sm font-semibold">Is Indexed</div>
          <div className="text-rock-secondary-700 text-sm">{channel.isIndexed ? 'Yes' : 'No'}</div>
        </div>
      </div>
    </div>
  )
}
