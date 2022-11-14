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
          <div className="text-center py-10">
            <img className="mx-auto my-5 w-80 max-sm:w-2/3 md:w-96 object-cover rounded-full" src={headshot} alt="A headshot of Janae smiling in business casual wear" layout="fill"/>
            <h2 className="text-5xl py-2 font-medium text-teal-400 md:text-6xl">
              Janae Welsh
            </h2>
            <h3 className="text-2xl py-2 text-white md:text-3xl">
              Web Developer
            </h3>
            <div className="text-5xl m-auto md:flex md:justify-center gap-16 py-3 text-gray-400">
              <a href="https://github.com/gitJanaeW/" target="_blank" rel="noreferrer">
                <img className="max-sm:w-1/5 max-md:mx-3 inline-block w-16" src={github} alt="Github logo in grey"/>
              </a>
              <a href='https://www.linkedin.com/in/janae-welsh-01a52a23a/' target="_blank" rel="noreferrer">
                <img className="max-sm:w-1/5 max-md:mx-3 inline-block w-16" src={linkedIn} alt="LinkedIn logo in grey"/>
              </a>
              <a href="mailto: janae.wel@gmail.com" target="blank">
                <img  className="max-sm:w-1/5 max-md:mx-3 inline-block w-16" src={email} alt="Letter icon in grey, symbolizing mail"/>
              </a>
            </div>
            <p className="py-5 text-gray-200 max-w-xl mx-auto md:text-xl">
            Full-stack <span className="text-teal-500">JavaScript</span> web developer with
            honed <span className="text-teal-500">research</span>
            , <span className="text-teal-500">problem-solving</span> and <span className="text-teal-500">communication</span> skills, 
            developed during my English BA and work in the education 
            sector.
            </p>
          </div>
        <section className="m-auto pb-10 md:pb-20 text-center w-5/6">
          <h3 className="text-3xl py-1 text-teal-400">About Me</h3>
          <p className="md:text-xl py-2 text-gray-200">
            As a <span className="text-teal-500">creative</span>, I'm always eager to take on projects of any kind and breathe life and passion into them.
            Fueled by my avid interest in the mechanics of coding, I'm consistently aiming to broaden my <span className="text-teal-500">knowledge</span> and technical skillset.
            
          </p>
          <p className="md:text-xl py-2 text-gray-200">
            Speak to me about how I can offer my <span className="text-teal-500">dedication</span> and <span className="text-teal-500">growth</span> to your team. 
          </p>
        </section>
      </section>
    );
};

export default About;