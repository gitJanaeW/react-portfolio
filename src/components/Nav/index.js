import React, { useState } from "react";
import {Link} from 'react-router-dom';

const Nav = () => {
    const [clickedAbout, setAbout] = useState(true);
    const [clickedPortfolio, setPortfolio] = useState(false);
    const [clickedContact, setContact] = useState(false);
    const [clickedResume, setResume] = useState(false);
    const toggleNav = (e) => {
        e.preventDefault();
        // const selected = document.getElementsByClassName('selected');
        console.log(e.target.innerHTML);
        switch (e.target.innerHTML) {
            case "About Me":
                setAbout(true);
                setPortfolio(false);
                setResume(false);
                setContact(false);
                break;
            case "Portfolio":
                setAbout(false);
                setPortfolio(true);
                setResume(false);
                setContact(false);
                break;
            case "Contact":
                setAbout(false);
                setPortfolio(false);
                setResume(false);
                setContact(true);
                break;
            case "Resume":
                setAbout(false);
                setPortfolio(false);
                setResume(true);
                setContact(false);
                break;
            default:
                console.log('break');
                break;
        }
    }
    return (
        <div onClick={toggleNav}>
            <div className="navbar" >
                <Link to="/">
                    <h1 className="janaeWelsh">JANAE WELSH</h1>
                </Link>
                <Link to="/">
                    <p data-testid="about" className={`${clickedAbout && "selected"}`}>About Me</p>
                </Link>
                <Link to="/portfolio">
                    <p data-testid="portfolio" className={`${clickedPortfolio && "selected"}`}>Portfolio</p>
                </Link>
                <Link to="/contact">
                    <p data-testid="contact" className={`${clickedContact && "selected"}`}>Contact</p>
                </Link>
                <Link to="/resume">
                    <p data-testid="resume" className={`${clickedResume && "selected"}`}>Resume</p>
                </Link>
            </div>
        </div>
    );
};

export default Nav;

// WHAT'S NOT WORKING:
