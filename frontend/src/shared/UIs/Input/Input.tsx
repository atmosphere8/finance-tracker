//imports
import React, { useEffect, useState } from "react"

//styles
import "./input.sass"

//types
import { IInput } from "./types"

export default ({
  placeholder = "",
  value = "",
  components_right = [],
  components_left = [],
  color = "transparent",
  disabled = false,
  type = "text",
  onChange
}: IInput) => {
  return (
    <div className={`input-wrapper ${color}`}>
      {components_right.map((component, index) => React.cloneElement(component, { key: index }))}
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        type={type}
        maxLength={255}
      />
      {components_left.map((component, index) => React.cloneElement(component, { key: index }))}
    </div>
  )
}
