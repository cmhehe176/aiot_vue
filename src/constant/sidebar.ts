import type { ISidebar } from '@/component/Sidebar/type'

export const sidebars: ISidebar[] = [
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
        admin: true,
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
    admin: true,
  },
]
