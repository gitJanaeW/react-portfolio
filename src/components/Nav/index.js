import React, { useState } from "react";

const Nav = ({navLinks}) => {
    console.log(navLinks);
    return (
        <div>
            <div className="navbar">
               <a data-testid="janaeWelsh" className="janaeWelsh" href="/">JANAE WELSH</a>
               <a data-testid="about" href="#about">About Me</a>
               <a data-testid="portfolio" href="#portfolio">Portfolio</a>
               <a data-testid="contact" href="#contact">Contact</a>
               <a data-testid="resume" href="#resume">Resume</a>
            </div>
        </div>
    );
};

export default Nav;