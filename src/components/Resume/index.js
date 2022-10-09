import React from "react";

const Resume = () => {
    return (
        <section id="resume" className="body">
            <div className="display-resume">
                <h1>Resume</h1>
                    <a href="../../assets/resume.pdf" download="janae-welsh-resume"><button>Download PDF</button></a>
            </div>
            <div className="display-resume">
            <div className="resume-section resume-child-one">
                    <h2>EXPERIENCE</h2>
                    <ul>
                        <li>
                            <h3>English Tutor & Essay Reviewer</h3>
                            <p>Paper Co. <span>(Jan 2022 - Present)</span></p>
                            <p className="text-body">
                                Developing career-ready proficiency in front-end and back-end development through independent and collaborative projects. Learning relevant languages as well as other assisting technologies.
                            </p>
                        </li>
                        <li>
                            <h3>Educational Consultant</h3>
                            <p>Sarah Fewson Consulting Co. <span>(Oct 2019 - Present)</span></p>
                            <p className="text-body">
                                Providing detailed curriculum-based feedback for children’s TV scripts. Delivering feedback to clients constructively, efficiently and kindly.
                            </p>
                        </li>
                        <li>
                            <h3>Tutor & Academic Coach</h3>
                            <p>Durham District School Board <span>(May 2021 - Dec 2021)</span></p>
                            <p className="text-body">
                                Simplifying complex concepts for tutees in engaging ways. Motivating students to set and reach achievable academic goals. Creating a fun, free-flowing atmosphere in live sessions with tutees.
                            </p>
                        </li>
                        <li>
                            <h3>Store Supervisor</h3>
                            <p>Shoppers Drug Mart <span>(Mar 2020 - Aug 2021)</span></p>
                            <p className="text-body">
                                Adaptively performing front and back store operations while supervising junior staff, assigning breaks and aiding customers.
                            </p>
                        </li>
                    </ul>
                    <h2>EDUCATION</h2>
                    <ul>
                        <li>
                            <h3>Carelton University Full Stack Development Boot Camp</h3>
                            <p className="text-body">
                                Developing career-ready proficiency in front-end and back-end development through independent and collaborative projects. Learning relevant languages as well as other assisting technologies
                            </p>
                        </li>
                        <li>
                            <h3>Ryerson University</h3>
                            <p className="text-body">
                                Consistent Dean’s List honoree, achieving a BA in English.
                            </p>
                        </li>
                        <li>
                            <h3>University of Waterloo</h3>
                            <p className="text-body">
                                Consistent Dean’s List honoree specializing in Technical Writing.
                            </p>
                        </li>
                    </ul>
                    <h2>REFERENCES</h2>
                    <ul>
                        <li className="text-body">Available upon request.</li>
                    </ul>
                </div>
                <div className="resume-section">
                    
                    <h2>TECHNOLOGIES</h2>
                    <ul>
                        <li className="text-body">HTML</li>
                        <li className="text-body">CSS</li>
                        <li className="text-body">JavaScript</li>
                        <li className="text-body">MongoDB</li>
                        <li className="text-body">Express</li>
                        <li className="text-body">React</li>
                        <li className="text-body">Node.js</li>
                        <li className="text-body">MySQL</li>
                        <li className="text-body">Sequelize</li>
                        <li className="text-body">Jest</li>
                        <li className="text-body">OOP</li>
                        <li className="text-body">ORM</li>
                        <li className="text-body">MVC</li>
                        <li className="text-body">Handlebars</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Resume;