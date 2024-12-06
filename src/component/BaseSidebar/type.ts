export interface ISidebar {
  name: string
  key: string
  icon: string
  items?: ISidebar[]
}

export interface IProps {
  active?: string | undefined
  items: ISidebar[]
  collapse?: boolean
  defaultOpens?: string[]
}
