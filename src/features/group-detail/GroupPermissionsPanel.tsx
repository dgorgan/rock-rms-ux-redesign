import { Button } from '@/components/ui/Button/Button'
import { Panel, PanelHeader, PanelBody } from '@/components/patterns/Panel'

interface GroupPermissionsPanelProps {
  permissions: {
    name: string
    role: string
  }[]
}

export function GroupPermissionsPanel({ permissions }: GroupPermissionsPanelProps) {
  return (
    <Panel>
      <PanelHeader>Group Permissions</PanelHeader>
      <PanelBody>
        <div className="space-y-md">
          <h3 className="text-strong text-base font-semibold">Member Permissions</h3>

          <div className="border-rock-secondary-100 overflow-hidden rounded-md border">
            <table className="w-full">
              <thead className="bg-rock-secondary-50">
                <tr>
                  <th className="text-muted px-md py-sm text-left text-sm font-semibold">Name</th>
                  <th className="text-muted px-md py-sm text-left text-sm font-semibold">Role</th>
                  <th className="text-muted px-md py-sm text-left text-sm font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {permissions.map((permission, index) => (
                  <tr key={index} className="border-rock-secondary-100 border-t">
                    <td className="text-strong px-md py-sm text-sm">{permission.name}</td>
                    <td className="text-strong px-md py-sm text-sm">{permission.role}</td>
                    <td className="text-muted px-md py-sm text-sm">
                      <Button variant="primary" className="text-accent hover:underline">
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </PanelBody>
    </Panel>
  )
}
