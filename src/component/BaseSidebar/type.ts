export interface ISidebar {
  name: string
  path: string
  icon: string
  children?: ISidebar[]
}

export interface IProps {
  active?: string | undefined
  items: ISidebar[]
  collapse?: boolean
  defaultOpens?: string[]
}
