const express = require("express");
const app = express();

const path = require("path");
const PORT = process.env.PORT || 3500;

//Defining our first route
app.get(/^\/$|\/index(\.html)?$/, (req, res) => {
  //what if also user searched index.html and also we can make .html Optional
  //   res.send("Hello World!");

  //So lets server index.js file so we can also send a file not words
  //   res.sendFile("./views/index.html", { root: __dirname }); //First way
  res.sendFile(path.join(__dirname, "views", "index.html")); //Second way
});

app.get(/^\/new-page(\.html)?$/, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

// Re-Direct from old page to new page
app.get(/^\/old-page(\.html)?$/, (req, res) => {
  res.redirect(301, "/new-page.html"); //302 by default but we need 301 to be re-directed
});



// CHAINING ROUTE HANDLERS
// Route Handlers - Are anonmous functions that we have after the route
// We can chain them or use more than one of those
app.get(
  /^\/hellow(\.html)?$/,
  (req, res, next) => {
    console.log("Attempted to log Hellow.HTML");
    next(); //After the first handler we call next and what it does is move on to the next handler
  },
  (req, res) => {
    res.send("Hellow World !!!"); //We can keep going when ever we like
  },
);
//Note when we call next to the first handler the others wont work so it needs to be called at the last handler

//other METHOD OF CHAINING
const one = (req, res, next) => {
  console.log("one");
  next();
};

const two = (req, res, next) => {
  console.log("two");
  next();
};

const three = (req, res) => {
  console.log("three");
  res.send("Finished!");
};
app.get(/^\/chain(\.html)?$/, [one, two, three]); //Here we provide these handlers in an array
//These route handlers works in a same way as MIDDLEWARE


// DEFAULT ROUTE
// Express handles routes like a default so here at the end you can put default
app.use((req, res) => {
  //here if the route is not found we also need to keep the status code 404 Because when we are sending a file it now sends 200 Status code
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// // SMART VERSION
// app.use((req, res) => {
//   res.status(404);

//   if (req.accepts('html')) {
//     res.sendFile(path.join(__dirname, 'views', '404.html'));
//   }
//   else if (req.accepts('json')) {
//     res.json({ error: '404 Not Found' });
//   }
//   else {
//     res.type('txt').send('404 Not Found');
//   }
// });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//Here we gonna use the app keyword not the server keyword
// Express automatically sets the status code and the content type UNLIKE only NODE server


// In the next LESSON we will learn MIDDLEWARE and we will FIX the 404 
// Because right now we are just derivering a cunstom 404 for Get Request 
// But we can improve that using MIDDLEWARE as well

// And we will also learn how to server Those Static Derivables like the StyleSheet or any Javascript or Images and  etc
// And Also the Logs