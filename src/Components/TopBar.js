import React from 'react';
import  logo from '../Images/oplog.png';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import { Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";



export const TopBar = () =>{
  
    return(
        <div className='topDiv'>
         <Navbar  collapseOnSelect>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav >
            <NavItem eventKey={1} >
            <Link to="/"><img src={logo} height="30"/></Link>
            </NavItem>
            <NavItem eventKey={1}>
            <Link to="/">Ana Menü&nbsp;&nbsp;<Icon name='home'></Icon></Link>
            </NavItem>
            </Nav>
          <Nav pullRight>
          <NavItem eventKey={2}>
          <Link to="/contact">İletişim&nbsp;&nbsp;<Icon name='envelope'></Icon></Link>
          </NavItem>
          <NavItem eventKey={1}>
          <Link to="/login">Çıkış&nbsp;&nbsp;<Icon name='logout'></Icon></Link>
          </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </div>
    );
}