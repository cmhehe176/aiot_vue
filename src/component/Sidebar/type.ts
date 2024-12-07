export interface ISidebar {
  name: string
  key: string
  icon: string
  items?: ISidebar[]
  admin?: boolean
}
