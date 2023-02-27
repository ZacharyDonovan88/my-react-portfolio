import React from "react";
import "../../style.css";

function About() {
    return (
        <div class="worksec" id="work">
            <section>
                <h3 className="h3">Work</h3>
                <div class="row">
                    <div class="column work-container">
                        <a href="https://github.com/ZacharyDonovan88/project3-rios-pizza-zd" target="_blank"><img
                                src={require('../../assets/images/rioPizza.jpg')} alt="Rios Pizza"/>
                            <div class="card-content">Rios Pizza</div>
                        </a>
                        <a href="https://github.com/biscuit231/Circle" target="_blank"><img src={require('../../assets/images/Circle.PNG')} alt="Circle WebSite"/>
                            <div class="card-content">'Circle' social media site</div>
                        </a>
                        <a href="https://zacharydonovan88.github.io/Pick-a-Pup-WebPage/"><img src={require('../../assets/images/pup.jpg')} alt="Pick a Pup WebPage"/>
                            <div class="card-content">Pick a Pup</div>
                        </a>
                        <a href="pizza-page"><img src={require('../../assets/images/pizza.jpg')} alt="pizza image"/>
                            <div class="card-content">Pizza WebPage</div>
                        </a>
                        <a href="skate-event"><img src={require('../../assets/images/skateboard.jpeg')}
                                alt="skate image"/>
                            <div class="card-content">Skate Event</div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
  }
  
  export default About;