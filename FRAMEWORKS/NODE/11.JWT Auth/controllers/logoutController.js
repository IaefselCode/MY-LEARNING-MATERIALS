//Logout route will help to delete the refreshToken and not let it last for the fullDuration
// And that gives the users to logOut and ofcoulse delete any existing tokens on the frontend when the logout button is clicked
//So we will copy refresh token controller and do some modification
const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const fsPromises = require("fs").promises;
const path = require("path"); //For Database but later we will replace with database

const handleLogout = async (req, res) => {
  // on client, also delete the accessToken (so we delete the refreshToken)
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //No content
  const refreshToken = cookies.jwt;

  // Is refreshToken in db?
  const foundUser = usersDB.users.find(
    (person) => person.refreshToken === refreshToken,
  );

  if (!foundUser) {
    //Here even if we dont find user we could also clear cookie
    res.clearCookie("jwt", { httpOnly: true });
    return res.sendStatus(204); //Forbiden
  }
  // Delete refreshToken in db
  const otherUsers = usersDB.users.filter(
    (person) => person.refreshToken !== foundUser.refreshToken,
  ); //filter the other users first
  const currentUser = { ...foundUser, refreshToken: "" };
  usersDB.setUsers([...otherUsers, currentUser]);
  await fsPromises.writeFile(
    path.join(__dirname, "..", "model", "users.json"),
    JSON.stringify(usersDB.users),
  );

  const isProduction = process.env.NODE_ENV === "production";
  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: isProduction ? "None" : "Lax",
    secure: isProduction,
  });
  // res.clearCookie('jwt', {httpOnly: true});// Secure true - only serves on https 
  // return res.sendStatus(204);
};

module.exports = { handleLogout };
//So now after here we should be good to go to the logoutRoute
