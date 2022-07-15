// import React, { useState, useEffect } from 'react'
import heatherImage from "../assets/images/yo.jpg"
// import getEmoji from '../apis/Emoji'
import resume from "../assets/pdfs/resume.pdf"

const styleHigh = {
    margin: "0px", fontSize: "95px"
}
const styleHigh2 = {
    margin: "0px",
    fontWeight: "normal"

}
const initialEmoji = "🔅"

const Home = () => {
    // UNCOMMENT IF YOU WANT A NEW EMOJI EVERYTIME THE PAGE REFRESH
    // const [emoji, setEmoji] = useState(initialEmoji)
    // useEffect(() => {
    //     setTimeout(()=>getEmoji(setEmoji),3000)

    // }
    // ,[])
    return (
        <div className='Col-container'>
            <div style={ { marginTop: "5rem", textAlign: "center", backgroundColor: "#F17A7E", padding: "10px", fontSize: "20px", fontFamily: "Raleway" } }>This website is being updated with new cool projects</div>
            <div className="Row">
                <div className=" welcomeText Column">
                    <p>Hi there  { initialEmoji }</p>
                    <p style={ styleHigh }>I'm Miguel </p>
                    <p style={ styleHigh2 }>Full-Stack Developer </p>
                    <div className="Rectangulo"></div>
                    <a href={ resume } className="button">Resume</a>
                </div>
                <div className="Column">
                    <img className="welcomImg" alt="Miguel Lopez" src={ heatherImage } />
                </div>

            </div>


        </div>
    )
}

export default Home
