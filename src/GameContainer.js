import React, { Component } from 'react';
import Column from './components/Column';
import './GameContainer.css'
import GameButton from './components/GameButton';

class Game extends Component {

  constructor(){
    super();
    this.state = {
      gameBoard: [
        {value: 1, selected: false, id:1},
        {value: 3, selected: false, id:2},
        {value: 5, selected: false, id:3},
        {value: 7, selected: false, id:4},
        {vlaue: 0, selected: false, id:5}
      ],
      p1Turn: true,
      activeColumn: 0,
      dotsSelected: 0
    }
  }

  setGameState(){

  }

  newGame(){
    console.log("Clicked New Game");
    this.setState ({
      gameBoard: [
        {value: 1, selected: false},
        {value: 3, selected: false},
        {value: 5, selected: false},
        {value: 7, selected: false}
      ],
      p1Turn: true,
      midTurn: false
    })
  }

  resetTurn(){
    console.log("Clicked Reset Turn");
  }

  takeTurn(){
    console.log("Clicked Confirm Move");
  }



  render(){
    let player = this.state.p1Turn ? "Player 1" : "Player 2";
    return(
      <div className="GameContainer">
        This is the Game Container
        <h3>It's {player}'s turn.</h3>
        <div className="GameBoard">
          {this.state.gameBoard.map( column => {
            return <div>
              <Column
                dotsLeft={column.value}
                key={column.value + 1}
                active={column.id === this.state.activeColumn || this.state.activeColumn === 0}
                />
              </div>
          })}
        </div>
        <div className="GameButtons">
          <GameButton name="New Game" funct={this.newGame.bind(this)}/>
          <GameButton name="Reset Turn" funct={this.resetTurn}/>
          <GameButton name="Take Turn" funct={this.takeTurn}/>
        </div>
      </div>
    )
  }


}

export default Game;
