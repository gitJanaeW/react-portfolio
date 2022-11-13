import React, {useState} from "react";

const Portfolio = () => {
    const [projects, setProjects] = useState([
        {
          key: "poachd",
          name: 'Poachd',
          link: 'https://github.com/gitJanaeW/poach',
          img: '../images/poachd.png',
          imgAlt: "The landing page of Poachd",
          technologies: 'MERN | Reddis | Stripe',
          status: "In Development"
        },
        {
          key: "rescue-chow",
          name: 'Rescue Chow',
          link: '',
          img: '../images/rescue-chow.png',
          imgAlt: "The landing page of Rescue Chow",
          technologies: 'Mongoose | Express | React',
          status: "Deployed"
        },
        {
          key: "upgrad",
          name: 'upGrad',
          link: '/',
          // Image sourced from: cdn.lifehack.org
          img: 'https://cdn.lifehack.org/wp-content/uploads/2015/01/Researchers-Tell-Us-The-Strategies-To-Win-Rock-Paper-Scissors1.jpg',
          imgAlt: "The landing page of upGrad",
          technologies: 'Express | Sequelize | Handlebars',
          status: "Deployed"
        },
        {
          key: "showgo",
          name: 'ShowGo',
          link: '/',
          img: '../images/showgo.png',
          imgAlt: "The landing page of ShowGo",
          technologies: 'HTML | CSS | JavaScript',
          status: "Downloadable"
        },
    ]);
    return (
        <section id="portfolio" className="bg-gray-900 px-10 md:px-20 lg:px-40">
            <h2 className="text-3xl text-white ml-3 font-medium">
              Portfolio
            </h2>
            <div className="mx-4">
                <div className="flex flex-col gap-10 pt-4 pb-10 flex-wrap">
                    {projects.map((project) => (
                        <div className="flex flex-col space-y-4" key={project.key}>
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <img className="object-cover rounded-xl w-full" src={project.img}
                                alt={project.imgAlt}/>
                            </a>
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="flex max-sm:flex-col mt-1">
                                        <a href={project.link} target="_blank" rel="noreferrer">
                                            <h2 className="text-2xl max-sm:text-lg max-sm:font-medium mr-2 text-white">{project.name}</h2>
                                        </a>
                                        <h3 className="w-fit text-sm text-center flex-none p-1 px-2 rounded-full text-white bg-gradient-to-r from-cyan-500 text- to-teal-500">
                                            {project.status}
                                        </h3>
                                    </div>
                                    <p className="text-slate-400 pt-2 text-lg">{project.technologies}</p>
                                </div>
                                <svg sidebar-toggle-item="true" className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;