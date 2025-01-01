//imports
import React, { useEffect, useState } from "react"

//styles
import "./input.sass"

//types
import { IInput } from "./types"

//icons
import { PencilSimpleSlash, Prohibit } from "@phosphor-icons/react"

export default ({
  placeholder = "",
  value = "",
  components_right = [],
  components_left = [],
  color = "transparent",
  disabled = false,
  type = "text",
  readOnly = false,
  onChange
}: IInput) => {
  return (
    <div className={`input-wrapper ${color} ${disabled ? "disabled" : ""}`}>
      {components_left.map((component, index) => React.cloneElement(component, { key: index }))}
      <input
        className="text-medium"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        type={type}
        maxLength={255}
        readOnly={readOnly}
      />
      {components_left.map((component, index) => React.cloneElement(component, { key: index }))}
      {components_right.map((component, index) => React.cloneElement(component, { key: index }))}
      {readOnly && <PencilSimpleSlash size={20} />}
      {disabled && <Prohibit size={20} />}
    </div>
  )
}
