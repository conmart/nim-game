import React, { Component } from 'react';
import Dot from './Dot';
import './Column.css';

class Column extends Component {

  constructor(){
    super();
    this.state = {
      dotsSelected: 0
    }
  }

  dotWasClicked(dotValue){
    let newDotsSelected = this.state.dotsSelected + dotValue
    console.log(newDotsSelected);
    if (newDotsSelected > 0) {
      console.log("Only I should be active");
    } else {
      console.log("everyone should be active");
    }
    this.setState(prevState => {
        prevState.dotsSelected = newDotsSelected
        return prevState
    })


  }

  render(){
    console.log('active?', this.props.active);
    let numberOfDots = [];
    console.log(this.props.dotsLeft);
    for (let i=0; i<this.props.dotsLeft; i++) {
      numberOfDots.push(
        <Dot key={i}
        active={this.props.active}
        updateGameState={this.dotWasClicked.bind(this)} />)
    }
    return(
      <div className="GameColumn">
        Column
        {numberOfDots}
      </div>
    )
  }

}

export default Column;
