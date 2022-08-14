const { Router } = require('express') //von VScode
const express = require('express')
const route = express.Router()
const services = require('../services/render')

route.get('/', services.homePage)
  
route.get('/add-user', services.add_user)

module.exports = route