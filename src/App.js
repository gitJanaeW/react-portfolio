import React, {useState} from 'react';
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
  const [projects, setProjects] = useState([
    {
      name: 'Run Buddy',
      link: 'https://gitjanaew.github.io/run-buddy/',
      // Image sourced from: https://www.womensrunning.com/culture/10-telltale-signs-runner/
      img: 'https://www.womensrunning.com/wp-content/uploads/2017/02/youre-a-runner.jpg',
      imgAlt: "A woman squatting to tie her sneaker's shoelace",
      technologies: 'HTML / CSS / JavaScript'
    },
    {
      name: 'Rock, Paper, Scissors',
      link: '/',
      // Image sourced from: cdn.lifehack.org
      img: 'https://cdn.lifehack.org/wp-content/uploads/2015/01/Researchers-Tell-Us-The-Strategies-To-Win-Rock-Paper-Scissors1.jpg',
      imgAlt: "",
      technologies: 'HTML / CSS / JavaScript'
    },
    {
      name: 'Placeholder',
      link: '/',
      // Image is sourced from Kelly Sikkema: https://unsplash.com/photos/YXWoEn5uOvg
      img: 'https://images.unsplash.com/photo-1599009434802-ca1dd09895e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imgAlt: "",
      technologies: 'HTML / CSS / JavaScript'
    },
    {
      name: 'Placeholder',
      link: 'https://gitjanaew.github.io/run-buddy/',
      // Image is sourced from Markus Spiske: https://unsplash.com/photos/vTySY3VscUc
      img: 'https://images.unsplash.com/photo-1654235444180-4d057b605b32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      imgAlt: "",
      technologies: 'HTML / CSS / JavaScript'
    },
  ]);

  return (
    <div>
      <header className="App-header">
        <Nav/>
      </header>
      <main className="App">
        <Router>
          <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/resume" element={<Resume/>}/>
          </Routes>
        </Router>
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
