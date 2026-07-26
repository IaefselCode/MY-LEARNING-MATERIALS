import express from "express";
import { Server } from "socket.io";
import path from 'path'

import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path. dirname( __filename)


const PORT = process.env.PORT || 3500;

const app = express();

app.use(express.static(path.join( __dirname, "public")))

const expressServer = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
//Now here in the cors
//Because we are using Express (We will be hosting the frontend app with Express in the server as well)
//So thats means we would no longer need the "http://localhost:5500", "http://127.0.0.1:5500"
//But if you wanna the separation of concern you could host Your Frontend app else ware and then you will need to put in the address of whatever your hosting that up
//But here it will no longer be a cross origin request so frontend and backend will be on the same server

// So in order to host the frontend in our express backend we need to setup a static server 
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

  // Only to the user that is connected
  socket.emit('message',"Welcome to chat App!") //Alittle welcome when someone connects

  //To other users showing them that you have been connected but not you
  socket.broadcast.emit('message',`User: ${socket.id.substring(0, 5)} connected` ) //Every one else except the user


  //listening for a message event
  socket.on("message", (data) => {
    console.log(data);

    io.emit("message", `${socket.id.substring(0, 5)}: ${data}`); //Everyone that is connected to the server
  });

  //When user disconnects - this will go to all other
  //Note: Its inside here because for a user to be disconnected will have to be connected first
  socket.on('disconnect', ()=>{
    socket.broadcast.emit('message',`User: ${socket.id.substring(0, 5)} Disconnected` ) //Send a message to everyone else except the person that is disconnected
  })

  //Listen for activity
  socket.on('activity',(name)=>{
    socket.broadcast.emit('activity', name)
  })
});
