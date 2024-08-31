const Employee = require('../models/EmployeeModel');

//CREATE employee
const createEmployee = async (req, res) => {
    try {
        const { empId, empFirstName,empMiddleName,empLastName,  designation, teamId } = req.body;

        const employee = new Employee({
            empId,
            empFirstName,
            empMiddleName,
            empLastName,
            designation,
            teamId,
        });

        await employee.save();

        res.status(201).json({ message: 'Employee created successfully', employee });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//GET all employee
const getAllEmployees = async (req, res) => {
    try {
      const employees = await Employee.find().populate('teamId');
      res.status(200).json(employees);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// GET employee by Id
const getEmployeeById = async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.id).populate('teamId'); // findById is only used for finding a document by its _id.
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      res.status(200).json(employee);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  //UPDATE employee
  
  const updateEmployee = async (req, res) => {
    try {
      const EmpId = req.params.id; // Get the Emp ID from the URL parameters
      const updatedData = req.body; // Get the updated data from the request body
  
      const updatedEmployee = await Employee.findByIdAndUpdate(EmpId, updatedData, { new: true });
  
      if (!updatedEmployee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      res.status(200).json({ message: 'Employee updated successfully', updatedEmployee });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  //DELETE employee
  const deleteEmployee = async (req, res) => {
    try {
      const employeeId = req.params.id; // Get the employee ID from the URL parameters
  
      const deletedEmployee = await Employee.findByIdAndDelete(employeeId);
  
      if (!deletedEmployee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      res.status(200).json({ message: 'Employee deleted successfully', deletedEmployee });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  

module.exports = { createEmployee, getAllEmployees, getEmployeeById, updateEmployee, deleteEmployee};
