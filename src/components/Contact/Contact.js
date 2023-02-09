import React from "react";
import "../../style.css";
import ContactMail from "../ContactMail/ContactMail.js";

function Contact() {
    return (
        <div id="contactme">
            <h3 className="h3">Contact me</h3>
            <div class="concenter">
                <p>Contact Number:<a href="#phone-number"> 0422 159 001</a></p>
                <p>Email:<a href="#email"> ZacharyDonovan1999@gmail.com</a></p>
                <p>GitHub:<a href="https://github.com/ZacharyDonovan88"> https://github.com/ZacharyDonovan88</a></p>
            </div>
            <ContactMail />
        </div>
    );
  }
  
  export default Contact;