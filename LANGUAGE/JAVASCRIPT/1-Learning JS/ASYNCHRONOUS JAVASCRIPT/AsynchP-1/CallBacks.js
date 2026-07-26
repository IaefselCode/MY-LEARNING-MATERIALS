// *****CallBacks*****
//Its like a setTimeOut and a setTimeOut will take a CallBack function which will be executed
//after the timeOut completes in (milliseconds)

// setTimeout 1
setTimeout(() => {
  console.log("Waited 1 Second");
}, 1000);
//Now this is Asynchronous because we tell javascript to execute the console after one second



//nestedSetTimeout - You can also have nested setTimeouts 2
setTimeout(() => {
  console.log("3");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("1");
    }, 1000);
  }, 1000);
}, 1000);



//Button Event Handles in Javascript 3
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log("Button Clicked");
});
// This is also Asynchronous because the event listener waits for the button to be clicked so it can execute the CallBack function



//error first CallBacks - This is the CallBack which comes when we get an error when we are doing some Asynchronous operation like reading a file 4
//fs is the file system module in Node.js that allows you to work with the file system on your computer.
const fetch = require("node-fetch");

const fs = require("fs");
fs.readFile("path/to/file",{encoding:'kind of encoding we want to convert it to'}, (err, data) => { 
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File data:", data);
});
//In this example, if there is an error while reading the file, the err parameter will contain the error details, and we handle it accordingly. If there is no error, we proceed to process the data.

//NOTE
//Error handling is important in asynchronous operations to ensure that your program can gracefully handle unexpected situations without crashing.