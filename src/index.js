

// PACKAGES //
import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Root from "./components/Root";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Game from "./components/Game";

// Create application
class  App extends Component {
    render() {
        console.log('ggggg');
        return(
            <Router history={browserHistory} >
                <Route path="/" component={Root} >
                    <IndexRoute component={Home} />
                    <Route path="/home" component={Home}/>
                    <Route path="/game" component={Game}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/about" component={About}/>
                </Route>
            </Router>
        )
    }

}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
