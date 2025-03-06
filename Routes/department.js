const express = require('express');
const departmentRoutes = express.Router();
const departmentContreller = require('../Controller/department.js');  
const {insertDapartmentValidation} =require('../core/validation/department.js');
const {checkValidation} = require('../core/validation/checkValidation.js');
    departmentRoutes.route('/departments')
    .get(departmentContreller.getAllDepartments)
    .post(insertDapartmentValidation,checkValidation,departmentContreller.addDepartment)
    .put(departmentContreller.updateDepartment)
    .delete(departmentContreller.deleteDepartment)

    departmentRoutes.route('/departments/:id')
      .get(departmentContreller.getDepartmentById)

module.exports = departmentRoutes;