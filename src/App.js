import './App.css';
import React from 'react';
import { Content } from './Components/Content';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { Read } from './Components/Read';
import { Create } from './Components/Create';

export class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          {/* Importing dark navbar from bootstrap */}
          <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Lab4</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/read">Read</Nav.Link>
                  <Nav.Link href="/create">Create</Nav.Link>
                </Nav>
              </Container>
          </Navbar>
        <br></br>
        {/* Importing route to call each page */}
          <Routes>
            <Route path='/' element={<Content></Content>} exact></Route>
            <Route path='/read' element={<Read/>}></Route>
            <Route path='/create' element={<Create/>}></Route>
        </Routes>
      </div>
    </Router>
   );
  }
}

export default App;
