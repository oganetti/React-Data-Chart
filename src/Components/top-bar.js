import React from 'react';
import  logo from '../Images/oplog.png';
import {Navbar,Nav,NavItem} from 'react-bootstrap';



const TopBar = () =>{
    return(
        <div className='topDiv'>
         <Navbar  collapseOnSelect>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav >
            <NavItem eventKey={1} href="/" >
              <img src={logo} height="30"/>
            </NavItem>
            <NavItem eventKey={1} href="/" >
              Home
            </NavItem>
            </Nav>
          <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Help
          </NavItem>
          <NavItem eventKey={2} href="/contact">
            Contact
          </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>;
        </div>
    );
}

export default TopBar;