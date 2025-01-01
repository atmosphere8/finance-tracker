//imports
import { Request, Response } from "express"

//models
import TransactionModel from "../../../shared/models/Transaction/Transaction"

const get = (req: Request, res: Response) => {
  const { id } = req.params

  TransactionModel.findById(id)
    .then(transaction => {
      if (!transaction) {
        return res.status(404).json({
          status: "Error",
          message: `Transaction with ID ${id} not found`
        })
      }

      res.status(200).json({ status: "Success", message: "Transaction successfully received", data: transaction })
    })
    .catch((error: Error) => res.status(500).json({ status: "Error", message: error.message }))
}

export default get
