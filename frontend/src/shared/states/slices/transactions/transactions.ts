//imports
import slice from "$helpers/redux/slice/slice"
import axios from "axios"
import { PayloadAction } from "@reduxjs/toolkit"

//types
import { ITransaction, ITransactions } from "./types"

const initial_state: ITransactions = {
  data: [] as ITransaction[]
}

const transactions = slice({
  name: "app_states",
  initialState: initial_state,
  reducers: create => ({
    fetch: create.asyncThunk(
      () => {
        return axios
          .get("http://localhost:3002/transaction/list")
          .then(res => res.data)
          .catch(error => console.log(error))
      },
      {
        fulfilled: (state, action) => {
          state.data = action.payload.data
        }
      }
    ),
    remove: create.asyncThunk((id: string) => {
      return axios
        .delete(`http://localhost:3002/transaction/remove/${id}`)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }),
    create: create.asyncThunk((value: string) => {
      return axios
        .post(`http://localhost:3002/transaction/create`, { value })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    })
  })
})

export const transactions_actions = transactions.actions

export default transactions.reducer
