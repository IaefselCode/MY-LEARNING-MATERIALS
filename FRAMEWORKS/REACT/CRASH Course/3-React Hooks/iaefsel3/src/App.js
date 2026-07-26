import './App.css';

//---BOOTSTRAPS
// import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'
// import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '/node_modules/bootstrap/dist/js/bootstrap.min.js'

import UseStateHook from './Components/1-useStateHook/1-UseStateHook';
import UseStateHook1 from './Components/1-useStateHook/2-UseStateHook';
import UseStateHook2 from './Components/1-useStateHook/3-UseStateHook';
import UseStateHook3 from './Components/1-useStateHook/4-UseStateHook';
import Counter from './Components/1-useStateHook/Counter'
import Counter1 from './Components/2-useEffectHook/Counter1';
import UseEffectHook from './Components/2-useEffectHook/1-UseEffectHook';


function App() {
  return (
    <div className="App">
      <h1><u>HOOKS</u></h1>
      <h2 className='head'><i>useStateHook</i></h2>
      <h2>1.Counter using setState</h2>
      <Counter></Counter>
      <h2>1.Counter using useState Hook</h2>
      <h2>First</h2>
      <UseStateHook></UseStateHook>
      <h2>Second</h2>
      <UseStateHook1></UseStateHook1>
      <h2>Third</h2>
      <UseStateHook2></UseStateHook2>
      <h2>Fourth</h2>
      <UseStateHook3></UseStateHook3>

      <h2 className='head'><i>useEffectHook</i></h2>
      <h2>1.Counter using componentDidMount & componentDidUpdate</h2>
      {/* <Counter1></Counter1> */}
      <h2>1.Counter using useEffectHook</h2>
      <UseEffectHook></UseEffectHook>
    </div>
  );
}

export default App;
