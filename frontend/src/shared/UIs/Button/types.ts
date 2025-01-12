//imports
import * as PhosphorIcons from "@phosphor-icons/react"

export type PropsType = {
  icon?: keyof typeof PhosphorIcons
  text?: string
  disabled?: boolean
  color?: "red" | "frost" | "transparent"
  onClick: () => void
}
