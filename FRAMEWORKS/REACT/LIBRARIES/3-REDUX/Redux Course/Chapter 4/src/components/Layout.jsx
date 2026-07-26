import React from "react";
import { Outlet } from "react-router-dom";
import Snowfall from "react-snowfall";
import Header from "./Header";

const Layout = () => {
  return (
    <>
        <Snowfall color="white" snowflakeCount={200} />
      <Header />
      <main className="flex flex-row justify-center">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
//Outlet represents all of our children so we can just include them here in our layout Eg.Header,Footer etc
//So when we put the layout component into our app it can represent all of the children underneath

// Note outlet is where we are we display our routes and Layout is the main Parent Element
