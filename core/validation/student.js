const {body } = require ('express-validator')

const insertStudentValidation = [
  body('name')
  .isAlpha()
  .withMessage('Name must be a string')
  .isLength({min:3})
  .withMessage('Name must be at least 3 characters long'),
  body('id')
  .isNumeric()
  .withMessage('id must be a number'),
  body('password')
  .isLength({min:3})
  .withMessage('password must be at least 3 characters long'),
  body('departmentId')
  .isNumeric()
  .withMessage('departmentId must be at number'),
  ] ; 


module.exports={
  insertStudentValidation
}