import React, { useState, useEffect } from 'react'
import heatherImage from "../assets/images/pp.jpg"

const styleHigh={ margin: "0px",
}
const initialEmoji = ""

const Home = () => {
    const [emoji, setEmoji] = useState(initialEmoji)
    useEffect(() => {
        async function getEmoji() {
        const bodyParams = {"limit": 1}
        const params = new URLSearchParams(bodyParams)
        const url = "https://api.emojisworld.fr/v1/random?"+params
        const response = await fetch(url)
        var data = await response.json()
        console.log(data)
        const {emoji}=data.results[0]
        console.log("This is the emoji:"+ emoji)
        setEmoji(emoji)
        }
        getEmoji()
    }
    ,[])
    console.log(emoji)
    return (
        <div id="#Welcome_Section" className='Col-container'>
            <div className="Row">
                <div className=" welcomeText Column">
                    <h1>Hi  {emoji}</h1>
                    <h1 style={styleHigh}>there </h1>
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
