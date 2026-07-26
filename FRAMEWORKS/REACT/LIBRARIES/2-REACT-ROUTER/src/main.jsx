import { StrictMode } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import './index.css'

//Importing The Components to Route
import { createBrowserRouter, RouterProvider } from 'react-router-dom';//importing createBrowserRouter and RouterProvider
import App from './App.jsx'
import Dashboard from "./Components/Dashboard.jsx"
import About from "./Components/About.jsx"
import Menu from "./Components/Menu.jsx"
import NotFoundPage from "./Components/NotFoundPage.jsx"
import Profilespage from './Components2/Profilespage.jsx';
import Profilepage from './Components2/Profilepage.jsx';


//Defining and Using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <div>404 Page Not Found</div>//You Can Also use it when the user searcher the wrong URL
    // errorElement:  <NotFoundPage/>
  },
  {
    path: "/menu",
    element: <Menu />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  // Dynamic Routing
  {
    path: "/dashboard/:id",
    element: <Dashboard />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/profiles",
    element: <Profilespage />,
    children: [
      {
        path: "/profiles/:profileId",
        element: <Profilepage />
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />
  },
  // The "*" Sign Handles any URL that isn't explicitly defined in our createBrowserRouter setup


  
  // {
  //   path: "/profiles/:profileId",
  //   element: <Profilepage />
  // },

  // The Colon before id Indicates that the root is Dynamic and Can Change or Adopt based on input context or user interlaction
  //This also cleary means that the URL has the Dynamic Parameter and the "id" and "profilesId" can be different
  //And anything which maches this pattern its going to render their page
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />{/* 👈RouterProvider */}
  </StrictMode>,
)

// import { createBrowserRouter } from 'react-router-dom';//importing createBrowserRouter
// const router = createBrowserRouter([]);
// // It is used to find all the routes in your app and how they connect to components it uses the browsers history API  LIKE Adress bar to manage navigation between pages 
// eg Inside an array you can add an object and inside an object we add key named path it will have a string value of "/" meaning it will be the index or home page of our app "path:"/"" then 
// lets define the component that it will render as "element: <App/>"
// And then Import it

// The Next Step
// You need to install the "RouterProvider" From React Router - DOM This is the ReactRouter Component which makes your routing setup work 
// It Connects the createBrowserRouter Configuration to your App so react router knows how to handle them


// So In Routers There is 
// 1.Static Routing
// 2.Dynamic Routing

//Dynamic Route This are route that can accept variable parts as URL allowing it to handle different Data or Content based on a Value Provider in the URL
// Example How SocialMedias Manage so Many Pages
//They Couldint create a new account page every time someone signs up,right