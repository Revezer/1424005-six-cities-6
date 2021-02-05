import React from 'react';
import MainComponent from '../main-screen';
import PropTypes from 'prop-types';

const App = (props) => {
  const {cardsCount} = props;
  return (
    <MainComponent cardsCount={cardsCount} />
  );
};

App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
};

export default App;
