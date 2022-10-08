import React from "react";
import placeholderImg from '../../assets/placeholder.png';

const About = () => {
    return (
        <section>
            <img className="main-img" style={{width: "100%"}} src={placeholderImg} alt="Janae Welsh in business casual attire"/>
            
            <div id="about" className="body text-body">
                <h1>About Me</h1>
                <p>I am a full stack web developer, a crafty writer and an experienced visual artist. I wear many hats. My experience, versatility and eager-to-learn attitude would make me a great addition to your junior development team.</p>
                <p>Blah blah. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nemo corrupti repudiandae quasi iste est modi blanditiis nam error omnis expedita, ducimus vel unde ea labore quo excepturi, reiciendis magni?</p>
            </div>
        </section>
    );
};

export default About;