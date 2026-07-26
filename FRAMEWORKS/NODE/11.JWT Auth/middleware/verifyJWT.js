//So here we gonna first inport JWT and the dotenv
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus(401);
  console.log(authHeader); // Bearer token
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); //invalid token
    req.user = decoded.username;
    next();
  });
};
module.exports = verifyJWT; 
//Now here our function should have request,responce and next as middleware should
//  And now we gonna define authHeader and this is going to be equal to req.headers['authorization'] 
// And we will chake to see if its actually received and if not we send back a responce 401
//After that we log the authHeader for when we test these we will be able to see in the console yo will see (Bearer token)
//So we can define our token now and we can set these equal to the authHeader.split(' ')[1];(Here we have slippted on the space then we have accessed the second value which is index 1 which is the token)
// And now we can verify the token by using jwt.verify  
//And here we will pass in the token first, then then the SECRET which is ACCESS_TOKEN_SECRET which will verify with this middleware
// And after then there would be the callback the will get the error and decoded(you can call it token if you want) because it will have decoded info from JWT 
// Then inside the callback we say if we have an error we gonna return 403(Forbiden) - Because we know at these point we ahave received the token but something about it is not right like it have been tempered
// So we send the 403 which means you forbiden from accessing these
//And then we will set the user equal to decoded.username and remember we passed in the username to the jwt so now its been decoded and we can read that
//And then we call next() from our middleware

// And Lasty we export

// Now with the middleware complete we can add it to the route or routes that we want to protect