import React from 'react';
import './App.scss';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <header 
          className="App-header__header"
        >Sorrel June</header>
        <h4><code>
        {`
const writeCode = code => {
  let newCode = {...code}; 
  newCode.value++; 
  return newCode;
}
          `}
          </code></h4>
      </div>
      <div className="arrow-container">
        <div className="arrow-container__arrow"></div>
      </div>
      <Nav />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
