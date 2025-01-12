//imports
import React, { useEffect, useState } from "react"
import * as PhosphorIcons from "@phosphor-icons/react"

//styles
import "./button.sass"

//types
import { PropsType } from "./types"
import { IconProps } from "@phosphor-icons/react"

export default ({ text = "", icon, onClick, disabled = false, color = "transparent" }: PropsType) => {
  const [Icon, setIcon] = useState<React.ComponentType<IconProps> | null>(null)

  useEffect(() => {
    import(`@phosphor-icons/react`).then(module => {
      const dynamic_icon = module[icon as keyof typeof module] as React.FC<PhosphorIcons.IconProps>
      setIcon(() => dynamic_icon)
    })
  }, [icon])

  return (
    <button className={`button ${color}`} onClick={onClick} disabled={disabled}>
      {text && <span className="text-regular">{text}</span>}
      {icon && Icon && <Icon size={20} />}
    </button>
  )
}
