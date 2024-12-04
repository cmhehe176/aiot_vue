import type { ISidebar } from '@/component/BaseSidebar/type'

export const sidebar: ISidebar[] = [
  {
    name: 'Dashboard',
    path: 'dashboard`',
    icon: 'house',
    children: [
      {
        name: 'Alert',
        path: 'alert',
        icon: 'alert',
      },
      {
        name: 'Chart',
        path: 'chart',
        icon: 'chart',
      },
      {
        name: 'Project Management',
        path: 'project',
        icon: 'project',
      },
    ],
  },
  {
    name: 'My Project',
    path: 'myproject',
    icon: 'myproject',
  },
  {
    name: 'Management Support',
    path: 'support',
    icon: 'letter',
  },
]
