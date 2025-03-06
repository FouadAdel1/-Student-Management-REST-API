const department =require('../Model/department');

function getAllDepartments(req,res,next){
  
res.status(200).json({data:[]});
}
function addDepartment(req,res,next){
    console.log(req.body);
    console.log(req.query);
    res.status(201).json({data:{}});
}
function updateDepartment(req,res,next){
    res.status(200).json({data:{}});
}
function deleteDepartment(req,res,next){
    res.status(200).json({data:{}});
}
function getDepartmentById(req,res,next){
    res.status(200).json({data:{}});
}
module.exports = {getAllDepartments,addDepartment,updateDepartment,deleteDepartment,getDepartmentById};