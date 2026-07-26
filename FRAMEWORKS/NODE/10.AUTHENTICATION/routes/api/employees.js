//We are going to get the employees in the data folder
//It does not need to have any static files because we are just derivering JSON data
const express = require("express");
const router = express.Router();
const employeesController = require('../../controllers/employeesController');//Here we could deconstract those functions here as we import in we will leave the name controller because we are enfasizing the name controller here

//So now we can setup our routes so instead of just saying router.get and creating another router.post and another router.put
//And put paths in there
// What we can do
router
  .route("/") //Then again we can chain the different HTTP Methods that we w    ant to provide for these same route as a get and post request can both go to the same route
  .get(employeesController.getAllEmployees)
  .post(employeesController.createNewEmployee) //Now all of these actions are comming from the controller
  .put(employeesController.updateEmployee)
  .delete(employeesController.deleteEmployee);

//And then next we could heve a parameter in / also we could have a parameterdirectly in URL  /:ID
router
  .route("/:id") //Note :id is the route parameter and they can be more than one
  //Now in the GET request
  .get(employeesController.getEmployee);

module.exports = router;

// So these defenetly clean up our route file and separate our logic to the controller
//And thats really what MVC pattern is all about
