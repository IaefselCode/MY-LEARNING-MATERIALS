//Now we have already handled and tested the registration
//But of course now we need to go and handle the authorization as well
const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const bcrypt = require("bcrypt");

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
    //Now Later Here is were we would create a JWT to send so as can be used with the other routes that we want protected in our API 
    //So we would actually create and send a couple of JWT'S (Which would be a normal Tokec and the the Refresh Token)
    res.json({ success: `User ${user} is logged in!` });
  } else {
    res.sendStatus(401);
  } 
};

module.exports = { handleLogin };
//So after then we need to create a route for authController