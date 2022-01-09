



const exitOn = { display: "none" }


const Modal = ({ project, show, setShow }) => {

    return (
        <div id="myModal" style={ show } className="Modal">
            <div className='ModalContent'>
                <h1>{ project.name }</h1>
                <i style={{padding:"5px"}}className="fa fa-video-camera fa-2x" aria-hidden="true"> <span style={{fontFamily:"Roboto", fontSize:"20px"}}>Demo</span></i>
                
                <i style={{padding:"5px"}} className="fa fa-github fa-2x" aria-hidden="true"><span>Repository</span></i>
                <h3>Description</h3>
                <p>{project.description}</p>
                
                <h3><i className="fa fa-slack size" aria-hidden="true"></i>Stack</h3>
                <ul>

                    { project.tech.map(eachProject => (

                        <p style={{textAlign:"left"}}>  { eachProject } </p>
                    )) }
                </ul>
                <span className="close" onClick={ () => setShow(exitOn) }>&times;</span>
            </div>

        </div>
    )
}

export default Modal
