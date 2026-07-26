// TUTORIAL 1
// const WebSocket = require("ws");
// const wss = new WebSocket.Server({ port: "3000" });

// wss.on("connection", (socket) => {
//   socket.on("message", (message) => {
//     console.log(message.toString());
//     socket.send(`${message}`);
//   });
// });

// Note that we only see the message in the same browser but if i open another tab it does not broadcast it anyware 
// Now lest see how to implement it very easly with socket.IO 

//So we gonna add activity detection in our chatapp

import {createServer} from "http"
import {Server} from "socket.io"

const httpServer = createServer()

const io = new Server(httpServer, {
  //So here we gonna deal with cors issue Note: Dont use the origin "*" because it will give everyone access 
    origin: process.env.NODE_ENV === "production" ? false : ["http://localhost:5500"], //Also if your hosting your backend and frontend separately then you will need to gove your frontend domain access here
  cors: {
    origin: process.env.NODE_ENV === "production" ? false : ["http://localhost:5500","http://127.0.0.1:5500"], //Also if your hosting your backend and frontend separately then you will need to gove your frontend domain access here
    // origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"]
  }
})

io.on("connection", (socket) => { //So here we will just continue as normal as in websockets looking for the connection and then get the socket and then on but we will make couple of changes
console.log(`User: ${socket.id} connected`) //So here we will log the socket ID because unlinke websockets every socket in socket.io has an id

  socket.on("message", (data) => { //Aslo in socket.io we dont have to worry about buffer anymore
     console.log(data)
    // socket.send(`${data}`); //Now here we dont use socket.send but we use io.emit and its going to emit to every one who is connected to the server
    io.emit('message',`${socket.id.substring(0,5)}: ${data}`) //And then here we are saying these is the message we send first five items of ID and the data
  });
});
//So here we got socket.io and we have it emiting message that it receives to everyone 
// So after that we need to make sure the server is listening so down here

httpServer.listen(3500, ()=>
console.log(`Listening on Port 3500`)
)
//Here we are listening for the port 3500 these is where we gonna be sending in the frontend 
//So THE FINALIZATION OF TUTORIAL 2 is just basic everyone can access the socket with their own unique ID
// also message are broadcasted to all the users You can Test using Browser Tab

// // BUT THERE ALSO MUCH MORE THINGS TO DO LIKE
// How to send message to other specific users 
// Chat Rooms and etc
// Show that somebody is Typing
// Also Adding the Express server