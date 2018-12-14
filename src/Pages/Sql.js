import React, { Component } from 'react';
import {Table,Button} from 'react-bootstrap';


class Sql extends Component {


  render() {

    return (
      <div className="sqlPage">
      <Button bsStyle="primary">Excel</Button>
      <div className="sql">
        
        <Table striped condensed hover>
        <thead>
    <tr>
      <th>Example</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
    
 
      </div>

      </div>
    );
  }


}

export default Sql;