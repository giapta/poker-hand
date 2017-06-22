import React, { Component } from 'react';
import Card from './Card.js';

class Poker extends Component {
    render(){
        var cards = this.props.cards;
        console.log(cards);
        var poker = cards.map( (card) => <Card nameCard={card} /> );
        return(
            <div className="row">{poker}</div>
        );
    }
}

export default Poker;
