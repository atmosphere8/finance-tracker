//imports
import { Router } from "express"

//routes
import transaction from "./transaction"

//constants
const routes = Router()

routes.use("/transaction", transaction)

export default routes
