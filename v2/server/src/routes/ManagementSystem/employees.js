const router = require('express').Router();
const { EmployeeController } = require('../../controllers');

router.get('/', (req, res) => res.status(200).json('route is accessable and working correctly'));
router.get('/get_all', EmployeeController.getAllEmployees);
router.post('/add_new', EmployeeController.addNewEmployee);

module.exports = router;
