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
           
            <a href='/'>HOME</a>
            <a href='#projects'>PORTAFOLIO</a>
            <a href='#about_me'>ABOUT ME</a>
            <a href='javascript:void(0);' className="icon" onClick ={()=>myFunction()}>
            <i className="fa fa-bars"></i>
            </a>
            
        </div>
    )
}

export default NavBar
