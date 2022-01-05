import React from 'react'
import Modal from '../Components/Modal'
import ProjectCards from '../Components/ProjectCards'
import data from "../data/projects.json"

const data1=data.slice(0,3)
const data2=data.slice(3,6)
const titleProjectStyle={backgroundColor:"#FFFFFF"}
const projectStyle={backgroundColor:"#FFC72A"}

const Projects = () => {
    return (
        <div id='projects'style={projectStyle}>
             <h1 className='newTitleBlock' style={titleProjectStyle}>
            Projects
            </h1>
            


            <div className="Row ProjectContainer">
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
