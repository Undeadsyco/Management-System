const router = require('express').Router();
const { EmployeeController } = require('../../controllers');

router.post('/get_employee', EmployeeController.posSystemEmployeeLogin);
router.get('/clock_in', EmployeeController.employeeClockIn);
router.get('/check_clocked_in', EmployeeController.checkEmployeeClockedInStatus);
router.put('/clock_out', EmployeeController.employeeClockOut);
router.put('/break_out', EmployeeController.employeeBreakOut);
router.put('/break_in', EmployeeController.employeeBreakIn);
router.get('/employee_times', EmployeeController.getEmployeeTimes);
router.put('/edit_time/:timeType', EmployeeController.editEmployeeTimes);

module.exports = router;
