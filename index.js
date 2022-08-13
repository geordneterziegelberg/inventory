const express = require('express')
const run = require('./database/connection.js')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

const server = app.listen(3000)

run()

console.log("leg")
server.close()