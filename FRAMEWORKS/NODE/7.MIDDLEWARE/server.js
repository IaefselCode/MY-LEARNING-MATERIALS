const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");
const { logger } = require("./middleware/logEvents");
const  errorHandler  = require("./middleware/errorHandler");


const PORT = process.env.PORT || 3500;



// MIDDLEWARES
//Custom middleware to log our events and requests and everthing so Its suppose to be on Top
//Custom middleware need to have next so it can move on but the built in middlewares dont need to have it bacouse its already built in
app.use(logger);
//So after here we can log all the events that we are doing
//But we also need to create a logfile(And we already have a logEvents.js module) So we gonna use it
//By Creating a middleware file copying it in there and just changing how it creates files

//So here we are importing a function to use inside of our anonimous function but we can clean it up a litte bit
//By copying the anonimous function to the log Event and and create a new variable called loggger so as it can be a custom middleware that we export

// Cross Origin Resource Sharing
//Helps in requests from external Origin
// app.use(cors()); //But these is just open for all external APIs

//So lets make a whitelist
const whiteList = [
  "https://www.google.com",
  "http://127.0.0.1:5500",
  "http://localhost:3500",
]; //Here your website is what ever domain or website that will access you node Backend But you will take the local domains our after development
const corsOptions = {
  //Now lets create the function that will allow cors to do these
  origin: (origin, callback) => {
    //the origin in the brackets is the origin from who ever website is requesting and the other
    if (whiteList.indexOf(origin) !== -1 || !origin) { //We will remove !origin after development
      //If the domain is in the whiteList then we are going to let it pass
      callback(null, true); //Then we can set the callBack and then the first Parameter is null which is usually the error The second to true thats meaans the origin will be sent back (Like saying yes that its the same origin and its allowed)
    } else {
      callback(new Error("Not allowed by CORS")); //So if its not we send the error
    }
  },
  optionsSuccessStatus: 200, //The Option two we send the success status 200
};

app.use(cors(corsOptions));  //After creating the corsOptions we pass them in our middleware

// Express has a built in default error handler and thats where when we create new error we send to but we can also create our custom error handler after everything even after default route 




// built-in middleware to handle urlencoded data
// in other words, form data:
// 'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({ extended: false })); //Because its water fall then these will be applied to all routes that come in (Also we need to start with app.use() keyword)
//So we need to use these middleware so as to get that data when form data is submitted

// built-in middleware for json
app.use(express.json()); //These helps to get JSON data when submitted and its applied to all routes

//serve static files
app.use(express.static(path.join(__dirname, "/public"))); //These Helps to server Static Files
//So we have some files that we want readly available for the public and Express will Automatically route those files there
//Because these is applied before other routes




//ROUTES
app.get(/^\/$|\/index(\.html)?$/, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get(/^\/new-page(\.html)?$/, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

// Re-Direct from old page to new page
app.get(/^\/old-page(\.html)?$/, (req, res) => {
  res.redirect(301, "/new-page.html");
});

// CHAINING ROUTE HANDLERS
app.get(
  /^\/hellow(\.html)?$/,
  (req, res, next) => {
    console.log("Attempted to log Hellow.HTML");
    next();
  },
  (req, res) => {
    res.send("Hellow World !!!");
  },
);

//other METHOD OF CHAINING
const one = (req, res, next) => {
  console.log("one");
  next();
};

const two = (req, res, next) => {
  console.log("two");
  next();
};

const three = (req, res) => {
  console.log("three");
  res.send("Finished!");
};
app.get(/^\/chain(\.html)?$/, [one, two, three]);

// DEFAULT ROUTE
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// app.use((req, res) => {
//   res.status(404);
//   if (req.accepts('html')) {
//   res.sendFile(path. join(_dirname, 'views', '404.html'));
//   } else if (req.accepts('json')) {
//   res.json({ error: "404 Not Found" });
//   } else {
//   res.type('txt').send("404 Not Found");
//   }
//   });
  //I can use postman or something else to tryout the JSON and txt


//ERROR HANDLER
app.use(errorHandler) 
// We can also create a middleware of the error handler


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// MIDDLEWARE - Its Anything btn the request and a responce
// so the ROUTE HANDLERS we created are basically MIDDLEWARE

// By Creating Some Specific Middleware
// There are three types of MIDDLEWARE
// 1.BUILT IN MIDDLEWARE - There three(3)
// 2.CUSTOM MIDDLEWARE(We Build By Our Selves)
// 3.MIDDLEWARE FROM THIRDPARTIES
