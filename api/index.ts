//imports
import express from "express"
import cors from "cors"

//modules
import mongo_connection from "./shared/connections/mongo_connection/mongo_connection"
import routes from "./route"

//constants
const app = express()

mongo_connection()

app.use(express.json())
app.use(cors())

app.use(routes)

const port = process.env.API_PORT || 3002

app.listen(port, () => {
  console.log(`Server runs on port ${port}`)
})
