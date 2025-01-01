//imports
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "$helpers/redux/hooks/hooks"

//styles
import "./main.sass"

//shared components
import { Input } from "$uis"

//icons
import { ArrowRight } from "@phosphor-icons/react"

//actions
import { transactions_actions } from "$slices/transactions/transactions"

export default () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.transactions.data)
  const [remove_input_value, set_remove_input_value] = useState("")
  const [create_input_value, set_create_input_value] = useState("")

  const remove = (id: string) => {
    dispatch(transactions_actions.remove(id))
  }

  const create = (value: string) => {
    dispatch(transactions_actions.create(value))
  }

  useEffect(() => {
    dispatch(transactions_actions.fetch())
  }, [data])

  return (
    <main className="main-page">
      <div className="history-container">
        <h2>History</h2>
        {data.length > 0
          ? data.map(({ value, _id }, index) => (
              <p key={index}>
                {value}, {_id}
              </p>
            ))
          : "There is no transaction"}
      </div>
      <div className="chart-and-actions-container">
        {/* <div className="chart">
          <h2>The chart will be available soon</h2>
        </div> */}
        <div className="actions-container">
          <h2>Actions</h2>
          <div>
            <Input
              placeholder="Add your income or expense"
              onChange={e => set_create_input_value(e.target.value)}
              value={create_input_value}
              components_left={[
                <ArrowRight
                  size={20}
                  className="text-black"
                  cursor="pointer"
                  onClick={() => create(create_input_value)}
                />
              ]}
            />
            <Input
              placeholder="Remove your income or expense (objID)"
              onChange={e => set_remove_input_value(e.target.value)}
              value={remove_input_value}
              components_left={[
                <ArrowRight
                  size={20}
                  className="text-black"
                  cursor="pointer"
                  onClick={() => remove(remove_input_value)}
                />
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
