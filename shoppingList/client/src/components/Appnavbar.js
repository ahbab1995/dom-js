import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container
  } from 'reactstrap';



  class Appnevbar extends Component {
        state = {
            isOpen: false
        }

        toggles = ()=>{
            this.setState({
                isOpen: !this.state.isOpen
            })
        };
      render(){
          return (
              <div>
                  <Navbar color="info" light light expand="md" className="md-5">
                    <Container>
                    <NavbarBrand href="/">Shopping List</NavbarBrand>
                    <NavbarToggler onClick={this.toggles} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">
                                        github
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>                    
                  </Navbar>
              </div>
          )
      }  
        
}


  

export default Appnevbar