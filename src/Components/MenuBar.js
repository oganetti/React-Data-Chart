import React, { Component } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { changeAction, connectionAction } from '../Actions';
import { store } from '../Helpers';
import { authHeader } from '../Helpers';
import { url } from '../Services';




class MenuBar extends Component {


  constructor(props) {
    super(props);

    this.state = {
      result: []
    }
  }

  

  componentWillMount() {
    fetch(`${url}/api/menu`,{
      method: "GET",
      headers:{
        ...authHeader()
      }
    }
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          result: json,
        })
      })
      .catch(error => console.log('parsing failed'))

  }

  render() {

    var { result } = this.state;
    console.log(this.state.result);

    

    return (
      <div className="sidebar">

        {result.map(item => (item.parentID == null &&

          <Menu simple vertical >
            <Dropdown item simple text={item.menuName} onClick={() =>
              this.props.onClick(item.menuData, item.connectionString)} href={'/home/' + item.menuType}>
              <Dropdown.Menu className="deneme">
                {result.map(item2 => (
                  item2.parentID === item.menuID &&
                  <Dropdown.Item onClick={(e) => {
                    e.stopPropagation();
                    this.props.onClick(item2.menuData, item2.connectionString)
                  }} href={'/home/' + item2.menuType} >{item2.menuName}</Dropdown.Item>
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
    onClick: (id, data) => {
      dispatch(connectionAction(data))
      dispatch(changeAction(id))
    }
  }
}

console.log(store.getState());


const connectedMenuBar = connect(mapStateToProps, mapDispatchToProps)(MenuBar);
export { connectedMenuBar as MenuBar }; 
