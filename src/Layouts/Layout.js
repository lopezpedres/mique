import React from "react";
import NavBar from "../Components/NavBar";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Emoji from "../apis/Emoji";






const Layout = () => {
  return (
    <div>
      <NavBar/>
      <Home emoji={Emoji}/>
      <Projects />
      <About/>

    </div>
  );
};

export default Layout;
