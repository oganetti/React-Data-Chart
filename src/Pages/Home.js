import React, { Component } from 'react';
import TopBar from '../Components/top-bar';
import MenuBar from '../Components/menu-bar';
import BottomBar from '../Components/bottom-bar';
import  logo from '../Images/oplog.png';
import {Route,Router,Switch} from 'react-router-dom';
import Contact from './Contact';
import PowerBI from './PowerBI';
import Sql from './Sql';









class Home extends Component {


  render() {


    return (
      <div>
        
     
      <TopBar/>
      <MenuBar/>
      <BottomBar/>
      <Switch>
        <Route path="/home/contact" component={Contact} />
        <Route path="/home/powerBI" component={PowerBI}/>
        <Route path="/home/sql" component={Sql}/>
      </Switch>
    
      <img class = "imageOplog" src={logo} height="300"/>


      </div>
    );
  }


}

export default Home;