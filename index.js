import app from "./server.js"
import { MongoClient } from "mongodb"
import inventoryController from "./controller/controller.js"

const port = 3000
const uri = "mongodb+srv://m220student:m220password@mflix.wdtisnn.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(
  uri,
  // TODO: Connection Pooling
  // Set the poolSize to 50 connections.
  // TODO: Timeouts
  // Set the write timeout limit to 2500 milliseconds.
  { useNewUrlParser: true },
)
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    await inventoryController.connectToDB(client)

    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  })
