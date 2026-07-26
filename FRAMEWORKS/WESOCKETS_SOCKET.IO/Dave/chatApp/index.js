import express from "express";
import { Server } from "socket.io";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3500;
const ADMIN = "Admin"; //We will use it later for selecting ADMIN user

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const expressServer = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//State for users because we are not connecting to the database right now
const usersState = {
  users: [],
  setUsers: function (newUsersArray) {
    this.users = newUsersArray;
  },
}; //prettymuch like useState in react

const io = new Server(expressServer, {
  cors: {
    origin:
      process.env.NODE_ENV === "production"
        ? false
        : ["http://localhost:5500", "http://127.0.0.1:5500"], //Also if your hosting your backend and frontend separately then you will need to gove your frontend domain access here
    methods: ["GET", "POST"],
  },
});

//Here there different type of messages that we can send
//So once we have a connection we can do alot inside
io.on("connection", (socket) => {
  console.log(`User: ${socket.id} connected`);

  // Upon connection - only to user
  // socket.emit("message", "Welcome to chat App!");
  socket.emit("message", buildMsg(ADMIN, "Welcome to Chat App"));

  // Also here we were sending to all others but now we need to send to all others in the room or in the revious room
  //We are going to handle it with an enterRoom listener
  socket.on("enterRoom", ({ nam, room }) => {
    //Leave previous room
    const prevRoom = getUser(socket.id)?.room;

    if (prevRoom) {
      socket.leave(prevRoom);
      io.to(prevRoom).emit(
        "message",
        buildMsg("ADMIN", `${nam} has left the room`),
      );
    }

    const user = activateUser(socket.id, nam, room);

    // Cannot update previous room users list until after the
    // state update in activate user
    if (prevRoom) {
      io.to(prevRoom).emit("userList", {
        users: getUsersInRoom(prevRoom),
      });
    }

    socket.join(user, room);

    //To the user that joined
    socket.emit(
      "message",
      buildMsg(ADMIN, `You have joined the ${user.room} chat room`),
    );

    //To everyone else
    socket.broadcast
      .to(user.room)
      .emit("message", buildMsg(ADMIN, `${user.name} has joined the room`));

    // Update user list for room
    io.to(user.room).emit("userList", {
      users: getUsersInRoom(user.room),
    });

    //Update rooms list for everyone
    io.emit("roomList", {
      rooms: getAllActiveRooms(),
    });

    //When user disconnects - this will go to all other
    socket.on("disconnect", () => {
      const user = getUser(socket.id);
      userLeavesApp(socket.id);
      if (user) {
        io.to(user.room).emit(
          "message",
          buildMsg(ADMIN, `${user.name} has left the room`),
        );

        io.to(user.room).emit("userList", {
          users: getUsersInRoom(user.room),
        });

        io.emit("roomList", {
          rooms: getAllActiveRooms(),
        });
      }
      console.log(`User: ${socket.id} Disconnected`);
    });

    //listening for a message event
    socket.on("message", (name, text) => {
      const room = getUser(socket.id)?.room;
      if (room) {
        io.to(room).emit("message", buildMsg(name, text));
      }
    });
  });

  //Listen for activity
  socket.on("activity", (name) => {
    const room = getUser(socket.id)?.room;
    if (room) {
      socket.broadcast.to(room).emit("activity", name);
    }
    socket.broadcast.emit("activity", name);
  });
});

//Function which will build the message that the server sends out But doesent directly impact the userState
function buildMsg(name, text) {
  return {
    name,
    text,
    time: new Intl.DateTimeFormat("default", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(new Date()),
  };
}

//User functions (They are going to directly impact the user state)
function activateUser(id, name, room) {
  const user = { id, name, room };
  usersState.setUsers([
    ...usersState.users.filter((user) => user.id !== id), //We use filter to avoid duplicates
    user,
  ]);
  return user;
}

function userLeavesApp(id) {
  usersState.setUsers(
    usersState.users.filter((user) => user.id !== id), //Here we are just filtering out and not passing in the new user
  );
}

function getUser(id) {
  return usersState.users.find((user) => user.id === id);
}

function getUsersInRoom(room) {
  return usersState.users.filter((user) => user.room === room);
}

function getAllActiveRooms() {
  return Array.from(new Set(usersState.users.map((user) => user.room)));
}
//Now all the functions are done so  it would be much easier to implement in our connection because its where everything happens
