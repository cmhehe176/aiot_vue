import type { ISidebar } from '@/component/BaseSidebar/type'

export const sidebar: ISidebar[] = [
  {
    name: 'Dashboard',
    key: 'dashboard',
    icon: 'house',
    items: [
      {
        name: 'Alert',
        key: 'alert',
        icon: 'alert',
      },
      {
        name: 'Chart',
        key: 'chart',
        icon: 'chart',
      },
      {
        name: 'Project Management',
        key: 'project',
        icon: 'project',
      },
    ],
  },
  {
    name: 'My Project',
    key: 'myproject',
    icon: 'myproject',
  },
  {
    name: 'Management Support',
    key: 'support',
    icon: 'letter',
  },
]
