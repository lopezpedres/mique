import React from 'react'
 const myFunction= ()=> {

        var x = document.getElementById("NavBar");
        if (x.className === "navbar") {
          x.className += " responsive";
        } else {
          x.className = "navbar";
        }
        console.log(x)
      }
      const NavBar = () => {
  
   
    return (
        <div id="NavBar" className="navbar">
           
            <a className= "active"href='/'>HOME</a>
            <a href='#'>PORTAFOLIO</a>
            <a href='#'>ABOUT ME</a>
            <a href= '#'>CONTACT</a>
            <a href='#' className="icon" onClick ={()=>myFunction()}>
            <i className="fa fa-bars"></i>
            </a>
            
        </div>
    )
}

export default NavBar
