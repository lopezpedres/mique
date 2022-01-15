



const exitOn = { display: "none" }


const Modal = ({ project, show, setShow }) => {

    return (
        <div id="myModal" style={ show } className="Modal">
            <div className='ModalContent'>

                <div className="modalTitle">
                    <h2>{ project.name }</h2>
                </div>

                <div className="modalIcons">
                    { project.demo &&

                        <a href={ project.url_project }>
                            <i style={ { padding: "5px" } } className="fa fa-video-camera fa-2x" aria-hidden="true"></i>

                        </a>


                    }
                    { project.repo_project &&
                        <a href={ project.repo_project }>
                            <i style={ { padding: "5px" } } className="fa fa-github fa-2x" aria-hidden="true"></i>

                        </a>
                    }

                </div>

                <div className="modalDescription">
                    <h3><i className="fas fa-file-alt"></i>   Description</h3>
                    <p>
                        { project.description }
                    </p>
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
