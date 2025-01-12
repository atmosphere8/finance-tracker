//imports
import React, { useState } from "react"
import { useDispatch } from "$helpers/redux/hooks/hooks"

//styles
import "./transaction.sass"

//types
import { TransactionPropsType } from "$types/transaction/props"
import { TransactionOptionEnum } from "$types/transaction/options"

//shared components
import { Button, Input } from "$uis"

//actions
import { transactions_actions } from "$slices/transactions/transactions"

export default ({ value, _id, option }: TransactionPropsType) => {
  const [edit_mode, set_edit_mode] = useState(false)
  const [edited_value, set_edited_value] = useState(value)
  const dispatch = useDispatch()

  const remove = (id: string) => {
    dispatch(transactions_actions.remove(id))
  }

  const update = (id: string, value: string) => {
    dispatch(transactions_actions.update({ id: id, value: value }))
    set_edit_mode(!edit_mode)
  }

  const discard = () => {
    set_edit_mode(!edit_mode)
    set_edited_value(value)
  }

  return (
    <div className="transaction">
      <div className="transaction-data">
        <Input
          color={edit_mode ? "white" : "gray"}
          value={edited_value}
          onChange={e => {
            set_edited_value(e.target.value)
            console.log(e.target.value)
          }}
          readOnly={!edit_mode}
        />
        <Input value={`ID: ${_id}`} disabled />
        {option === TransactionOptionEnum.income ? (
          <p className="text-green text-regular">Income</p>
        ) : option === TransactionOptionEnum.expense ? (
          <p className="text-red-secondary text-regular">Expense</p>
        ) : (
          ""
        )}
      </div>
      <div className="transaction-actions">
        {!edit_mode ? (
          <>
            <Button onClick={() => set_edit_mode(!edit_mode)} text="Edit" icon="PencilSimple" color="frost" />
            <Button onClick={() => remove(_id)} icon="TrashSimple" color="red" />
          </>
        ) : (
          <>
            <Button onClick={discard} icon="X" color="red" text="Discard" />
            <Button onClick={() => update(_id, edited_value)} text="Update" icon="Check" color="frost" />
          </>
        )}
      </div>
    </div>
  )
}
