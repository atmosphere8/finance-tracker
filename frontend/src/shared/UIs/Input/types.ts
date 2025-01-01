import { ReactElement } from "react"

export interface IInput {
  components_right?: ReactElement[]
  components_left?: ReactElement[]
  placeholder?: string
  value?: string
  type?: string
  disabled?: boolean
  color?: "white" | "transparent"
  onChange: (value: any) => void
}
