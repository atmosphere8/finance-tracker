//imports
import { configureStore } from "@reduxjs/toolkit"

//slices
import transactions from "$slices/transactions/transactions"

const store = configureStore({
  reducer: {
    transactions
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]

export default store
