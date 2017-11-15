import React, { Component } from 'react';
import './Dot.css'

class Dot extends Component {

  constructor(){
    super();
    this.state = {
      selected: false
    }
  }

  doubleCheckState(){
    if (this.state.selected === true && this.props.colorDots === false) {
      console.log('hit compontentDidMount', this.props.colorDots);
      this.setState(prevState => {
        prevState.selected = false
        return prevState
      })
      console.log(this.state);
    }
  }

  clicked(){
    var newSelected;
    var dotsSelected;
    if (this.state.selected) {
      newSelected = false;
      dotsSelected = -1;
    } else {
      newSelected = true;
      dotsSelected = 1
    }
    this.setState(prevState => {
        prevState.selected = newSelected
        return prevState
    })
    this.props.updateGameState(dotsSelected);
  }

  render(){
    this.doubleCheckState()
    if (this.props.active) {
      let dotColor = (this.state.selected && this.props.colorDots) ? 'orange' : 'black';
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
