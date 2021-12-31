import React from 'react'
import heatherImage from "../assets/images/pp.jpg"

const emoji = "👽"
const styleHigh={ margin: "0px",
}

const Home = () => {
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
