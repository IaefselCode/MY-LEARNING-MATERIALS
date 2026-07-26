const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");
const { logger } = require("./middleware/logEvents");
const  errorHandler  = require("./middleware/errorHandler");


const PORT = process.env.PORT || 3500;



// MIDDLEWARES
//Logger
app.use(logger);

//So lets make a whitelist
const whiteList = [
  "https://www.google.com",
  "http://127.0.0.1:5500",
  "http://localhost:3500",
]; 
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) { 
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS")); 
    }
  },
  optionsSuccessStatus: 200, 
};

app.use(cors(corsOptions));  




// built-in middleware to handle urlencoded data
// in other words, form data:
// 'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({ extended: false })); //Because its water fall then these will be applied to all routes that come in (Also we need to start with app.use() keyword)
//So we need to use these middleware so as to get that data when form data is submitted

// built-in middleware for json
app.use(express.json()); //These helps to get JSON data when submitted and its applied to all routes

//serve static files
app.use('/',express.static(path.join(__dirname, "/public"))); 
app.use('/subdir',express.static(path.join(__dirname, "/public")));
 //These Helps to server Static Files
//So we have some files that we want readly available for the public and Express will Automatically route those files there
//Because these is applied before other routes


//ROUTES
app.use("/subdir", require("./routes/subdir")) //These will route any request comming from the subdir to the router 
app.use("/", require("./routes/root"))
app.use("/employees", require("./routes/api/employees"));


// // CHAINING ROUTE HANDLERS
// app.get(
//   /^\/hellow(\.html)?$/,
//   (req, res, next) => {
//     console.log("Attempted to log Hellow.HTML");
//     next();
//   },
//   (req, res) => {
//     res.send("Hellow World !!!");
//   },
// );

// //other METHOD OF CHAINING
// const one = (req, res, next) => {
//   console.log("one");
//   next();
// };

// const two = (req, res, next) => {
//   console.log("two");
//   next();
// };

// const three = (req, res) => {
//   console.log("three");
//   res.send("Finished!");
// };
// app.get(/^\/chain(\.html)?$/, [one, two, three]);

// // DEFAULT ROUTE
// app.all('*',(req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
// });


app.use((req, res) => {  // DEFAULT ROUTE
  res.status(404);
  if (req.accepts('html')) {
  res.sendFile(path. join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
  res.json({ error: "404 Not Found" });
  } else {
  res.type('txt').send("404 Not Found");
  }
  });
  //I can use postman or something else to tryout the JSON and txt


//ERROR HANDLER
app.use(errorHandler) 
// We can also create a middleware of the error handler


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Here what we will do is to break these routes out into individual routers
// That are essentially min-servers for each specific route or min-apps