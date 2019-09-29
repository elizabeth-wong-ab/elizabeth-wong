import React, { Component } from 'react'
import {Link} from "react-router-dom";
import classes from "./Navbar.css"

class NavBar extends Component {
    render() {
        return (
            <div className={classes.Navbar}>
                <ul>
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <a href="/resume">RESUME</a>
                    </li>
                    <li>
                        <a href="/contact">CONTACT</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar
