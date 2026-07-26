//Now Currently we have all of our logic inside of our routes/api directory

const { employees } = require("../model/employees.json");

//And our logic is essentially the route handlers so we  remove that logic and bring it here to the controller and also the data so these functions can work with these data
// const data = {};
// data.employees = require("../model/employees.json"); //So these is like connecting to the database in the future we will demostrate it cleary

//So lets have the data object set Like these and if you have worked with react am thinking more about the react way to do these
//Because just no i have the employees data set directly inside the data object,  And there is setEmpleyees function that i will use inside of these other functions 
const data = {
  employees:require("../model/employees.json"),
  setEmployees: function (data) {
    this.employees = data;
  }
};


const getAllEmployees = (req, res) => { //Now get all employees doesent need any extra work because we are just returning all of the employees by referencing data.employees
  res.json(data.employees);
};

// const createNewEmployee = (req, res) => {
//   res.json({
//     firstname: req.body.firstname, //Once again not writing all the code for an API at these point just showing how we can get the parameters from a post request and then send those parameters back BUT THIS IS HOW WE CAN HANDLE THE PARAMETERS IN EACH ROUTE IN AN API'
//     lastname: req.body.lastname,
//   });
// };

const createNewEmployee = (req, res) => {  //NOW TO CREATE A NEW EMPLOYEE THERE IS A LITTLE BIT MORE WORK HERE
  const newEmployee = {
      id: data.employees?.length ? data.employees[data.employees.length - 1].id + 1 : 1,
      firstname: req.body.firstname,
      lastname: req.body.lastname
  }

  if (!newEmployee.firstname || !newEmployee.lastname) {
      return res.status(400).json({ 'message': 'First and last names are required.' });
  }

  data.setEmployees([...data.employees, newEmployee]);
  res.status(201).json(data.employees);

//So here first in the const newEmployee we wanna create a new ID and instead of using the Libraries Like UUID we are just checking the last ID and add 1
//Other than that the firstname and the lastname are assigned to the parameters we are getting from request.body.firstname and lastname 
//After that we are making sure that the firstname and the lastname are sent and if not we are sending in the res.status(400) and the mesage that the first and lastname are required
//After that we are going to use the employees function to set the employees to the new information and of cource the newEmployee at the end of an array
//So lastly am sending the status code 201 and the all the employees so as to see the update
}

// const updateEmployee = (req, res) => {
//   //Now lets do the same in a put request
//   res.json({
//     firstname: req.body.firstname, 
//     lastname: req.body.lastname,
//   });
// };

const updateEmployee = (req, res) => { //Okay Update Employee Gets Alittle bit more complicated but its not too bad
  const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));
  if (!employee) {
      return res.status(400).json({ "message": `Employee ID ${req.body.id} not found` });
  }
  if (req.body.firstname) employee.firstname = req.body.firstname;
  if (req.body.lastname) employee.lastname = req.body.lastname;
  const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
  const unsortedArray = [...filteredArray, employee];
  data.setEmployees(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
  res.json(data.employees);

  // First we are going to find the employee if we are given the ID and if we donot find him we return a message and that would be the end of it if we dont have an ID
  // Then are going to check if we got a firstname then we are going to set the employee that we found to the new parameter value  and the same to lastname
  //And then we filter the array and remove the existing employee record from it 
  // So then we have an array without the existing employee ID and then we have the new employee data that we have updated(And we need to remember its unsorted array because we do need these array in a chronological order by Id)
  //And so when i call the setEmployees from our data object i go ahead and sort the array
  // After then i return all the employees
}

// const deleteEmployee = (req, res) => {
//   //The same to delete we will just send in the ID
//   res.json({ id: req.body.id });
// };

const deleteEmployee = (req, res) => {
  const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));
  if (!employee) {
      return res.status(400).json({ "message": `Employee ID ${req.body.id} not found` });
  }
  const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
  data.setEmployees([...filteredArray]);
  res.json(data.employees);
  //Very simiral We just find that employee if we didint get the ID we return a message
//Then we also create a filtered array just like above
//Then at these point we have dereted the employee so all that we need to do is setEmployees to filteredArray
//And we return all employees to see all the changes that we have made
}

// const getEmployee = (req, res) => {
//   res.json({ id: req.params.id }); ///Now these is diff instead of req.body it req.params.id Because its a named Parameter and we are pulling it directly out of the URL so here we are responding with just what we received just as an example
// };

const getEmployee = (req, res) => {
  const employee = data.employees.find(emp => emp.id === parseInt(req.params.id));
  if (!employee) {
      return res.status(400).json({ "message": `Employee ID ${req.params.id} not found` });
  }
  res.json(employee);

  //And then the getEmployee and again these is handling a request for a single employee
  //So we find out who that employee is and once again we if he is not available we return a message
  //After then we return the employee if he exist
}

module.exports = {
  getAllEmployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
}; 


// Now if you remember we were about to provide the JS code this is note  dealing with the express or node 
// But the code If we were to have an API that was going to Update Not the JSON file but just in memmory and kind of emulate an API before we have connected it to the database
//So at these point i can provide that code and you can compare it with your challenge

