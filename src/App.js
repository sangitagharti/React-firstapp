import logo from './logo.svg';
import './App.css';

import About from './About'
import Contact from './Contact'
import { useState } from 'react';
import Users from './Users'
import CreateUser from './CreateUser';

import { Link, Route, BrowserRouter as Router,Routes } from 'react-router-dom'

import { Nav, Navbar } from 'react-bootstrap'

import Home from './Home'
function App() {

  {/* using props */ }
  //const [name,setName] = useState('sangita')
  //<Contact name={name} />

  //under return
  //   <button onClick={()=>{setName('sangita gharti')}}>update state</button>


  return (
    <div className="App">
      {/* after installing router for routing */}
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link to="/about">About</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/contact">Contact</Link></Nav.Link>
            <Nav.Link href="#features"><Link to="/list">User list</Link></Nav.Link>
            <Nav.Link href="#pricing"> <Link to="/create">Create User</Link></Nav.Link>

          </Nav>

        </Navbar>

        <Routes>
        <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/list" element={<Users />} />
            <Route path="/create" element={<CreateUser />} />
          

          </Routes>
      



        {/* <h1>Home Page</h1>
     <CreateUser /> */}

        {/* <Users /> */}

        {/* <Contact /> */}


        {/* <About  name={name}/> */}
      </Router>


    </div>
  );
}

export default App;
