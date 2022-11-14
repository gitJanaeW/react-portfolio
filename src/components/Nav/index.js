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
        <nav className="bg-gray-900 sticky top-0 z-10 px-6" onClick={toggleNav}>
            <div className="relative max-md:flex max-md:justify-between">
                <div className="flex items-center justify-between">
                    <div className="mr-auto">
                        <Link to="/">
                            <h1 className="py-7 text-xl font-medium text-white">JANAE WELSH</h1>
                        </Link>
                    </div>
                    <div className="md:flex hidden items-center gap-10">
                        <Link to="/">
                            <p className={`${clickedAbout && "transition-all ease-in duration-300 bg-gradient-to-r from-cyan-500 text- to-teal-500"} text-white px-2`}>ABOUT ME</p>
                        </Link>
                        <Link to="/portfolio">
                            <p className={`${clickedPortfolio && "transition-all ease-in duration-300 bg-gradient-to-r from-cyan-500 text- to-teal-500"} text-white px-2`}>PORTFOLIO</p>
                        </Link>
                        <Link to="/contact">
                            <p className={`${clickedContact && "transition-all ease-in duration-300 bg-gradient-to-r from-cyan-500 text- to-teal-500"} text-white px-2`}>CONTACT</p>
                        </Link>
                        <Link to="/resume">
                            <p className={`${clickedResume && "transition-all ease-in duration-300 bg-gradient-to-r from-cyan-500 text- to-teal-500"} text-white px-2`}>RESUME</p>
                        </Link> 
                    </div>      
                </div>
                <div className="flex items-center justify-around font-medium">
                    <div className="py-4 max-md:ml-auto flex justify-between">
                    <div className="text-3xl md:hidden" onClick={() => setNavOpen(!navOpen)}>
                        {navOpen ? 
                            <AiOutlineClose color="white"/> 
                            : <GiHamburgerMenu color="white"/>}
                    </div>
                </div>
            </div>
            {/* Mobile nav */}
            <div className={`
                md:hidden bg-gray-900 fixed w-full h-28 top-0 overflow-y-auto bottom-0 mt-12
                duration-500 ${navOpen ? "top-5" : "top-[-100%]"}
            `}>
                <Link to="/">
                    <div>
                        <span className={`${clickedAbout && "transition-all ease-in duration-300 bg-gradient-to-r from-cyan-500 text- to-teal-500"}
                        text-white px-2 mb-2`}>ABOUT ME</span>
                    </div>
                </Link>
                <Link to="/portfolio">
                    <div><span className={`${clickedAbout && "transition-all ease-in duration-300 bg-gradient-to-r from-cyan-500 text- to-teal-500"}
                    text-white px-2 mb-2`}>PORTFOLIO</span></div>
                </Link>
                <Link to="/contact">
                    <div><span className={`${clickedAbout && "transition-all ease-in duration-300 bg-gradient-to-r from-cyan-500 text- to-teal-500"}
                    text-white px-2 mb-2`}>CONTACT</span></div>
                </Link>
                <Link to="/resume">
                    <div><span className={`${clickedAbout && "transition-all ease-in duration-300 bg-gradient-to-r from-cyan-500 text- to-teal-500"}
                    text-white px-2 mb-2`}>RESUME</span></div>
                </Link>
            </div>
        </div>
    </nav>
    );
};

export default Nav;