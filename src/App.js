import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import './App.css';
import { Home, LoginPage, RegisterPage, Contact, PowerBI, Sql } from './Pages';
import { PrivateRoute } from './Components';
import Background from './Images/background.jpg';
import { history } from './Helpers';


var sectionStyle = {
  backgroundImage: `url(${Background})`
};

class App extends Component {

  render() {
    return (
      <div className="back" style={sectionStyle} >
        <Router history={history}>
            <div>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute path="/home" component={Home} />
              <PrivateRoute path="/contact" component={Contact} />
              <PrivateRoute path="/sql" component={Sql} />
              <PrivateRoute path="/powerBI" component={PowerBI} />
              <Route path="/login" component={LoginPage} />
              <PrivateRoute path="/registernewuser" component={RegisterPage} />
            </div>
        </Router>
      </div>
    );
  }
}



export default App;
