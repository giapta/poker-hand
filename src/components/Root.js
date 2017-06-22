"use strict";

import React, { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";

class  Root extends Component {
    render() {
        console.log('Root');
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {this.props.children}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Root;
