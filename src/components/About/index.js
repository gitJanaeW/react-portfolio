import React from "react";
import {Link} from 'react-router-dom';
import {AiFillGithub} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';
import headshot from '../../assets/headshot.jpg';
import email from '../../assets/email.png';
import github from '../../assets/github.png';
import linkedIn from '../../assets/linkedIn.png';

const About = () => {
    return (
      <section id="about" className="bg-gray-900 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between text-white">
            <h1 className="font-burtons text-xl">Janae Welsh</h1>
            <ul className="flex items-center">
              <li>
                <Link to="/resume">
                  <p className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">Resume</p>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <div className="mx-auto rounded-full w-80 h-80 relative overflow-hidden my-5 md:h-96 md:w-96">
              <img className="object-cover" src={headshot} alt="A headshot of Janae smiling in business casual wear" layout="fill"/>
            </div>
            <h2 className="text-5xl py-2 font-medium text-teal-400 md:text-6xl">
              Janae Welsh
            </h2>
            <h3 className="text-2xl py-2 text-white md:text-3xl">
              Web Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400">
              <a href="https://github.com/gitJanaeW/" target="_blank" rel="noreferrer">
                <img style={{width: "100px"}} src={github} alt="Github logo in grey"/>
              </a>
              <a href='https://www.linkedin.com/in/janae-welsh-01a52a23a/' target="_blank" rel="noreferrer">
                <img style={{width: "100px"}} src={linkedIn} alt="LinkedIn logo in grey"/>
              </a>
              <a href="mailto: janae.wel@gmail.com" target="blank">
                <img  style={{width: "100px"}} src={email} alt="Letter icon in grey, symbolizing mail"/>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-white ">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div>
            <h4 className="py-4 text-teal-600">My Favorite Technologies</h4>
            <p className="text-gray-800 py-1">React</p>
            <p className="text-gray-800 py-1">Tailwind</p>
            <p className="text-gray-800 py-1">Mongoose</p>
            <p className="text-gray-800 py-1">Reddis (learning)</p>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
        </section>
      </section>
    );
};

export default About;