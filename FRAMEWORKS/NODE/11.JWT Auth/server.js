const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");

const verifyJWT = require('./middleware/verifyJWT')
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3500;

// MIDDLEWARES
//Logger
app.use(logger);

//CORS
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data for form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json()); //These helps to get JSON data when submitted and its applied to all routes

//middleware for cookies
app.use(cookieParser())

//serve static files
app.use("/", express.static(path.join(__dirname, "/public")));

//ROUTES
app.use("/", require("./routes/root")); //These will route any request comming from the root to the router
app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));
app.use("/refresh", require("./routes/refresh")); //Its going before verifyJWT because  because refresh route actually issues a new accessToken
app.use("/logout", require("./routes/logout"));
//So what will happen is the refresh endpoint will receive the cookie that have the refreshToken and then that will issue accessToken once it has expired

app.use(verifyJWT);//Its like a waterfall anything behind verifyJWT will be secured
app.use("/employees", require("./routes/api/employees"));

// DEFAULT ROUTE
app.use((req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});
//I can use postman or something else to tryout the JSON and txt

//ERROR HANDLER
app.use(errorHandler);
// We can also create a middleware of the error handler

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// lEST ALSO DO SOME LITTLE MORE CLEAN UP IN HERE TO GET RID OF THESE VIEWS THAT WE ARE NO LONGER GOING TO USE
//Also we are taking alot of space here with CORS so we gonna put it into config folder because its a configuration
//We are also going to get rid of the subdir because we are not going to use it anymore and also its roots and views
