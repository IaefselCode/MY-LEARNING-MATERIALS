//We are going to get the employees in the data folder
//It does not need to have any static files because we are just derivering JSON data
const express = require("express");
const router = express.Router();
// const path = require("path"); 
const data = {};
data.employees = require("../../data/employees.json"); //So these is like connecting to the database in the future we will demostrate it cleary

//So now we can setup our routes so instead of just saying router.get and creating another router.post and another router.put
//And put paths in there
// What we can do
router
  .route("/") //Then again we can chain the different HTTP Methods that we w    ant to provide for these same route as a get and post request can both go to the same route
  .get((req, res) => {
    res.json(data.employees);
  })
  .post((req, res) => {
    res.json({
      firstname: req.body.firstname, //Once again not writing all the code for an API at these point just showing how we can get the parameters from a post request and then send those parameters back BUT THIS IS HOW WE CAN HANDLE THE PARAMETERS IN EACH ROUTE IN AN API'
      lastname: req.body.lastname,
    });
  })
  .put((req, res) => {
    //Now lets do the same in a put request
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
  })
  .delete((req, res) => {
    //The same to delete we will just send in the ID
    res.json({ id: req.body.id });
  });

//And then next we could heve a parameter in / also we could have a parameterdirectly in URL  /:ID
router
  .route("/:id")
  //Now in the GET request
  .get((req, res) => {
    res.json({ id: req.params.id }); ///Now these is diff instead of req.body it req.params.id Because its a named Parameter and we are pulling it directly out of the URL so here we are responding with just what we received just as an example
  });

module.exports = router;

// We can check these routes using Postman or Thunder Client
