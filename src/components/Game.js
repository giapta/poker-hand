import React, { Component } from 'react';
import Poker from './Poker.js';
import '../lib/Array.js';

var cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var cardType = ['C', 'D', 'H', 'S'];
var fullCards = [];
var numberPlayer = 2;
// Create 52 cards
cardType.forEach(function(type){
    cards.forEach(function(card){
        fullCards.push(card + type);
    })
});
console.log(fullCards);
// shuffle cards
fullCards = fullCards.shuffle();
console.log(fullCards);
// proud cards for player
var player1 = [];
var player2 = [];
// Player 1
for(var i=0; i < 5; i++) {
    player1.push(fullCards.pop());
}
// Player 2
for(var i=0; i < 5; i++) {
    player2.push(fullCards.pop());
}

class Game extends Component {
    getInitialState() {
        return {
            "isStartGame" : "false"
        }
    }

    render() {
      return (
          <div>
              <h3> Player 1</h3>
              <Poker cards={player1} />
              <h3> Player 2</h3>
              <Poker cards={player2} />
          </div>
      );
    }
}

export default Game;
