import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'



function App() {
  return (
    <>
      REACT ROUTER
      <div>
        <h2>React Router</h2>
        <Link to={"/"}><button>Home</button></Link>
        <Link to={"/menu"}><button>Menu</button></Link>
        <Link to={"/dashboard"}><button>Dashboard</button></Link>
        <Link to={"/about"}><button>About</button></Link>
        <Link to={"*"}><button>Not FoundPage</button></Link>
        <Link to={"/profiles"}><button>Profiles Page</button></Link>
      </div>
      <br /><br />
      <div>
        <h2>Normal Link</h2>
        <a href="/"><button>Home2</button></a>
        <a href="/menu"><button>Menu2</button></a>
        <a href="/dashboard"><button>Dashboard2</button></a>
        <a href="/about"><button>About2</button></a>
        <a href="*"><button>Not FoundPage2</button></a>
      </div>
    </>
  );
}
export default App
