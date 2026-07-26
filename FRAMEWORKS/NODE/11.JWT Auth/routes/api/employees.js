const express = require("express");
const router = express.Router();
const employeesController = require('../../controllers/employeesController');
// const verifyJWT = require('../../middleware/verifyJWT') //So we can just import it and keep it before the controller and so it will go to the middleware first then the route

router
  .route("/") 
  // .get(verifyJWT,employeesController.getAllEmployees) //This is Good if you want to protect only one route
  .get(employeesController.getAllEmployees) //To test it we gonna add we gonna log in the user then within 30s we gonna copy the jwt we get token and pest it to the bear token of empoyees and see if it works But if we want to use it in all our routes then we gonna just use it as middleware infront of all our routes
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
