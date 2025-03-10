const  studentRouter  =  require ( 'express' ).Router();
const studentController = require('../Controller/student.js');
studentRouter.route( '/students' )
              .get(studentController.getAllStudnets)
              .post(studentController.addStudnet)
              .put(studentController.updateStudnet)
              .delete(studentController.deleteStudnet);

                studentRouter.get('/students/:id',studentController.getStudnetById)
module.exports  =  studentRouter;