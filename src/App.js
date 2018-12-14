import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import PowerBI from './Pages/PowerBI';
import Sql from './Pages/Sql';



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



export default App;
