export enum TransactionOptionEnum {
  income = "income",
  expense = "expense"
}

export type TransactionType = { key: TransactionOptionEnum; label: string }

export const transaction_options: TransactionType[] = [
  {
    key: TransactionOptionEnum.expense,
    label: "Expense"
  },
  {
    key: TransactionOptionEnum.income,
    label: "Income"
  }
]
