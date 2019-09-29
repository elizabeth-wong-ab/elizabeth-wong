import React from 'react'
import myFace from './IMG_0866.jpg'
import classes from './App.css'
import doggo from './IMG_7267 copy.jpg'

class App extends React.Component {
    render() {
        return (
            <div className={classes.Home}>
                <h1>Hi! I'm Liz, <br/> Welcome to my website!</h1>
                <div className={classes.imageCropper}>
                    <img src={myFace} alt={"My Face Here"} />
                </div>
                <div className={classes.textBox}>
                    <h2>A brief introduction...</h2>
                    <p> I'm a small time computer science student at San Jose State University.</p><p>
                        Hailing from the great city of San Francisco, I've grown up around tech my whole life.
                        I love a good challenge, which is why I've decided to pursue this type of career.
                        My goal is to never stop growing and to be able to make a difference in whatever work I end up doing in life.
                        <br/> <br/>To properly introduce myself, here's a list of things that make me happy:
                            <ul><li>doggos</li>
                                <li>food</li>
                                <li>friends</li>
                                <li>sunny days</li>
                                <li>rainy days</li>
                                <li>doing something meaningful</li>
                            </ul>
                    <div className={classes.imageCropper2}>
                        <img src={doggo} alt={"My Doggo Here"} />
                    </div>
                    </p>
                </div>
            </div>
        )
    }
}
export default App