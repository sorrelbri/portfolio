import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import BrowserGoDetail from './BrowserGoDetail';
import GitHub from './logos/GitHub';

const BrowserGo = () => {
  return (
    <div className="project__project-general">
      <h3>Browser Go</h3>
      <div className="project__project-general__links">
        <a 
          href="https://github.com/sorrelbri/browser-go-api"
          ><GitHub/>API
          <a 
            href="https://github.com/sorrelbri/browser-go-react"
            >Frontend</a>
        </a>
        <a href="https://browser-go.herokuapp.com/">Open App</a>
      </div>
      <Link to="/browser-go">What is Browser Go?</Link>
      <Switch>
        <Route path="/browser-go">
          <BrowserGoDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default BrowserGo;