import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  // ***GETTING DATA FROM API***
  // axios.get('https://reqres.in/api/users?page=2')
  //GETTING DATA FROM API
  // "C:\xampp\htdocs\AJAX\Ajax2\users.json"
  // .get("https://api.github.com/users")

  const loadUsers = () => {
    axios
      .get("https://api.github.com/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const renderData = () => {
    return data.map((user) => (
      <div key={user.id} className="user">
        <img src={user.avatar_url} alt={user.login} width="100" />
        <p>{user.login}</p>
        <p>
          <a href={user.html_url}>View Profile</a>
        </p>
      </div>
    ));
  };

  // To save the users to local storage
  const saveusers = () => {
    if (data.length > 0) {
      localStorage.setItem("users", JSON.stringify(data));
      alert("Users are Saved");
    }
  };

  // To retrieve the users from local storage
  const savedUsers = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    console.log(users);
    setData(users);
  };

  //Clearing Users
  const clearUsers = () => {
    localStorage.removeItem("users");
    setData([]);
    alert("Users are Cleared");
  };


  // ****POSTING DATA TO AN API****
  const postData = () => {
    axios
      .post("https://api.github.com/users", {
        login: "IaefselCode",
        id: 47,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };


  //****PUTTING DATA TO AN API****/
const pustData = () => {
    axios
      .put("https://api.github.com/users", {
        login: "IaefselCode",
        id: 47,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  
  //****DELETING DATA TO AN API */
  const deleteData = () => {
    axios
      .delete("https://api.github.com/users")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <h1>Axios 1</h1>
      <h2>Github Users</h2>
      <button onClick={loadUsers}>LoadUsers</button>
      <button onClick={saveusers}>Save Users</button>
      <button onClick={savedUsers}>Get Saved Users</button>
      <button onClick={clearUsers}>Clear Users</button>
      {renderData()}
      <h2>Posting Data To An API</h2>
      <button onClick={postData}>Post Data</button>
      <h2>Deleting Data To An API</h2>
      <button onClick={deleteData}>Delete Data</button>
    </>
  );
}

export default App;

//So here is the code for making a GET request using Axios in a React component. The useEffect hook is used to make the request when the component mounts. The response data is logged to the console, and any errors are caught and logged as well.
