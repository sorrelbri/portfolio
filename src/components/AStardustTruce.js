import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import AStardustTruceDetail from './AStardustTruceDetail';
import GitHub from './logos/GitHub';

const AStardustTruce = () => {
  return (<div className="project">
    <h3>A Stardust Truce</h3>
      <div className="project__project-general__links">
        <div className="project__links__github">
          <GitHub/>
          <a 
            href="https://github.com/sorrelbri/a-stardust-truce"
            >A Stardust Truce Repo
          </a>
        </div>
        <div className="project__links__open-app">
          <a href="https://astardusttruce.herokuapp.com/">Open App</a>
        </div>
      </div>
    <Switch>
      <Route path="/portfolio/a-stardust-truce">
        <AStardustTruceDetail />
      </Route>
      <Route path="/">
        <Link to="/portfolio/a-stardust-truce"><h5>What is A Stardust Truce?</h5></Link>
        <img 
          src="%PUBLIC_URL%/a-stardust-truce-screenshot-python.png" 
          alt="screenshot from A Stardust Truce application featuring generated Python code for a Stack instantiated as a linked list."
        />
      </Route>
    </Switch>
  </div>);
}

export default AStardustTruce;