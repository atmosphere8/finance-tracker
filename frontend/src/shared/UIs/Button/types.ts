//imports
import * as PhosphorIcons from "@phosphor-icons/react"

export interface IButton {
  icon?: keyof typeof PhosphorIcons
  text?: string
  disabled?: boolean
  color?: "red" | "frost" | "transparent"
  onClick: () => void
}
