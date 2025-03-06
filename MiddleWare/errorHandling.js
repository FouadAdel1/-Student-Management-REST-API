
/**
 * Express error handling middleware
 * @param {Error} err - The error object
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next middleware function
 * @returns {void} - Sends JSON response with error message and 500 status code
 */

errorHandle=(err,req,res,next)=>{
  res.status(err.status||500).json({message:err.message})
 }

module.exports={
  errorHandle
}