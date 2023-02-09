import React from "react";
import "../../style.css";

function Home() {
    return (
<div class="main">
        <a class="skip-to-content" href="#content">skip to content</a>
        <div class="hero-image" alt="Sunset"></div>
        <header class="header">
            <img src={require('../../assets/images/Zachary.jpg')} alt="photo of Zachary" id="my-image"/>
            <h1>Zachary Ceruto</h1>
            <div class="icons">
                <div class="iconcen">
                    <a href="https://facebook.com">
                        <i class="fa-brands fa-facebook"></i></a>
                    <a href="https://instagram.com">
                        <i class="fa-brands fa-instagram"></i></a>
                    <a href="https://twitter.com">
                        <i class="fa-brands fa-twitter"></i></a>
                    <a href="https://Gmail.com">
                        <i class="fa-solid fa-envelopes-bulk"></i></a>

                </div>
            </div>
        </header>
    </div>
    );
  }
  
  export default Home;