export interface ITransaction {
  value: string
  _id: string
}

export interface ITransactions {
  data: ITransaction[]
}
