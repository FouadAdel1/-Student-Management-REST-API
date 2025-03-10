const mongoose = require('mongoose');
const DepartmentShcema = new mongoose.Schema({
  id:{type:Number ,unique:true},
  name: {type:String,  required: true },
  location: { type: String,  default:"cairo" },
});
 mongoose.model('departments', DepartmentShcema);

// DOM  document object mapping  like mongoose  for non relation database like monogo db
// 1- connect  with data base
// 2- create schema  on two  stage 
        // *a- create object from mongoose  called schema 
        // *b-  go mapping for  schema on object two use 
  // based on mongoose  is single tone  object so i dont nesscassery export this module to use it i will use it from mongosse direct 
