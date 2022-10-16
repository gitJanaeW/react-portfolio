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
