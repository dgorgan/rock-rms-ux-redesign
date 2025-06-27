import { Panel, PanelHeader, PanelBody, PanelFooter } from '@/components/patterns/Panel'
import { Button } from '@/components/ui/button'

interface GroupOverviewPanelProps {
  channel: {
    description: string
    channelType: string
    itemsRequireApproval: boolean
    isIndexed: boolean
  }
}

export function GroupOverviewPanel({ channel }: GroupOverviewPanelProps) {
  return (
    <Panel>
      <PanelHeader>Group Overview</PanelHeader>
      <PanelBody>
        <p className="text-strong text-sm">{channel.description}</p>

        <div className="gap-x-lg gap-y-md mt-md grid grid-cols-2">
          <div>
            <label className="text-strong text-sm font-semibold">Channel Type</label>
            <div className="text-strong mt-xs text-base">{channel.channelType}</div>
          </div>
          <div>
            <label className="text-strong text-sm font-semibold">Items Require Approval</label>
            <div className="text-strong mt-xs text-base">
              {channel.itemsRequireApproval ? 'Yes' : 'No'}
            </div>
          </div>
          <div>
            <label className="text-strong text-sm font-semibold">Is Indexed</label>
            <div className="text-strong mt-xs text-base">{channel.isIndexed ? 'Yes' : 'No'}</div>
          </div>
        </div>
      </PanelBody>
      <PanelFooter>
        <div className="flex items-center justify-between">
          <div>
            <Button variant="primary" className="mr-md">
              Edit
            </Button>
            <Button variant="link">Cancel</Button>
          </div>
          <div className="border-rock-secondary-100 p-sm rounded-md border">
            <svg
              width="13"
              height="15"
              viewBox="0 0 13 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2689 6.31066H10.5928V4.28225C10.5928 1.92141 8.67145 5.34058e-05 6.31061 5.34058e-05C3.94976 5.34058e-05 2.02841 1.92141 2.02841 4.28225V6.31066H1.35227C0.605705 6.31066 0 6.91637 0 7.66293V13.072C0 13.8186 0.605705 14.4243 1.35227 14.4243H11.2689C12.0155 14.4243 12.6212 13.8186 12.6212 13.072V7.66293C12.6212 6.91637 12.0155 6.31066 11.2689 6.31066ZM8.33901 6.31066H4.2822V4.28225C4.2822 3.16381 5.19216 2.25384 6.31061 2.25384C7.42905 2.25384 8.33901 3.16381 8.33901 4.28225V6.31066Z"
                fill="#3D444D"
              />
            </svg>
          </div>
        </div>
      </PanelFooter>
    </Panel>
  )
}
