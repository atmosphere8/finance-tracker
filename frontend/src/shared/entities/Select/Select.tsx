//imports
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "$helpers/redux/hooks/hooks"

//styles
import "./select.sass"

//shared components
import { Button } from "$uis"

//types
import { PropsType } from "./types"

export default ({ opened = false, set_opened, options = [], reducer_actions, reducer_name = "" }: PropsType) => {
  const dispatch = useDispatch()
  const current_option = useSelector(state => state[reducer_name].current_option)

  const selected_option =
    options.length > 0
      ? Object.keys(current_option).length > 0
        ? current_option.label
        : "Select an option"
      : "No options available"

  const option_on_click = ({ label, key }: any) => {
    dispatch(reducer_actions.update_option({ label: label, key: key }))
    set_opened(false)
  }

  return (
    <div className="select">
      <Button onClick={() => set_opened(!opened)} color="frost" text={selected_option} />

      <div className={`select-content ${opened ? "active" : ""}`}>
        {options.length > 0 ? (
          options.map(({ label, key }: any, index: React.Key) => (
            <Button
              onClick={() => option_on_click({ label: label, key: key })}
              color="frost"
              text={label}
              key={index}
            />
          ))
        ) : (
          <p>No options available</p>
        )}
      </div>
    </div>
  )
}
