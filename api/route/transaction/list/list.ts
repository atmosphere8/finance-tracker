//imports
import { Request, Response } from "express"

//models
import TransactionModel from "../../../shared/models/Transaction/Transaction"

const list = (req: Request, res: Response) => {
  TransactionModel.find()
    .then(transaction_list => {
      res.status(200).json({
        status: "Success",
        message: "Transaction list successfully received",
        data: transaction_list
      })
    })
    .catch((error: Error) => {
      res.status(500).json({ status: "Error", message: error.message })
    })
}

export default list
