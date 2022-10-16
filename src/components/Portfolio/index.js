import React, {useState} from "react";

const Portfolio = () => {
    const [projects, setProjects] = useState([
        {
          key: "run-buddy",
          name: 'Run Buddy',
          link: 'https://gitjanaew.github.io/run-buddy/',
          // Image sourced from: https://www.womensrunning.com/culture/10-telltale-signs-runner/
          img: 'https://www.womensrunning.com/wp-content/uploads/2017/02/youre-a-runner.jpg',
          imgAlt: "A woman squatting to tie her sneaker's shoelace",
          technologies: 'HTML / CSS / JavaScript'
        },
        {
          key: "rock-paper-scissors",
          name: 'Rock, Paper, Scissors',
          link: '/',
          // Image sourced from: cdn.lifehack.org
          img: 'https://cdn.lifehack.org/wp-content/uploads/2015/01/Researchers-Tell-Us-The-Strategies-To-Win-Rock-Paper-Scissors1.jpg',
          imgAlt: "",
          technologies: 'HTML / CSS / JavaScript'
        },
        {
          key: "placeholder0",
          name: 'Placeholder',
          link: '/',
          // Image is sourced from Kelly Sikkema: https://unsplash.com/photos/YXWoEn5uOvg
          img: 'https://images.unsplash.com/photo-1599009434802-ca1dd09895e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          imgAlt: "",
          technologies: 'HTML / CSS / JavaScript'
        },
        {
          key: "placeholder1",
          name: 'Placeholder',
          link: 'https://gitjanaew.github.io/run-buddy/',
          // Image is sourced from Markus Spiske: https://unsplash.com/photos/vTySY3VscUc
          img: 'https://images.unsplash.com/photo-1654235444180-4d057b605b32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          imgAlt: "",
          technologies: 'HTML / CSS / JavaScript'
        },
      ]);
    return (
        <section id="portfolio" className="section-content body text-body">
            <h1>My Portfolio</h1>
            <div className="portfolio-big portfolio-borders">
                <div className="overlay"></div>
                <a href="https://gitjanaew.github.io/shakespeare-sonnet-scrambler/" target="_blank" rel="noreferrer">
                    {/* <!-- Img sourced in "src" below --> */}
                    <img className="img-fit" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/C9F6/production/_118720715_gettyimages-51246880.jpg"
                    alt="A painting of Shakespeare with his hand resting on the side of his face"/>
                </a>
                <div className="project-info">
                    <h4 className="h4-big">Shakespeare Sonnet Scambler</h4>
                    <p className="portfolio-tools-big">HTML / CSS / Javascript</p>
                </div>
            </div>
            <div className="portfolios">
                <div className="portfolio-rest">
                    {projects.map((project) => (
                        <div className="portfolio-borders portfolio-small" key={project.key}>
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <img className="img-fit" src={project.img}
                                alt={project.imgAlt}/>
                            </a>
                            <div className="project-info">
                                <h4 className="h4">{project.name}</h4>
                                <p className="portfolio-tools">{project.technologies}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;