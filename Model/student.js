const mongoose=require('mongoose')


const StudentSchema= new mongoose.Schema({
  id:{type:Number , required: true  ,unique:true},
  name:{type:String , required: true },
  password:String,
  departmentId:{type:Number,   required :true, ref:'departments' },
  supervisore:{type:Boolean , default:false}
})
mongoose.model('students',StudentSchema)