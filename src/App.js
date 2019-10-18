import React from 'react';
import './App.scss';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Links from './components/Links';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="App-header">
        <header 
          className="App-header__header"
        >Sorrel June</header>
      </div>
      <div className="arrow"></div>
      <About />
      <Contact />
      <Links />
      <Projects />
      {/* resume */}
    </div>
  );
}

export default App;
