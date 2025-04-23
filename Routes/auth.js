const authRoutes = require('express').Router()
const authHandeller= require('../Controller/authHandeller')
const passport= require('../MiddleWare/auth/auth-pass')
// authRoutes.post('/login',authHandeller.loginHandeller)
authRoutes.post('/login',passport.authenticate('google'),(req,res)=>{
  console.log(req.session.passport);
  if(req.session.passport.user) {
    return res.status(200).json({message:"login successfully"})
  }
  return res.status(401).json({message:"login failed"})
})

authRoutes.post('/register',authHandeller.registerHandller)

module.exports=authRoutes