import React, { Component } from 'react';
import {Alert,Button} from 'react-bootstrap';


class PowerBI extends Component {


  render() {

    return (
      <div className="powerBI">
        
        <Alert bsStyle="info" >
          <h4>INFO</h4>
          <p>
            It is not finished yet.
          </p><br/>
          <p>
            <Button bsStyle="info" href='/'>Return</Button>
          </p>
        </Alert>
    
 
      </div>
    );
  }


}

export default PowerBI;