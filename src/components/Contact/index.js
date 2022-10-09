import React, { useState } from "react";
import { captializeFirstChar, validateEmail } from "../../utils/helpers";
import placeholderHeadshot from '../../assets/placeholder-headshot.png';

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
    const logEmail = (e) => {
        e.preventDefault();
        console.log(emailObj);
    };
    return (
        <section id="contact">
            <h1>Reach Out</h1>
            <div className="flex-contact">
                <div className="quick-info">
                    <div>
                        <img className="headshot" src={placeholderHeadshot} alt="Headshot of Janae Welsh in business casual attire"/>
                        <ul className="quick-list">
                            <li className="test">
                                <p className="p-contact">289-200-2721</p>
                            </li>
                            <li>
                                <a className="a-contact" href="mailto: janae.wel@gmail.com" target="blank">janae.wel@gmail.com</a>
                            </li>
                            <li>
                                <a className="a-contact" href="https://githubcom/gitJanaeW?tab=repositories" target="blank">GitHub</a>
                            </li>
                            <li>
                                <a className="a-contact" href="https://www.linkedin.com/in/janae-welsh-01a52a23a/" target="blank">LinkedIn</a>
                            </li>
                        </ul>
                </div>
                    </div>
                <form onSubmit={logEmail}>
                    <div className='align'>
                        {/* name */}
                        <label htmlFor='name'>Name:</label>
                        <input onBlur={getEmailState} type='text' name='name'/>
                    </div>
                    <div className='align'>
                        {/* email */}
                        <label htmlFor='email'>Email:</label>
                        <input onBlur={getEmailState} type='email' name='email'/>
                    </div>
                    <div>
                        {/* message */}
                        <label htmlFor='message'>Message</label>
                        <br/>
                        <textarea onBlur={getEmailState} name='message'/>
                    </div>
                    {errorMsg && (<p>{captializeFirstChar(errorMsg)}</p>)}
                    <button type='submit'>Send</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;