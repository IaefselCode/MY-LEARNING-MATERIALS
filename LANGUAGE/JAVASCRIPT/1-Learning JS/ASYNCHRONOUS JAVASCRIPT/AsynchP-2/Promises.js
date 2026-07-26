// *****Promises*****

//Create Promise
//The Promise constructor takes a function as an argument, known as the executor function. This function is executed immediately by the Promise implementation, and it receives two functions as parameters: resolve and reject. You can call resolve(value) when the asynchronous operation completes successfully, and reject(error) when it fails.
const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation using setTimeout
    setTimeout(() => {
    const success = true; // Change this to false to simulate an error
    if (success) {
      resolve("Operation completed successfully!");
    } else {
      reject("Operation failed!");
    }}, 2000);
});


//Consume Promise
myPromise
  .then((message) => {                 //.then handles the success case
    console.log("Success:", message);
  })
  .catch((error) => {                  //.catch handles the error case
    console.error("Error:", error);
  });





//fs readFile with Promise
fs.promises
  .readFile("path/to/file", { encoding: "utf-8" })
  .then((data) => {
    console.log("File data:", data);
  })
  .catch((err) => {
    console.error("Error reading file:", err);
  });





//fetch API with Promise
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    console.log("Post", data);
  })
  .catch((error) => {
    console.error("Error fetching post:", error);
  });
//In this example, we use the fetch API to make an HTTP GET request to a placeholder API that returns a post. The fetch function returns a Promise that resolves to the response of the request. We then chain .then() methods to handle the response and parse it as JSON. Finally, we log the title of the post to the console. If there is an error during the fetch operation, we catch it using .catch() and log the error message.


//fetch API with Axios Promise
// const axios = require("axios");
axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log("Post Title (Axios):", response.data.title);
  })
  .catch((error) => {
    console.error("Error fetching post (Axios):", error);
  });



//NOTE
//Promises provide a cleaner and more manageable way to handle asynchronous operations compared to traditional callback functions. They help avoid callback hell and make it easier to chain multiple asynchronous operations together.
//Promises have three states:
//1. Pending: The initial state, neither fulfilled nor rejected.
//2. Fulfilled: The operation completed successfully.
//3. Rejected: The operation failed.

// NOTE:1
// promises always have a success pass and failed path

// NOTE:2
//Thats why we say AXIOS is Promise based