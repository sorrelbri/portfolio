import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import BrowserGoDetail from './BrowserGoDetail';

const BrowserGo = () => {
  return (<>
    <h3>Browser Go</h3>
    <Link to="/browser-go">More</Link>
    <Switch>
      <Route path="/browser-go">
        <BrowserGoDetail />
      </Route>
    </Switch>
  </>);
}

export default BrowserGo;