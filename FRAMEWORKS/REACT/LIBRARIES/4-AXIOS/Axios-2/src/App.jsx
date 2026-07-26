import axios from "axios";
import "./App.css";

function App() {

  //GET
  //When getting data AXIOS will give us a response object 
  //And we don't even have to parse the data as JSON Because the data will come in JSON format but axios already converted it to normal javascript
  //But if You are using fetch API you have todo that yourself
  //Catchng Data from API
  const getUsers = () => {
   return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  };

  //GET with params
  // axios.get('https://jsonplaceholder.typicode.com/posts', {
  //   params: { userId: 1 }
  // })
  // .then(response => {
  //   console.log(response.data)
  // })
  // .catch(error => {
  //   console.error('Error fetching data with params:', error)
  // })
  //POST
  const createUser = () => {
    return axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: "John Doe",
        customer: true
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error creating user:", error.message);
      });
  };
  
  //PUT
  //It is used when you need to replace one particular resource
  const putUser = () => {
    return axios
      .put("https://jsonplaceholder.typicode.com/users/1", {
        name: "John Doe",
        customer: true
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };
  //DELETE
   const deleteRequest = () => {
    return axios
      .delete("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };
  //PATCH
  //HEAD
  //OPTIONS
  //TRACE
  //CONNECT
  return (
    <>
      <h1>Axios 2</h1>
      <button onClick={getUsers}>Get Users</button>
      <button onClick={createUser}>Create User</button>
      <button onClick={putUser}>Put User</button>
      <button onClick={deleteRequest}>Delete Request</button>
    </>
  );
}

export default App;
