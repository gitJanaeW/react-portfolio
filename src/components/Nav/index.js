import React, { useState } from "react";

const Nav = ({
    aboutClicked,
    setAboutClicked,
    portfolioClicked,
    setPortfolioClicked,
    contactClicked,
    setContactClicked,
    resumeClicked,
    setResumeClicked,
}) => {
    // To solve condtional rendering bug, look at:
    // https://carleton.bootcampcontent.com/carleton-university/CARL-VIRT-BO-FSF-PT-05-2022-U-B/-/tree/main/20-React/01-Activities/04-Conditional-Rendering/Solved/src
    // OR learn React Router and fix
    return (
        <div>
            <div className="navbar">
               <a data-testid="janaeWelsh" className="janaeWelsh" href="/">JANAE WELSH</a>
               <a onClick={() => setAboutClicked(true)} data-testid="about" href="#about">About Me</a>
               <a onClick={() => setPortfolioClicked(true)} data-testid="portfolio" href="#portfolio">Portfolio</a>
               <a onClick={() => setContactClicked(true)} data-testid="contact" href="#contact">Contact</a>
               <a onClick={() => setResumeClicked(true)} data-testid="resume" href="#resume">Resume</a>
            </div>
        </div>
    );
};

export default Nav;