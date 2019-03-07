import React, { Component } from 'react';
import {Route,Router,Switch} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import { LoginPage } from './Pages';
import { PrivateRoute } from './Components';
import  RegisterPage from './Pages/RegisterPage';
import { history } from './Helpers';


class App extends Component {



  render() {



    return (
      <div className="back">
      
        <Router history={history}>
        <div>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/home" component={Home} />
        <Route path="/register" component={RegisterPage}/>
        <Route path="/login" component={LoginPage}/>
        </div>
        </Router>
        
 
     
      </div>
    );
  }


}



export default App;
