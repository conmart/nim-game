import React, { Component } from 'react';
import Column from './components/Column';
import './GameContainer.css'
import GameButton from './components/GameButton';

class Game extends Component {

  constructor(){
    super();
    this.state = {
      gameBoard:
        [ {value: 1, id:1}, {value: 3, id:2}, {value: 5, id:3}, {value: 7, id:4} ],
      p1Turn: true,
      activeColumn: 0,
      dotsSelected: 0
    }
  }

  handleDotClick(setActiveColumn, setDotsSelected){
    this.setState(prevState => {
        prevState.activeColumn = setActiveColumn
        prevState.dotsSelected = setDotsSelected
        console.log('game container handle', prevState);
        return prevState
    })
  }

  newGame(){
    console.log("Clicked New Game");
    this.setState ({
      gameBoard:
        [ {value: 1, id:1}, {value: 3, id:2}, {value: 5, id:3}, {value: 7, id:4} ],
      p1Turn: true,
      activeColumn: 0,
      dotsSelected: 0
    })
  }


  takeTurn(){
    let totalDotsRemaining = this.state.gameBoard.reduce(function (a,b) { return a + b.value; }, 0);
    if (this.state.dotsSelected === totalDotsRemaining) {
      let winner = this.state.p1Turn ? "Player 2" : "Player 1";
      window.alert(`${winner} Wins!!`)
    } else {
      let activeColumn = this.state.activeColumn;
      let updatedValue = activeColumn.value - this.state.dotsSelected;
      console.log("Clicked Confirm Move", activeColumn);
      this.setState(prevState => {
          prevState.activeColumn.value = updatedValue
          prevState.p1Turn = false
          prevState.activeColumn = 0
          prevState.dotsSelected = 0
          return prevState
    })}
  }

  // isGameOver(){
  //   let totalDotsRemaining = this.state.gameBoard.reduce(function (a,b) { return a + b.value; }, 0);
  //   console.log(totalDotsRemaining);
  //   if (totalDotsRemaining === 0) {
  //
  //   }
  // }

  render(){
    let player = this.state.p1Turn ? "Player 1" : "Player 2";
    return(
      <div className="GameContainer">
        <h3>It's {player}'s turn:</h3>
        <div className="GameBoard">
          {this.state.gameBoard.map( column => {
            return <div>
              <Column
                column={column}
                key={column.value + 1}
                updateGameContainer={this.handleDotClick.bind(this)}
                active={column === this.state.activeColumn || this.state.activeColumn === 0}
                dotsSelected={this.state.dotsSelected}
                />
              </div>
          })}
        </div>
        <div className="GameButtons">
          <GameButton name="New Game" funct={this.newGame.bind(this)}/>
          <GameButton name="Take Turn" funct={this.takeTurn.bind(this)}/>
        </div>
      </div>
    )
  }


}

export default Game;
