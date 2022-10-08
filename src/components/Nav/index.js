import React, { useState } from "react";

const Nav = ({setPortfolioClicked}) => {
    return (
        <div>
            <div className="navbar">
               <a data-testid="janaeWelsh" className="janaeWelsh" href="/">JANAE WELSH</a>
               <a data-testid="about" href="/">About Me</a>
               <a onClick={() => setPortfolioClicked(true)} data-testid="portfolio" href="#portfolio">Portfolio</a>
               <a data-testid="contact" href="#contact">Contact</a>
               <a data-testid="resume" href="#resume">Resume</a>
            </div>
        </div>
    );
};

export default Nav;