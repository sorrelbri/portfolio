import React from 'react';
import BrowserGo from './BrowserGo';
import AStardustTruce from './AStardustTruce';
import FCApplier from './FCApplier';
import './Projects.scss'

const Projects = () => {
  return (<>
    <h3>Projects</h3>
    <div className="section Projects" id="Projects">
      <BrowserGo />
      <FCApplier />
      <AStardustTruce />
    </div>
  </>);
}
export default Projects;