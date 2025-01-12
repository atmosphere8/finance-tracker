import { ReactElement } from "react"

export type PropsType = {
  components_right?: ReactElement[]
  components_left?: ReactElement[]
  placeholder?: string
  value?: string
  type?: string
  disabled?: boolean
  color?: "white" | "transparent" | "gray"
  onChange?: (value: any) => void
  readOnly?: boolean
}
