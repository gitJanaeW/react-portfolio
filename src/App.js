import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [portfolioClicked, setPortfolioClicked] = useState(false);
  const [contactClicked, setContactClicked] = useState(false);
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
        <Nav 
          setPortfolioClicked={setPortfolioClicked}
          setContactClicked={setContactClicked}
        />
      </header>
      <main className="App">
        <About/>
        {/* create a component called Display and make an array with all of the other sections in it. Render accordingly */}
        {portfolioClicked && (<Portfolio projects={projects}/>)}
        {contactClicked && (<Contact/>)}
      </main>
      <footer>
        <p>Janae Welsh 2022</p>
      </footer>
    </div>
  );
}

export default App;
