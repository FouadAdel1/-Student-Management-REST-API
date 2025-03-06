/**
 * Express middleware for handling 404 Not Found routes
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next middleware function
 * @returns {void} - Sends JSON response with 404 status code and error message
 */

notFound=(req,res,next)=>{
  res.status(404).json({message:"not found route"})
}

module.exports={
  notFound
}