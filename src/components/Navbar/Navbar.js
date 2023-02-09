import React from "react";
import "../../style.css";

function Navbar() {
    return (
    <div class="sidenav">
        <nav>
            <h2>Portfolio</h2>
            <a href="#aboutme">About me</a>
            <a href="#work">Work</a>
            <a href="#contactme">Contact me</a>
            <a href="#resume">Resume</a>
        </nav>
    </div>
    );
  }
  
  export default Navbar;