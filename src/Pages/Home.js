import React, { useState, useEffect } from 'react'
import heatherImage from "../assets/images/yo.jpg"
import getEmoji from '../apis/Emoji'

const styleHigh={ margin: "0px", fontSize:"95px"
}
const styleHigh2={ margin: "0px",
fontWeight: "normal"

}
const initialEmoji = "🍄"

const Home = () => {
    const [emoji, setEmoji] = useState(initialEmoji)
    useEffect(() => {
        setTimeout(()=>getEmoji(setEmoji),3000)
       
    }
    ,[])
    return (
        <div className='Col-container'>
            <div className="Row">
                <div className=" welcomeText Column">
                    <p>Hi there  {emoji}</p>
                    <p style={styleHigh}>I'm Miguel </p>
                    <p style={styleHigh2}>Full-Stack Developer </p>
                    <div className="Rectangulo"></div>
                </div>
                <div className="Column">
                    <img className="welcomImg" alt = "Miguel Lopez"src={heatherImage}/>
                    </div>

            </div>


        </div>
    )
}

export default Home
