import React, { useState } from 'react'
import heatherImage from "../assets/images/pp.jpg"
import Modal from './Modal';


const onShow={display:"block"}



const ProjectCards = ({project}) => {
    const [show, setShow] = useState(null)

    const toggleModal = ()=>{
        setShow(onShow)
    
    }
    return (
       
        
                
            <div className="Column" >

                 <div className="ProjectCards" onClick={()=>toggleModal()}>
                 <img alt="Miguel Lopez"src={heatherImage}/>
                  <p>{project.name}</p>
                  
                  
                 </div>

                 <Modal show={show} setShow={setShow}/>
                 

           
        </div>
                
       
   
    )
}

export default ProjectCards
