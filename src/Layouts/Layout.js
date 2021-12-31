import React from "react";
import NavBar from "../Components/NavBar";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";


const Layout = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Projects/>
      <About/>

    </div>
  );
};

export default Layout;
