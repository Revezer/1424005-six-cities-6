import React, {Fragment} from 'react';
import MainComponent from '../main-screen';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom';
import FavoritesComponent from '../favorites-screen';
import LoginComponent from '../login-screen';
import PropertyComponent from '../property-screen';

const App = (props) => {
  const {cardsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainComponent cardsCount={cardsCount} />
        </Route>
        <Route exact path="/login">
          <LoginComponent />
        </Route>
        <Route exact path="/favorites">
          <FavoritesComponent />
        </Route>
        <Route exact path="/offer/:id">
          <PropertyComponent />
        </Route>
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

App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
};

export default App;
