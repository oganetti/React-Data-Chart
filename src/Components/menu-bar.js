import React, { Component } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { changeAction } from '../Actions/changeAction';
import {connectionAction} from '../Actions/connectionAction';
import store from '../Store';



class MenuBar extends Component {


  constructor(props){
    super(props);

    this.state = {
        result : []
    }

  }

  componentDidMount(){
    fetch('http://localhost:50611/api/list')
    .then(res => res.json())
    .then(json =>{
      this.setState({
        result:json,
      })
    })
    .catch(error => console.log('parsing failed'))

      

  }

  render() {

    var {result} = this.state;

    return (
  <div className="sidebar">

      {result.map(item =>( item.parentID == null &&

 
              <Menu simple vertical >
              <Dropdown item simple text={item.menuName} onClick={() =>
                    this.props.onClick(item.menuData,item.connectionString)} href={'/' + item.menuType}>
                <Dropdown.Menu className="deneme">
                {result.map(item2 =>(
                  item2.parentID === item.menuID && 
                  <Dropdown.Item onClick={(e) => {e.stopPropagation(); 
                    this.props.onClick(item2.menuData)}} href={'/' + item2.menuType} >{item2.menuName}</Dropdown.Item>
                ))}
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
      ))}
  </div>
    )
  }
}




const mapStateToProps = state => ({


});


const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id,data) => {
      dispatch(connectionAction(data))
      dispatch(changeAction(id))
    }
  }
}

console.log(store.getState());


export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
