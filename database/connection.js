const { MongoClient } = require("mongodb");
// Connection URI
const uri =
  "mongodb+srv://m220student:m220password@mflix.wdtisnn.mongodb.net/?retryWrites=true&w=majority";
// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    // create a database object for the "mflix" database
    const analyticsDB = client.db("sample_analytics")

    // create a collection object for the "movies" collection
    const customersColl= analyticsDB.collection("customers")
    let result = await customersColl.findOne({ username: "fmiller" })

    console.log("Connected successfully to server");
    console.log(result)
  } catch(e){
    console.log("Errormsg: " + e)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
//run().catch(console.dir);

module.exports = run