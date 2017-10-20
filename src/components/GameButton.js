import React, { Component } from 'react';

class GameButton extends Component {


    render(){
      return(
        <button onClick={(e) => this.props.funct()}>
          {this.props.name}
        </button>
      )
    }


}

export default GameButton;
