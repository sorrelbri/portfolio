import React from 'react';
import BrowserGo from './BrowserGo';
import BrowserGoDetail from './BrowserGoDetail';
import AStardustTruce from './AStardustTruce';
import AStardustTruceDetail from './AStardustTruceDetail';
import './Project.scss'

const Projects = () => {
  return (<div className="project">
    <BrowserGo />
    <AStardustTruce />
  </div>);
}
export default Projects;