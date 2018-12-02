import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import PowerBI from './Pages/PowerBI';
import Sql from './Pages/Sql';




import { updateUser } from './Actions/update-user';
import { connect } from 'react-redux';



class App extends Component {



  render() {



    return (
      <div className="back">
        
      

        <Route  path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/powerBI" component={PowerBI}/>
        <Route path="/sql" component={Sql}/>
 
     
      </div>
    );
  }


}

const mapStateToProps = state =>( {
  products:state.products,
  user: state.user

});

const mapActionsToProps = {
  onUpdateUser: updateUser
}

export default connect(mapStateToProps,mapActionsToProps)(App);
