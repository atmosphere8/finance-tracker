//imports
import { Response, Request } from "express"

//models
import TransactionModel from "../../../shared/models/Transaction/Transaction"

const remove = (req: Request, res: Response) => {
  const { id } = req.params

  TransactionModel.findByIdAndDelete(id)
    .then(transaction => {
      if (!transaction) {
        res.status(404).json({
          status: "Error",
          message: `Transaction with ID ${id} not found`
        })
      }

      res.status(200).json({ status: "Success", message: "Transaction successfully removed", data: transaction })
    })
    .catch((error: Error) => res.status(500).json({ status: "Error", message: error.message }))
}

export default remove
