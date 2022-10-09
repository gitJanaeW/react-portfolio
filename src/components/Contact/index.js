import React from "react";
import placeholderHeadshot from '../../assets/placeholder-headshot.png';

const Contact = () => {
    return (
        <section className="contact">
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
                <form>
                    <div className="align">
                        {/* name */}
                        <label htmlFor="name">Name:</label>
                        <input type='text' name='name'/>
                    </div>
                    <div className="align">
                        {/* email */}
                        <label htmlFor="email">Email</label>
                        <input type='email' name='email'/>
                    </div>
                    <div>
                        {/* message */}
                        <label htmlFor='message'>Message</label>
                        <br/>
                        <textarea name='message'/>
                    </div>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;