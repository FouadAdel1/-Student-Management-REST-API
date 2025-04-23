const mongoose = require('mongoose')
require('../Model/student')
const StudentSchema=mongoose.model('students');
const DepartmentShcema= mongoose.model('departments')

async function getAllStudnets(req,res,next){
    try {
        let result= await StudentSchema.find().populate(
            {path:'departmentId'  ,     
            foreignField: 'id',select:['name','location']} ).exec()
        res.status(200).json({data:result});
    } catch (error) {
        next(error)
    }

}
async  function addStudnet(req,res,next){
    try {
        let {id,name,password,departmentId,supervisore} = req.body
        let departmentData = await DepartmentShcema.findOne({id:departmentId})
        if(departmentData){
            let data =new  StudentSchema({
                id,name,password,supervisore,departmentId
            })
            let result = await data.save()
            res.status(201).json({result});
        }else{
            throw new Error (' department is now exisit ')
        }
    } catch (error) {
        next(error)
    }
}

async function updateStudnet(req,res,next){
    try {
        let {id,name,password,departmentId,supervisore} = req.body
        let departmentData = await DepartmentShcema.findOne({id:departmentId})
        if(departmentData){
            let data = await StudentSchema.findOneAndUpdate({id},{
                name,
                password
            },{new:true})
            res.status(201).json({data});
        }else{
            throw new Error (' department is now exisit ')
        }
    } catch (error) {
        next(error)
    }
}
async function deleteStudnet(req,res,next){
    try {
        let result = await StudentSchema.deleteOne({id:req.body.id})
        res.status(200).json({result});
    } catch (error) {
        next(error)
    }
}
async function getStudnetById(req,res,next){
    try {
        console.log(req.session.passport);
        let result = await StudentSchema.findOne({id:req.params.id})
        .populate({path:'departmentId', foreignField: 'id'}).exec()
        if(result){
            res.status(200).json({result});
        }else{
            throw new Error("this is student is not exisit")
        }
    } catch (error) {
        next(error)
    }
}
module.exports = {getAllStudnets,addStudnet,updateStudnet,deleteStudnet,getStudnetById};