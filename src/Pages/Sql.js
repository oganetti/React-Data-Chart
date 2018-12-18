import React, { Component } from 'react';
import {Table,Button} from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';

class Sql extends Component {


  constructor(props){
    super(props);

    this.state = {
        resultcolums : [],
        resultdata : []
    }

  }

  componentWillMount(){

    var self = this;

    if(this.props.item.connectionState != null){

      axios.post('http://localhost:50611/api/values', {
        connectionString:this.props.item.connectionState,
        name:this.props.item.frameState,
      })
      .then(function (response) {
        self.setState({resultcolums:response.data.listacolumnas,resultdata:response.data.rows})
        console.log(response)
  
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  };


  render() {




  var {resultcolums,resultdata} =this.state;
  var count=0;




    return (
      <div className="sqlPage">
   

  
     <Button bsStyle="primary">Excel</Button>
     <div className="sql">
        
        <Table striped condensed hover>
        <thead>
        <tr>

       {resultcolums.map(col =>(
          <th>{col}</th>
       ))}
  

    </tr>
  </thead>
  <tbody>

            {resultdata.map((item) =>(
              
              count=0,
              <tr>

              {resultcolums.map((item2) =>(
              <td>{item[count++]}</td>
              ))}

              </tr>
              
         ))}

          
  </tbody>
</Table>
    
 
      </div>

      </div>
    );
  }


}

const mapStateToProps = (state) => {
  return {
    item: state
  };
};

export default connect(mapStateToProps)(Sql);
