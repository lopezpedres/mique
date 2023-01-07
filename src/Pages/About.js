import React from 'react'


const About = () => {
    return (
        <div id="about_me" className="Row">
            <p className="newTitleBlock">About me</p>
            <div className="Column">

                <p className="About">
                    <span style={ { color: "#F9a66C" } }>Welcome to my website</span>. The journey of self-learning has helped me to be self-critical by identifying my weaknesses, mastering the ability to see the big picture, and asking the right questions to connect the dots and come up with creative solutions.

                    My deep understanding of process flow and continuous improvement in systems allows me to break down complex logic into small, understandable, and measurable parts. This, in turn, allows me to effectively communicate ideas with team members and manage projects more efficiently.

                    Being a student at BrainStation has given me the opportunity to enhance the knowledge I acquired and apply it in a professional context.
                </p>
            </div>
            <div className="Column">
                <div className="Contact">
                    {/* need to refactor this whole component  */ }

                    <a href='https://www.linkedin.com/in/lopezpedres/' target={ "_blank" } rel="noreferrer">
                        <i className="fab fa-linkedin fa-7x"></i>
                    </a>
                    <a href='https://github.com/lopezpedres' target={ "_blank" } rel="noreferrer">
                        <i className="fa fa-github fa-7x"></i>
                    </a>
                    <a href='mailto:lopezpedres@gmail.com' target={ "_blank" } rel="noreferrer">
                        <i className="far fa-envelope fa-7x"></i>
                    </a>

                </div>
                <div className="ContactS">

                    <a href='https://www.linkedin.com/in/lopezpedres/' target={ "_blank" } rel="noreferrer">
                        <i className="fab fa-linkedin fa-3x"></i>
                    </a>
                    <a href='https://github.com/lopezpedres' target={ "_blank" } rel="noreferrer">
                        <i className="fa fa-github fa-3x"></i>
                    </a>
                    <a href='mailto:lopezpedres@gmail.com' target={ "_blank" } rel="noreferrer">
                        <i className="far fa-envelope fa-3x"></i>
                    </a>

                </div>



            </div>

        </div>
    )
}

export default About
