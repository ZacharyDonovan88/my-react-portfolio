import React from "react";
import "../../style.css";
import "./footer.css"

function Footer() {
    return (
        <footer>
            <div id="footerBanner">
                <h4 className="footerText">Created by Zachary Ceruto</h4><a href="https://github.com/ZacharyDonovan88" target="_blank"><img class="gitFooterLogo" src={require('../../assets/images/gitLogo.png')} alt="Github"/></a>
            </div>
        </footer>
    );
  }
  
  export default Footer;