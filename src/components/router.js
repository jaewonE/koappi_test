import AskPermission from 'askPermission';
import React, { useEffect, useState } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Landing from 'router/landing/landing';
import pageNotFound from 'router/pageNotFound/pageNotFound';

const usePermission = () => {
  const [isLicensed, setIsLicensed] = useState(false);
  useEffect(() => {
    const permission = localStorage.getItem('isPermission');
    if (Boolean(permission)) {
      setIsLicensed(true);
    }
  }, []);
  return { isLicensed, setIsLicensed };
};

const AppRouter = () => {
  const { isLicensed, setIsLicensed } = usePermission();
  return (
    <React.Fragment>
      {isLicensed ? (
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/landing" />
            </Route>
            <Route exact path="/landing" component={Landing} />
            <Route path="*" component={pageNotFound} />
          </Switch>
        </Router>
      ) : (
        <AskPermission setIsLicensed={setIsLicensed} />
      )}
    </React.Fragment>
  );
};

export default AppRouter;
