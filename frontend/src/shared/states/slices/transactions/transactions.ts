//imports
import slice from "$helpers/redux/slice/slice"
import axios from "axios"

//types
import { TransactionType } from "$types/transaction/options"
import { TransactionPropsType, TransactionCreatePropsType, TransactionUpdatePropsType } from "$types/transaction/props"

const initial_state = {
  data: [] as TransactionPropsType[],
  current_option: {} as TransactionType
}

const transactions = slice({
  name: "transactions",
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
    create: create.asyncThunk<void, TransactionCreatePropsType>(({ value, option }) => {
      return axios
        .post(`http://localhost:3002/transaction/create`, { value, option })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }),
    update: create.asyncThunk<void, TransactionUpdatePropsType>(({ id, value }) => {
      return axios
        .patch(`http://localhost:3002/transaction/update/${id}`, { value })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }),
    update_option: create.reducer<TransactionType>((state, action) => {
      state.current_option = action.payload
    })
  })
})

export const transactions_actions = transactions.actions

export default transactions.reducer
