import React, { useState } from "react";
import { captializeFirstChar, validateEmail } from "../../utils/helpers";
import placeholderHeadshot from '../../assets/placeholder-headshot.png';
import {AiFillPhone, AiFillGithub} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';
import {FaLinkedinIn} from 'react-icons/fa';

const Contact = () => {
    const [emailObj, setEmailObj] = useState();
    const [errorMsg, setErrorMsg] = useState();
    // check for live changes to the state of the form
    const getEmailState = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMsg('Your email is invalid');
            } else {
                setErrorMsg('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMsg(`${e.target.name} is required.`);
            } else {
                setErrorMsg('');
            }
        }
        if(!errorMsg) {
            // the spread operator ensures we have access to formState as a whole while also singling out each attribute's
            // value.
            // [e.target.name] refers to the name attribute in the preceeding JSX, meaning when the name, email or message
            // changes, we'll update the target (by its attribute name) with its new value
            return setEmailObj({...emailObj, [e.target.name]: e.target.value});
        }
    };
    const sendEmail = () => {
        
    }
    const logEmail = (e) => {
        e.preventDefault();
        console.log(emailObj);
    };
    return (
        <section id="contact" className="flex flex-wrap bg-gray-900 text-white px-10">
            <div className="w-1/2 max-lg:w-full">
                <h2 className="text-5xl md:text-6xl max-sm:text-center text-teal-400 py-2 font-medium">
                    Reach Out
                </h2>
                <p className="text-xl max-sm:text-base max-sm:text-center md:my-5">Contact me to speak to me further about how I can be an asset to your junior development team.</p>
                <div className="flex justify-between ">     
                    <div className="text-white text-lg mt-5 max-sm:text-base">
                        <div className="flex items-center md:mb-5">
                            <AiFillPhone/>
                            <a href="tel:289-200-2721" className="ml-3 mb-1">289-200-2721</a>
                        </div>
                        <div className="flex items-center md:mb-5">
                            <MdEmail/>
                            <a className="ml-3 mb-1" href="mailto: janae.wel@gmail.com" target="blank">janae.wel@gmail.com</a>
                        </div>
                        <div className="flex items-center md:mb-5">
                            <AiFillGithub/>
                            <a className="ml-3 mb-1" href="https://githubcom/gitJanaeW?tab=repositories" target="blank">GitHub</a>
                        </div>
                        <div className="flex items-center md:mb-5">
                            <FaLinkedinIn/>
                            <a className="ml-3 mb-1" href="https://www.linkedin.com/in/janae-welsh-01a52a23a/" target="blank">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
            <form className="w-1/2 max-lg:w-full max-lg:px-0 max-lg:pt-15 rounded-lg p-8 bg-gray-900 text-white" onSubmit={logEmail}>
                    <div>
                        <label htmlFor='name' className="uppercase text-sm font-bold">Full Name:</label>
                        <input id='name' onBlur={getEmailState} type='text' name='name'
                            className="w-full bg-gray-600 mt-2 p-3 max-sm:p-2 rounded-lg focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div className="mt-8">
                        <label htmlFor='email' className="uppercase text-sm font-bold">Email:</label>
                        <input id='email' onBlur={getEmailState} type='email' name='email'
                            className="w-full bg-gray-600 mt-2 p-3 max-sm:p-2 rounded-lg focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div className="mt-8">
                        <label htmlFor='message' className="uppercase text-sm font-bold">Message</label>
                        <textarea id='message' onBlur={getEmailState} name='message'
                            className="w-full h-32 bg-gray-600 mt-2 p-3 max-sm:p-2 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    {errorMsg && (<p className="ml-1 mb-8">{captializeFirstChar(errorMsg)}</p>)}
                    <div className="mt-8">
                        <button type="submit"
                        className="uppercase text-sm font-bold tracking-wide bg-gradient-to-r from-cyan-500 text- to-teal-500 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                        Send
                        </button>
                    </div>
            </form>
        </section>
    );
};

export default Contact;