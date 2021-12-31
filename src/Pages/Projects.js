import React from 'react'
import heatherImage from "../assets/images/pp.jpg"

const projectStyle={backgroundColor:"#FFC72A"}
const titleProjectStyle={backgroundColor:"#FFFFFF"}

const Projects = () => {
    return (
        <div style={projectStyle}>
            <h1 className='newTitleBlock' style={titleProjectStyle}>
                PORTAFOLIO
            </h1>
            <div className="Row ProjectContainer">
                <div className="Column">
                     <div className="ProjectCards">
                     <img src={heatherImage}/>
                      <p>1 EXAMPLE OF A PARAGRAPGH</p>

                     </div>
                </div>
                <div className="Column">
                     <div className="ProjectCards">
                     <img src={heatherImage}/>
                      <p>2 EXAMPLE OF A PARAGRAPGH</p>

                     </div>
                </div>
                <div className="Column">
                     <div className="ProjectCards">
                     <img src={heatherImage}/>
                      <p>3 EXAMPLE OF A PARAGRAPGH</p>

                     </div>
                </div>
            </div>
           
        </div>
    )
}

export default Projects
