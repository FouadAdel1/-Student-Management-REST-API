const authRoutes = require('express').Router()
const authHandeller= require('../Controller/authHandeller')


authRoutes.post('/login',authHandeller.loginHandeller)
authRoutes.post('/register',authHandeller.registerHandller)

module.exports=authRoutes