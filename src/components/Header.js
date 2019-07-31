import React, { Component } from 'react';

import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons";

import 'bootstrap/dist/css/bootstrap.css'

library.add({faSignInAlt, faUser});

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isOpen: false
        };
      }

      toggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      render() {
        return (
          <div id="navbar">
            <Navbar color="light" light expand="md">
              <NavbarBrand><h1>Discussion Board</h1></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/login/"><h1><FontAwesomeIcon icon="sign-in-alt" /></h1></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/userdetails/"><h1><FontAwesomeIcon icon="user" /></h1></NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }
}

export default Header;