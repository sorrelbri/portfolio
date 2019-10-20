import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import AStardustTruceDetail from './AStardustTruceDetail';
import GitHub from './logos/GitHub';

const AStardustTruce = () => {
  return (<div className="project__project-general">
    <h3>A Stardust Truce</h3>
      <div className="project__project-general__links">
        <a 
          href="https://github.com/sorrelbri/a-stardust-truce"
          ><GitHub/>
        </a>
      <a href="https://astardusttruce.herokuapp.com/">Open App</a>
  </div>
  <Link to="/a-stardust-truce">What is A Stardust Truce?</Link>
    <Switch>
      <Route path="/a-stardust-truce">
        <AStardustTruceDetail />
      </Route>
    </Switch>
  </div>);
}

export default AStardustTruce;