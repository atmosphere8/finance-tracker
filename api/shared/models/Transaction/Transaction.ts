import mongoose from "mongoose"
import schema from "./schema"

const transaction_model_schema = new mongoose.Schema(schema)

const TransactionModel = mongoose.model("transaction", transaction_model_schema)

export default TransactionModel
