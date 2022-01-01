import React from 'react'
import heatherImage from "../assets/images/pp.jpg"





const ProjectCards = ({project}) => {
    return (
       
        
            <div className="Column">
                 <div className="ProjectCards">
                 <img src={heatherImage}/>
                  <p>{project.name}</p>

                 </div>
            
           
        </div>
       
   
    )
}

export default ProjectCards
