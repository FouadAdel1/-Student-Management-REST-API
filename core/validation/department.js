const {body} = require('express-validator');


const insertDapartmentValidation = [
body('name')
.isAlpha()
.withMessage('Name must be a string')
.isLength({min:3})
.withMessage('Name must be at least 3 characters long'),
body('age')
.isNumeric()
.withMessage('age must be a number')
.isLength({max:2})
.withMessage('age must be at max 2 number long'),
body('location')
.isAlpha()
.withMessage('location must be a string')
.isLength({min:3})
.withMessage('location must be at least 3 characters long'),
] ; 
const updateDapartmentValidation=[
  body('name')
.isAlpha()
.withMessage('Name must be a string')
.isLength({min:3})
.withMessage('Name must be at least 3 characters long'),
body('age')
.isNumeric()
.withMessage('age must be a number')
.isLength({max:2})
.withMessage('age must be at max 2 number long'),
body('location')
.isAlpha()
.withMessage('location must be a string')
.isLength({min:3})
.withMessage('location must be at least 3 characters long'),
]
module.exports = {insertDapartmentValidation};