// const Studnet =require('../Model/Studnet');

function getAllStudnets(req,res,next){
  
res.status(200).json({data:[]});
}
function addStudnet(req,res,next){
    res.status(201).json({data:{}});
}
function updateStudnet(req,res,next){
    res.status(200).json({data:{}});
}
function deleteStudnet(req,res,next){
    res.status(200).json({data:{}});
}
function getStudnetById(req,res,next){
    res.status(200).json({data:{}});
}
module.exports = {getAllStudnets,addStudnet,updateStudnet,deleteStudnet,getStudnetById};