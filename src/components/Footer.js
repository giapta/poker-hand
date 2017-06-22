import React, { Component } from 'react';

class Footer extends Component {
    render() {
        console.log('Footer');
        return(
            <footer className="page-footer blue center-on-small-only">
                <div className="container-fluid">
                    <p >The Game is created NodeJS and ReactJS</p>
                    <p>Design by Team 3</p>
                </div>
            </footer>
        );
    }
}

export default Footer;
