//Now we have already handled and tested the registration
//But of course now we need to go and handle the authorization as well
const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const bcrypt = require("bcrypt");

//For JWT
const jwt = require("jsonwebtoken");
require("dotenv").config();
const fsPromises = require("fs").promises; //WE use fsPromises because we are still using our JSON file we have not configured any DATABASE
const path = require("path");
const { users } = require("../model/users.json");

const handleLogin = async (req, res) => {
  // Same as registerController
  const { user, pwd } = req.body;
  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "Username and Password are Required." });

  //So after that lets first find if the username exists
  const foundUser = usersDB.users.find((person) => person.username === user);
  if (!foundUser) return res.sendStatus(401); //nauthorized

  //   If we Do find the user we gonna evaluate password
  const match = await bcrypt.compare(pwd, foundUser.password);
  if (match) {
    //JWT
    const accessToken = jwt.sign(
      //Here we have defined accessToken is equal to jwt.sign() and the first thing we need to pass is the payload
      { username: foundUser.username }, //So what we are going to use is the username of the foundUser object (Note: You dont wanna pass in anything like a password or anything that would hurt your security) Because these is available to all if they get a hold to your tokens
      process.env.ACCESS_TOKEN_SECRET, //After that a second thing we need To create our accessToken is our Secret which we stored in our .ENV file
      { expiresIn: "30s" }, //Finnaly what we need is an option value here so we can say when these TOKEN expires we used 30s just for the Tutorial but in realworld systems will be like 5min or 15min
    );

    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET, //Here we access our secret
      { expiresIn: "1d" }, //It lusts much longer than the access token but also expires i have given it (1d) {All the magic is done by jsonwebtoken dependency} So even if someone got hold of it they only use it 1day
    );

    //Also we would to save our refresh token to the Database so if user logs out it will also be invalidated
    //So thats means In the future we will create a logout route that will help us to invalidate refresh token when the user loggs out
    const otherUsers = usersDB.users.filter(
      (person) => person.username !== foundUser.username,
    );
    const currentUser = { ...foundUser, refreshToken };
    usersDB.setUsers([...otherUsers, currentUser]);

    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "users.json"),
      JSON.stringify(usersDB.users),
    );
    //So what we have done up here is we have first identifiend the other users and then we identified the current user and sread in and add the refreshToken
    //Then we took the otherUsers and the currentUser and send them to the Database So the other users and the current user with the refresh token are sent to the DATABASE
    // Then we create again a the users.json file to see the update

    // NOW ABOUT THE ACCESS TOKEN
    
// So we want to store it as a cookie (But we know that is not secure and could be vulnerable to JS  )
    // but if we set the cookie as HTTP only it is not available to JS So thats what we gonna do
    res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
   //So we say its jwt and passin our refreshToken and after that we want to give options and the first option is  httpOnly to true and maxAge:24*60*60*1000(These is in milliseconds so here we get 1Day)
    //Now these cookie always sent with every request and the good thing with httpOnly cookie is its not available to JS and its not 100% secure but is much more secure than storing you refreshToken to anyware available to JS
    // res.json({ success: `User ${user} is logged in!` });

    // So we are sending the refreshToken as httpOnly Cookie and the accessToken as JSON and we are also storing the refresh token in a database so as it can be cross referenced when it is sent back to create another accessToken


    //But we still need to send the refreshToken and the accessToken to the user the refresh token already sent but the access token
    // The easiest way to send it to the user is as JSON (And the frontend dev will stole these accessToken in memory or RAM so when the app is closed it should be forgoten)
    //Because any place where JS can store it is not really secure because it can also be accessed by HACKERS Eg(Localstorage,cookie)
    res.json({ accessToken, success: `User ${user} is logged in!` });
    //BUT Sending it as JSON kind of creates a DYLEMA for a FrontEnd Dev because he do need to store the refreshToken

    
  } else {
    res.sendStatus(401);
  }
};

module.exports = { handleLogin };
//So after then we need to create a route for authController
