import React, { useState } from 'react'
import Logo from "../images/logo.gif";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navsection.css";
import { Link } from 'react-router-dom';

function Navsection() {

  const [status, setStatus] = useState(false)
  
  return (
    <div className='nav-main' style={{height:`${status ? 'auto' : '80px'}`}}>
        {/* <div>
           <a href="/" ><img src={Logo} alt="" className='logoimage'/></a>
        </div>
        <div className='menu-icon'>
        
        </div> */}
        {/* <div > */}
        <Navbar expand="lg" className='navbar'>
  <Container>
    <div>
    <a href="/" className="navbar-brand">
      <img src={Logo} alt="" className='logoimage' />
    </a>
    <Navbar.Toggle onClick={()=>setStatus(!status)} />
    </div>
    <div className='navfrstdiv'>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <NavDropdown title="Services" id="basic-nav-dropdown">
          <NavDropdown.Item href="/Legaltranslation">Legal Translation</NavDropdown.Item>
          <NavDropdown.Item href="/Tax">Tax consulting</NavDropdown.Item>
          <NavDropdown.Item href="/Typing">All Typing works</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/Contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </div>
  </Container>
</Navbar>


        {/* </div> */}


    </div>
  )
}

export default Navsection