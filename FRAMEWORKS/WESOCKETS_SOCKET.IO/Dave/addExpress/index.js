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

io.on("connection", (socket) => {
  console.log(`User: ${socket.id} connected`);

  socket.on("message", (data) => {
    console.log(data);

    io.emit("message", `${socket.id.substring(0, 5)}: ${data}`);
  });
});
