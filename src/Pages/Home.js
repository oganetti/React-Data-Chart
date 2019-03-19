import React, { Component } from 'react';
import { TopBar, MenuBar, BottomBar } from '../Components';


export class Home extends Component {

  render() {
    return (
      <div className="main">
        <TopBar />
        <MenuBar />
        <BottomBar />
      </div>
    );
  }
}
