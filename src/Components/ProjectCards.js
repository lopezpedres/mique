import React, { useState } from 'react'
import heatherImage from "../assets/images/projectBack.gif"
import Modal from './Modal';


const onShow = { display: "block" }



const ProjectCards = ({ project }) => {
    const [show, setShow] = useState(null)

    const toggleModal = () => {
        setShow(onShow)

    }
    return (



        <div className="Column" >

            <div className="ProjectCards" onClick={ () => toggleModal() }>
                <div >

                {project.url_image?
                 <img alt={project.alt_image} src={project.url_image}/>
                 :
                 <img alt={project.alt_image} src={ heatherImage } />
                 
                }
                </div>
                <p>{ project.name }</p>


            </div>

            <Modal key = {project.name} project={ project } show={ show } setShow={ setShow } />



        </div>



    )
}

export default ProjectCards
