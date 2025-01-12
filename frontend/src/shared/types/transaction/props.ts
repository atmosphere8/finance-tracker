import { TransactionOptionEnum } from "$types/transaction/options"

export type TransactionPropsType = {
  value: string
  option: TransactionOptionEnum
  _id: string
}

export type TransactionCreatePropsType = {
  value: string
  option: TransactionOptionEnum
}

export type TransactionUpdatePropsType = {
  value: string
  id: string
}
