//imports
import { Router } from "express"

//constants
const router = Router()

//endpoints
import create from "./create/create"
import list from "./list/list"
import get from "./get/get"
import update from "./update/update"
import remove from "./remove/remove"

export default router
  .post("/create", create)
  .get("/list", list)
  .get("/get/:id", get)
  .patch("/update/:id", update)
  .delete("/remove/:id", remove)
