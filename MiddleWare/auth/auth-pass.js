
const mongoose = require('mongoose')
const userSchema = mongoose.model('users')
const passport = require('passport')
// const {Strategy} = require('passport-local')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.serializeUser((user,done)=>{
  try {
    user ? done(null,user.id) : done(new Error('User not found'))
  } catch (error) {
    done(error)
  }
})


passport.deserializeUser((userId, done) =>{
try {
  console.log("test deserializeUser",user);
  userId ? done(null,userId) : done(new Error('User not found'))
} catch (error) {
  done(error)
}
});
// for verfication of user or wirte logic for login local
// passport.use(new Strategy({usernameField:"name"}, async(name,password,done)=>{
//     try {
//       console.log('passport use');
//       const user = await userSchema.findOne({name})
//       if(!user) return done( new Error('User not found'))
//         if(user.password !== password) return done( new Error('Invalid password'))
//       return done(null,user.id) // this is just for testing purpose
//     } catch (error) {
//         done(error)
//     }
// }))
// for google auth
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5000/auth/google/redirect"
},async(accessToken, refreshToken, profile, done)=>{
  console.log('passport use google',accessToken ,"refreshToken",refreshToken, "profile",profile);
  const user = await userSchema.findOne({id:profile.id})
  if(!user){
    const newUser = await userSchema.create({
      id:profile.id,
    })
    return done(null, profile)
  }
  return done(null, profile)
}))
module.exports= passport