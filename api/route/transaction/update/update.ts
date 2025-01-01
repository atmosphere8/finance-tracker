//imports
import { Request, Response } from "express"

//models
import TransactionModel from "../../../shared/models/Transaction/Transaction"

const update = (req: Request, res: Response) => {
  const { id } = req.params
  const { body } = req

  TransactionModel.findByIdAndUpdate(id, body, { new: true })
    .then(transaction => {
      if (!transaction) {
        return res.status(404).json({
          status: "Error",
          message: `Transaction with ID ${id} not found`
        })
      }

      res.status(200).json({
        status: "Success",
        message: `Transaction with ID ${id} was updated`,
        data: transaction
      })
    })
    .catch((error: Error) =>
      res.status(500).json({
        status: "Eror",
        message: error.message
      })
    )
}

export default update
