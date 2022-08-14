const express = require('express')
const run = require('./database/connection.js')
const app = express()

app.get('/', (req, res) => {
  res.sendFile('/home/sebastian/Dev/inventory/index.html')
})

app.get('/add-user', (req, res)=>{
  res.sendFile('/home/sebastian/Dev/inventory/add-user.html')
})

const server = app.listen(3000)

run()

//console.log("leg")
server.close()