import React, { useState, useEffect } from 'react'
import heatherImage from "../assets/images/yo.jpg"
import getEmoji from '../apis/Emoji'

const styleHigh={ margin: "0px",
}
const initialEmoji = "🍄"

const Home = () => {
    const [emoji, setEmoji] = useState(initialEmoji)
    // async function getEmoji() {
    //     const bodyParams = {"limit": 1}
    //     const params = new URLSearchParams(bodyParams)
    //     const url = "https://api.emojisworld.fr/v1/random?"+params
    //     const response = await fetch(url)
    //     var data = await response.json()
    //     console.log(data)
    //     const {emoji}=data.results[0]
    //     console.log("This is the emoji:"+ emoji)
    //     setEmoji(emoji)
    //     }
    const emojiToggle = (equis)=>{
        setTimeout(()=>equis(setEmoji),3000)

    }
    useEffect(() => {
        emojiToggle(getEmoji)
       
    }
    ,[emoji])
    return (
        <div className='Col-container'>
            <div className="Row">
                <div className=" welcomeText Column">
                    <p>Hi there  {emoji}</p>
                    <h1 style={styleHigh}>I'm Miguel </h1>
                    <p style={styleHigh}>A Software Engineer </p>
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
