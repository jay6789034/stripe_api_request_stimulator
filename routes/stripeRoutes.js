const express= require('express')
const routes= expresss.Router()
const stripeControllers= require('../controllers/stripeControllers')
routes.post('/customer',stripeControllers.getCustomer)
routes.post('/amount',stripeControllers.getAmount)
module.exports=routes
