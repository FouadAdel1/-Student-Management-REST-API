require('../Model/session')
const mongoose= require('mongoose')
var jwt = require('jsonwebtoken');
const { token } = require('morgan');

const studentSchema=mongoose.model('students')
const departmentSchema= mongoose.model('departments')
const userSchema= mongoose.model('users')

const loginHandeller =async  (req,res,next)=>{
  try {
    let {name , password}=req.body;
    let user = await studentSchema.findOne({name})
    if(user){
      if(user.password==password){
        const data = jwt.sign({user},process.env.PRIVATE_KEY ,{expiresIn:'1h'})
        req.session.user = user
        res.status(200).json({token:data , message:'login is sucess'})
      }else{
        throw new Error('password in not valid')
      }
    }else{
      throw new Error('user in not exisit')
    }
  } catch (error) {
    next(error)
  }


}
const registerHandller = async (req,res,next)=>{
try {
  let {id,name,password,departmentId,supervisore} =req.body
  let department = await departmentSchema.find({id:departmentId})
  if(department){
    let user =  new studentSchema({
      id,name,password,departmentId,supervisore
    })
    let data = await user.save()
    let payload = jwt.sign({data},process.env.PRIVATE_KEY)
    res.status(201).json({token:payload,message:"register is sucessfull"})
  }else{
     throw new Error("department is not exisit")
  }
} catch (error) {
  next(error)
}
}
const auth02nticationMW=async(req,res,next)=>{
  try {
    if(req.user ){
      // req.session.passport.user.id
      const user =await  userSchema.findOne({ id: req.user})
      if(!user) return res.status(401).json({message:"session is not expired"})
      next()
    }else{
      let error= new Error ("you are not authenticated")
      error.status=403
      next(error)
    }
  } catch (error) {
    next(error)
  }
}
module.exports={
  loginHandeller,
  registerHandller,
  auth02nticationMW
}