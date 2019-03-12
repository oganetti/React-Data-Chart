import React from 'react';
import  logo from '../Images/oplog.png';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import { Icon } from 'semantic-ui-react'



export const TopBar = () =>{
  
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
              Ana Menü&nbsp;&nbsp;
              <Icon name='home'></Icon>
            </NavItem>
            </Nav>
          <Nav pullRight>
          <NavItem eventKey={2} href="/home/contact">
            İletişim&nbsp;&nbsp;
            <Icon name='envelope'></Icon>
          </NavItem>
          <NavItem eventKey={1} href="/login">
            Çıkış&nbsp;&nbsp;
            <Icon name='logout'></Icon>
          </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </div>
    );
}