const express = require('express')
const run = require('./database/connection.js')
const app = express()

app.use('/', require('./routes/router'))

const server = app.listen(3000)

run()

//console.log("it does")
//server.close()
//pull request ...