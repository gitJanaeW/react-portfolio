import React from "react";

const Portfolio = ({projects}) => {
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
                {/* ADD A KEY TO EACH CHILD */}
                {projects.map((project) => (
                    <div className="portfolio-borders portfolio-small">
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