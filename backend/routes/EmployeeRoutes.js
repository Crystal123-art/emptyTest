const { Router } = require("express");
const { createEmployee,
        getAllEmployees,
        getEmployeeById,
        updateEmployee,
        deleteEmployee } = require("../controller/EmployeeController");

const  router = Router();

//POST
router.post("/employee", createEmployee);

//GET
router.get("/employees", getAllEmployees);
router.get("/employee/:id", getEmployeeById);

//PUT
router.put('/update-employee/:id', updateEmployee);


//DELETE
router.delete('/employee/:id', deleteEmployee);


module.exports = router;
