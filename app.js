const express = require('express')
 require('dotenv').config();
 require('./config/connectDB.js');
const {logged}= require('./MiddleWare/logged.js');
const {notFound}= require('./MiddleWare/notFound.js');
const {errorHandle}= require('./MiddleWare/errorHandling.js');
const departmentRoutes = require('./Routes/department.js');
const studentRoutes = require('./Routes/student.js');

var fs = require('fs')
var morgan = require('morgan')
var path = require('path')
const port = process.env.PORT || 3000;


 const app = express()  ;


 app.listen(port, (err) => {
  console.log("server listen on port ",port);
 })
 //parse the body of request of json 
 app.use(express.json());
  //parse the body of request of form data without file to upload 
 app.use(express.urlencoded({extended:true}));

//  ******* midlleware for logs******************
//* create logs file native
//  app.use(logged)

// create logs MiddleWare for all application  files by  morgan lib
var accessLogStream = fs.createWriteStream(path.join(__dirname, './logs/loggs.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))

// my own routes 
// middle ware for authintication
// middle ware for  authorization
app.use( departmentRoutes);
app.use( studentRoutes);



 // midlleware  for not found 
 app.use(notFound)
  // midlleware for error 
 app.use(errorHandle)



