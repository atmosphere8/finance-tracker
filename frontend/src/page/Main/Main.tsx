//imports
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "$helpers/redux/hooks/hooks"

//styles
import "./main.sass"

//shared components
import { Input } from "$uis"
import { Transaction, Select } from "$entities"

//icons
import { ArrowRight } from "@phosphor-icons/react"

//actions
import { transactions_actions } from "$slices/transactions/transactions"

//types
import { transaction_options } from "$types/transaction/options"
import { TransactionCreatePropsType } from "$types/transaction/props"

const reducer_name = "transactions"
const reducer_actions = transactions_actions

export default () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.transactions.data)
  const current_option = useSelector(state => state.transactions.current_option)
  const [create_input_value, set_create_input_value] = useState("")
  const [select_opened, set_select_opened] = useState(false)

  const create = ({ value, option }: TransactionCreatePropsType) => {
    dispatch(transactions_actions.create({ value, option }))
  }

  useEffect(() => {
    dispatch(transactions_actions.fetch())
  }, [data, dispatch])

  return (
    <main className="main-page">
      <div className="history-container">
        <h2>History</h2>
        {data.length > 0
          ? data.map(({ value, _id, option }, index) => (
              <Transaction value={value} _id={_id} key={index} option={option} />
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
              color="white"
              placeholder="Add your income or expense"
              onChange={e => set_create_input_value(e.target.value)}
              value={create_input_value}
              components_right={[
                <ArrowRight
                  size={20}
                  className="text-black"
                  cursor="pointer"
                  onClick={() => create({ value: create_input_value, option: current_option.key })}
                />
              ]}
            />
            <Select
              opened={select_opened}
              set_opened={set_select_opened}
              options={transaction_options}
              reducer_name={reducer_name}
              reducer_actions={reducer_actions}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
