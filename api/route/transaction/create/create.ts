//imports
import { Request, Response } from "express"

//models
import TransactionModel from "../../../shared/models/Transaction/Transaction"

const create = (req: Request, res: Response) => {
  const { value, option } = req.body

  TransactionModel.create({ value, option })
    .then(transaction =>
      res.status(200).json({ status: "Success", message: "Transaction created!", data: transaction })
    )
    .catch((error: Error) => res.status(500).json({ status: "Error", message: error.message }))
}

export default create
