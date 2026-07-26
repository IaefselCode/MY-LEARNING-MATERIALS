import WebSocket from 'ws';

const wss = new WebSocket.Server({ port: 8080 }); //initalize the server
//These creates its own HTTP server just for the handshake process

//Connection Event
wss.on('connection', (socket, request) => { //socket is the connection to the client, request is the request from the client which includes the headers and the url
  const ip = request.socket.remoteAddress; //get the ip address of the client

  socket.on('message', (rawData) => {
    const message = JSON.parse(rawData); //parse the message
    console.log('Received message:', message); //log the message
    socket.send(JSON.stringify({ message: 'Message received' })); //send the message to the client
  });
});
//It will fire after the 1 or 1 connection is established   

//Error Event
wss.on('error', (error) => {
  console.error('WebSocket error:', error); //log the error
});

//Close Event
wss.on('close', () => {
  console.log('Client disconnected'); //log the client disconnection
});

//Message Event
wss.on('message', (message) => {
  console.log('Received message:', message); //log the message
});