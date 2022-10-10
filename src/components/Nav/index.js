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