


const exitOn={display:"none"}


const Modal = ({show, setShow}) => {
    const exitToogle =()=>{
        setShow(exitOn)
    }
    return (
        <div id="myModal" style={show} className="Modal">
            <div className='ModalContent'>
                Hi Modal
            <span className="close" onClick={()=>setShow(exitOn)}>&times;</span>
            </div>
           
        </div>
    )
}

export default Modal
