// *****Async/Await*****
//The async keyword is used to declare an asynchronous function, which returns a Promise.
//The await keyword is used to wait for a Promise to resolve before proceeding with the next line of code.
//So our rsults we will get them when we access the 'result' variable.
//So inside await we wait for the Promise to resolve.

// async function fetchData() {
//   const result = await new Promise((resolve) => {
//     setTimeout(() => resolve("Data fetched"), 2000);
//   });

//   console.log(result);
// }

// fetchData();

// //But the problem is when there is an error so here is where we use "try/catch" block
// try {
//   async function fetchData() {
//     const result = await new Promise((resolve) => {
//       setTimeout(() => resolve("Data fetched"), 2000);
//     });

//     console.log(result);
//   }

//   fetchData();
// } catch (error) {
//   console.log(error);
// }

// OTHER EG
const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }else {
      const data = await response.json();
      // console.log(data);
      return data;
    }
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};

fetchUserData(2).then(userData => {
  if (userData) {
    console.log(userData);
  }
});

// Without If/else
//   const fetchUserData = async (userId) => {
//   try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     const data = await response.json();
//       // console.log(data);
//       return data;
//   } catch (error) {
//     console.error('There has been a problem with your fetch operation:', error);
//   }
//   };

// fetchUserData(1).then(userData => {
//   if (userData) {
//     console.log(userData);
//   }
// });