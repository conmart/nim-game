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
      this.props.updateGameContainer(this.props.column.id, newDotsSelected)
    } else {
      console.log("everyone should be active");
      this.props.updateGameContainer(0, 0)
    }
    this.setState(prevState => {
        prevState.dotsSelected = newDotsSelected
        return prevState
    })


  }

  render(){
    console.log('active?', this.props.active);
    let numberOfDots = [];
    console.log(this.props.column.value);
    for (let i=0; i<this.props.column.value; i++) {
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
