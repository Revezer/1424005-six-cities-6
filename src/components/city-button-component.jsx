import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../store/action';

const CityButton = (props) => {
  const {city, citySelection, nameCity} = props;
  const classActive = () => nameCity === city ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`;
  return (
    <li className="locations__item">
      <a className={classActive()}
        onClick={() => {
          citySelection(nameCity);
        }}>
        <span>{nameCity}</span>
      </a>
    </li>
  );
};

CityButton.propTypes = {
  city: PropTypes.string.isRequired,
  citySelection: PropTypes.func.isRequired,
  nameCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  citySelection(selectedСity) {
    dispatch(ActionCreator.citySelection(selectedСity));
  },
});

export {CityButton};
export default connect(mapStateToProps, mapDispatchToProps)(CityButton);
