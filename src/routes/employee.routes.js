const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');

router.post('/employee', employeeController.createEmployee);

router.get('/employee', employeeController.listAllEmployees);

router.get('/employee/:id', employeeController.findEmployeeById);

router.put('/employee/:id', employeeController.updateEmployeeById);

router.delete('/employee/:id', employeeController.deleteEmployeeById);

module.exports = router;
