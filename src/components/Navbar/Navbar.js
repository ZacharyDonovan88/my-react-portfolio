import React, { useState } from "react";
import "../../style.css";

function Navbar() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div class="sidenav">
      <nav>
        <h2>Portfolio</h2>
        <a
          href="#aboutme"
          className={currentPage === "aboutme" ? "active" : ""}
          onClick={() => handleClick("aboutme")}
        >
          About me
        </a>
        <a
          href="#work"
          className={currentPage === "work" ? "active" : ""}
          onClick={() => handleClick("work")}
        >
          Work
        </a>
        <a
          href="#contactme"
          className={currentPage === "contactme" ? "active" : ""}
          onClick={() => handleClick("contactme")}
        >
          Contact me
        </a>
        <a
          href="#resume"
          className={currentPage === "resume" ? "active" : ""}
          onClick={() => handleClick("resume")}
        >
          Resume
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
