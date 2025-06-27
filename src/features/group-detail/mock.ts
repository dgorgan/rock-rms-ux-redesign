export type GroupDetail = {
  name: string
  channel: {
    description: string
    channelType: string
    itemsRequireApproval: boolean
    isIndexed: boolean
  }
  permissions: {
    name: string
    role: string
  }[]
}

export const MOCK_GROUPS: Record<string, GroupDetail> = {
  'worship-team': {
    name: 'Worship Team',
    channel: {
      description:
        "This content channel is designed to store and manage articles related to our ministry's mission and outreach efforts. This channel allows ministry leaders and writers to upload and categorize articles, assign relevant tags, and schedule publication dates. By centralizing our ministry's content in one location, our content channel helps us share our message and engage with our community more effectively.",
      channelType: 'Blog Posts',
      itemsRequireApproval: true,
      isIndexed: true,
    },
    permissions: [
      { name: 'Alice', role: 'Leader' },
      { name: 'Bob', role: 'Member' },
    ],
  },
  'youth-group': {
    name: 'Youth Group',
    channel: {
      description:
        'A general Bible study group perfect for people who are new to Christianity. We meet near W Cactus and 31st Ave.',
      channelType: 'News Feed',
      itemsRequireApproval: false,
      isIndexed: false,
    },
    permissions: [
      { name: 'Sarah', role: 'Leader' },
      { name: 'Jake', role: 'Member' },
    ],
  },
}
