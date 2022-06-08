import React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';
import  './Menubar.css'

const Menubar = ({count}) => {
    return (
        <div className='menu-bar'>
           <Navbar bg="prime" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Logo</Navbar.Brand>
                    <Nav className="d-flex justify-content-end">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Contact</Nav.Link>
                        <Nav.Link href="#pricing">Cart <sup>{count}</sup></Nav.Link>
                        <Nav.Link href="#pricing">Login</Nav.Link>
                    </Nav>
                </Container>
             </Navbar>
        </div>
    );
};

export default Menubar;