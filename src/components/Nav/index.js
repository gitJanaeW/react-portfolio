import React from "react";
import {Link} from 'react-router-dom';

const Nav = () => {
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