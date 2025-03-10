const {body} = require('express-validator');


const insertDapartmentValidation = [
body('name')
.isAlpha()
.withMessage('Name must be a string')
.isLength({min:3})
.withMessage('Name must be at least 3 characters long'),
body('id')
.isNumeric()
.withMessage('id must be a number'),
body('location')
.isAlpha()
.withMessage('location must be a string')
.isLength({min:3})
.withMessage('location must be at least 3 characters long'),
] ; 
const updateDapartmentValidation=[
  body('name')
.optional() // Makes 'name' optional
.isAlpha()
.withMessage('Name must be a string')
.isLength({min:3})
.withMessage('Name must be at least 3 characters long'),
body('id')
.isNumeric()
.withMessage('id must be a number'),
body('location')
.isAlpha()
.withMessage('location must be a string')
.isLength({min:3})
.optional() // Makes 'name' optional
.withMessage('location must be at least 3 characters long'),
]
const deleteDapartmentValidation=[
body('id')
.isNumeric()
.withMessage('id must be a number'),
]
module.exports = {insertDapartmentValidation ,deleteDapartmentValidation ,updateDapartmentValidation};