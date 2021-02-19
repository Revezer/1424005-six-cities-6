import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../store/action';
import {CityButton} from './city-button-component';

const City = (props) => {
  const {city, citySelection} = props;
  console.log(city);
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        <CityButton nameCity={`Paris`} />
        {/* <li className="locations__item">
          <a className="locations__item-link tabs__item"
            onClick={() => {
              citySelection(`Paris`);
            }}>
            <span>Paris</span>
          </a>
        </li> */}
        <li className="locations__item">
          <a className="locations__item-link tabs__item"
            onClick={() => {
              citySelection(`Cologne`);
            }}>
            <span>Cologne</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item"
            onClick={() => {
              citySelection(`Brussels`);
            }}>
            <span>Brussels</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item tabs__item--active"
            onClick={() => {
              citySelection(`Amsterdam`);
            }}>
            <span>Amsterdam</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item"
            onClick={() => {
              citySelection(`Hamburg`);
            }}>
            <span>Hamburg</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item"
            onClick={() => {
              citySelection(`Dusseldorf`);
            }}>
            <span>Dusseldorf</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

City.propTypes = {
  city: PropTypes.string.isRequired,
  citySelection: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  citySelection(selectedСity) {
    dispatch(ActionCreator.citySelection(selectedСity));
  },
});

export {City};
export default connect(mapStateToProps, mapDispatchToProps)(City);
