import React, {Fragment} from 'react';
import MainComponent from '../main-screen';
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom';
import FavoritesComponent from '../favorites-screen';
import LoginComponent from '../login-screen';
import PropertyComponent from '../property-screen';
import PrivateRoute from '../private-route/private-route';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainComponent />
        </Route>
        <Route exact path="/login">
          <LoginComponent />
        </Route>
        <PrivateRoute exact path="/favorites" render={() => <FavoritesComponent />}>
        </PrivateRoute>
        <PrivateRoute exact path="/offer/:id" render={() => <PropertyComponent />}>
        </PrivateRoute>
        <Route
          render={() => (
            <Fragment>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link to="/">Go to main page</Link>
            </Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
