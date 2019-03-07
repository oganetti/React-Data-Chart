import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';



class Contact extends Component {


  render() {

    return (
      <div className="contact">
        <Panel bsStyle="primary">
    <Panel.Heading>
      <Panel.Title componentClass="h3">Oplog</Panel.Title>
    </Panel.Heading>
    <Panel.Body>info@oplog.com.tr</Panel.Body>
  </Panel>
      </div>
    );
  }


}

export default Contact;