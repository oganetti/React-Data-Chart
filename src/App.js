import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import { Home, LoginPage,RegisterPage } from './Pages';
import { PrivateRoute } from './Components';
import { history } from './Helpers';
import Background from './Images/background.jpg';

var sectionStyle = {
  backgroundImage: `url(${Background})`
};

class App extends Component {

  render() {
    return (
      <div className="back" style={ sectionStyle } >
        <Router history={history}>
          <div>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/home" component={Home} />
            <Route path="/login" component={LoginPage} />
          </div>
        </Router>
      </div>
    );
  }
}



export default App;
