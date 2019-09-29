import React from 'react'
import classes from './resume/resume.css'
import resume from './resume/Resume.pdf'

class Resume extends React.Component {
    render() {
        return (
            <div className={classes.Resume}>
                <div className={classes.header}>
                    <h1>Review my Qualifications</h1>
                    <form method="get" action={resume}>
                        <button>DOWNLOAD MY RESUME</button>
                    </form>
                </div>
                <div className={classes.textBox}>
                    <h2>Experience</h2>
                </div>
            </div>
            )
    }
}
export default Resume