// we start out by pulling in some users from users Database That we are simulating with that JSON file
//And we are going to make it like useState if you are familiar with REACT
const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const fsPromises = require("fs").promises;
const path = require("path");
//We will also need to install a Package Called Bcrypt That will help us Hash And Sort The Passwords that we come in
//So we Can Securelly and Safely Store them in our Database
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  //Handler for the new user info that we will receive at these registerRoute And it also need to be an async Function
  const { user, pwd } = req.body; //Now when we first pull these inforamtion in the request is going to have a user and a password So lets Destructure that from the request body
  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "Username and Password are Required." });

  // check for duplicate usernames in the db
  const duplicate = usersDB.users.find((person) => person.username === user);
  if (duplicate) return res.sendStatus(409); //Confict
  try {
    //So here in a try block we gonna create a new user and also use bcrypt to hash the password (And Also Add a solt to it) And that helps to protect the password if your Database is somehow compremized
    const hashedPwd = await bcrypt.hash(pwd, 10); //10 salt rounds is also the default

    //Store the new user
    const newUser = { username: user, password: hashedPwd };

    //Now lest setTheNew Data with
    usersDB.setUsers([...usersDB.users, newUser]); //So here like in react we are spreding the usersDB,users and then add newUser(THAT'S MUTATION)

    //Lets go ahead and write it to our JSON file which we use as the DataBase In these simulation
    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "users.json"),
      JSON.stringify(usersDB.users),
    );

    //After then we are going to log to the console and send the status 201
    console.log(usersDB.users);
    res.status(201).json({ success: `New user ${user} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewUser };
