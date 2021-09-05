import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Landing from 'router/landing/landing';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/landing" />
        </Route>
        <Route exact path="/landing">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
