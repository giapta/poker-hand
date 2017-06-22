import React, { Component } from 'react';

class Navigator extends Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Poker</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="/"> Home</a></li>
                            <li><a href="/game">Game</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigator;
