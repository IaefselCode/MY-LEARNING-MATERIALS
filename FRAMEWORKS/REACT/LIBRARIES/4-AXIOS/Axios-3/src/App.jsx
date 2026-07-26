import "./App.css";
import React from "react";
import Get from "./Componets/get";
import Post from "./Componets/post";
import PutorPatch from "./Componets/put&patch";
import Delete from "./Componets/delete";
import SimultaneousRequest from "./Componets/simultaneous-request";
import axios from "axios";
import CustomHeader from "./Componets/custom-header";
import Transform from "./Componets/transform";
import ErrorHandling from "./Componets/error-handling";
import CancelTokens from "./Componets/cancel-tokens";

function App() {
  
  // Add a request interceptor
  //Helps to log details of every request made using Axios
  axios.interceptors.request.use(
    (config) => {
      console.log(
        `${config.method.toUpperCase()} request sent to ${
          config.url
        } at ${new Date().getTime()}`
      );
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <>
      <h1 className="text-3xl font-bold underline">Ajax-3</h1>
      <Get />
      <Post />
      <PutorPatch />
      <Delete />
      <SimultaneousRequest />
      <CustomHeader />
      <Transform />
      <h2>
        <u>Error Handlin</u>g
      </h2>
      <ErrorHandling />
      <CancelTokens />
    </>
  );
}

export default App;
