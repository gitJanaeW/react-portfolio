import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";

const Nav = () => {
    const [clickedAbout, setAbout] = useState(true);
    const [clickedPortfolio, setPortfolio] = useState(false);
    const [clickedContact, setContact] = useState(false);
    const [clickedResume, setResume] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
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
        <nav className="bg-gray-900 sticky top-0 px-6" onClick={toggleNav}>
            <div className="max-md:flex max-md:justify-between">
                <div className="flex items-center justify-between">
                    <div className="mr-auto">
                        <Link to="/">
                            <h1 className="py-7 max-md:text-lg max-md:font-medium text-white">JANAE WELSH</h1>
                        </Link>
                    </div>
                    <div className="md:flex hidden items-center gap-8">
                        <Link to="/">
                            <p className={`${clickedAbout && "selected"} text-white`}>ABOUT ME</p>
                        </Link>
                        <Link to="/portfolio">
                            <p className={`${clickedPortfolio && "selected"} text-white`}>PORTFOLIO</p>
                        </Link>
                        <Link to="/contact">
                            <p className={`${clickedContact && "selected"} text-white`}>CONTACT</p>
                        </Link>
                        <Link to="/resume">
                            <p className={`${clickedResume && "selected"} text-white`}>RESUME</p>
                        </Link> 
                    </div>      
                </div>
                <div className="flex items-center justify-around font-medium">
                    <div className="py-4 max-md:ml-auto flex justify-between">
                    {/* logo img goes here with a class of "md:cursor-pointer-9" */}
                    <div className="text-3xl md:hidden" onClick={() => setNavOpen(!navOpen)}>
                        {navOpen ? 
                            <AiOutlineClose color="white"/> 
                            : <GiHamburgerMenu color="white"/>}
                    </div>
                </div>
            </div>
            {/* Mobile nav */}
            <div className={`
                md:hidden bg-gray-900 fixed w-full h-52 top-0 overflow-y-auto bottom-0 mt-12
                duration-500 ${navOpen ? "top-5" : "top-[-100%]"}
            `}>
                <Link to="/">
                    <h1 className="text-white">HOME</h1>
                </Link>
                <Link to="/">
                    <p className={`${clickedAbout && "selected"} text-white mb-2`}>ABOUT ME</p>
                </Link>
                <Link to="/portfolio">
                    <p className={`${clickedPortfolio && "selected"} text-white mb-2`}>PORTFOLIO</p>
                </Link>
                <Link to="/contact">
                    <p className={`${clickedContact && "selected"} text-white mb-2`}>CONTACT</p>
                </Link>
                <Link to="/resume">
                    <p className={`${clickedResume && "selected"} text-white mb-2`}>RESUME</p>
                </Link>
            </div>
        </div>
    </nav>
    );
};

export default Nav;