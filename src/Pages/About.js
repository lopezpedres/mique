import React from 'react'


const About = () => {
    return (
        <div id="about_me" className="Row">
            <p className="newTitleBlock">About me</p>
            <div className="Column">

                <p className="About">
                    <span style={ { color: "#F9a66C" } }>Welcome to my website</span>. I am an Engineer who the past 2 years of self-learning web development, has been able to put in practice many technologies, such as JavaScript, Python, SQL, SQLALCHEMY, Postgresql, Docker, React, and more. Currently, and for the past few months, I have been part of Hack for LA Developer’s team, a non-profit organization which principal objective is to give back by creating tech solutions to everyday problems of the community. There, I am able to give maintenance to their principal WebPage as well as learn more about GitHub’s Kanban workflow.
                </p>
            </div>
            <div className="Column">
                <div className="Contact">

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
