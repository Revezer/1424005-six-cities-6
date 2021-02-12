import React, {Fragment} from 'react';
import MainComponent from '../main-screen';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom';
import FavoritesComponent from '../favorites-screen';
import LoginComponent from '../login-screen';
import PropertyComponent from '../property-screen';

const App = (props) => {
  const {offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainComponent offers={offers} />
        </Route>
        <Route exact path="/login">
          <LoginComponent />
        </Route>
        <Route exact path="/favorites">
          <FavoritesComponent offers={offers.filter((offer) => offer.is_favorite === true)} />
        </Route>
        <Route exact path="/offer/:id">
          <PropertyComponent offers={offers} />
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
  offers: PropTypes.array.isRequired,
};

export default App;
