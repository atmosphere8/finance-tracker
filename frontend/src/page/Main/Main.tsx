//imports
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "$helpers/redux/hooks/hooks"

//styles
import "./main.sass"

//shared components
import { Input } from "$uis"
import { Transaction } from "$entities"

//icons
import { ArrowRight } from "@phosphor-icons/react"

//actions
import { transactions_actions } from "$slices/transactions/transactions"

export default () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.transactions.data)
  const [create_input_value, set_create_input_value] = useState("")

  const create = (value: string) => {
    dispatch(transactions_actions.create(value))
  }

  useEffect(() => {
    dispatch(transactions_actions.fetch())
  }, [data, dispatch])

  return (
    <main className="main-page">
      <div className="history-container">
        <h2>History</h2>
        {data.length > 0
          ? data.map(({ value, _id }, index) => <Transaction value={value} _id={_id} key={index} />)
          : "There is no transaction"}
      </div>
      <div className="chart-and-actions-container">
        {/* <div className="chart">
          <h2>The chart will be available soon</h2>
        </div> */}
        <div className="actions-container">
          <h2>Actions</h2>
          <Input
            color="white"
            placeholder="Add your income or expense"
            onChange={e => set_create_input_value(e.target.value)}
            value={create_input_value}
            components_right={[
              <ArrowRight
                size={20}
                className="text-black"
                cursor="pointer"
                onClick={() => create(create_input_value)}
              />
            ]}
          />
        </div>
      </div>
    </main>
  )
}
