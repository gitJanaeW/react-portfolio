import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import email from './assets/email.png';
import github from './assets/github.png';
import linkedIn from './assets/linkedIn.png';

function App() {
  return (
    <div>
      <header className="App-header">
        <Router>
          <Nav/>
          <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/resume" element={<Resume/>}/>
          </Routes>
        </Router>
      </header>
      <main className="App">
      </main>
      <footer>
        <a href="https://github.com/gitJanaeW/" target="_blank" rel="noreferrer">
          <img style={{width: "6%"}} src={github} alt="Github logo in black"/>
        </a>
        <a href='https://www.linkedin.com/in/janae-welsh-01a52a23a/' target="_blank" rel="noreferrer">
          <img style={{width: "6%"}} src={linkedIn} alt="LinkedIn logo in black"/>
        </a>
        <a href="mailto: janae.wel@gmail.com" target="blank">
          <img  style={{width: "6%"}} src={email} alt="Letter icon in black, symbolizing mail"/>
        </a>
        <p>Janae Welsh &copy;2022</p>
      </footer>
    </div>
  );
}

export default App;

// whats' not working


// const [clickedAbout, setAbout] = useState(true);
// const [clickedPortfolio, setPortfolio] = useState(false);
// const [clickedResume, setResume] = useState(false);
// const [clickedContact, setContact] = useState(false);

// const handleNavClick = (e) => {
//   e.preventDefault();
//   switch (e.target.innerHTML) {
//       case "About":
//           setAbout(true);
//           setPortfolio(false);
//           setResume(false);
//           setContact(false);
//           break;
//       case "Portfolio":
//           setAbout(false);
//           setPortfolio(true);
//           setResume(false);
//           setContact(false);
//           break;
//       case "Contact":
//           setAbout(false);
//           setPortfolio(false);
//           setResume(false);
//           setContact(true);
//           break;
//       case "Resume":
//           setAbout(false);
//           setPortfolio(false);
//           setResume(true);
//           setContact(false);
//           break;
//       default:
//           break;
//   }
// };

{/* <Link to="/">
                    <h1 className="janaeWelsh">JANAE WELSH</h1>
                </Link>
                <Link to="/">
                    <p data-testid="about"
                    onClick={handleNavClick}
                    className={`${clickedAbout && "selected"}`}>
                        About Me
                    </p>
                </Link>
                <Link to="/portfolio"
                    onClick={handleNavClick}
                    className={`${clickedPortfolio && "selected"}`}>
                    <p data-testid="portfolio">
                        Portfolio
                    </p>
                </Link>
                <Link to="/contact">
                    <p data-testid="contact"
                    onClick={handleNavClick} className={`${clickedContact && "selected"}`}>
                        Contact
                    </p>
                </Link>
                <Link to="/resume">
                    <p data-testid="resume"
                    onClick={handleNavClick}
                    className={`${clickedResume && "selected"}`}>
                        Resume
                    </p>
                </Link> */}