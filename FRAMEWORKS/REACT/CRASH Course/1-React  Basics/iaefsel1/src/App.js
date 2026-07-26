// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Second } from './components/Greet';
import { greeter as NA } from './components/Greet';
import Message from './components/Message';
import David from './components/Sam';
import { lobo as LB } from './components/Sam';
import Hello from './components/Destructuring-Props/Destructuring-props';
import { CSSone } from './components/glass';
import Count from './components/thecounter';
import Event from './components/Event-handling/Events';
import CEvents from './components/Event-handling/ClasEvents';
import Eventbind from './components/Event-binding/EventBind';
import Pcomp from './components/Pass-Method-As-Props/Parentcomp';
import User from './components/Conditional-Rendering/conditions';
import Namelist from './components/List-Rendering/NameList';
import Stylesheet from './components/Styling-React/stylesheet';
import styles from './appstyles.module.css'
import Forms from './components/Basics-of-form-handling/form';
import Lifecycle1 from './components/lifecycle/Mounting lifecycle1';


//---BOOTSTRAPS
//import Button from 'react-bootstrap/Button'
//import { Alert } from 'react-bootstrap';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap/dist/js/bootstrap.min.js'


function App() {
  return (
    <div className="App">
      <Greet></Greet>
      <CSSone className="glass"></CSSone>
      <Second></Second>
      <NA></NA>
      <David name="John" AntiheroName="Death Stroke"></David>
      <LB name="The LOBO"></LB>
      <Hello name="Bruth Wayne" heroname="The Batman">
        <Button className='btn btn-primary p-3 m-3'>Choose Your Hero</Button>
      </Hello>
      <Message></Message>
      <hr className='hr' />
      <h1><u>From TUTORIAL</u></h1>
      <header className='App-Appheader'>
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type='email' placeholder='example@email.com' />
                  <Form.Text className="text-muted">
                    We'll never share your email addred, trust us
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId='formPassword='>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' placeholder='Password' />
                </Form.Group>
              </Col>
            </Row>
            <Button type='submit' className='btn btn-success p-1-3 m-3'> Login </Button>
          </Form>
          <Row>
            <Col>
              <Card>
                <Card.Img src="iaefsel.jpg"></Card.Img>
                <Card.Body>
                  <Card.Title>First Card</Card.Title>
                  <Card.Text>
                    It is highly accurate as compared to oral communication. It gives the sender time to check for the correctness of the information
                  </Card.Text>
                  <Button variant='success'> Read More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img src="iaefsel.jpg"></Card.Img>
                <Card.Body>
                  <Card.Title>Second Card</Card.Title>
                  <Card.Text>
                    It is highly accurate as compared to oral communication. It gives the sender time to check for the correctness of the information
                  </Card.Text>
                  <Button variant='success'> Read More</Button>
                </Card.Body>
              </Card>
            </Col>


          </Row>


          <Alert variant='success'>This is the Alert from Bootstrap !!!</Alert>
          <Breadcrumb>
            <Breadcrumb.Item >Test 1</Breadcrumb.Item>
            <Breadcrumb.Item>Test 2</Breadcrumb.Item>
            <Breadcrumb.Item>Test 3</Breadcrumb.Item>
            <Breadcrumb.Item>Test 4</Breadcrumb.Item>
            <Breadcrumb.Item>Test 5</Breadcrumb.Item>
            <Breadcrumb.Item active>Test 6</Breadcrumb.Item>
          </Breadcrumb>
          <Button className='btn btn-success p-3 m-3'> Subscribe !!! </Button>
          <Count></Count>
        </Container>
      </header>
      <h1><u>Event Handling</u></h1>
      <Event />
      <CEvents />
      <h1><u>Event Binding</u></h1>
      <Eventbind />
      <h1><u>Passing Methods as Props</u></h1>
      <Pcomp />
      <h1><u>Conditional Rendering</u></h1>
      <User /><br />
      <h1><u>List Rendering</u></h1>
      <Namelist />
      <h1><u>Styling React Component</u></h1>
      <Stylesheet primary={true} />
      <h1 className={styles.success}>Hello David</h1><br />
      <h1><u>Basics of Form Handling</u></h1>
      <Forms /><br /><br /><br />
      <h1><u><i><b>LIFE CYCLE</b></i></u></h1>
      <h2>MOUNTING</h2>
      <Lifecycle1 />
    </div>
  );
}

export default App;
