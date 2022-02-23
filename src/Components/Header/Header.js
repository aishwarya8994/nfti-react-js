import React from 'react';

import {Navbar, Nav, Container,NavDropdown,Image } from 'react-bootstrap';
import finallogo from '../../Assets/Images/finallogo.png';

import { FaTwitter , FaTelegramPlane,FaDiscord} from 'react-icons/fa';
import {TiDocumentText} from 'react-icons/ti';

import { useHistory } from "react-router-dom"; 


const Header = () => {

    let history = useHistory();

return(

    <Navbar className='navbar navbar-custom' collapseOnSelect expand="lg"  variant="dark" sticky="top" style={{position:'sticky',backgroundColor:'black'}} >
        <Container fluid>
        <Navbar.Brand href="/">
    
          <Image src={finallogo} alt='logo' 
          style={{height:'75px', width:'150px',objectFit:'contain'}}
          /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
          <Nav.Link className='navlinks' href="#landing">Marketplace </Nav.Link>
          <Nav.Link className='navlinks' href="#landing">Team</Nav.Link>
          <Nav.Link className='navlinks' href="#landing">Road Map</Nav.Link>



            <Nav.Link className='navlinks' href="#about">Whitepaper</Nav.Link>
            <Nav.Link className='navlinks' href="#product">Tokenomics</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><FaTwitter className="social-icons" /></Nav.Link>
            <Nav.Link href="#deets"><FaTelegramPlane className="social-icons" /></Nav.Link>
            <Nav.Link href="#deets"><TiDocumentText className="social-icons" /></Nav.Link>
            <Nav.Link href="#deets"><FaDiscord className="social-icons" /></Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
)

}

export default Header;