import React, { Component } from 'react';
import TopBar from '../Components/top-bar';
import MenuBar from '../Components/menu-bar';
import BottomBar from '../Components/bottom-bar';
import  logo from '../Images/oplog.png';







class Home extends Component {


  render() {

    return (
      <div>
        
     
      <TopBar/>
      <MenuBar/>
      <BottomBar/>

    
      <img class = "imageOplog" src={logo} height="300"/>


      </div>
    );
  }


}

export default Home;