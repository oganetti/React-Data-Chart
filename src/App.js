import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import PowerBI from './Pages/PowerBI';
import Sql from './Pages/Sql';
import LoginPage from './Pages/LoginPage';
import { PrivateRoute } from './Pages/PrivateRoute';
import  RegisterPage from './Pages/RegisterPage';


class App extends Component {



  render() {



    return (
      <div className="back">
        
      
  
        <Route path="/" component={Home} />
        <Route path="/register" component={RegisterPage}/>
        <Route path="/contact" component={Contact} />
        <Route path="/powerBI" component={PowerBI}/>
        <Route path="/sql" component={Sql}/>
        <Route path="/login" component={LoginPage}/>
 
     
      </div>
    );
  }


}



export default App;
