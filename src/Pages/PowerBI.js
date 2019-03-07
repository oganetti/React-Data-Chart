import React, { Component } from 'react';
import { connect } from 'react-redux';



class PowerBI extends Component {


  render() {
    return (
      <div className="powerBI">
        <iframe width="100%" height="100%" src={this.props.item.frameState} frameborder="0" allowfullscreen></iframe>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state
  };
};

const connectedPowerBI = connect(mapStateToProps)(PowerBI);
export { connectedPowerBI as PowerBI }; 

