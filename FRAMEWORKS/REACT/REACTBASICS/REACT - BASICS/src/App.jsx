// Images imported from assets
import profilepic from "./assets/programmer.jpg";
import profilepic1 from "./assets/programmer1.jpg";
import profilepic2 from "./assets/programmer2.jpg";
import profilepic3 from "./assets/programmer3.jpg";
import profilepic4 from "./assets/programmer4.jpg";

import { Fragment, useState } from "react";

import "./App.css";
import Header from "./Components/1-Header";
import Footer from "./Components/1-Footer";
import Food from "./Components/1-Food";
import Carder from "./Components/2-Card";
import Button1 from "./Components/3-styling/Button1";
import Button2 from "./Components/3-styling/Button2";
import Button3 from "./Components/3-styling/Button3";
import Properties1 from "./Components/4-Properties1";
import Conditional from "./Components/5-Conditional";
import List from "./Components/6-ListRendering/List";
import Button11 from "./Components/7-EventHandling/Button";
import Button22 from "./Components/7-EventHandling/Button22";
import Hook1 from "./Components/HOOKS/Usestate/Hook1";
import Onchange from "./Components/HOOKS/Usestate/Onchange";
import Colorpicker from "./Components/HOOKS/Usestate/Colorpicker";
import Updaterfunction from "./Components/HOOKS/Usestate/Updaterfunction";
import ObjectUseState from "./Components/HOOKS/Usestate/ObjectUseState.jsx";
import ArrayUseState from "./Components/HOOKS/Usestate/ArrayUseState.jsx";
import ArrayObjects from "./Components/HOOKS/Usestate/ArrayObjects.jsx";
import TodoList from "./Components/HOOKS/Usestate/TodoList.jsx";
import Hook2 from "./Components/HOOKS/Useeffect/Hook2.jsx";
import WidthHeight from "./Components/HOOKS/Useeffect/WidthHeight.jsx";
import Clock from "./Components/HOOKS/Useeffect/Clock.jsx";
import Hook3a from "./Components/HOOKS/UseContext/Hook3a.jsx";
import Hook4 from "./Components/HOOKS/UseRef/Hook4.jsx";
import StopWatch from "./Components/HOOKS/UseRef/StopWatch.jsx";
import Hook5 from "./Components/HOOKS/UseMemo/Hook5.jsx";
// import { NavbarWithSearch } from './Components/Nav.jsx'

// Material Tailwind
import { Button } from "@material-tailwind/react";
import Hook6 from "./Components/HOOKS/UseCallBack/Hook6.jsx";

function App() {
  const fruits = [
    { id: 1, name: "orange", calories: 45 },
    { id: 2, name: "apple", calories: 95 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pinapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "calery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ];

  return (
    <>
      {/* <NavbarWithSearch/> */}
      <h1 className="head">
        Starting point of including and exporting components
      </h1>
      <Header />
      <Food />
      <Footer />

      <h1 className="head">creating cards</h1>
      <Carder name={profilepic} />
      <Carder name={profilepic1} />
      <Carder name={profilepic2} />
      <Carder name={profilepic3} />
      <Carder name={profilepic4} />

      <h1 className="head">Styling React Components</h1>
      {/* Using external css */}
      <Button1 />
      {/* Using Modules */}
      <Button2 />
      {/* Using Inline css */}
      <Button3 />

      <h1 className="head">Properties Props</h1>
      <Properties1 name="David Modestus Mbwatila" age={19} isStudent={true} />
      <Properties1 name="Annual Juma Omari" age={21} isStudent={true} />
      <Properties1 name="Daudi Shija Ngolengosha" age={20} isStudent={true} />
      <Properties1 />

      <h1 className="head">Conditional Rendering</h1>
      <Conditional isLoggedIn={true} username="IAEFSEL" />

      <h1 className="head">List Rendering</h1>
      {/* {fruits.length > 0 ? <List items={fruits}  category="Fruits"/> : null}
      {vegetables.length > 0 ? <List items={vegetables}  category="vegetables"/> : null} */}

      {/* or */}

      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && (
        <List items={vegetables} category="vegetables" />
      )}

      <h1 className="head">Event Handling</h1>
      <Button11 />
      <Button22 />

      <h1 className="head">HOOKS</h1>
      {/* First */}
      <Hook1 />
      <Onchange />
      <Colorpicker />
      <Updaterfunction />
      <ObjectUseState />
      <ArrayUseState />
      <ArrayObjects />
      <TodoList />

      {/* Second */}
      <Hook2 />
      <WidthHeight />
      <Clock />

      {/* Third */}
      <Hook3a />

      {/* Fourth */}
      <Hook4 />
      <StopWatch />

      {/* Fifth */}
      <Hook5 />
      {/* Sixth */}
      <Hook6 />
      <Button className="p-3 bg-amber-700">Material Tailwind</Button>
    </>
  );
}
  
export default App;
