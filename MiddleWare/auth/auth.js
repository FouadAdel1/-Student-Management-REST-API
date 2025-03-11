
var jwt = require('jsonwebtoken');

const checkInstructor= (req,res,next)=>{
  try {
      isInstructor=req.payload.user.supervisore
      if(isInstructor){
        next( )
      }else{
        let error = new Error(" your not Authorized ")
        error.status=403
        next(error)
      }
  } catch (error) {
    next(error)
  }
}
const authinticationMW= (req,res,next)=>{
    try {
      if(req.headers['authorization']){
        //verfiy for token and inject it into request .
          let token =req.headers['authorization'].split(' ')[1]
          let payload= jwt.verify(token,process.env.PRIVATE_KEY)
          req.payload=payload
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
const refreshToken=(req,res,next)=>{
    try {
      console.log( req.headers.authorization);
      let payload = jwt.verify(req.headers['authorization'].split(' ')[1],process.env.PRIVATE_KEY)
      console.log(payload);
      let token  =jwt.sign(payload.user,process.env.PRIVATE_KEY,{expiresIn:'7h'})
      req.headers['authorization']=`Bearer ${token}`
      console.log( req);
      next()
    } catch (error) {
      next(error)
    }
}

module.exports={
  checkInstructor,
  authinticationMW,
  refreshToken
}