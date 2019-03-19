import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { TopBar, MenuBar, BottomBar } from '../Components';



export class Contact extends Component {

  render() {
    return (
      <div>
         <TopBar />
        <MenuBar />
        <BottomBar />
      <div className="contact">
        <Panel bsStyle="primary">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Oplog</Panel.Title>
          </Panel.Heading>
          <Panel.Body>info@oplog.com.tr</Panel.Body>
        </Panel>
      </div>
      </div>
    );
  }
}

