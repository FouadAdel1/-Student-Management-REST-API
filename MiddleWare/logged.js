
const fs = require('fs');
const path = require('path');
/**
 * Express middleware for logging requests to a file
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next middleware function
 * @returns {void} - Creates logs directory and appends request information to log file
 */
logged = (req,res,next)=>{
    fs.mkdir('logs',(err)=>{
      fs.appendFile('./logs/loggs.txt',`requset recived from ${req.url} , by method ${req.method}  , at time ${new Date()} \n`,(err)=>{
      })
    })
    next();
 }
module.exports={
  logged
}