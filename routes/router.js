import { Router } from 'express' //von VScode
import renderPages from '../services/render.js'
import inventoryController from '../controller/controller.js'

const route = new Router

//views
route.get('/', renderPages.homePage)
route.get('/add-user', renderPages.add_user)
route.get('/search', renderPages.searchItem)

//api
route.post('/api/user', inventoryController.create)
route.post('/api/search/:q', inventoryController.search)

export default route