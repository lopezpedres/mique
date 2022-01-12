import React from 'react'
import ProjectCards from '../Components/ProjectCards'
import data from "../data/projects.json"

//TODO: Need to create the slideShow for the cards
const data1=data.slice(0,3)
const data2=data.slice(3,6)
const titleProjectStyle={color:"#FFFFFF",backgroundColor:"#4A6163", fontFamily:"Raleway"}
const imageBack={backgroundImage:"url(../assets/images/pp.jpg)"}

const Projects = () => {
    return (
        <div id='projects' className="Projects">
             <p className='newTitleBlock' style={titleProjectStyle}>
            Projects
            </p>
            


            <div className="Row ProjectContainer" >
                { data1.map((project)=>(
                    
                    <ProjectCards project={project} key = {project.name}/>
                    ))
                }
            </div>
            <div className="Row ProjectContainer">
                { data2.map((project)=>(
                    
                    <ProjectCards project={project} key = {project.name}/>
                    ))
                }
            </div>
            
           
        </div>
    )
}

export default Projects
