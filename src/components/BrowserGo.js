import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import BrowserGoDetail from './BrowserGoDetail';

const BrowserGo = () => {
  return (<div className="project__project-general">
    <h3>Browser Go</h3>
    <Link to="/browser-go">More</Link>
    <Switch>
      <Route path="/browser-go">
        <BrowserGoDetail />
      </Route>
    </Switch>
  </div>);
}

export default BrowserGo;