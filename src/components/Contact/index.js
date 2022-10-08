import React from "react";
import placeholderHeadshot from '../../assets/placeholder-headshot.png';

const Contact = () => {
    return (
        <section>
            <h1>Reach Out</h1>
            <div>
                <img style={{width: "20%"}} src={placeholderHeadshot} alt="Headshot of Janae Welsh in business casual attire"/>
                <ul>
                    <li>
                        <p>(289) 200-2721</p>
                    </li>
                    <li>
                        <a href="mailto: janae.wel@gmail.com" target="blank">janae.wel@gmail.com</a>
                    </li>
                    <li>
                        <a href="https://githubcom/gitJanaeW?tab=repositories" target="blank">GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/janae-welsh-01a52a23a/" target="blank">LinkedIn</a>
                    </li>
                </ul>
            </div>
            <form>
                <div>
                    {/* name */}
                    <label htmlFor="name">Name:</label>
                    <input type='text' name='name'/>
                </div>
                <div>
                    {/* email */}
                    <label htmlFor="email">Email</label>
                    <input type='email' name='email'/>
                </div>
                <div>
                    {/* message */}
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' style={{width: "50%"}}/>
                </div>
                <button type='submit'>Send</button>
            </form>
        </section>
    );
};

export default Contact;