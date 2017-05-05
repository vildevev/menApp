var express = require('express');
var router = express.Router();

var employee = require('../controllers/employeeController.js')


// Get all employees
router.get('/', employee.list);

// Get single employee by id
router.get('/show/:id', employee.show);

// Create employee
router.get('/create', employee.create);

// Save employee
router.post('/save', employee.save);

// Edit employee
router.get('/edit/:id', employee.edit);

// Update employee
router.post('/update/:id', employee.update);

// Delete employee
router.post('/delete/:id', employee.delete);

module.exports = router; 
