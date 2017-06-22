import React, { Component } from 'react';

class Card extends Component {
    render() {
        return(
            <div className="col-sm-1">{this.props.nameCard}</div>
        );
    }
}

export default Card;
