import React from "react";
import resumePDF from "../../assets/resume.pdf";
import {IoMdDownload} from 'react-icons/io';

const Resume = () => {
    return (
        <section id="resume" className="bg-gray-900 text-white px-10 lg:px-32">
            <div>
                <div className="flex max-sm:flex-wrap justify-between items-center mb-8">
                    <h1 className="text-3xl md:text-5xl text-teal-300">Resume</h1>
                    <a href={resumePDF} download="janae-welsh-resume"
                        className="w-fit h-fit text-sm font-bold tracking-wide bg-gradient-to-r from-cyan-500 text- to-teal-500 p-2 md:p-3 rounded-lg">
                        <IoMdDownload/>
                    </a>
                </div>
                <div className="flex max-md:flex-col max-sm:p-0 max-sm:text-center">
                    <div className="flex flex-col md:w-64 p-auto md:ml-1 md:mr-10">
                        <div className="md:sticky md:top-32 z-0">
                            {/* <img className="my-5 w-40 max-sm:w-1/3 object-cover rounded-full" src={headshot} alt="A headshot of Janae smiling in business casual wear" layout="fill"/> */}
                            <h2 className="text-2xl max-sm:text-xl text-teal-300 py-1 mb-2">TECHNOLOGIES</h2>
                            <ul className="ml-1 mb-6">
                                <li className="md:text-lg max-sm:text-base mb-1">HTML</li>
                                <li className="md:text-lg max-sm:text-base mb-1">CSS</li>
                                <li className="md:text-lg max-sm:text-base mb-1">JavaScript</li>
                                <li className="md:text-lg max-sm:text-base mb-1">MongoDB</li>
                                <li className="md:text-lg max-sm:text-base mb-1">Express</li>
                                <li className="md:text-lg max-sm:text-base mb-1">React</li>
                                <li className="md:text-lg max-sm:text-base mb-1">Node.js</li>
                                <li className="md:text-lg max-sm:text-base mb-1">MySQL</li>
                                <li className="md:text-lg max-sm:text-base mb-1">Sequelize</li>
                                <li className="md:text-lg max-sm:text-base mb-1">Jest</li>
                                <li className="md:text-lg max-sm:text-base mb-1">OOP</li>
                                <li className="md:text-lg max-sm:text-base mb-1">ORM</li>
                                <li className="md:text-lg max-sm:text-base mb-1">MVC</li>
                                <li className="md:text-lg max-sm:text-base mb-1">Handlebars</li>
                            </ul>
                        </div>  
                    </div>
                    <div>
                        <h2 className="text-2xl max-sm:text-xl text-teal-300 py-1">EXPERIENCE</h2>
                        <ul className="mb-8">
                            <li>
                                <h3 className="text-xl max-sm:text-base mt-2 md:mt-4 font-medium">English Tutor & Essay Reviewer</h3>
                                <p className="mt-2 italic max-sm:text-xs">Paper Co. <span>(Jan 2022 - Present)</span></p>
                                <ul className="max-sm:text-sm">
                                    <li>Using question-based learning to help students synthesize answers. Consistently assisting fellow tutors with difficult sessions
</li>
                                </ul>
                            </li>
                            <li>
                                <h3 className="text-xl max-sm:text-base mt-4 font-medium">Educational Consultant</h3>
                                <p className="mt-2 italic max-sm:text-xs">Sarah Fewson Consulting Co. <span>(Oct 2019 - Present)</span></p>
                                <ul className="max-sm:text-sm">
                                    <li>Providing detailed curriculum-based feedback for children’s TV scripts. Delivering feedback to clients constructively, efficiently and kindly.</li>
                                </ul>
                            </li>
                            <li>
                                <h3 className="text-xl max-sm:text-base mt-4 font-medium">Tutor & Academic Coach</h3>
                                <p className="mt-2 italic max-sm:text-xs">Durham District School Board <span>(May 2021 - Dec 2021)</span></p>
                                <ul className="max-sm:text-sm">
                                    <li>Simplifying complex concepts for tutees in engaging ways. Motivating students to set and reach achievable academic goals. Creating a fun, free-flowing atmosphere in live sessions with tutees.</li>
                                </ul>
                            </li>
                        </ul>
                        <h2 className="text-2xl max-sm:text-xl text-teal-300 py-1">EDUCATION</h2>
                        <ul className="mb-8">
                            <li>
                                <h3 className="text-xl max-sm:text-base mt-2 md:mt-4 font-medium">Carelton University Full-Stack Development Boot Camp</h3>
                                <p className="mt-2 italic max-sm:text-xs">(May - Nov 2022)</p>
                                <p className="max-sm:text-sm">
                                    Developing career-ready proficiency in front-end and back-end development through independent and collaborative projects. Learning relevant languages as well as other assisting technologies
                                </p>
                            </li>
                            <li>
                                <h3 className="text-xl max-sm:text-base mt-4 font-medium">Ryerson University</h3>
                                <p className="mt-2 italic max-sm:text-xs">(Sept 2019 - Apr 2022)</p>
                                <p className="max-sm:text-sm">
                                    Consistent Dean's List honoree, achieving a BA in English.
                                </p>
                            </li>
                            <li>
                                <h3 className="text-xl max-sm:text-base mt-4 font-medium">University of Waterloo</h3>
                                <p className="mt-2 italic max-sm:text-xs">(Sept 2017 - Dec 2018)</p>
                                <p className="max-sm:text-sm">
                                    Consistent Dean's List honoree specializing in Technical Writing.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Resume;