const  studentRouter  =  require ( 'express' ).Router();
const studentController = require('../Controller/student.js');
studentRouter.route( '/students' )
              .get(studentController.getAllStudnets)
              .post(studentController.addStudnet)
              .put(studentController.updateStudnet)
              .delete(studentController.deleteStudnet);

                studentRouter.route( '/students/:id' ).get(studentController.getStudnetById)
module.exports  =  studentRouter;