import React, { Component } from 'react';
import { TopBar, MenuBar, BottomBar } from '../Components';
import logo from '../Images/oplog.png';
import { Route, Switch } from 'react-router-dom';
import { Sql, Contact, PowerBI } from './';


export class Home extends Component {

  render() {
    return (
      <div className="main">
        <TopBar />
        <MenuBar />
        <BottomBar />
        <Switch>
          <Route path="/home/contact" component={Contact} />
          <Route path="/home/powerBI" component={PowerBI} />
          <Route path="/home/sql" component={Sql} />
        </Switch>
      </div>
    );
  }
}
