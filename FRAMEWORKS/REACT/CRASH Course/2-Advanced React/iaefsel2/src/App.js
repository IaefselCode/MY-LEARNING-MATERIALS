//---BOOTSTRAPS
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap/dist/js/bootstrap.min.js'

// import logo from './logo.svg';
import './App.css';
import FragmentDemo from './components/1-React-Fragment/FragmentDemo';
import ParentComponent from './components/2-Pure-ComponentandMEMO/ParentComponent';
import RefsDemo from './components/3-RefsDemo/RefsDemo';
import Focusinput from './components/3-RefsDemo/Focusinput';
import FRParentInput from './components/3-RefsDemo/FRParentInput';
import Portaldemo from './components/4-ReactPortal/Portaldemo';
import Hero from './components/5-ErrorBoundary/Hero';
import ErrorBoundary from './components/5-ErrorBoundary/ErrorBoundary';
import ClickCounter from './components/6-HigherOlderComponents/ClickCounter';
import HoverCounter from './components/6-HigherOlderComponents/HoverCounter';
import ClickCounter2 from './components/7-Render Props/ClickCounter2';
import HoverCounter2 from './components/7-Render Props/hoverCounter2';
import TheUser from './components/7-Render Props/TheUser';
import Counter from './components/7-Render Props/Counter';
import ComponentC from './components/8-React-Context/ComponentC';
import { UserProvider } from './components/8-React-Context/User-Context';




function App() {
  return (
    <div className="App">
      <h1><b><u>ADVANCED REACT-JS</u></b></h1>
      <h1><u>Rect Fragment</u></h1>
      <FragmentDemo />

      <h1><u>Pure-Component</u></h1>
      {/* <ParentComponent /> */}

      <div className='container-sm'>
        <h1><u>RefsDemo</u></h1>
        <RefsDemo />

        <h2><u>Refs with Class Component</u></h2>
        <Focusinput />

        <h2><u>Forwading Refs</u></h2>
        <FRParentInput />

        <h1><u>React Portals</u></h1>
        <Portaldemo />

        <h1><u>Error Boundary</u></h1>
        <ErrorBoundary>
          <Hero heroname='Batman'></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroname='Superman'></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroname='joker'></Hero>
        </ErrorBoundary>

        <h1><u>Higher_Older_Components</u></h1>
        <ClickCounter names="Mbuni" />
        <HoverCounter />

        <h1><u>Render Props</u></h1>
        {/* <ClickCounter2 />
        <HoverCounter2 />
        <TheUser render  ={(isloggedin) => isloggedin ? 'IAEFSEL' : 'Guest '} /> */}
        <Counter>
          {(count, incrementCount) => <ClickCounter2 count={count} incrementCount={incrementCount}></ClickCounter2>}
        </Counter>
        <Counter>
          {(count, incrementCount) => <HoverCounter2 count={count} incrementCount={incrementCount}></HoverCounter2>}
        </Counter>

        <h1><u>React Context</u></h1>
        {/* <UserProvider value="Iaefsel"> */}
          <ComponentC />
        {/* </UserProvider> */}

      </div>
    </div>
  );
}

export default App;
