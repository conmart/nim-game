import React, { Component } from 'react';
import './Dot.css'

class Dot extends Component {

  constructor(){
    super();
    this.state = {
      selected: false
    }
  }

  clicked(){
    if (this.state.selected) {
      var newSelected = false;
      var dotsSelected = -1;
      console.log("dot deactivated");
    } else {
      var newSelected = true;
      var dotsSelected = 1
      console.log("dot activated");
    }
    this.setState(prevState => {
        prevState.selected = newSelected
        return prevState
    })
    this.props.updateGameState(dotsSelected);
  }

  render(){
    if (this.props.active) {
      let dotColor = this.state.selected ? 'orange' : 'black';
      let dotStyle = {
        color: dotColor,
      }
      return(
        <div className="Dot" onClick={(e) => this.clicked() } style={ dotStyle }>
          &#9679;
        </div>
      )
    } else {
      let dotStyle = { color: 'lightgray' };
      return(
        <div className="Dot" style={ dotStyle }>
          &#9679;
        </div>
      )
    }
  }

}

export default Dot;
