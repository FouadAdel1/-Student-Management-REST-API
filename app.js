const express = require('express')
 require('dotenv').config();
 require('./config/connectDB.js');
const {logged}= require('./MiddleWare/logged.js');
const {notFound}= require('./MiddleWare/notFound.js');
const {errorHandle}= require('./MiddleWare/errorHandling.js');
const departmentRoutes = require('./Routes/department.js');
const studentRoutes = require('./Routes/student.js');
const authRoutes=require("./Routes/auth.js")
const {authinticationMW}= require('./MiddleWare/auth/auth.js');
const {auth02nticationMW}= require('./Controller/authHandeller.js');
const studentController= require('./Controller/student.js')
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')
const port = process.env.PORT || 3000;
var cookieParser = require('cookie-parser')
var session = require('express-session')
var parseurl = require('parseurl')
var passport = require('passport')
 const app = express()  ;
 const MongoStore = require('connect-mongo');
asdasdasd

 app.listen(port, (err) => {
  console.log("server listen on port ",port);
 })


 //parse the body of request of json 
 app.use(express.json());
//  app.use(cookieParser('secret')) // 🔥 Secret is used to sign the cookie
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  store: MongoStore.create({
    mongoUrl: 'mongodb://localhost:27017/project',
  }),
  cookie: { maxAge: 1000 * 60 * 60}, // 1 hour
}))
  //parse the body of request of form data without file to upload 
 app.use(express.urlencoded({extended:true}));
 app.use(function (req, res, next) {
  if (!req.session.views) {
    req.session.views = {}
  }
  // get the url pathname
  var pathname = parseurl(req).pathname
  // count the views
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
  next()
})
//  ******* midlleware for logs******************
//* create logs file native
//  app.use(logged)

// create logs MiddleWare for all application  files by  morgan lib
var accessLogStream = fs.createWriteStream(path.join(__dirname, './logs/loggs.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))
app.use(passport.initialize())
app.use(passport.authenticate('session'));

// my own routes 
// middle ware for authintication
app.use(authRoutes)
// app.use((req,res,next)=>{
// req.isAuthenticated() ? next() : res.status(401).json({message:"check passport Middleware"})
// } )

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile'] }));
//   app.get('/auth/google/redirect', 
//     passport.authenticate('google', { failureRedirect: '/login' }),
//     function(req, res) {
//       // Successful authentication, redirect home.
//       res.redirect('/students');
//     });
    // app.use(auth02nticationMW)
app.get('/students/:id',studentController.getStudnetById)

// app.use(authinticationMW)
app.use( departmentRoutes);
app.use( studentRoutes);



 // midlleware  for not found 
 app.use(notFound)
  // midlleware for error 
 app.use(errorHandle)



