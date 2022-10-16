import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

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
                <Link to="/"><h1 className="janaeWelsh">JANAE WELSH</h1></Link>
                <Link to="/"><p data-testid="about">About Me</p></Link>
                <Link to="/portfolio"><p data-testid="portfolio">Portfolio</p></Link>
                <Link to="/contact"><p data-testid="contact">Contact</p></Link>
                <Link to="/resume"><p data-testid="resume">Resume</p></Link>
            </div>
        </div>
    );
};

export default Nav;