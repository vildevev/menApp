var mongoose = require('mongoose');

var Employee = mongoose.model('Employee');

var employeeController = {};

employeeController.list = function(req, res) {
  Employee.find({}).exec(function(err, employees){
    if (err) {
      console.log('Error', err);
    }
    else {
      res.render('../views/employees/index', {employees: employees});
    }
  });
};

employeeController.show = function(req, res) {
  Employee.findOne({_id: req.params.id}).exec(function (err, employee){
    if (err) {
      console.log('Error', err);
    }
    else {
      res.render('../views/employees/show', {employee: employee});
    }
  });
};
