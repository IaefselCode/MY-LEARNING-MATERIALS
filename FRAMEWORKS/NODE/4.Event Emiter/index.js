const logEvents = require('./logEvents'); //Here we are using ./ because its a custome module not a commoncore module or npm module

const EventEmitter = require('events') //Now we are ready to work with the events common core module

class Emitter extends EventEmitter {};

//initialize object
const myEmitter = new Emitter();

//add listener for the log event
myEmitter.on('log', (msg) => logEvents(msg));

// Now that we are listening for the log event
//We need to emit the event to test this our

// Lets also use a timeout which will lets us understand how everything works
setTimeout(()=>{
    //Emit Event
    myEmitter.emit('log','log event emitted!'); //So here you can also emit two events as long as in the message argument you add another argument
}, 2000)

//So this is how to setup an emmiter to not only listen for but to emmit events 
//There might be some sort of actions that you want to emmit events for 
//Example
//  When we create a web server wanting to emmit events to show what requests camein and log all of those so we have the details for the activities in our webServer
//And thats what we will be building next A WEBSERVER with NODEJS























