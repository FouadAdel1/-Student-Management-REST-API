const express = require('express');
const departmentRoutes = express.Router();
const departmentContreller = require('../Controller/department.js');  
const {insertDapartmentValidation ,updateDapartmentValidation
         ,deleteDapartmentValidation} =require('../core/validation/department.js');
const {checkValidation} = require('../core/validation/checkValidation.js');
const AuthMiddleWare= require('../MiddleWare/auth/auth.js')

    departmentRoutes.route('/departments')
    .get(departmentContreller.getAllDepartments)
    .post( departmentContreller.addDepartment)
    .put( updateDapartmentValidation,checkValidation,departmentContreller.updateDepartment)
    .delete(deleteDapartmentValidation , checkValidation,departmentContreller.deleteDepartment)

    departmentRoutes
      .get('/departments/:id' ,departmentContreller.getDepartmentById)

module.exports = departmentRoutes;