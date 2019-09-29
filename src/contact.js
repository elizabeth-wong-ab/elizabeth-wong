import React from 'react'
import classes from './contact/contact.css'
import arrow from "./contact/arrow.png";

class Contact extends React.Component {
    render() {
        return(
        <div className={classes.Contact}>
            <h1>Let's chat!</h1>
            <div className= {classes.container}>
                <p>.</p>
                <div className={classes.boxed}>
                <p>Email me:</p>
                    <p1> ewong586@gmail.com</p1>
                </div>
                <div className={classes.boxed}>
                    <p>Connect with me on LinkedIn: </p>
                    <a href={"https://www.linkedin.com/in/elizabeth-wong-917515110/"}>HERE!</a>
                </div>
                <p>.</p>
            </div>
            <div className={classes.bottomContainer}>
            <img src={arrow} alt={"pew pew"} />
            </div>
        </div>
    );
    }
}
export default Contact