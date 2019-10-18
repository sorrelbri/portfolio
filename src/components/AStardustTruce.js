import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import AStardustTruceDetail from './AStardustTruceDetail';

const AStardustTruce = () => {
  return (<>
    A Stardust Truce General
    <Link to="/a-stardust-truce">More</Link>
    <Switch>
      <Route path="/a-stardust-truce">
        <AStardustTruceDetail />
      </Route>
    </Switch>
  </>);
}

export default AStardustTruce;