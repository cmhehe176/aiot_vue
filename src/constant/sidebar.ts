import type { ISidebar } from '@/component/BaseSidebar/type'

export const sidebar: ISidebar[] = [
  {
    name: 'Control Pannel',
    path: 'control',
    icon: 'arrow',
    children: [
      {
        name: 'DashBoard',
        path: '',
        icon: 'arrow',
      },
      {
        name: 'Alert',
        path: '',
        icon: 'arrow',
      },
      {
        name: 'Control Pannel',
        path: '',
        icon: 'arrow',
      },
    ],
  },
  {
    name: 'Project',
    path: '',
    icon: 'arrow',
  },
  {
    name: 'Device',
    path: '',
    icon: 'arrow',
  },
]
