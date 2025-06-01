require('../Model/department');
const departmentSchema = require('mongoose').model('departments')
const redisClient = require('../config/connectRedis.js')
async function getAllDepartments(req,res,next){
    try {
        let data = await departmentSchema.find({})
        // res.cookie("key", data, {
        //     signed: true, // 🔥 Signs the cookie
        //     httpOnly: true, // Prevent access via JS (security)
        //     sameSite: "Strict", // Helps prevent CSRF
        //     maxAge: 1000 * 60 * 60, // 1 hour
        //   });
                res.status(200).json({data});
    } catch (error) {
        next(error)
    }

}
async function addDepartment(req,res,next){
    try {
        let departemtns = req.body
        departemtns.forEach(async(deprtment) => {
            let {id, name, location}= deprtment;
            let data = new departmentSchema({
                id,name,location
            })
                await data.save()
        });
        res.status(201).json({message:'insert sucess'});
    } catch (error) {
        next(error)
    }

}
async function updateDepartment(req,res,next){
    try {
        let result =   await departmentSchema.findOneAndUpdate({id:req.body.id},{
            name:req.body.name,
            location:req.body.location
        },{new:true})
        if (result) {
            res.status(201).json(result);
        } else {
            throw new Error('this department not found');
        }
    } catch (error) {
        next(error)
    }

}
async function deleteDepartment(req,res,next){
    try {
        let id = req.body.id
        let result = await departmentSchema.findOneAndDelete({id})
        if (result) {
            res.status(201).json(result);
        } else {
            throw new Error('this department not found');
        }
    } catch (error) {
        next(error)
    }

}
async function getDepartmentById(req,res,next){
    try {
        let  id = req.params.id
        // check if the data is in redis or not
        let redisData = await redisClient.get(id)
        if (redisData) {
            console.log("in redis");
            return res.status(200).json(JSON.parse(redisData))
        }else{
            console.log("not in redis");
            let result = await departmentSchema.findOne({id}).exec()
            let dataCashed = JSON.stringify(result)
             let redisData = await redisClient.set(id, dataCashed,{
                EX: 60 * 60, // 1 hour
                NX: true, })
             if(!redisData) 
                throw new Error('error in redis')
            return res.status(200).json(result)
        }
    } catch (error) {
        next(error)
    }

}
module.exports = {getAllDepartments,addDepartment,updateDepartment,deleteDepartment,getDepartmentById};