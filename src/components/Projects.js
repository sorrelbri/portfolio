import React from 'react';
import BrowserGo from './BrowserGo';
import AStardustTruce from './AStardustTruce';
import FCApplier from './FCApplier';
import './Projects.scss'

const Projects = () => {
  return (
  <section>
    <h2 className="Projects__header --header">Projects</h2>
    <div className="section Projects" id="Projects">
      <BrowserGo />
      <FCApplier />
      <AStardustTruce last={true}/>
    </div>
  </section>);
}
export default Projects;