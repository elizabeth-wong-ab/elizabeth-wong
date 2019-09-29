import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import NavBar from './components/Navbar'
import Resume from './resume'
import Contact from './contact'
import classes from './index.css'

const routing = (
    <Router>
        <div>
            <NavBar/>
            <Route exact path="/" component={App} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
            <div className={classes.layer}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

