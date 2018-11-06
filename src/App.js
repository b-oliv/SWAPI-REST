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
  DropdownItem } from 'reactstrap';

import logo from './images/star-wars-logo.png';
 
  

class App extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div className="App">

        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img id="logo" src={logo} alt="logo swapi"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://swapi.co/">SWAPI</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/Manipovore/SWAPI-REST.git">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <hr className="separated_laser_yellow"/>

      </div>
    );
  }
}

export default App;

