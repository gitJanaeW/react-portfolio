import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  const [navLinks, setNavLinks] = useState([
    {name: 'About Me', textContent: ['Lorem ipsum']},
    {name: 'Portfolio', textContent: ['Lorem ipsum']},
    {name: 'Contact', textContent: ['Lorem ipsum']},
    {name: 'Resume', textContent: ['Lorem ipsum']}
  ]);
  return (
    <div>
      <header className="App-header">
        <Nav navLinks={navLinks}/>
      </header>
      <main className="App">
        <About/>
      </main>
    </div>
    
  );
}

export default App;
