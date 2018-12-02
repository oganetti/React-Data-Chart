import React, { Component } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react'


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

 
              <Menu vertical>
              <Dropdown item text={item.listName}>
                <Dropdown.Menu>
                {result.map(item2 =>(
                  item2.parentID === item.listID && 
                  <Dropdown.Item href={'/' + item2.typeList}>{item2.listName}</Dropdown.Item>
                ))}
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
      ))}
  </div>
    )
  }
}

export default MenuBar
