import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import BrowserGoDetail from './BrowserGoDetail';
import GitHub from './logos/GitHub';

const BrowserGo = () => {
  return (
    <div className="project">
      <h3>Browser Go</h3>
      <div className="project__project-general__links">
        <div className="project__links__github">
          <GitHub/>
          <a 
            href="https://github.com/sorrelbri/browser-go-api"
          >API Repo</a>
          <a 
            href="https://github.com/sorrelbri/browser-go-react"
          >Frontend Repo</a>
        </div>
        <div className="project__links__open-app">
          <a href="https://browser-go.herokuapp.com/">Open App</a>
        </div>
      </div>
      <Switch>
        <Route path="/browser-go">
          <BrowserGoDetail />
        </Route>
        <Route path="/">
          <Link to="/browser-go"><h5>What is Browser Go?</h5></Link>
        </Route>
      </Switch>
    </div>
  );
}

export default BrowserGo;