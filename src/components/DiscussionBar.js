import React, { Component } from 'react';
import { 
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
    
import 'bootstrap/dist/css/bootstrap.css'

library.add({faPlusSquare});

export default class DiscussionBar extends Component {
  render() {
    return (
        <div id = "discussionBar">
            <Nav>
            <NavItem>
                <NavLink href="#">Discussion A</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Discussion B</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Discussion C</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Discussion D</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#"><FontAwesomeIcon icon="plus-square" /></NavLink>
            </NavItem>
            </Nav>
      </div>
    );
  }
}
