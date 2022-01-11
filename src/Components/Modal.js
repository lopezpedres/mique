



const exitOn = { display: "none" }


const Modal = ({ project, show, setShow }) => {

    return (
        <div id="myModal" style={ show } className="Modal">
            <div className='ModalContent'>

                <div className="modalTitle">
                    <h2>{ project.name }</h2>
                </div>

                <div className="modalIcons">
                    <i style={ { padding: "5px" } } className="fa fa-video-camera fa-2x" aria-hidden="true"></i>

                    <i style={ { padding: "5px" } } className="fa fa-github fa-2x" aria-hidden="true"></i>
                </div>

                <div className="modalDescription">
                    <h3><i class="fas fa-file-alt"></i>   Description</h3>
                    { project.description }
                </div>

                <div className="modalStack">

                    <h3><i className="fas fa-layer-group" aria-hidden="true"></i>   Stack</h3>
                    

                        { project.tech.map(eachProject => (

                            <p>  { eachProject } </p>
                        )) }
                    

                    <span className="close" onClick={ () => setShow(exitOn) }>&times;</span>
                </div>
            </div>

        </div>
    )
}

export default Modal
