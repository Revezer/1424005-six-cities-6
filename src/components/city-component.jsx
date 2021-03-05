import React from 'react';
import CityButton from './city-button-component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCities} from '../store/increment-city/selectors';

const City = (props) => {
  const {cities} = props;
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          cities.map((city, index) => <CityButton key={city + index} nameCity={city} />)
        }
      </ul>
    </section>
  );
};

City.propTypes = {
  cities: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  cities: getCities(state),
});

export {City};
export default connect(mapStateToProps, null)(City);
